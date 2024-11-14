import Image from 'next/image';
import Link from 'next/link';
import { Calendar1 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BlurFade from '../ui/blur-fade';

const Hero = () => {
    return (
        <section className="py-60 px-4 md:px-16 relative">
            <div className="absolute inset-0 -z-50">
                <Image
                    src="/images/sunflower.jpg"
                    alt="Sunflower"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="z-50">
                <BlurFade delay={0.25} inView>
                    <h1 
                        className='text-4xl text-center sm:text-left mb-6 font-bold tracking-[-0.02em] md:text-[7vw] lg:text-8xl text-black md:text-7xl leading-none'
                    >
                        Your Trusted Source for Stunning Floral Arrangements
                    </h1>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <p className="max-w-2xl text-center sm:text-left text-muted-foreground md:text-[2vw] lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
                        assumenda voluptatem nemo magni a maiores aspernatur.
                    </p>
                </BlurFade>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row lg:mt-10">
                    <BlurFade delay={0.25 * 3} inView>
                        <Link
                            className={cn(
                                buttonVariants({ size: 'lg' })
                            )} 
                            href="/contact">
                                Get a Quote
                        </Link>
                    </BlurFade>
                    <BlurFade delay={0.25 * 3} inView>
                        <Link 
                            className={cn(
                                buttonVariants({ variant: 'outline', size: 'lg'})
                            )} 
                            href="/events"
                        >
                            <Calendar1 className="size-4" />
                            <p className='mt-1'>Events</p>
                        </Link>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};

export default Hero;