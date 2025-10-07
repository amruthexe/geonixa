'use client'

import Container from "@/components/global/container";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const WINNERS = [
  { img: "https://github.com/keshav-exe.png", name: "Keshav Bagaade" },
  { img: "https://github.com/amruthexe.png", name: "Amruth Raj" },
  { img: "https://github.com/krey-yon.png", name: "Vikas" },
  { img: "https://github.com/bedigambar.png", name: "Digambar" },
  // Add more students as needed
];

const BrainBattleWinners = () => {
  return (
    <div className="flex flex-col items-center  justify-center py-4 w-full bg-black text-white">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold pt-2  mb-2"> Brain Battle Program Winners</h2>
        </div>
      </Container>

      <Container>
        <div className="mt-8 w-full relative overflow-hidden">
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover reverse className="[--duration:20s] pb-4">
              {WINNERS.map((winner, index) => (
                <WinnerCard key={index} {...winner} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
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
    <figure className="relative w-72 sm:w-80 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-neutral-50/[.05] hover:bg-foreground/10 p-6 transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-6">
        {/* Square-shaped image with object-cover */}
        <div className="w-24 h-24 overflow-hidden rounded-lg">
          <Image className="object-cover" width="96" height="96" alt={name} src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium text-white">{name}</figcaption>
        </div>
      </div>
    </figure>
  );
};

export default BrainBattleWinners;
