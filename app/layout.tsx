import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexandre Macé - Full stack developer",
  description: "Alexandre Macé, fullstack developer working with symfony and react. Taking part in projects tied to climate or biodiversity.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Alexandre Macé - Full stack developer",
    description: "Alexandre Macé, fullstack developer working with symfony and react. Taking part in projects tied to climate or biodiversity.",
    images: [
      {
        url: '/og-image-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Alexandre Macé Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexandre Macé - Full stack developer",
    description: "Alexandre Macé, fullstack developer working with symfony and react. Taking part in projects tied to climate or biodiversity.",
    images: ['/og-image-portfolio.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8F7F3] text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
