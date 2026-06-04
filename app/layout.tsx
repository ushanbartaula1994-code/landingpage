import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
 import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academic Event 2026",
  description: "Official academic event landing page for graduation ceremony",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Academic Event 2026",
    description: "Join the official graduation ceremony",
    url: "https://landingpage-hazel-gamma.vercel.app",
    siteName: "Academic Event",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Academic Event 2026",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
