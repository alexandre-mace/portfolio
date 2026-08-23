import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandremace.fr"),
  title: "Alexandre Macé - Full stack developer",
  description: "Alexandre Macé, fullstack developer working with symfony and react. Taking part in projects tied to climate or biodiversity.",
  openGraph: {
    title: "Alexandre Macé - Full stack developer",
    description: "Alexandre Macé, fullstack developer working with symfony and react. Taking part in projects tied to climate or biodiversity.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexandre Macé - Full stack developer",
    description: "Alexandre Macé, fullstack developer working with symfony and react. Taking part in projects tied to climate or biodiversity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
