import nodemailer from 'nodemailer';

const appPassword = process.env.APP_PASSWORD;

export async function POST(request: Request) { 
    try {
        const { firstName, lastName, email, subject, message} = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'keenandeyce@gmail.com', 
                pass: appPassword, 
            },
        });

        const htmlContent = `
            <div>
                <h1>Message from ${firstName} ${lastName}!</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
        `;

        const mailOptions = {
            from: 'keenandeyce@gmail.com',
            to: 'keenandeyce@gmail.com',
            subject: 'Message from Flowers Etc...',
            html: htmlContent,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error occurred: ' + error.message);
            }
            console.log('Message sent: %s', info.messageId);
        });

        return new Response(
            JSON.stringify({ message: 'Email sent successfully' }),
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error occurred:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}