"use client"; 

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            // TODO: Add Sonner Notification & Loader on submit btn 
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.error);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border mt-6 sm:mt-0">
            <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                        type="text"
                        id="firstname"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                        type="text"
                        id="lastname"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    placeholder="Type your message here."
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
        </form>
    );
};

export default ContactForm;