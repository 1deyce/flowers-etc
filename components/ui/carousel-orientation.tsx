"use client";

import {
    Carousel,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    SliderMainItem,
    CarouselThumbsContainer,
    SliderThumbItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
	images: (string | StaticImageData)[];
}

const CarouselOrientation: React.FC<CarouselProps> = ({ images }) => {
	return (
		<Carousel>
			<CarouselNext className="top-1/3 -translate-y-1/3" />
			<CarouselPrevious className="top-1/3 -translate-y-1/3" />
			<CarouselMainContainer className="h-[30rem]">
				{images.map((image, index) => (
					<SliderMainItem key={index} className="bg-transparent">
						<div className="size-full flex items-center justify-center rounded-xl bg-background">
							<Image
								src={typeof image === 'string' ? image : image.src}
								alt={`Slide ${index + 1}`}
								className="object-cover w-auto h-full rounded-xl"
								objectFit="center"
								width={2000}
								height={200}
							/>
						</div>
					</SliderMainItem>
				))}
			</CarouselMainContainer>
			<CarouselThumbsContainer>
				{images.map((image, index) => (
					<SliderThumbItem key={index} index={index} className="bg-transparent">
						<div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
							<Image
								src={typeof image === 'string' ? image : image.src}
								alt={`Slide ${index + 1}`}
								className="object-cover w-full h-full rounded-xl"
								width={300}
								height={200}
							/>
						</div>{" "}
					</SliderThumbItem>
				))}
			</CarouselThumbsContainer>
		</Carousel>
	);
};

export default CarouselOrientation;