import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { subMenuItems } from '@/utils/subMenuItems';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import BlurFade from '@/components/ui/blur-fade';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <section className='py-10 px-0 sm:px-16'>
            <BlurFade delay={0.25} inView>
                <h1 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">Our Events</h1>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
                <p className="text-lg text-center my-8 w-1/2 mx-auto">
                    Discover our wide range of events tailored to celebrate life&apos;s special moments. 
                    Whether you&apos;re planning a wedding, a corporate gathering, or a festive celebration, 
                    we have something for everyone.
                </p>
            </BlurFade>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-center items-center px-16'>
                {subMenuItems.map((item, idx) => (
                    <BlurFade key={idx} delay={0.25 * (idx + 3)} inView>
                        <Card>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='flex justify-center'>
                                    <Image 
                                        src={item.image}
                                        alt={item.title} 
                                        width={400} 
                                        height={100}
                                        className='rounded-sm h-auto'
                                    />
                                </div>
                            </CardContent>
                            <Link className='flex justify-center p-10 pt-0' href={item.href}>
                                <Button variant={'default'} size={'lg'}>
                                    More <span className='pb-1'><ExternalLink /></span>
                                </Button>
                            </Link>
                        </Card>
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}

export default Page;