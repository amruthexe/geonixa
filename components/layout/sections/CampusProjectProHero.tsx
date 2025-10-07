"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function CampusProjectProHero() {
  return (
    <div className="relative mx-4 md:mx-10 my-6 min-h-[400px] rounded-3xl overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50" />
      </div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[400px] px-4 sm:px-6 lg:px-8">

        {/* Left Content */}
        <div className="p-6 md:p-8 lg:p-12 flex items-center">
          <div className="max-w-md lg:max-w-xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-green-600 text-white whitespace-nowrap">
                CAMPUS+
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 backdrop-blur-sm whitespace-nowrap">
                PROJECTPRO
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              Campus+ ProjectPro
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-300 mb-8">
              Complete final-year project support with end-to-end creation, documentation, viva prep, and fast delivery for engineering, MBA, B.Com, and more.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 max-w-lg">
                <div>
                  <div className="text-sm text-gray-400">Price</div>
                  <div className="text-white font-medium">₹15,000 / one-time</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Stream</div>
                  <div className="text-white font-medium">B.Tech, MBA, B.Com, etc.</div>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                For queries, contact: support@campusplus.in
              </p>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center items-start text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What’s Included</h2>

          <ul className="space-y-3 text-base md:text-lg">
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              IEEE / NAAC Standard Project Creation
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              Report + PPT Ready to Submit
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              Live Mentorship + Viva Preparation
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              3–5 Days Express Delivery (₹2000 Extra)
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0" />
              Support for B.Tech, MBA, B.Com & More
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
              Talk to Project Mentor
            </Button>
            <Button className="bg-black hover:bg-green-700 w-full sm:w-auto">
              Start Project Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
