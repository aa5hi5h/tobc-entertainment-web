import { NextResponse } from "next/server";
import mailgun from "mailgun-js";

export async function POST(req: Request) {
    try {
        const mg = mailgun({
            apiKey: process.env.MAILGUN_API_KEY!,
            domain: process.env.MAILGUN_DOMAIN!,
            protocol: "https:",
            port: 443,
            timeout: 30000,
            retry: { times: 3, interval: 1000 },
            host: "api.eu.mailgun.net"
        });

        const {
            name,
            age,
            height,
            nativePlace,
            currentLocation,
            introductionLinks,
            photos,
            auditionLinks,
            workLinks,
            instagramLink,
            extraActivities
        } = await req.json();

        const response = await new Promise<any>((resolve, reject) => {
            mg.messages().send(
                {
                    from: `Casting Application <${process.env.SMTP_USER}>`,
                    to: process.env.TO_EMAIL!,
                    subject: "New Casting Application",
                    text: `
                        Name: ${name}
                        Age: ${age}
                        Height: ${height}
                        Native Place: ${nativePlace}
                        Current Location: ${currentLocation}
                        Introduction Links: ${introductionLinks.join(', ')}
                        Photos: ${photos.map((p: any) => p.url).join(', ')}
                        Audition Links: ${auditionLinks.join(', ')}
                        Work Links: ${workLinks.join(', ')}
                        Instagram: ${instagramLink || 'Not provided'}
                        Extra Activities: ${extraActivities.join(', ')}
                    `,
                    html: `
                        <h2>New Casting Application</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Age:</strong> ${age}</p>
                        <p><strong>Height:</strong> ${height}</p>
                        <p><strong>Native Place:</strong> ${nativePlace}</p>
                        <p><strong>Current Location:</strong> ${currentLocation}</p>
                        
                        <p><strong>Introduction Links:</strong></p>
                        <ul>
                            ${introductionLinks.map((link: string) => `<li><a href="${link}">${link}</a></li>`).join('')}
                        </ul>
                        
                        <p><strong>Photos:</strong></p>
                        <ul>
                            ${photos.map((photo: any) => `<li><a href="${photo.url}">${photo.name}</a></li>`).join('')}
                        </ul>
                        
                        <p><strong>Audition Links:</strong></p>
                        <ul>
                            ${auditionLinks.map((link: string) => `<li><a href="${link}">${link}</a></li>`).join('')}
                        </ul>
                        
                        <p><strong>Work Links:</strong></p>
                        <ul>
                            ${workLinks.map((link: string) => `<li><a href="${link}">${link}</a></li>`).join('')}
                        </ul>
                        
                        ${instagramLink ? `<p><strong>Instagram:</strong> <a href="${instagramLink}">${instagramLink}</a></p>` : ''}
                        
                        <p><strong>Extra Activities:</strong></p>
                        <ul>
                            ${extraActivities.map((activity: string) => `<li>${activity}</li>`).join('')}
                        </ul>
                    `
                },
                (error, body) => {
                    if (error) reject(error);
                    else resolve(body);
                }
            );
        });

        console.log("Email sent:", response);
        return NextResponse.json({
            message: "Application submitted successfully",
            status: 200
        });
    } catch (error: any) {
        console.error("Error sending application:", error);
        return NextResponse.json({
            message: "Error submitting application",
            error: error.message,
            status: 500
        }, { status: 500 });
    }
}
