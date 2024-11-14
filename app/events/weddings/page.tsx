import { NextPage } from 'next';
import CarouselOrientation from '@/components/ui/carousel-orientation';

const Page: NextPage = ({}) => {
    return (
        <section className='py-10 px-6 sm:px-16'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='mb-2 text-center text-3xl font-semibold lg:text-5xl'>Weddings</h1>
                <p className='text-lg text-center my-8 sm:w-1/2 mx-auto'>Allow me the opportunity to turn your special moments into breathtaking memories.</p>
                <ul className='text-center px-10 mb-10'>
                    <li>Bridal Bouquets from <span className='font-bold'>R 450</span></li>
                    <li>Bridesmaid Bouquets from <span className='font-bold'>R 300</span></li>
                    <li>Boutonnieres from <span className='font-bold'>R 65</span></li>
                    <li>Corsages from <span className='font-bold'>R 75</span></li>
                    <li>Pearl Bracelet Corsages from <span className='font-bold'>R 85</span></li>
                    <li>Flower Baskets and Flower Crowns from <span className='font-bold'>R 120</span></li>
                    <li>Guest Table Arrangements from <span className='font-bold'>R 150</span></li>
                    <li>Bridal Table Arrangements from <span className='font-bold'>R 300</span></li>
                    <li>Arches from <span className='font-bold'>R 500</span></li>
                </ul>
                <p className="mb-2">Prices vary according to type of arrangements and flowers used.</p>
                <p>Contact me with your Wedding ideas and I'll gladly provide you with a quotation.</p>
            </div> 
            <div className='flex justify-center mx-auto sm:w-1/2'>
                <CarouselOrientation />
            </div>
        </section>
    )
}

export default Page;