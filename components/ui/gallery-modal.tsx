'use client';

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
    images: (string | StaticImageData)[];
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {images.map((image, index) => (
                    <div key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
                        <Image
                            className="h-48 w-full max-w-full rounded-lg object-cover object-center"
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            width={400}
                            height={400}
                            quality={95}
                            onClick={() => openModal(index)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={closeModal}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div className="relative max-w-4xl max-h-full p-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-1"
                        >
                            <X size={16} />
                        </button>
                        
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-1"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-1"
                        >
                            <ChevronRight size={16} />
                        </button>

                        <Image
                            src={images[selectedImage]}
                            alt={`Gallery image ${selectedImage + 1}`}
                            width={1920}
                            height={1080}
                            quality={100}
                            priority
                            unoptimized
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryModal;
