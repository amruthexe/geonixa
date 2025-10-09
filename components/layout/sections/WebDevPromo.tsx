"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WebDevPromo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Full Stack Web Development
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Build real-world websites and apps from Day 1!
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700">
              Learn HTML, CSS, JavaScript, React, Node.js & more.
            </p>
            <p className="text-lg text-gray-700">
              100% practical, beginner-friendly.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-2 text-xl">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">4.9/5 Rated  by 5,000+ learners</span>
            </div>
            <p className="text-md text-gray-700">
              Certification of Completion + Placement Assistance included.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
            <Button
              asChild
              className="w-5/6 sm:w-1/3 font-bold group/arrow bg-black hover:bg-gray-800 text-white rounded-full px-24 py-3 transition duration-300"
            >
              <Link href="https://wa.me/919999999999?text=Hi%2C%20I'm%20interested%20in%20learning%20about%20your%20Web%20Development%20course.">
                Start Learning at ₹4999
                <Play className="size-4 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 sm:w-1/3 font-bold border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-3 transition duration-300"
            >
              <Link href="tel:+919999999999">Call Us</Link>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full lg:w-1/2">
          <div
            onClick={handleVideoClick}
            className="cursor-pointer relative w-full aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src="/html.jpeg"
              alt="Web Development Course Demo"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Video Modal */}
          {isVideoOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
              <div className="relative w-full max-w-3xl aspect-[16/9]">
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  controls
                  autoPlay
                >
                  <source src="/html.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute top-2 right-2 text-white text-xl"
                  onClick={() => setIsVideoOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
