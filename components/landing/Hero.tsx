import { Bell, Calendar1 } from 'lucide-react';
import WordPullUp from "@/components/ui/word-pull-up";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
                <p className="max-w-2xl text-left text-muted-foreground md:text-[2vw] lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
                    assumenda voluptatem nemo magni a maiores aspernatur.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
                    <Button size={'lg'} className="w-full md:w-auto">
                        Get a Quote
                    </Button>
                    <Link href="/events">
                        <Button size={'lg'} variant={'outline'} className="w-full md:w-auto">
                            <Calendar1 className="mr-2 size-4" />
                            Events
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;