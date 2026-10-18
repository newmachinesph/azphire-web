import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Azphire | Connect Filipino Talent with Global Opportunities",
  description: "The Philippines' new remote work platform. Find your dream remote job or hire top Filipino talent. Free to join, global opportunities.",
  keywords: ["remote jobs", "Filipino talent", "work from home", "hire remote workers", "Philippines", "remote work", "job search"],
  authors: [{ name: "Azphire" }],
  openGraph: {
    title: "Azphire | Connect Filipino Talent with Global Opportunities",
    description: "The Philippines' new remote work platform. Find your dream remote job or hire top Filipino talent.",
    url: "https://azphire.com",
    siteName: "Azphire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azphire | Connect Filipino Talent with Global Opportunities",
    description: "The Philippines' new remote work platform. Find your dream remote job or hire top Filipino talent.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
