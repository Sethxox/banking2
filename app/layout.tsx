import type { Metadata } from "next";
import { Inter, Lilita_One, Slabo_27px, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lilita-one",
});
const slabo = Slabo_27px({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-slabo",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Orbitt",
  description:
    "Orbitt, Your trusted financial partner, offering seamless banking solutions for easy account management, transfers, bill payments, and financial tracking.",
  icons: {
    icon: "/icons/logo.svg",
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
        className={`${inter.variable} ${lilitaOne.variable} ${slabo.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
