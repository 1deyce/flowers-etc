import {
    BarChartHorizontal,
    BatteryCharging,
    CircleHelp,
    Layers,
    WandSparkles,
    ZoomIn,
} from 'lucide-react';

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
        <section className="py-32 px-16">
            <div className="">
                <div className="mb-10 md:mb-20">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl underline underline-offset-4">
                        Why <span className='italic'>Flowers Etc</span> ?
                    </h2>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                                {reason.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

    export default About;
