import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // 1️⃣ Email to company
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "avarissales@gmail.com",
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    const emailHtml = `
<div style="font-family: Inter, Arial, sans-serif; background:#f3f4f6; padding:40px 0;">

  <!-- Container -->
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#e31b23,#b9161c); padding:24px; text-align:center;">
      <h1 style="color:#ffffff; margin:0; font-size:20px; letter-spacing:1px;">
        AVARIS SUPPORT
      </h1>
      <p style="color:#ffe5e6; margin:6px 0 0; font-size:13px;">
        We received your message
      </p>
    </div>

    <!-- Body -->
    <div style="padding:28px; color:#1a1a1a;">

      <h2 style="margin:0 0 10px; font-size:18px; color:#0a0a0a;">
        Thank you for reaching out, ${name} 👋
      </h2>

      <p style="margin:0 0 16px; color:#4a4a4a; font-size:14px; line-height:1.6;">
        We’ve successfully received your inquiry and our team is already reviewing it.
        You can expect a response shortly.
      </p>

      <!-- Subject Card -->
      <div style="background:#f9fafb; border-left:4px solid #e31b23; padding:12px 14px; border-radius:8px; margin-bottom:16px;">
        <p style="margin:0; font-size:13px; color:#6b7280;">Subject</p>
        <p style="margin:4px 0 0; font-weight:600; color:#1a1a1a;">${subject}</p>
      </div>

      <!-- Message Box -->
      <div style="background:#ffffff; border:1px solid #f3f4f6; padding:14px; border-radius:8px;">
        <p style="margin:0 0 8px; font-size:13px; color:#6b7280;">
          Your Message
        </p>
        <p style="margin:0; font-size:14px; color:#1a1a1a; line-height:1.6;">
          ${message}
        </p>
      </div>

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #f3f4f6; margin:20px 0;" />

      <!-- Footer Note -->
      <p style="margin:0; font-size:13px; color:#6b7280;">
        If you need immediate assistance, just reply to this email.
      </p>

      <p style="margin:12px 0 0; font-size:13px; font-weight:600; color:#e31b23;">
        — Avaris Team
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#0a0a0a; padding:16px; text-align:center;">
      <p style="margin:0; font-size:12px; color:#9ca3af;">
        © ${new Date().getFullYear()} Avaris. All rights reserved.
      </p>
    </div>

  </div>
</div>
`;

    // 2️⃣ Confirmation email to user
    await transporter.sendMail({
      from: `"Avaris Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: emailHtml,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
}