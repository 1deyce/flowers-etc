import BlurFade from '@/components/ui/blur-fade';
import { reviews } from '@/utils/reviews';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, text, occasion, index }: {
    name: string;
    rating: number;
    text: string;
    occasion: string;
    index: number;
}) => (
    <BlurFade delay={0.1 * index} inView>
        <div className="flex flex-col gap-4 rounded-2xl border p-6 shadow-sm h-full">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{occasion}</span>
                <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
            </div>
            <p className="flex-1 text-sm leading-relaxed">&ldquo;{text}&rdquo;</p>
            <p className="font-semibold">— {name}</p>
        </div>
    </BlurFade>
);

const ReviewsPage = () => {
    return (
        <section className="py-16 px-6 sm:px-16">
            <div className="mx-auto max-w-screen-xl">
                <div className="mb-16 text-center">
                    <BlurFade delay={0.1} inView>
                        <h1 className="mb-4 text-3xl font-semibold lg:text-5xl">Reviews</h1>
                    </BlurFade>
                    <BlurFade delay={0.2} inView>
                        <p className="mx-auto max-w-xl text-muted-foreground">
                            Kind words from clients who trusted me to make their moments beautiful.
                        </p>
                    </BlurFade>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, idx) => (
                        <ReviewCard key={idx} {...review} index={idx + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsPage;
