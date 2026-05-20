import nodemailer, { type Transporter } from "nodemailer";

/**
 * Shared SMTP transport. Credentials come from environment variables
 * (set in PM2 / .env on the server). Defaults target Hostinger SMTP.
 */
const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const EMAIL_USER = process.env.EMAIL_USER || "info@itsnottechy.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "";

/** The authenticated mailbox — used as the From address. */
export const MAIL_FROM = EMAIL_USER;

let transporter: Transporter | null = null;

export function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });
  }
  return transporter;
}

/** Escape user-supplied text before embedding it in an HTML email body. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
