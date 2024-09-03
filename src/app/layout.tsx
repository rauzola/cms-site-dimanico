
import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

