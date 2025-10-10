"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function SkillBoostHero() {
  return (
    <div className="relative mx-4 md:mx-10 my-6 min-h-[400px] rounded-3xl overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      </div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[400px] px-4 sm:px-6 lg:px-8">
        
        {/* Left Content */}
        <div className="p-6 md:p-8 lg:p-12 flex items-center">
          <div className="max-w-md lg:max-w-xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-blue-500 text-white whitespace-nowrap">
                NEW PROGRAM
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 backdrop-blur-sm whitespace-nowrap">
                LIVE + RECORDED
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              Skill Boost 2 (Live Recorded)
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-300 mb-8">
              A power-packed 2-month career accelerator including live + recorded sessions, project work, and internship. Perfect for building a solid tech portfolio with mentorship and certification from global brands.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 max-w-lg">
                <div>
                  <div className="text-sm text-gray-400">Type</div>
                  <div className="text-white font-medium">Live + Recorded</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Start Cycle</div>
                  <div className="text-white font-medium">Every 45 days</div>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                For queries, email:  hr@geonixa.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Program Features */}
        <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center items-start text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What’s Included</h2>

          <ul className="space-y-3 text-base md:text-lg">
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Course Training + 4 Minor & 1 Major Project + Internship</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Price: ₹3999/-</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Duration: 2 Months</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>45 Days of Live + Recorded Course Training</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>15 Days Project Work</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Internship Completion Certificate from AWS</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Course Completion Certificate from GeoNixa & AICTE</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Excellence Certificate by MNC Mentor</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              <span>Letter of Recommendation (LOR)</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-8 w-full sm:w-auto">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
              Call Us
            </Button>
            <Button className="bg-black hover:bg-red-600 w-full sm:w-auto">
              Enrol Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
