import { BrevoClient } from "@getbrevo/brevo";

export async function sendContactEmails(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const apiKey = process.env.BREVO_API_KEY || process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM || "yogeshpatel.pers@gmail.com";
  const adminRecipient = process.env.EMAIL_TO || "yogeshpatel.pers@gmail.com";

  if (!apiKey) {
    console.warn("Brevo API key (BREVO_API_KEY or SMTP_PASS) not configured. Skipping email notifications.");
    return;
  }

  const brevo = new BrevoClient({ apiKey });

  // 1. Email to the Visitor (Confirmation)
  const visitorMail = {
    subject: "Thank you for getting in touch!",
    htmlContent: `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
        <h2 style="color: #1e293b;">Thank you for getting in touch!</h2>
        <p>Hi <strong>${data.name}</strong>,</p>
        <p>This is to confirm that I have received your message submitted on my portfolio site. Here is a copy of your submission details:</p>
        <blockquote style="border-left: 4px solid #e2e8f0; padding-left: 16px; margin: 16px 0; color: #64748b; font-style: italic;">
          "${data.message}"
        </blockquote>
        <p>I or someone from the team will review this and get back to you as soon as possible.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 14px; color: #64748b;">
          Best regards,<br />
          <strong>Soumen Bhatta</strong><br />
          Founder & Group CEO, Cuatro Labs
        </p>
      </div>
    `,
    sender: { name: "Soumen Bhatta", email: from },
    to: [{ email: data.email, name: data.name }],
  };

  // 2. Email to Admin (Notification)
  const adminMail = {
    subject: `New Contact Submission from ${data.name}`,
    htmlContent: `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; line-height: 1.6;">
        <h2 style="color: #1e293b;">New Contact Submission</h2>
        <p>You have received a new contact submission from your portfolio website:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0;">${data.company || "N/A"}</td>
          </tr>
        </table>
        <h4 style="margin-bottom: 8px; color: #1e293b;">Message:</h4>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 4px; color: #334155;">
          ${data.message.replace(/\n/g, "<br />")}
        </div>
      </div>
    `,
    sender: { name: "Portfolio Site", email: from },
    to: [{ email: adminRecipient, name: "Admin" }],
  };

  try {
    await Promise.all([
      brevo.transactionalEmails.sendTransacEmail(visitorMail),
      brevo.transactionalEmails.sendTransacEmail(adminMail),
    ]);
    console.log("Contact submission emails sent successfully via Brevo SDK.");
  } catch (error) {
    console.error("Failed to send contact submission emails via Brevo SDK:", error);
  }
}
