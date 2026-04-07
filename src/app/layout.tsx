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
  title: "NinePM — Business Automation for SMBs",
  description:
    "NinePM helps small and medium businesses automate operations, reduce manual work, and grow faster using AI and modern tools.",
  openGraph: {
    title: "NinePM — Business Automation for SMBs",
    description:
      "Stop doing manually what a system can do for you. NinePM builds automation, dashboards, and AI tools tailored to your business.",
    siteName: "NinePM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#0F2027] text-[#f0f4ff] antialiased">
        {children}
      </body>
    </html>
  );
}
