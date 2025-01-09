import CarouselOrientation from '@/components/ui/carousel-orientation';
import { weddingItems } from '@/utils/weddingItems';
import BlurFade from '@/components/ui/blur-fade';

const Page = ({}) => {
    return (
        <section className='py-10 px-6 sm:px-16'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='mb-2 text-center text-3xl font-semibold lg:text-5xl'>MATRIC BALLS</h1>
                <BlurFade delay={0.10} inView>
                    <p className='text-lg text-center my-8 sm:w-1/2 mx-auto'>Allow me the opportunity to turn your special moments into breathtaking memories.</p>
                </BlurFade>
                <BlurFade delay={0.10 * 2} inView>
                    <ul className='text-center px-10 mb-10'>
                        {weddingItems.map((item, idx) => (
                            <li key={idx}>{item.description} from <span className='font-bold'>R {item.price}</span></li>
                        ))}
                    </ul>
                </BlurFade>
                <div className='text-center'>
                    <p className="mb-2">Prices vary according to type of arrangements and flowers used.</p>
                    <p>Contact me with your Wedding ideas and I&apos;ll gladly provide you with a quotation.</p>
                </div>
            </div> 
            <div className='flex justify-center mx-auto mt-20 sm:w-1/2'>
                {/* <CarouselOrientation images={mbImages} /> */}
            </div>
        </section>
    )
}

export default Page;