// app/api/studentAmbassador/route.ts
import nodemailer from "nodemailer";
import { z } from "zod";

const BodySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  year: z.enum(["1st", "2nd", "3rd", "4th", "Other"]),
  branch: z.string().min(2),
  college: z.string().min(2),
});

type Body = z.infer<typeof BodySchema>;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST = async (req: Request) => {
  try {
    const raw = await req.json();
    const result = BodySchema.safeParse(raw);

    if (!result.success) {
      return jsonResponse({ error: "Invalid input", issues: result.error.format() }, 400);
    }
    const data: Body = result.data;

    // Read SMTP config from env
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
      SMTP_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
      console.error("Missing SMTP env vars");
      return jsonResponse({ error: "Mail server is not configured." }, 500);
    }

    const portNum = parseInt(SMTP_PORT, 10) || 587;
    const secure = portNum === 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: portNum,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Optional: verify transporter connection (catch errors early)
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error("SMTP verify failed:", verifyErr);
      return jsonResponse({ error: "Failed to connect to mail server." }, 500);
    }

    const from = SMTP_FROM || SMTP_USER;
    const to = SMTP_TO;

    const subject = `Student Ambassador Application — ${data.name} (${data.college})`;
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Year: ${data.year}`,
      `Branch: ${data.branch}`,
      `College: ${data.college}`,
    ].join("\n");

    const html = `
      <h2>New Student Ambassador Application</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><strong>Name:</strong></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${escapeHtml(data.phone)}</td></tr>
        <tr><td><strong>Year:</strong></td><td>${escapeHtml(data.year)}</td></tr>
        <tr><td><strong>Branch:</strong></td><td>${escapeHtml(data.branch)}</td></tr>
        <tr><td><strong>College:</strong></td><td>${escapeHtml(data.college)}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: data.email, // quick reply to applicant
    });

    return jsonResponse({ message: "Application submitted successfully." }, 200);
  } catch (err: any) {
    console.error("Error in /api/studentAmbassador:", err);
    return jsonResponse({ error: err?.message ?? "Unknown error" }, 500);
  }
};

// small helper to avoid raw HTML injection in the email body
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
