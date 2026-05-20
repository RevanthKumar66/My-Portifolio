import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Received contact form submission:", body);

        const {
            // ContactFormSection fields
            name,
            subject,
            // ContactFormModal fields
            fullName,
            mobile,
            service,
            // Common fields
            email,
            message
        } = body;

        // Determine if this is a project modal or general contact form
        const isProjectModal = !!service;
        const senderName = fullName || name || "Anonymous Inquiry";
        const formType = isProjectModal ? "Project Inquiry" : "General Contact";
        const formSubject = subject || service || "No Subject Specified";

        // Build premium-styled HTML notification template
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${formType}</title>
                <style>
                    body {
                        font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        background-color: #0b0f19;
                        color: #f1f5f9;
                        margin: 0;
                        padding: 32px 16px;
                    }
                    .card {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #111827;
                        border: 1px solid #1f2937;
                        border-radius: 20px;
                        overflow: hidden;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
                    }
                    .header {
                        background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
                        padding: 32px 24px;
                        text-align: center;
                        border-bottom: 1px solid #1f2937;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 24px;
                        font-weight: 800;
                        color: #ffffff;
                        letter-spacing: -0.025em;
                    }
                    .header p {
                        margin: 8px 0 0 0;
                        font-size: 13px;
                        color: #93c5fd;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        font-weight: 600;
                    }
                    .content {
                        padding: 32px 24px;
                    }
                    .grid {
                        margin-bottom: 28px;
                    }
                    .row {
                        display: flex;
                        padding: 14px 0;
                        border-bottom: 1px solid #1f2937;
                        align-items: center;
                    }
                    .row:last-child {
                        border-bottom: none;
                    }
                    .label {
                        width: 130px;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                        color: #64748b;
                        flex-shrink: 0;
                    }
                    .value {
                        font-size: 14px;
                        font-weight: 500;
                        color: #e2e8f0;
                        word-break: break-word;
                    }
                    .value a {
                        color: #3b82f6;
                        text-decoration: none;
                        border-bottom: 1px dashed rgba(59, 130, 246, 0.4);
                    }
                    .value a:hover {
                        color: #60a5fa;
                        border-bottom-style: solid;
                    }
                    .message-section {
                        margin-top: 24px;
                    }
                    .section-title {
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                        color: #64748b;
                        margin-bottom: 12px;
                    }
                    .message-box {
                        background-color: #0b0f19;
                        border: 1px solid #1f2937;
                        border-radius: 12px;
                        padding: 20px;
                        margin-top: 4px;
                    }
                    .message-text {
                        margin: 0;
                        font-size: 14px;
                        line-height: 1.6;
                        color: #cbd5e1;
                        white-space: pre-wrap;
                    }
                    .footer {
                        background-color: #0b0f19;
                        padding: 24px;
                        text-align: center;
                        border-top: 1px solid #1f2937;
                        font-size: 11px;
                        color: #475569;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="header">
                        <h1>${isProjectModal ? "💼 New Project Request" : "✉️ New Contact Message"}</h1>
                        <p>Portfolio Notification</p>
                    </div>
                    <div class="content">
                        <div class="grid">
                            <div class="row">
                                <div class="label">Name</div>
                                <div class="value">${senderName}</div>
                            </div>
                            <div class="row">
                                <div class="label">Email</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            ${mobile ? `
                            <div class="row">
                                <div class="label">Mobile</div>
                                <div class="value">${mobile}</div>
                            </div>
                            ` : ""}
                            <div class="row">
                                <div class="label">${isProjectModal ? "Service Type" : "Subject"}</div>
                                <div class="value">${formSubject}</div>
                            </div>
                        </div>

                        <div class="message-section">
                            <div class="section-title">Message Content</div>
                            <div class="message-box">
                                <p class="message-text">${message}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This automated message was sent securely from the portfolio application.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const recipientEmail = "bandi@revanthkumar.co.in";
        const resendApiKey = process.env.RESEND_API_KEY;
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASSWORD;

        if (resendApiKey) {
            console.log("Delivering via Resend API...");
            const res = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${resendApiKey}`
                },
                body: JSON.stringify({
                    from: "Portfolio Contact <onboarding@resend.dev>",
                    to: recipientEmail,
                    subject: `[Portfolio] ${formType}: ${formSubject} from ${senderName}`,
                    html: htmlContent,
                    reply_to: email
                })
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Resend API returned status ${res.status}: ${errText}`);
            }
        } else if (smtpHost && smtpUser && smtpPass) {
            console.log("Delivering via SMTP Nodemailer Transporter...");
            const transporter = nodemailer.createTransport({
                host: smtpHost,
                port: Number(smtpPort) || 587,
                secure: Number(smtpPort) === 465,
                auth: {
                    user: smtpUser,
                    pass: smtpPass
                },
                tls: {
                    ciphers: "SSLv3",
                    rejectUnauthorized: false
                }
            });

            await transporter.sendMail({
                from: `"${senderName}" <${smtpUser}>`,
                to: recipientEmail,
                subject: `[Portfolio] ${formType}: ${formSubject} from ${senderName}`,
                html: htmlContent,
                replyTo: email
            });
        } else {
            console.warn("WARNING: No SMTP or Resend credentials detected in environment.");
            return NextResponse.json(
                { success: false, error: "Email delivery credentials are not configured on the server." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error: unknown) {
        console.error("Error sending contact form notification email:", error);
        const errorMessage = error instanceof Error ? error.message : "Failed to deliver contact message.";
        return NextResponse.json(
            { success: false, error: errorMessage },
            { status: 500 }
        );
    }
}
