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
        <section className="py-32 px-4 md:px-16">
            <div className="mb-10 md:mb-20">
                <BlurFade delay={0.25} inView>
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        Why Us?
                    </h2>
                </BlurFade>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {reasons.map((reason, i) => (
                    <BlurFade key={i} delay={0.25 * (i + 1)} inView>
                        <div className="flex flex-col">
                            <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                                {reason.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                    </BlurFade>
                ))}
            </div>
            <div className="mx-auto flex max-w-5xl flex-col items-center pt-16">
                <div className="mt-32 flex flex-col items-center gap-4">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        Our Trusted Clients
                    </h2>
                    <div className="flex flex-wrap justify-center items-center mt-10 gap-16">
                        {trustedClients.map((client, idx) => (
                            <div
                                className='flex flex-col justify-center'
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
