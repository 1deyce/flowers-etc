import { Bell, Calendar1 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="py-10 px-16 bg-[url('/images/sunflower.jpg') bg-cover bg-center h-full w-full relative">
            <div className="absolute inset-0 -z-50 opacity-90">
                <Image
                    src="/images/sunflower.jpg"
                    alt="Sunflower"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="z-50">
                <Badge
                    variant="outline"
                    className="mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5"
                >
                    <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
                        <Bell className="size-4" />
                    </span>
                    <p className="truncate whitespace-nowrap">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                        eaque distinctio iusto voluptas voluptatum sed!
                    </p>
                </Badge>
                <h1 className="mb-6 text-4xl font-bold leading-none tracking-tighter md:text-[7vw] lg:text-8xl">
                    Your Trusted Source for Stunning Floral Arrangements
                </h1>
                <p className="max-w-2xl text-muted-foreground md:text-[2vw] lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
                    assumenda voluptatem nemo magni a maiores aspernatur.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
                    <Button size={'lg'} className="w-full md:w-auto">
                        Get a Quote
                    </Button>
                    <Button size={'lg'} variant={'outline'} className="w-full md:w-auto">
                        <Calendar1 className="mr-2 size-4" />
                        Events
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;