"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function UpskillSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative lines (left) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
        <div className="flex flex-col gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[10px] w-80 rounded-r-md bg-[#eb4917] transform rotate-[-5deg]"
            />
          ))}
        </div>
      </div>

      {/* Decorative lines (right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
        <div className="flex flex-col gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[10px] w-80 bg-[#eb4917] rounded-l-md transform rotate-[5deg]"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          <span className="bg-[#eb4917] rounded-md px-2">Upskill</span> yourself.
          <br className="hidden sm:block" /> Accelerate AI adoption.
           <br className="hidden sm:block" /> Learn Trending courses
        </h1>

        <p className="text-gray-600 mt-6 text-lg md:text-xl">
          Transform AI into your competitive advantage.
        </p>
        

        <div className="mt-10">
          <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button asChild className="w-5/6 md:w-1/4 font-bold bg-[#eb4917] group/arrow">
                <Link
                  href="https://wa.me/919606995925?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                  target="_blank"
                >
                  Book a Demo
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold bg-grey-300"
              >
                <Link href="tel:+919606995925">Call Us</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
