import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const emailContent = `
    <h2>Nueva consulta desde Apex Code Labs</h2>
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Empresa:</strong> ${data.company}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
    <p><strong>País:</strong> ${data.country}</p>
    <p><strong>Servicio de interés:</strong> ${data.service}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
  `;

  try {
    // Try Resend first
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || 'no-reply@apexcodelabs.com',
        to: process.env.CONTACT_TO_EMAIL || 'contacto@apexcodelabs.com',
        subject: `Nueva consulta de ${data.name} - ${data.company}`,
        html: emailContent,
      });
      return { success: true, provider: 'resend' };
    }

    // Fallback to SMTP
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || 'no-reply@apexcodelabs.com',
        to: process.env.CONTACT_TO_EMAIL || 'contacto@apexcodelabs.com',
        subject: `Nueva consulta de ${data.name} - ${data.company}`,
        html: emailContent,
      });

      return { success: true, provider: 'smtp' };
    }

    throw new Error('No email provider configured');
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function triggerN8nWebhook(data: ContactFormData) {
  if (!process.env.N8N_WEBHOOK_URL) {
    return { success: false, error: 'N8N webhook URL not configured' };
  }

  try {
    const response = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'apex-landing-contact-form',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error triggering N8N webhook:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
