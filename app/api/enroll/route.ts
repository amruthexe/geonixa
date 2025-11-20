// app/api/enroll/route.ts
import { z } from "zod";
import { getTransporter } from "@/lib/nodemailer"; // adjust if your path differs

const BodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  course: z.string().min(1),
  batch: z.string().optional(),
  enrollDate: z.string().optional(),
  college: z.string().optional(),
  referral: z.string().optional(),
  notes: z.string().optional(),
});

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(str: string | undefined) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const POST = async (req: Request) => {
  try {
    const raw = await req.json().catch(() => ({}));
    const parsed = BodySchema.safeParse(raw);
    if (!parsed.success) {
      return jsonResponse({ error: "Invalid input", issues: parsed.error.format() }, 400);
    }
    const data = parsed.data;

    // init transporter (singleton) - getTransporter will throw if env missing
    let transporter;
    try {
      transporter = getTransporter();
    } catch (err: any) {
      console.error("Transporter init error:", err?.message ?? err);
      return jsonResponse({ error: "Mail server not configured." }, 500);
    }

    const smtpTo = process.env.SMTP_TO;
    const smtpUser = process.env.SMTP_USER;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpTo) {
      console.error("SMTP_TO not configured");
      return jsonResponse({ error: "Recipient not configured." }, 500);
    }

    // Build internal notification email (to your team)
    const internalSubject = `New Enrollment — ${data.name} — ${data.course}`;
    const internalHtml = `
      <h3>New Student Enrollment</h3>
      <table cellpadding="6" style="border-collapse:collapse;">
        <tr><td><strong>Name:</strong></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${escapeHtml(data.phone)}</td></tr>
        <tr><td><strong>Course:</strong></td><td>${escapeHtml(data.course)}</td></tr>
        <tr><td><strong>Batch:</strong></td><td>${escapeHtml(data.batch)}</td></tr>
        <tr><td><strong>Enroll Date:</strong></td><td>${escapeHtml(data.enrollDate)}</td></tr>
        <tr><td><strong>College:</strong></td><td>${escapeHtml(data.college)}</td></tr>
        <tr><td><strong>Referral:</strong></td><td>${escapeHtml(data.referral)}</td></tr>
        <tr><td><strong>Notes:</strong></td><td>${escapeHtml(data.notes)}</td></tr>
      </table>
    `;
    const internalText = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Course: ${data.course}`,
      `Batch: ${data.batch || "-"}`,
      `Enroll date: ${data.enrollDate || "-"}`,
      `College: ${data.college || "-"}`,
      `Referral: ${data.referral || "-"}`,
      `Notes: ${data.notes || "-"}`,
    ].join("\n");

    // send internal notification (best-effort — continue to student email even if this fails)
    try {
      const infoInternal = await transporter.sendMail({
        from: smtpFrom,
        to: smtpTo,
        subject: internalSubject,
        text: internalText,
        html: internalHtml,
        replyTo: data.email,
      });
      console.log("Internal email sent:", infoInternal?.messageId ?? "(no messageId)");
    } catch (internalErr: any) {
      console.error("Failed to send internal notification:", internalErr);
      // don't return — continue to onboarding email to student
    }

    // Onboarding email to the student
    const onboardingSubject = `Welcome to ${escapeHtml(data.course)} — Next steps`;
    const onboardingHtml = `
      <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;">
        <h2>Welcome, ${escapeHtml(data.name)} 👋</h2>
        <p>Thanks for enrolling in <strong>${escapeHtml(data.course)}</strong>. We're excited to have you on board.</p>
        <p><strong>What to expect next:</strong></p>
        <ul>
          <li>Onboarding call within 48 hours (we'll email you a calendar link).</li>
          <li>Access to the course dashboard and starter resources.</li>
          <li>Mentorship & project assignments to kickstart your learning.</li>
        </ul>
        <p>If you'd like to represent GeoNixa on campus and get mentorship, stipend & certificates, consider joining our <a href="${process.env.HOST_URL ?? "/ambassador/apply"}">Student Ambassador Program</a>.</p>
        <p>Regards,<br/>GeoNixa Team</p>
      </div>
    `;

    try {
      const infoStudent = await transporter.sendMail({
        from: smtpFrom,
        to: data.email,
        subject: onboardingSubject,
        text: `Welcome ${data.name} — we've received your enrollment for ${data.course}. We'll contact you shortly.`,
        html: onboardingHtml,
      });

      console.log("Onboarding email sent:", infoStudent?.messageId ?? "(no messageId)");

      return jsonResponse(
        { message: "Enrollment recorded and onboarding sent.", info: { studentMessageId: infoStudent?.messageId ?? null } },
        200
      );
    } catch (studentErr: any) {
      console.error("Failed to send onboarding email to student:", studentErr);
      return jsonResponse(
        { error: "Enrollment recorded but failed to send onboarding email.", details: studentErr?.message ?? String(studentErr) },
        500
      );
    }
  } catch (err: any) {
    console.error("Enroll API error:", err);
    return jsonResponse({ error: "Unknown server error", details: err?.message ?? String(err) }, 500);
  }
};
