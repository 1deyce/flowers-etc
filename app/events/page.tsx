import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <section className='py-10 px-16'>
            <div>Events Page</div>
            <Link href={`/events/weddings`}>
                <Button size={'lg'} variant={'default'} className="w-full md:w-auto">
                    Weddings
                </Button>
            </Link>
        </section>
    )
}

export default Page;