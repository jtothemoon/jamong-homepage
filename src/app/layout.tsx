import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Landing Page',
  description: 'A modern and responsive landing page built with Next.js and TypeScript',
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`bg-[#FCFCFC] dark:bg-black ${poppins.className}`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
