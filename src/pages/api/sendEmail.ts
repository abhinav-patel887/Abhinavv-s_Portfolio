import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = { success: boolean; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Change after domain verification
      to: process.env.RECIPIENT_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Message for Abhinavv</title>
          <style>
            body { margin: 0; padding: 0; font-family: "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f2f2f2; color: #111; }
            .container { max-width: 620px; margin: 40px auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e1e1e1; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); }
            .header { background-color: #111; color: #ffffff; padding: 26px 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px; }
            .content { padding: 28px 24px; }
            .content p { font-size: 15px; line-height: 1.6; margin: 0 0 10px; }
            .info-table { width: 100%; border-collapse: collapse; margin-top: 18px; }
            .info-table tr { border-bottom: 1px solid #e8e8e8; }
            .info-table td { padding: 10px 6px; font-size: 14px; }
            .info-table td:first-child { font-weight: 600; color: #000; width: 110px; }
            .info-table a { color: #000; text-decoration: underline; }
            .footer { background-color: #f9f9f9; text-align: center; padding: 18px; font-size: 13px; color: #555; border-top: 1px solid #e1e1e1; }
            .footer a { color: #000; font-weight: 500; text-decoration: none; }
            .footer span { color: #999; font-size: 12px; }
            .highlight { font-weight: 600; color: #000; }
            .signature { margin-top: 20px; font-style: italic; color: #555; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message via Portfolio</h1>
            </div>
            <div class="content">
              <p>Hey <span class="highlight">Abhinavv</span>,</p>
              <p>You've just received a new message from someone visiting your portfolio website.</p>
              <table class="info-table">
                <tr>
                  <td>Name</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td>Subject</td>
                  <td>New message from ${name}</td>
                </tr>
                <tr>
                  <td>Message</td>
                  <td style="white-space: pre-line;">${message}</td>
                </tr>
              </table>
              <p class="signature">– Sent automatically from your portfolio contact form.</p>
            </div>
            <div class="footer">
              <p>
                <a href="https://your-portfolio-link.com">Visit Portfolio</a> •
                <span>®Abhinavv</span>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email Error:", err);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
}