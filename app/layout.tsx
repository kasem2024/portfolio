import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { SidebarLayout } from "@/components/SidebarLayout";

import { Toaster } from "react-hot-toast";

const inter = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mohamed Kasem software engineer with 4 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      {/* <CustomCursor /> */}
        <SidebarLayout>
         {children}
         <Toaster position="top-right" />
        </SidebarLayout>
          
          </body>
    </html>
  );
}
