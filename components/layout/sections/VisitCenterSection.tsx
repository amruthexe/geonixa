"use client";

import { Building2, User2, ClipboardList, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TalkToUsSection() {
  return (
    <section className="container py-16">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="hidden md:block">
          <p className="uppercase text-sm text-muted-foreground font-medium">Find us nearby</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Talk to us <span className="text-black">in-person</span>
          </h2>

          <ul className="mt-6 space-y-4 text-muted-foreground text-base">
            <li className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-black mt-1" />
              Visit your nearest offline centre for a free session
            </li>
            <li className="flex items-start gap-3">
              <User2 className="w-5 h-5 text-black mt-1" />
              Get personalized expert guidance on your career path
            </li>
            <li className="flex items-start gap-3">
              <ClipboardList className="w-5 h-5 text-black mt-1" />
              Register for a free seminar in your area of interest
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore centres
            </Button>
            <Button size="lg" className="bg-black hover:bg-blue-700 text-white w-full sm:w-auto">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Visit
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full hidden md:block max-w-xl mx-auto">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/images/office.png"
              alt="upGrad Office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
