'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/arduino', alt: 'Arduino' },
  { src: 'https://cdn.simpleicons.org/raspberrypi', alt: 'Raspberry Pi' },
  { src: 'https://cdn.simpleicons.org/microchip', alt: 'Microchip' },
  { src: 'https://cdn.simpleicons.org/atmel', alt: 'Atmel Studio' },
  { src: 'https://cdn.simpleicons.org/keil', alt: 'Keil uVision' },
  { src: 'https://cdn.simpleicons.org/arm', alt: 'ARM' },
  { src: 'https://cdn.simpleicons.org/gcc', alt: 'GCC' },
  { src: 'https://cdn.simpleicons.org/eclipseide', alt: 'Eclipse IDE' },
  { src: 'https://cdn.simpleicons.org/visualstudio', alt: 'Visual Studio Code' },
  { src: 'https://cdn.simpleicons.org/meshlab', alt: 'MeshLab' },
];

export default function EmbeddedSystemsTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Platforms You'll Use in Embedded Systems
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
