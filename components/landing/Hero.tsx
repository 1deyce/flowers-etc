import Image from 'next/image';
import Link from 'next/link';
import { Calendar1 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BlurFade from '../ui/blur-fade';

const Hero = () => {
    return (
        <section className="py-24 sm:py-40 md:py-60 px-4 md:px-16 relative overflow-hidden">
            <div className="absolute inset-0 -z-50">
                <Image
                    src="/images/hero-flowers-3-hd.webp"
                    alt="Bouquet of red and pink roses with baby's breath and wedding rings"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="z-50">
                <BlurFade delay={0.25} inView>
                    <h1
                        className='text-3xl text-center mb-6 font-bold tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-[3.5vw] xl:text-[3vw] lg:whitespace-nowrap text-white leading-tight drop-shadow-lg'
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                    >
                        Your Trusted Source for Stunning Floral Arrangements
                    </h1>
                </BlurFade>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-10">
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
                            <p className='mt-1'>View our Events</p>
                        </Link>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};

export default Hero;