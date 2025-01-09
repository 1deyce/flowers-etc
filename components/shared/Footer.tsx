import {
    FaInstagram,
	FaFacebook
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/flowers-logo.jpg';


const Footer = () => {
    return (
		<section className="pt-20 pb-10 px-10">
			<footer className="flex flex-col md:flex-row mx-auto flex-wrap justify-center sm:justify-between items-center p-4">
				<div className="flex flex-row flex-wrap justify-center gap-4 items-center">
					<Image 
						src={Logo}
						alt='Flowers Etc...'
						title='Flowers Etc...'
						width={50}
						height={50}
					/>
					<p className='text-center pb-2 sm:pb-0'> © {new Date().getFullYear()} - All rights reserved</p>
				</div>
				<nav className="flex flex-row gap-2 md:place-self-center md:justify-self-end">
					<Link href="https://www.instagram.com/_flowersetc" target='_blank'>
						<FaInstagram className='size-6 hover:scale-110 duration-500' />
					</Link>
					<Link href="https://www.facebook.com/flowersetc01/" target='_blank'>
						<FaFacebook className='size-6 hover:scale-110 duration-500' />
					</Link>
				</nav>
			</footer>
		</section>
    );
};

export default Footer;