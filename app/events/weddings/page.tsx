import { weddingItems } from '@/utils/weddingItems';
import BlurFade from '@/components/ui/blur-fade';
import GalleryModal from '@/components/ui/gallery-modal';

const weddingImages = [
    '/weddings/IMG_9772.JPG',
    '/weddings/3e583afa-327c-4c1e-8309-13e53cf6d4ab.JPG',
    '/weddings/6f2f175c-009e-481a-b797-661f16ad5bd3.JPG', 
    '/weddings/7cbd1c80-1e4d-4baa-9cb7-0d6ca10e0535.JPG', 
    '/weddings/21e02323-826b-4a44-a710-23f5e0afd6a6.JPG', 
    '/weddings/33a85a76-0673-41ba-9c4c-d624e450e257.JPG', 
    '/weddings/85df27ea-0ddf-4327-9ed0-795f3ca82dec.JPG', 
    '/weddings/251877592_617374342957023_413921830387069067_n.jpg', 
    '/weddings/252236411_617374332957024_1869759955872466175_n.jpg', 
    '/weddings/df6c87a1-b57c-4ec5-85d6-c26933b2aaaa.JPG', 
    '/weddings/e43e8a57-4471-4935-b8de-e019f59ba8e7.JPG', 
    '/weddings/e39941a6-81cb-4bea-bf27-559b12597861.JPG', 
    '/weddings/IMG_9773.JPG', 
    '/weddings/IMG_9775.JPG',
    '/weddings/3a92a8c8-e4fc-44a8-95ab-3a89d4e8c938.JPG',
    '/weddings/image00010.jpeg', 
    '/weddings/image00001.jpeg', 
    '/weddings/image00002.jpeg', 
    '/weddings/image00003.jpeg', 
    '/weddings/image00004.jpeg', 
    '/weddings/image00005.jpeg', 
    '/weddings/image00006.jpeg', 
    '/weddings/image00007.jpeg', 
    '/weddings/image00008.jpeg', 
    '/weddings/image00009.jpeg'
]

const Page = ({}) => {
    return (
        <section className='py-10 px-6 sm:px-16'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='mb-2 text-center text-3xl font-semibold lg:text-5xl'>Weddings</h1>
                <BlurFade delay={0.10} inView>
                    <p className='text-lg text-center my-8 sm:w-1/2 mx-auto'>Allow me the opportunity to turn your special moments into breathtaking memories.</p>
                </BlurFade>
                <BlurFade delay={0.10 * 2} inView>
                    <ul className='text-center px-6 mb-10'>
                        {weddingItems.map((item, idx) => (
                            <li key={idx}>{item.description}</li>
                        ))}
                    </ul>
                </BlurFade>
                <div className='text-center'>
                    <p className="mb-2">Prices vary according to type of arrangements and flowers used.</p>
                    <p>Contact me with your Wedding ideas and I&apos;ll gladly provide you with a quotation.</p>
                </div>
            </div> 
            <div className='flex justify-center mx-auto mt-20 sm:w-1/2'>
                <GalleryModal images={weddingImages} />
            </div>
        </section>
    )
}

export default Page;