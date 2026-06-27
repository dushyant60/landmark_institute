import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message, formType } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and Phone are required fields.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const recipients = process.env.SMTP_RECIPIENT;

    if (!host || !user || !pass || !recipients) {
      console.error('SMTP configuration is missing from environment variables.');
      return NextResponse.json(
        { success: false, message: 'Server configuration error. SMTP credentials not found.' },
        { status: 500 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // True for 465, false for other ports
      auth: {
        user,
        pass,
      },
      tls: { rejectUnauthorized: false },
    });

    const isLeadCapture = formType === 'lead_capture';
    const subject = isLeadCapture
      ? `Popup Form Submission: ${name}`
      : `New Lead: ${name} - ${course || 'Inquiry'}`;

    // Construct email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">
          ${isLeadCapture ? 'Lead Capture Popup Submission' : 'Contact Form Submission'}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 150px;">Full Name:</td>
            <td style="padding: 10px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 10px 0; color: #0f172a;">${phone}</td>
          </tr>
          ${email ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ` : ''}
          ${course ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Course Interested:</td>
            <td style="padding: 10px 0; color: #0f172a;">${course}</td>
          </tr>
          ` : ''}
          ${message ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569; vertical-align: top;">Message:</td>
            <td style="padding: 10px 0; color: #0f172a; white-space: pre-line;">${message}</td>
          </tr>
          ` : ''}
        </table>
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent from Landmark Institute Website
        </div>
      </div>
    `;

    const textContent = `
      ${isLeadCapture ? 'Lead Capture Popup Submission' : 'Contact Form Submission'}
      
      Full Name: ${name}
      Phone Number: ${phone}
      ${email ? `Email Address: ${email}` : ''}
      ${course ? `Course Interested: ${course}` : ''}
      ${message ? `Message: ${message}` : ''}
      
      Sent from Landmark Institute Website
    `.trim();

    // Send the email
    await transporter.sendMail({
      from: `"Landmark Institute Website" <${user}>`,
      to: recipients.split(','), // Sends to all recipients as an array
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to send SMTP email:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to send form submission.' },
      { status: 500 }
    );
  }
}
