// app/api/send/route.ts
import { z } from "zod";
import { getTransporter } from "@/lib/nodemailer"; // adjust path if your file is elsewhere

const BodySchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(7),
  email: z.string().email(),
  domain: z.string().min(1),
});

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const POST = async (req: Request) => {
  try {
    const raw = await req.json();
    const parsed = BodySchema.safeParse(raw);
    if (!parsed.success) {
      return jsonResponse({ error: "Invalid input", issues: parsed.error.format() }, 400);
    }
    const { name, phone, email, domain } = parsed.data;

    // Build email content
    const subject = `GeoNixa Popup Signup — ${name} (${domain})`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDomain: ${domain}`;
    const html = `
      <h3>New Popup Signup</h3>
      <table cellpadding="6">
        <tr><td><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Domain:</strong></td><td>${escapeHtml(domain)}</td></tr>
      </table>
    `;

    // Get singleton transporter (will throw if env is missing)
    let transporter;
    try {
      transporter = getTransporter();
    } catch (err: any) {
      console.error("Transporter init error:", err?.message ?? err);
      return jsonResponse({ error: "Mail server not configured." }, 500);
    }

    // Determine from/to safely from env
    const fromEnv = process.env.SMTP_FROM;
    const smtpUser = process.env.SMTP_USER;
    const to = process.env.SMTP_TO;

    if (!to) {
      console.error("SMTP_TO not configured");
      return jsonResponse({ error: "Recipient not configured." }, 500);
    }

    const from = fromEnv && smtpUser && fromEnv.includes(smtpUser) ? fromEnv : smtpUser || fromEnv;

    try {
      const info = await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
        replyTo: email,
      });

      console.log("Popup mail sent:", {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
      });

      return jsonResponse(
        { message: "Email sent", info: { messageId: info.messageId, accepted: info.accepted } },
        200
      );
    } catch (sendErr: any) {
      console.error("sendMail error:", sendErr);
      return jsonResponse(
        { error: "Failed to send email", details: sendErr?.message ?? String(sendErr) },
        500
      );
    }
  } catch (err: any) {
    console.error("API error:", err);
    return jsonResponse({ error: err?.message ?? "Unknown error" }, 500);
  }
};
