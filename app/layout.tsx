/* eslint-disable no-undef */
/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { DelayedPopup } from "@/components/layout/sections/DelayedPopup";
import GeonixaChatbot from "@/components/layout/sections/GeonixaChatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
      <meta
        name="description"
        content="Join GeoNixa – an edtech startup offering affordable online courses in coding, web development, and future-ready skills. Start learning today."
      />
      <meta
        property="og:title"
        content="GeoNixa | Learn Web Development Online"
      />
      <meta
        property="og:description"
        content="GeoNixa is your go-to e-learning platform for mastering coding and tech skills with real-world projects and expert mentors."
      />

      <body className={cn("min-h-screen", poppins.className)}>
        <div className="pt-4">
          <Navbar />
        </div>

        <DelayedPopup />

        {children}

        {/* Floating Buttons */}
       <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">

  {/* 📞 Call Button */}
  <Link href="tel:+919390514374">
    <div className="bg-[#eb4917] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
      <FaPhoneAlt size={18} />
    </div>
  </Link>

  {/* 🤖 Chatbot */}
  <GeonixaChatbot />

</div>
      </body>
    </html>
  );
}
