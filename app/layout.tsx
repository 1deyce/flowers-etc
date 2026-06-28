import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";
import PageLoader from "@/components/shared/PageLoader";

export const metadata: Metadata = {
    title: "Flowers Etc...",
    description: "The home of Flowers Etc...",
    icons: "/images/flowers-logo.jpg"
};

const catamaran = Catamaran({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={catamaran.className}
            >
                <PageLoader />
                <Nav />
                {children}
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
