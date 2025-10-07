'use client'

import Container from "@/components/global/container";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const WINNERS = [
  { img: "/top/image.png", name: "Mahendra" },
  { img: "/top/p22.png", name: "Chandini" },
  { img: "/top/p3.png", name: "Navya" },
  // Add more students as needed
];

const Winners = () => {
  return (
    <div className="flex flex-col items-center  mt-8 justify-center py-4 w-full  text-black">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl  mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold pt-2  mb-2">   🔥  Top Performers of the Month </h2>
        </div>
      </Container>

      <Container>
        <div className="mt-8 w-full  relative overflow-hidden">
          <div className="relative flex flex-col  items-center justify-center overflow-hidden">
            <Marquee pauseOnHover reverse className="[--duration:20s] pb-4 " >
              {WINNERS.map((winner, index) => (
                <WinnerCard key={index} {...winner} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const WinnerCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure className="relative w-96 sm:w-[320px] cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-black p-8 transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-8">
        {/* Increase image size */}
        <div className="w-32 h-32 overflow-hidden rounded-sm">
          <Image className="object-cover" width="128" height="128" alt={name} src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium text-white">{name}</figcaption>
        </div>
      </div>
    </figure>
  );
};

export default Winners;
