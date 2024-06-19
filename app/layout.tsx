import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Lilita_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const lilitaOne = Lilita_One({ subsets:['latin'], weight: ['400'], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Orbitt",
  description: "Orbitt Your trusted financial partner, offering seamless banking solutions for easy account management, transfers, bill payments, and financial tracking.",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lilitaOne.variable}`}>{children}</body>
    </html>
  );
}
