import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Handle reservation submission
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, specialRequests, reservationType, menuSelections } = req.body;

    // Send email to restaurant
    const mailOptions = {
      from: `"Himalayan Cuisine Hub" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New ${reservationType || 'Standard'} Reservation - ${name}`,
      html: `
        <h2>New ${reservationType || 'Standard'} Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
        ${reservationType === 'essence' && menuSelections ? `
          <h3>Menu Selections:</h3>
          ${menuSelections.map((selection, index) => `
            <div style="margin-bottom: 20px; border: 1px solid #eee; padding: 10px; border-radius: 5px;">
              <h4>Guest ${index + 1}:</h4>
              <p><strong>Starter:</strong> ${selection.starter}</p>
              <p><strong>Soup:</strong> ${selection.soup}</p>
              <p><strong>Main:</strong> ${selection.main}</p>
              <p><strong>Dessert:</strong> ${selection.dessert}</p>
            </div>
          `).join('')}
        ` : ''}
      `
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: `"Himalayan Cuisine Hub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Reservation Confirmation - Himalayan Cuisine Hub',
      html: `
        <h2>Thank you for your reservation, ${name}!</h2>
        <p>We're excited to welcome you to Himalayan Cuisine Hub.</p>
        
        <h3>Reservation Details:</h3>
        <p><strong>Type:</strong> ${reservationType || 'Standard'} Reservation</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        
        <p>If you need to make any changes, please contact us at ${process.env.EMAIL_TO} or call us at [Your Phone Number].</p>
        
        <p>We look forward to serving you!</p>
        <p>Best regards,<br/>The Himalayan Cuisine Hub Team</p>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ message: 'Reservation submitted successfully!' });
  } catch (error) {
    console.error('Error submitting reservation:', error);
    res.status(500).json({ error: 'Failed to submit reservation. Please try again.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
