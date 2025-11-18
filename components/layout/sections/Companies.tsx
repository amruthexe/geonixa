"use client";

import { Poppins } from "next/font/google";
import Images from "@/components/global/images";
import Marquee from "@/components/ui/marquee";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const Companies = () => {
  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center justify-center text-center w-full">
        
        {/* Heading */}
        <h2 className={`${poppins.className} text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white`}>
          Trusted by Leading Companies
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
          Our students are hired by top-tier organizations worldwide.
        </p>

        {/* Marquee Row */}
        <div className="mt-12 w-full relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:28s]">
            <div className="flex gap-10 md:gap-14 opacity-80 hover:opacity-100 transition">
              <Images.company1 className="w-40 h-20 object-contain" />
              <Images.company2 className="w-40 h-20 object-contain" />
              <Images.company3 className="w-40 h-20 object-contain" />
              <Images.company4 className="w-40 h-20 object-contain" />
              <Images.company5 className="w-40 h-20 object-contain" />
              <Images.company6 className="w-40 h-20 object-contain" />
              <Images.company7 className="w-40 h-20 object-contain" />
              <Images.company8 className="w-40 h-20 object-contain" />
              <Images.company9 className="w-40 h-20 object-contain" />
              <Images.company10 className="w-40 h-20 object-contain" />
            </div>
          </Marquee>

          {/* Fade Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
