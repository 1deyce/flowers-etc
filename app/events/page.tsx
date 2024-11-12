import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { subMenuItems } from '@/utils/subMenuItems';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <section className='py-10 px-16'>
            <h1 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">Our Events</h1>
            <p className="text-lg text-center my-8 w-1/2 mx-auto">
                Discover our wide range of events tailored to celebrate life's special moments. 
                Whether you're planning a wedding, a corporate gathering, or a festive celebration, 
                we have something for everyone.
            </p>
            <div className='flex flex-row flex-wrap gap-10 mt-10 justify-center items-center'>
                {subMenuItems.map((item, idx) => (
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
                                    className='h-auto rounded-md'
                                />
                            </div>
                        </CardContent>
                        <Link className='flex justify-center p-10 pt-0' href={item.href}>
                            <Button variant={'default'} size={'lg'}>
                                More <span className='pb-1'><ExternalLink /></span>
                            </Button>
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Page;