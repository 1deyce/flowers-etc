import {
    BarChartHorizontal,
    BatteryCharging,
    CircleHelp,
    Layers,
    WandSparkles,
    ZoomIn,
} from 'lucide-react';
import { trustedClients } from '@/utils/trustedClients';
import BlurFade from '../ui/blur-fade';
import Image from 'next/image';

const reasons = [
    {
        title: 'Freshness',
        description:
            'We source our flowers daily from local farms to ensure maximum freshness and vibrant colors for your arrangements.',
        icon: <ZoomIn className="size-6" />,
    },
    {
        title: 'Expertise',
        description:
            'Our skilled florists have years of experience creating stunning arrangements tailored to your needs.',
        icon: <BarChartHorizontal className="size-6" />,
    },
    {
        title: 'Customer Care',
        description:
            'We pride ourselves on providing personalized support and guidance to help you choose the perfect flowers.',
        icon: <CircleHelp className="size-6" />,
    },
    {
        title: 'Creativity',
        description:
            'Innovative designs that combine unique flowers and styles to make your events truly special.',
        icon: <WandSparkles className="size-6" />,
    },
    {
        title: 'Satisfaction',
        description:
            'We strive for excellence, ensuring every arrangement exceeds your expectations.',
        icon: <Layers className="size-6" />,
    },
    {
        title: 'Sustainability',
        description:
            'Committed to eco-friendly practices, we prioritize sustainable sourcing and packaging.',
        icon: <BatteryCharging className="size-6" />,
    },
];

const About = () => {
    return (
        <section className="flex flex-col py-32 px-4 md:px-16">
            <div className="mb-10 md:mb-20">
                <BlurFade delay={0.25} inView>
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        About My Business
                    </h2>
                </BlurFade>
            </div>
            <div className="flex justify-center text-center lg:mx-60">
                <p>I&apos;m Hayley. Owner of a self-run, woman-owned small business called <span className='italic font-bold'>Flowers etc...</span> <br />My business provides a personal service to my clients. From flowers for weddings and functions, to a personalized and corporate gifting service. <br />I also offer a workshop service for those interested in team building or just taking time out. <br /><br /><span className='text-lg'>Can&apos;t wait to be of excellent service to you!</span></p>
            </div>
            <div className="mx-auto flex max-w-5xl flex-col items-center pt-16">
                <div className="mt-32 flex flex-col items-center gap-4">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        Our Trusted Clients
                    </h2>
                    <div className="flex flex-wrap justify-center items-center mt-10 gap-16">
                        {trustedClients.map((client, idx) => (
                            <div
                                className='flex flex-col w-[150px] justify-center'
                                key={idx}
                            >
                                <Image 
                                    src={client.image}
                                    alt={client.title}
                                    width={100}
                                    height={100}
                                    className='rounded-3xl mx-auto'
                                />
                                <p className='flex flex-wrap mx-auto text-center pt-4 font-bold uppercase'>{client.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

    export default About;
