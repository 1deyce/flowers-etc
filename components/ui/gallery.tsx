import Image, { StaticImageData } from "next/image";

interface GalleryProps {
    images: (string | StaticImageData)[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                        src={image}
                        alt="gallery-photo"
                        width={2000}
                        height={200}
                    />
                </div>
            ))}
        </div>
    );
}

export default Gallery;