import type { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


import "./globals.css";
import QueryWrapper from "@/components/QueryWrapper";

export const metadata: Metadata = {
  title: "BHive",
  description: "BHive Select Spaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="size-full">
      <body className={`${inter.className} antialiased size-full bg-[#F5F5F5]`}>
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  );
}
