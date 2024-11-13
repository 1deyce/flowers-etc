import { Menu } from 'lucide-react';
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
import Link from 'next/link';
import { subMenuItems } from '@/utils/subMenuItems';

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
                            <span className="text-2xl font-bold">Flowers Etc...</span>
                        </div>
                        <div className="flex items-center">
                            <Link
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'linkHover2',
                                    }),
                                )}
                                href="/"
                            >
                                HOME
                            </Link>
                            <NavigationMenu>
                                <NavigationMenuList>
                                <NavigationMenuItem className="text-muted-foreground">
                                    <NavigationMenuTrigger>
                                        <Link 
                                            href="/events"
                                            className={cn(
                                                'text-muted-foreground',
                                                navigationMenuTriggerStyle,
                                                buttonVariants({
                                                    variant: 'linkHover2',
                                                }),
                                            )}
                                        >
                                            EVENTS
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                    <ul className="w-80 p-3">
                                        <NavigationMenuLink>
                                            {subMenuItems.map((item, idx) => (
                                                <li key={idx}>
                                                    <Link
                                                        className={cn(
                                                            'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                        )}
                                                        href={item.href}
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
                                                    </Link>
                                                </li>
                                            ))}
                                        </NavigationMenuLink>
                                    </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <Link
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'linkHover2',
                                    }),
                                )}
                                href="/gifting"
                            >
                                GIFTING
                            </Link>
                            <Link
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'linkHover2',
                                    }),
                                )}
                                href="/contact"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                        {/* TODO: Add Social Links here */}
                        <Link href="#">
                            <FaInstagram className="size-6" />
                        </Link>
                        <Link href="#">
                            <FaFacebook className="size-6" />
                        </Link>
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
                            <span className="text-xl font-bold">Flowers Etc...</span>
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
                                <div className="flex items-center justify-center gap-2">
                                    <Image
                                        src={Logo}
                                        className="w-8"
                                        alt="Flowers Etc."
                                    />
                                    <span className="text-xl font-bold">Flowers Etc...</span>
                                </div>
                            </SheetTitle>
                            </SheetHeader>
                            <div className="my-8 flex flex-col gap-4">
                                <Link href="/" className="font-semibold">
                                    HOME
                                </Link>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="products" className="border-b-0">
                                    <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                                        <Link href="/events" className='font-semibold'>EVENTS</Link>
                                    </AccordionTrigger>
                                    <AccordionContent className="mt-2">
                                        {subMenuItems.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                className={cn(
                                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                )}
                                                href={item.href}
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
                                            </Link>
                                        ))}
                                    </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Link href="/gifting" className="font-semibold">
                                    GIFTING
                                </Link>
                                <Link href="/contact" className="font-semibold">
                                    CONTACT US
                                </Link>
                            </div>
                            <div className="border-t pt-4">
                                <div className="mt-2 flex justify-center flex-row gap-3">
                                    {/* TODO: Add Social Links here */}
                                    <Link href="#">
                                        <FaInstagram className="size-6" />
                                    </Link>
                                    <Link href="#">
                                        <FaFacebook className="size-6" />
                                    </Link>
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
