import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log("Environment variables:", {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? "****" : "NOT FOUND"
  });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify((error) => {
      if (error) {
        console.error('SMTP Connection Error:', error);
        throw new Error(`SMTP Connection Failed: ${error.message}`);
      }
      console.log('Server is ready to send emails');
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission`,
      text: JSON.stringify(req.body, null, 2),
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Full Error:', error);
    return res.status(500).json({ 
      error: typeof error === 'object' && error !== null && 'message' in error ? (error as { message: string }).message : String(error),
      stack: process.env.NODE_ENV === 'development' && typeof error === 'object' && error !== null && 'stack' in error ? (error as { stack?: string }).stack : undefined
    });
  }
}