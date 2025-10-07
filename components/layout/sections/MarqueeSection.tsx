"use client";
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion for animation

interface MarqueeSectionProps {
  text: string;
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({ text }) => {
  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: ["100%", "-100%"], // Move from right to left
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Adjust the duration as needed for scrolling speed
          ease: "linear",
        }}
      >
        {/* Left Star */}
        <Star className="inline-block align-middle ml-2" size={20} />
        
        {/* Scrolling Text */}
        <div className="flex">
          {Array.from(text).map((char, index) => (
            <React.Fragment key={index}>
              {char === ' ' ? <span>&nbsp;</span> : char}
            </React.Fragment>
          ))}
        </div>

        {/* Right Star */}
        <Star className="inline-block align-middle ml-2" size={20} />
        
        {/* Repeat Text */}
        <div className="flex">
          {Array.from(text).map((char, index) => (
            <React.Fragment key={`copy-${index}`}>
              {char === ' ' ? <span>&nbsp;</span> : char}
            </React.Fragment>
          ))}
        </div>

        {/* Left Star */}
        <Star className="inline-block align-middle ml-2" size={20} />
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
