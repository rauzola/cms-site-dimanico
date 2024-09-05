import "./globals.css";

import Header from "@/components/Header";
import { createClient } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  // Prepare the data to be passed as props
  const headerProps = {
    logoName: settings.data?.logo_nome || "Default Logo", // Use um valor padrão se logo_nome não estiver disponível
    logoImage: settings.data?.imgaem_logo.url,
    navigationLinks: navigation.data?.links.map((item: any) => ({
      label: item.label,
      link: item.link
    })) || []
  };


  
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header {...headerProps} />
        {children}
        <PrismicPreview repositoryName="your-repo-name" />
      </body>
    </html>
  );
}
