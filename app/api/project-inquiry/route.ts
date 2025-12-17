import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, projectType, message } = body;

        // Validate input
        if (!name || !email || !phone || !projectType) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        // Using environment variables or fallback for testing (User should configure .env)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER, // Sender address
            to: process.env.SMTP_TO || process.env.SMTP_USER, // Receiver address (Admin)
            replyTo: email,
            subject: `New Project Inquiry: ${name} - ${projectType}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #eb4917;">New Final Year Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <br/>
          <p><strong>Message/Details:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #eb4917;">
            ${message || "No additional details provided."}
          </p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Project inquiry sent successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error sending project inquiry email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
