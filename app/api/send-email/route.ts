import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) { 
    try {
        const { firstName, lastName, email, subject, message} = await request.json();

        const htmlContent = `
            <div>
                <h1>Message from ${firstName} ${lastName}!</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
        `;

        // TODO: Update to flowersEtc details
        const msg = {
            from: 'keenandeyce@gmail.com',
            to: 'keenandeyce@gmail.com',
            subject: 'Message from Flowers Etc...',
            html: htmlContent,
        };

        sendgrid.send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })

        return new Response(
            JSON.stringify({ message: 'Email sent successfully' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error occurred:', error);
        return new Response(
            JSON.stringify({ error: error as Error }),
            { status: 500 }
        );
    }
}
