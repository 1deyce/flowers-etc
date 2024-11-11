import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Button, buttonVariants } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '../../public/images/flowers logo.jpg';
import Image from 'next/image';

const subMenuItems = [
    {
        title: 'Blog',
        description: 'The latest industry news, updates, and info',
        icon: <Book className="size-5 shrink-0" />,
    },
    {
        title: 'Company',
        description: 'Our mission is to innovate and empower the world',
        icon: <Trees className="size-5 shrink-0" />,
    },
    {
        title: 'Careers',
        description: 'Browse job listing and discover our workspace',
        icon: <Sunset className="size-5 shrink-0" />,
    },
    {
        title: 'Support',
        description:
            'Get in touch with our support team or visit our community forums',
        icon: <Zap className="size-5 shrink-0" />,
    },
];

const Nav = () => {
    return (
        <section className="py-10 px-10">
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Image
                                src={Logo}
                                className="w-14"
                                alt="logo"
                            />
                            <span className="text-2xl font-bold">Flowers Etc.</span>
                        </div>
                        <div className="flex items-center">
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href="/"
                            >
                                HOME
                            </a>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href="/events"
                            >
                                EVENTS
                            </a>
                            <NavigationMenu>
                                <NavigationMenuList>
                                <NavigationMenuItem className="text-muted-foreground">
                                    <NavigationMenuTrigger>
                                        <span>EVENTS</span>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                    <ul className="w-80 p-3">
                                        <NavigationMenuLink>
                                        {subMenuItems.map((item, idx) => (
                                            <li key={idx}>
                                                <a
                                                    className={cn(
                                                        'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                    )}
                                                    href="#"
                                                >
                                                    {item.icon}
                                                    <div>
                                                        <div className="text-sm font-semibold">
                                                            {item.title}
                                                        </div>
                                                        <p className="text-sm leading-snug text-muted-foreground">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                        </NavigationMenuLink>
                                    </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href="/gifting"
                            >
                                GIFTING
                            </a>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href="/contact"
                            >
                                CONTACT US
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                        {/* TODO: Add Social Links here */}
                        <a href="#">
                            <FaInstagram className="size-6" />
                        </a>
                        <a href="#">
                            <FaFacebook className="size-6" />
                        </a>
                    </div>
                </nav>
                <div className="block lg:hidden">
                <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            className="w-14"
                            alt="Flowers Etc."
                        />
                        <span className="text-xl font-bold">Flowers Etc.</span>
                    </div>
                    <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline'} size={'icon'}>
                        <Menu className="size-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={Logo}
                                    className="w-8"
                                    alt="Flowers Etc."
                                />
                                <span className="text-xl font-bold">Flowers Etc.</span>
                            </div>
                        </SheetTitle>
                        </SheetHeader>
                        <div className="my-8 flex flex-col gap-4">
                        <a href="/" className="font-semibold">
                            Home
                        </a>
                        <a href="/events" className="font-semibold">
                            Events
                        </a>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="products" className="border-b-0">
                            <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                                Products
                            </AccordionTrigger>
                            <AccordionContent className="mt-2">
                                {subMenuItems.map((item, idx) => (
                                <a
                                    key={idx}
                                    className={cn(
                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                    )}
                                    href="#"
                                >
                                    {item.icon}
                                    <div>
                                    <div className="text-sm font-semibold">
                                        {item.title}
                                    </div>
                                    <p className="text-sm leading-snug text-muted-foreground">
                                        {item.description}
                                    </p>
                                    </div>
                                </a>
                                ))}
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <a href="#" className="font-semibold">
                            Pricing
                        </a>
                        <a href="#" className="font-semibold">
                            Blog
                        </a>
                        </div>
                        <div className="border-t pt-4">
                        <div className="grid grid-cols-2 justify-start">
                            <a
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                    'justify-start text-muted-foreground',
                                )}
                                href="#"
                            >
                                Press
                            </a>
                            <a
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                    'justify-start text-muted-foreground',
                                )}
                                href="/contact"
                            >
                                Contact
                            </a>
                            <a
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                }),
                                'justify-start text-muted-foreground',
                            )}
                            href="#"
                            >
                            Imprint
                            </a>
                            <a
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                }),
                                'justify-start text-muted-foreground',
                            )}
                            href="#"
                            >
                            Sitemap
                            </a>
                            <a
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                }),
                                'justify-start text-muted-foreground',
                            )}
                            href="#"
                            >
                            Legal
                            </a>
                            <a
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                }),
                                'justify-start text-muted-foreground',
                            )}
                            href="#"
                            >
                            Cookie Settings
                            </a>
                        </div>
                        <div className="mt-2 flex flex-col gap-3">
                            <Button variant={'outline'}>Log in</Button>
                            <Button>Sign up</Button>
                        </div>
                        </div>
                    </SheetContent>
                    </Sheet>
                </div>
                </div>
        </section>
    );
};

export default Nav;
