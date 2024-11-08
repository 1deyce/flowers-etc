import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/shared/Nav";

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
            </body>
        </html>
    );
}
