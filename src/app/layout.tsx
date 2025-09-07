import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const quicksand = Poppins({
  variable: "--font-title",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const mulish = Source_Sans_3({
  variable: "--font-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antenucci y Asociados",
  description: "Estudio integral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${quicksand.variable} ${mulish.variable}`}>
        <Navbar />

        {children}

        <Footer />

        <Toaster richColors />
      </body>
    </html>
  );
}
