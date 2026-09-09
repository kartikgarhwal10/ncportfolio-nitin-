import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitin Choudhary | Performance Marketing & Meta Ads Specialist",
  description:
    "Nitin Choudhary is a Performance Marketing Specialist with 3+ years of experience in Meta Ads, digital marketing, lead generation and paid acquisition.",
  keywords: [
    "Performance Marketing Specialist",
    "Meta Ads Specialist",
    "Digital Marketing",
    "Facebook Ads",
    "Instagram Ads",
    "Lead Generation",
    "Paid Advertising",
    "Performance Marketing",
    "Meta Advertising",
  ],
  authors: [{ name: "Nitin Choudhary" }],
  openGraph: {
    title: "Nitin Choudhary | Performance Marketing & Meta Ads Specialist",
    description:
      "Nitin Choudhary is a Performance Marketing Specialist with 3+ years of experience in Meta Ads, digital marketing, lead generation and paid acquisition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#08090C] text-white antialiased selection:bg-indigo-500/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
