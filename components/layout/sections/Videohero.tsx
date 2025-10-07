"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react"; // Import CheckCircle icon

export function VideoHero() {
  return (
    // --- Responsive Adjustments ---
    // Reduced horizontal margin on small screens (mx-4), increased on medium+ (md:mx-10)
    // Added vertical margin for spacing on small screens (my-6)
    <div className="relative mx-4 md:mx-10 my-6 min-h-[400px] rounded-3xl overflow-hidden">
      {/* Background Gradient - No changes needed for responsiveness */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      </div>

      {/* Content Grid */}
      {/* --- Responsive Adjustments --- */}
      {/* Stays 1 column by default, switches to 2 columns on large screens (lg:grid-cols-2) */}
      {/* Adjusted padding for different screen sizes */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[400px] px-4 sm:px-6 lg:px-8"> {/* Reduced lg padding slightly */}

        {/* Left Side Content Section */}
        {/* --- Responsive Adjustments --- */}
        {/* Adjusted padding: smaller on mobile, increasing for larger screens */}
        <div className="p-6 md:p-8 lg:p-12 flex items-center">
          {/* Max width adjusted slightly for potentially smaller screens */}
          <div className="max-w-md lg:max-w-xl"> {/* Slightly smaller max-width on smaller screens */}
            {/* Badges Section */}
            {/* --- Responsive Adjustments --- */}
            {/* Use flex-wrap to allow badges to wrap on smaller screens if needed */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-blue-500 text-white whitespace-nowrap"> {/* Prevent wrap inside badge */}
                NEW COURSE
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 backdrop-blur-sm whitespace-nowrap"> {/* Prevent wrap inside badge */}
                AI-POWERED CURRICULUM
              </Badge>
            </div>

            {/* Heading */}
            {/* --- Responsive Adjustments --- */}
            {/* Adjusted text sizes for different breakpoints */}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              Fast Track 45 (Recorded)
            </h1>

            {/* Paragraph */}
            {/* --- Responsive Adjustments --- */}
            {/* Adjusted text sizes for better readability on mobile */}
            <p className="mt-4 text-base md:text-lg text-gray-300 mb-8">
              Take your career to the next level with our 45-day fast track course, combining tech training, a project, and internship. Learn through recorded lessons with expert instructors, and get AWS and Soft Skills certificates upon completion.
            </p>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Type & Start Date Grid */}
              {/* --- Responsive Adjustments --- */}
              {/* Stacks to 1 column on small screens, becomes 2 columns on sm+ */}
              {/* Added gap-y for spacing when stacked */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 max-w-lg">
                <div>
                  <div className="text-sm text-gray-400">Type</div>
                  <div className="text-white font-medium">Recorded Videos</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Start Date</div>
                  <div className="text-white font-medium">Every 45 days</div>
                </div>
                {/* Removed empty div */}
              </div>

              {/* Removed empty flex div */}

              {/* Enquiry Phone */}
              <p className="text-sm text-gray-400">
                For enquiries call: hr@talenttrekelearning.com

              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Fast Track Details */}
        {/* --- Responsive Adjustments --- */}
        {/* Adjusted padding like the left side */}
        {/* Added text alignment for consistency on smaller screens */}
        <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center items-start text-white">
           {/* Heading */}
           {/* --- Responsive Adjustments --- */}
          {/* Adjusted text sizes for different breakpoints */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Fast Track 45 (Recorded)</h2>
          {/* List */}
          {/* --- Responsive Adjustments --- */}
          {/* Adjusted text sizes for readability */}
          <ul className="space-y-3 text-base md:text-lg"> {/* Adjusted text size */}
            <li className="flex items-start sm:items-center"> {/* Allow wrapping on very small screens if needed */}
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" /> {/* Ensure icon doesn't shrink and aligns better */}
              <span>Tech Course +1 project + Internship</span> {/* Wrap text in span for better control */}
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
              <span>Price: ₹2999/-</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
              <span>45 days of Internship</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
              <span>1 month Course Training</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
              <span>15 days project</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
              <span>Internship completion certificate from AWS</span>
            </li>
            <li className="flex items-start sm:items-center">
              <CheckCircle className="text-green-500 mr-2 mt-1 sm:mt-0 flex-shrink-0" />
              <span>Soft skills training certificate</span>
            </li>
          </ul>

          {/* Buttons Section */}
          {/* --- Responsive Adjustments --- */}
          {/* Buttons stack vertically on small screens (flex-col), then horizontally (sm:flex-row) */}
          {/* Buttons take full width on small screens (w-full), auto width on larger (sm:w-auto) */}
          {/* Increased margin-top for better spacing */}
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