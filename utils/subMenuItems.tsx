import { Gem, Users, Gift, Calendar, Briefcase, Heart, Church, Wrench } from 'lucide-react';
import { ReactElement } from 'react';

interface SubMenuItem  {
    title: string;
    description: string;
    icon: ReactElement;
    href: string;  
    image: string; 
}

export const subMenuItems: SubMenuItem[]  =  [
    {
        title: 'Weddings',
        description: 'Celebrate love and union with our exclusive wedding services.',
        icon: <Gem className="size-5 shrink-0" />,
        href: '/events/weddings',
        image: '/images/weddings-item.jpg'
    },
    {
        title: 'Matric Balls',
        description: 'Make your matric ball unforgettable with our bespoke arrangements.',
        icon: <Users className="size-5 shrink-0" />,
        href: '/events/matric-balls',
        image: '/images/matric-ball-item.jpg'
    },
    {
        title: 'Baby Showers',
        description: 'Celebrate the arrival of new life with our joyful baby shower packages.',
        icon: <Gift className="size-5 shrink-0" />,
        href: '/events/baby-showers',
        image: '/images/baby-shower-item.jpg'
    },
    {
        title: 'Bridal Showers',
        description: 'Honor the bride-to-be with a memorable & fitting bridal shower experience.',
        icon: <Calendar className="size-5 shrink-0" />,
        href: '/events/bridal-showers',
        image: '/images/bridal.jpg'
    },
    {
        title: 'Corporate Events',
        description: 'Host professional gatherings with our tailored corporate event solutions.',
        icon: <Briefcase className="size-5 shrink-0" />,
        href: '/events/corporate-events',
        image: '/images/corporate-item.jpg'
    },
    {
        title: 'Workshops',
        description: 'Engage and enlighten through hands-on workshops and learning experiences.',
        icon: <Wrench className="size-5 shrink-0" />,
        href: '/events/workshops',
        image: '/images/workshop-item.jpg'
    },
    {
        title: 'Funerals/Memorial Services',
        description: 'Honor and remember loved ones with our respectful memorial services.',
        icon: <Heart className="size-5 shrink-0" />,
        href: '/events/funerals',
        image: '/images/funeral-item.jpg'
    },
    {
        title: 'Church Arrangements',
        description: 'Coordinate spiritual events with our specialized church arrangements.',
        icon: <Church className="size-5 shrink-0" />,
        href: '/events/church-arrangements',
        image: '/images/church-item.jpg'
    },
];