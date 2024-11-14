import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    subject,
    message,
}) => (
    <div>
        <h1>Message from {firstName} {lastName}!</h1>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
    </div>
);