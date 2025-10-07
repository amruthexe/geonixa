import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, phone, email, course } = req.body;

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail', // you can use other services like Outlook or Yahoo
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient@example.com', // replace with the recipient's email address
    subject: `New Inquiry: ${name} 📧`,
    text: `
      You have received a new inquiry:

      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Course: ${course}

      Please respond to the query accordingly. 😊
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ success: false, message: 'Failed to send the email.' });
  }
}
