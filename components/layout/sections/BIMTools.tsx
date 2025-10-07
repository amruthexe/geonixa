'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/autodesk', alt: 'AutoCAD' },
  { src: 'https://cdn.simpleicons.org/solidworks', alt: 'SolidWorks' },
  { src: 'https://cdn.simpleicons.org/revit', alt: 'Revit' },
  { src: 'https://cdn.simpleicons.org/navisworks', alt: 'Navisworks' },
  { src: 'https://cdn.simpleicons.org/bim360', alt: 'BIM 360' },
  { src: 'https://cdn.simpleicons.org/azure', alt: 'Microsoft Azure' },
  { src: 'https://cdn.simpleicons.org/aws', alt: 'AWS IoT' },
  { src: 'https://cdn.simpleicons.org/googlecloud', alt: 'Google Cloud' },
  { src: 'https://cdn.simpleicons.org/planview', alt: 'Planview' },
  { src: 'https://cdn.simpleicons.org/trello', alt: 'Trello' },
];

export default function BIMTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in BIM
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
