'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/arduino', alt: 'Arduino' },
  { src: 'https://cdn.simpleicons.org/raspberrypi', alt: 'Raspberry Pi' },
  { src: 'https://cdn.simpleicons.org/keil', alt: 'Keil' },
  { src: 'https://cdn.simpleicons.org/atmel', alt: 'Atmel Studio' },
  { src: 'https://cdn.simpleicons.org/microchip', alt: 'Microchip' },
  { src: 'https://cdn.simpleicons.org/mentorgraphics', alt: 'Mentor Graphics' },
  { src: 'https://cdn.simpleicons.org/xcircuit', alt: 'XCircuit' },
  { src: 'https://cdn.simpleicons.org/synopsys', alt: 'Synopsys' },
  { src: 'https://cdn.simpleicons.org/magma', alt: 'Magma Design Automation' },
  { src: 'https://cdn.simpleicons.org/eclipseide', alt: 'Eclipse IDE' },
];

export default function VLSITools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in VLSI
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((icon, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-md bg-white shadow-sm flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src={icon.src} alt={icon.alt} className="h-[40px] object-contain" />
              <span className="mt-2 text-sm text-gray-700">{icon.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
