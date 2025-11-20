// app/api/sendEmail/route.ts
import nodemailer from "nodemailer";

type RequestData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isNonEmptyString(v: unknown) {
  return typeof v === "string" && v.trim().length > 0;
}

export const POST = async (req: Request) => {
  try {
    const data = (await req.json()) as RequestData;

    // Basic validation
    if (
      !isNonEmptyString(data.firstName) ||
      !isNonEmptyString(data.lastName) ||
      !isNonEmptyString(data.email) ||
      !isNonEmptyString(data.subject) ||
      !isNonEmptyString(data.message)
    ) {
      return new Response(JSON.stringify({ error: "Missing or invalid fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Read env vars (set these in Vercel / hosting or local .env)
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM, // optional: friendly from e.g. "GeoNixa <no-reply@yourdomain.com>"
      SMTP_TO, // optional: where to send contact form (falls back to SMTP_USER)
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP config missing. Check environment variables.");
      return new Response(JSON.stringify({ error: "Mail server is not configured." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const portNum = parseInt(SMTP_PORT, 10) || 587;
    const secure = portNum === 465; // true for port 465 (SSL)

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: portNum,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Optional: verify transporter (will throw if auth fails)
    try {
      await transporter.verify();
    } catch (err) {
      console.error("SMTP verify failed:", err);
      return new Response(JSON.stringify({ error: "Failed to connect to mail server." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const from = SMTP_FROM || SMTP_USER;
    const to = SMTP_TO || SMTP_USER;

    const subject = `Contact form: ${data.firstName} ${data.lastName} — ${data.subject}`;
    const text = `You have a new message from ${data.firstName} ${data.lastName} (${data.email})\n\n${data.message}`;
    const html = `
      <p><strong>From:</strong> ${data.firstName} ${data.lastName} &lt;${data.email}&gt;</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr/>
      <p>${(data.message || "").replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: data.email, // reply will go to the user
    });

    return new Response(JSON.stringify({ message: "Email sent successfully." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Error in sendEmail route:", err);
    return new Response(JSON.stringify({ error: err?.message ?? "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
