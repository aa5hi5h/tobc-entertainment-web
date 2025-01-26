import { NextResponse } from "next/server";
import mailgun from "mailgun-js";

export async function POST(req: Request) {
    try {
        const mg = mailgun({
            apiKey: process.env.MAILGUN_API_KEY!,
            domain: process.env.MAILGUN_DOMAIN!,
            // url: "https://api.eu.mailgun.net",
            protocol: "https:",
            port: 443,
            timeout: 30000,
            retry: { times: 3, interval: 1000 },
            // agent: new https.Agent({
            // rejectUnauthorized: true,
            // secureProtocol: "TLSv1_2_method"
            // }),
            host: "api.eu.mailgun.net"
        });

        const { name, email, subject, message } = await req.json();

        const response = await new Promise<any>((resolve, reject) => {
            mg.messages().send(
                {
                    from: `${name} <${process.env.SMTP_USER}>`,
                    to: process.env.TO_EMAIL!,
                    subject: subject,
                    text: `From: ${name} (${email})\n\nMessage: ${message}`,
                    html: `<p>
                    <strong>From:</strong> ${name} (${email})<br/>
                    <strong>Subject:</strong> ${subject}<br/>
                    <strong>Message:</strong><br/><br/> ${message}
                    </p>`
                },
                (error, body) => {
                    if (error) reject(error);
                    else resolve(body);
                }
            );
        });

        console.log("Email sent:", response);
        return NextResponse.json({
            message: "Email sent successfully",
            status: 200
        });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({
            message: "Error sending email",
            error: error.message,
            status: 500
        }, { status: 500 });
    }
}