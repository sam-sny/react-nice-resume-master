import express from 'express';
import { createTransport } from 'nodemailer';
import pkg from 'body-parser';
const app = express();

const { urlencoded } = pkg;

// Create a NodeMailer transporter
const transporter = createTransport({
  service: 'Gmail', // or your email service provider
  auth: {
    user: 'sampsonekpo6@gmail.com',
    pass: 'understandgod1234.',
  },
});

// Use body-parser to parse form data
app.use(urlencoded({ extended: true }));

// Serve your HTML form
/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/your-form.html');
});*/

// Handle form submission
app.post('/send-email', (req, res) => {
  const { contactName, contactEmail, contactSubject, contactMessage } = req.body;

  const mailOptions = {
    from: contactEmail,
    to: 'sampsonekpo6@gmail.com',
    subject: contactSubject,
    text: `Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${contactMessage}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ' + error);
      res.send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully.');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
