import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Store",
  description: "E-Store Frontend"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${inter.className} antialiased h-full w-full flex`}
      >
        <Navbar />
        <main className="flex grow items-center justify-center w-full mt-14">{children}</main>
      </body>
    </html>
  );
}
