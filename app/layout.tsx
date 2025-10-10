/* eslint-disable no-undef */
/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // <-- Added icons
import Link from "next/link";
import { DelayedPopup } from "@/components/layout/sections/DelayedPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeoNixa",
  description: "GeoNixa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>GeoNixa | Learn Web Development Online</title>
<meta name="description" content="Join GeoNixa – an edtech startup offering affordable online courses in coding, web development, and future-ready skills. Start learning today." />
<meta property="og:title" content="GeoNixa | Learn Web Development Online" />
<meta property="og:description" content="GeoNixa is your go-to e-learning platform for mastering coding and tech skills with real-world projects and expert mentors." />

    <body className={cn("min-h-screen", inter.className)}>


   <div className="pt-4  "> 
  
    <Navbar />

    </div>
    <DelayedPopup />
         


          {children}

          <div className="fixed bottom-8 right-8 md:bottom-4 md:right-4 flex flex-col gap-3 items-center z-50">
            <Link href="tel:+919663216581">
              <div className="bg-[#eb4917]  text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
                <FaPhoneAlt size={20} />
              </div>
            </Link>

            

          
            {/* <Link
              href="https://wa.me/919663216581?text=I%20am%20interested"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-blink">
                <FaWhatsapp size={20} />
              </div>
            </Link> */}
          </div>
      </body>
    </html>
  );
}
