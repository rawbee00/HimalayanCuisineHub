import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { menuStorage } from "./storage-menu";
import path from "path";
import multer from "multer";
import { fileURLToPath } from 'url';

// Get the current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const upload = multer({
  dest: path.join(__dirname, '../client/public/images'),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Only .jpg, .jpeg and .png files are allowed!'));
    }
    cb(null, true);
  }
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
  app.post('/api/logo', async (req, res) => {
    try {
      // Get the uploaded file
      const logo = req.files?.logo;
      if (!logo) {
        return res.status(400).json({ error: 'No logo file uploaded' });
      }

      // Save the file to the images directory
      const uploadPath = path.join(__dirname, '../client/public/images', logo.name);
      await logo.mv(uploadPath);

      // Return the URL of the uploaded logo
      const logoUrl = `/images/${logo.name}`;
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

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
