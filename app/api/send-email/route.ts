import { EmailTemplate } from '@/utils/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, subject, message} = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Flowers Etc... <keenandeyce@gmail.com>',
            to: ['keenandeyce@gmail.com'],
            subject: subject,
            react: EmailTemplate({ firstName: firstName, lastName: lastName, email: email, subject: subject, message: message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}