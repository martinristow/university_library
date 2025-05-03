import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BookWise",
    description: "BookWise is a book borrowing university library management solution.",
};

const RootLayout = async ({
                              children,
                          }: {
    children: ReactNode;
}) => {

    const session = await auth();

    return (
        <html lang="en">
        <SessionProvider session={session}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            {children}
            </body>
        </SessionProvider>
        </html>
    );
}

export default RootLayout;
