// lib/nodemailer.ts
import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (transporter) return transporter;

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Missing SMTP env vars");
  }

  const portNum = parseInt(SMTP_PORT, 10) || 587;
  const secure = portNum === 465;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: portNum,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    pool: true,               // reuse connections
    maxConnections: 5,        // tweak as needed
    maxMessages: 100,         // close after X messages, keeps it stable
    connectionTimeout: 10_000 // fail fast
  });

  // OPTIONAL: try verify once (at warmup) — catch but don't throw in production
  transporter.verify().catch((err) => {
    console.warn("SMTP verify warning (non-fatal):", err?.message ?? err);
  });

  return transporter;
}
