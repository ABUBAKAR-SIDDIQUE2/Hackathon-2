import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/footer";
import "./globals.css";
import HeaderW from "@/components/home/headerW";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meubel House",
  description: "Hackathon project by Abubakar Siddique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderW></HeaderW> */}
        {/* <Footer></Footer> */}
        {children}
        </body>
    </html>
  );
}
