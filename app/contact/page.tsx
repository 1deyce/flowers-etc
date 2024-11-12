import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
    return (
        <section className="py-40">
            <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                            Contact Us
                        </h1>
                        <p className="text-muted-foreground mt-10 p-2 sm:p-0">
                            Whether you have questions about our arrangements, need advice on your order, or want to discuss collaboration opportunities, we’d love to hear from you. Reach out to us and let us bring a little more beauty to your day!
                        </p>
                    </div>
                    <div className="mx-auto w-fit lg:mx-0">
                        <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                            Contact Details
                        </h3>
                        <ul className="ml-4 list-disc">
                            <li>
                                <span className="font-bold">Phone: </span>
                                <a href="tel:+27822189541">
                                    082 218 9541 | +27 (82) 218-9541
                                </a>    
                            </li>
                            <li>
                                <span className="font-bold">Email: </span>
                                <a href="mailto:flowersetc01@gmail.com" className="underline">
                                    flowersetc01@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
                    <div className="flex gap-4">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input type="text" id="firstname" placeholder="First Name" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input type="text" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="subject">Subject</Label>
                        <Input type="text" id="subject" placeholder="Subject" />
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea placeholder="Type your message here." id="message" />
                    </div>
                    <Button className="w-full">Send Message</Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
