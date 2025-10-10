"use client";

import { Laptop, Code, Award, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProgramPromo() {
  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Fast Track 45 (Recorded)
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Tech Course +1 Project + Internship
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feature Cards */}
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <Laptop className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Tech Course + 1 Project + Internship</h3>
            </div>

            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <Code className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">1 Month Course Training</h3>
            </div>

            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <Clock className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">45 Days of Internship</h3>
            </div>

            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <FileText className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">15 Days Project</h3>
            </div>

            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <Award className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Internship Completion Certificate from AWS</h3>
            </div>

            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <Award className="text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Soft Skills Training Certificate</h3>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start mt-8">
            <Button
              asChild
              className="w-5/6 sm:w-1/3 font-bold group/arrow bg-black hover:bg-gray-800 text-white rounded-full px-24 py-3 transition duration-300"
            >
              <Link href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20learning%20about%20your%20Fast%20Track%2045%20course.">
                Start Learning at ₹2499
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 sm:w-1/3 font-bold border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-3 transition duration-300"
            >
              <Link href="tel:+919663216581">Call Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
