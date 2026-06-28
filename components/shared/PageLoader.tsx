'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const PageLoader = () => {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <Image
                src="/images/sunflower-spinner.svg"
                alt="Flowers Etc."
                width={120}
                height={120}
                className="animate-spin"
                style={{ animationDuration: '3s' }}
                priority
            />
        </div>
    );
};

export default PageLoader;
