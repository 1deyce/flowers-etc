import ContactForm from '@/components/contact/contactForm';
import BlurFade from '@/components/ui/blur-fade';

const Contact = () => {
    return (
        <section className="py-16 px-10 sm:py-40">
            <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                    <div className="text-center lg:text-left">
                        <BlurFade delay={0.25} inView>  
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                                Contact Us
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.25 * 2} inView>  
                            <p className="text-muted-foreground mt-10 p-2 sm:p-0">
                                Whether you have questions about our arrangements, need advice on your order, or want to discuss collaboration opportunities, we&apos;d love to hear from you. Reach out to us and let us bring a little more beauty to your day!
                            </p>
                        </BlurFade>
                    </div>
                    <div className="mx-auto w-fit lg:mx-0">
                        <BlurFade delay={0.25 * 3} inView>
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
                        </BlurFade>
                    </div>
                </div>
                <BlurFade delay={0.25 * 4} inView>
                    <ContactForm />
                </BlurFade>
            </div>
        </section>
    );
};

export default Contact;
