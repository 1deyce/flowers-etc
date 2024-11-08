import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Flowers Etc.",
    description: "Florist Website",
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
                <Nav />
                {children}
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
