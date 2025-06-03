import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage as dbStorage } from "./storage";
import { menuStorage } from "./storage-menu";
import { reservationStorage, type Reservation } from "./storage-reservations";
import path from "path";
import type { Request } from 'express';
import multer, { FileFilterCallback } from "multer";
import { fileURLToPath } from 'url';

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}
import { z } from 'zod';

// Get the current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../client/public/images'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `logo-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return cb(new Error('Only .jpg, .jpeg and .png files are allowed!'));
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure multer middleware
  app.use(upload.single('logo'));

  // Menu Sets Endpoints
  app.get('/api/menu-sets', async (req, res) => {
    try {
      const availableSets = await menuStorage.getAvailableSets();
      res.json({ availableSets });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get available sets' });
    }
  });

  // Logo Upload Endpoint
  app.post('/api/logo', upload.single('logo'), async (req: MulterRequest, res) => {
    try {
      // Get the uploaded file
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Return the URL of the uploaded logo
      const logoUrl = `/images/${file.filename}`;
      res.json({ url: logoUrl });
    } catch (error) {
      console.error('Error uploading logo:', error);
      res.status(500).json({ error: 'Failed to upload logo' });
    }
  });

  app.post('/api/menu-sets/reserve', async (req, res) => {
    try {
      const { numSets } = req.body;
      if (!numSets) {
        return res.status(400).json({ error: 'Number of sets required' });
      }

      const success = await menuStorage.reserveSets(numSets);
      if (success) {
        res.json({ success: true, message: 'Sets reserved successfully' });
      } else {
        res.status(400).json({ 
          success: false, 
          message: 'Not enough sets available' 
        });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to reserve sets' });
    }
  });

  // Reservation endpoints
  const reservationSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
    time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:MM)'),
    guests: z.number().int().min(1).max(20, 'Maximum 20 guests per reservation'),
    specialRequests: z.string().optional(),
    type: z.enum(['standard', 'essence']),
    menuSelections: z.array(z.object({
      guestNumber: z.number().int().min(1),
      starter: z.string().optional(),
      soup: z.string().optional(),
      main: z.string().optional(),
      dessert: z.string().optional(),
    })).optional(),
  });

  // Create a new reservation
  app.post('/api/reservations', async (req, res) => {
    try {
      const result = reservationSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          success: false,
          errors: result.error.errors,
        });
      }

      const reservationData = {
        ...result.data,
        specialRequests: result.data.specialRequests || '',
      };
      
      const reservation = await reservationStorage.createReservation(reservationData);

      // In a real app, you would send a confirmation email here
      // await sendConfirmationEmail(reservation);

      res.status(201).json({
        success: true,
        data: reservation,
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to create reservation',
      });
    }
  });

  // Get reservations by date
  app.get('/api/reservations/date/:date', async (req, res) => {
    try {
      const { date } = req.params;
      const reservations = await reservationStorage.getReservationsByDate(date);
      res.json({ success: true, data: reservations });
    } catch (error) {
      console.error('Error fetching reservations:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch reservations' });
    }
  });

  // Get reservation by ID
  app.get('/api/reservations/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await reservationStorage.getReservation(id);
      
      if (!reservation) {
        return res.status(404).json({
          success: false,
          message: 'Reservation not found',
        });
      }

      res.json({ success: true, data: reservation });
    } catch (error) {
      console.error('Error fetching reservation:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch reservation' });
    }
  });

  // Update reservation status
  app.patch('/api/reservations/:id/status', async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!['confirmed', 'cancelled'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status. Must be "confirmed" or "cancelled"',
        });
      }

      const success = await reservationStorage.updateReservationStatus(
        id,
        status as 'confirmed' | 'cancelled'
      );

      if (!success) {
        return res.status(404).json({
          success: false,
          message: 'Reservation not found',
        });
      }

      res.json({ success: true });
    } catch (error) {
      console.error('Error updating reservation status:', error);
      res.status(500).json({ success: false, message: 'Failed to update reservation status' });
    }
  });

  // Get reservations by email
  app.get('/api/reservations/email/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const reservations = await reservationStorage.getReservationsByEmail(email);
      res.json({ success: true, data: reservations });
    } catch (error) {
      console.error('Error fetching reservations by email:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch reservations' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
