'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/autodesk', alt: 'AutoCAD' },
  { src: 'https://cdn.simpleicons.org/solidworks', alt: 'SolidWorks' },
  { src: 'https://cdn.simpleicons.org/blender', alt: 'Blender' },
  { src: 'https://cdn.simpleicons.org/ultimaker', alt: 'Ultimaker' },
  { src: 'https://cdn.simpleicons.org/creality', alt: 'Creality' },
  { src: 'https://cdn.simpleicons.org/prusa', alt: 'Prusa' },
  { src: 'https://cdn.simpleicons.org/thingiverse', alt: 'Thingiverse' },
  { src: 'https://cdn.simpleicons.org/meshmixer', alt: 'Meshmixer' },
  { src: 'https://cdn.simpleicons.org/tinkercad', alt: 'Tinkercad' },
  { src: 'https://cdn.simpleicons.org/fusion360', alt: 'Fusion 360' },
];

export default function ThreeDPrintingTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in 3D Printing
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
