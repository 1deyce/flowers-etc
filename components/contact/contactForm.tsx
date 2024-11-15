"use client"; 

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data.message);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                toast("Message sent successfully!")
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Network error:', error);
            toast("Failed to send message!");
        } finally {
            setIsLoading(false);   
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
            <Button 
                type="submit" 
                className="w-full"
            >
                {isLoading? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    'Send Message'
                )}
            </Button>
        </form>
    );
};

export default ContactForm;