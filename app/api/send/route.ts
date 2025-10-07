import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, domain } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"GeoNixa" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New GeoNixa Lead Submission",
      text: `
You've received a new enquiry:

Name: ${name}
Phone: ${phone}
Email: ${email}
Interested Domain: ${domain}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Mailer error:", error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
