import { Bell, Calendar1 } from 'lucide-react';
import WordPullUp from "@/components/ui/word-pull-up";
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import BlurFade from '../ui/blur-fade';
import { cn } from '@/lib/utils';

const Hero = () => {
    return (
        <section className="py-60 px-16 relative">
            <div className="absolute inset-0 -z-50">
                <Image
                    src="/images/sunflower.jpg"
                    alt="Sunflower"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="z-50">
                <WordPullUp
                    className="text-4xl text-left mb-6 font-bold tracking-[-0.02em] md:text-[7vw] lg:text-8xl text-black md:text-7xl leading-none"
                    words="Your Trusted Source for Stunning Floral Arrangements"
                />
                <BlurFade delay={1} inView>
                    <p className="max-w-2xl text-left text-muted-foreground md:text-[2vw] lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
                        assumenda voluptatem nemo magni a maiores aspernatur.
                    </p>
                </BlurFade>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
                    <Link
                        className={cn(
                            buttonVariants({ size: 'lg' })
                        )} 
                        href="/contact">
                            Get a Quote
                    </Link>
                    <Link 
                        className={cn(
                            buttonVariants({ variant: 'outline', size: 'lg'})
                        )} 
                        href="/events"
                    >
                        <Calendar1 className="size-4" />
                        <p className='mt-1'>Events</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;