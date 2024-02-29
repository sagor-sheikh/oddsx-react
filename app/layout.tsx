import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/public/scss/style.scss";
import MainFooter from "@/components/Shared/MainFooter";
import FooterCard from "@/components/Shared/FooterCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oddsx - Sports Betting Website HTML Template",
  description: "Made with nextjs bootstrap 5 & Sass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <FooterCard />
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
