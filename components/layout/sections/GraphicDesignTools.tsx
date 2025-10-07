'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/canva', alt: 'Canva' },
  { src: 'https://cdn.simpleicons.org/adobe', alt: 'Adobe Photoshop' },
  { src: 'https://cdn.simpleicons.org/illustrator', alt: 'Adobe Illustrator' },
  { src: 'https://cdn.simpleicons.org/figma', alt: 'Figma' },
  { src: 'https://cdn.simpleicons.org/indesign', alt: 'Adobe InDesign' },
  { src: 'https://cdn.simpleicons.org/pinterest', alt: 'Pinterest' },
  { src: 'https://cdn.simpleicons.org/unsplash', alt: 'Unsplash' },
  { src: 'https://cdn.simpleicons.org/venngage', alt: 'Venngage' },
  { src: 'https://cdn.simpleicons.org/crello', alt: 'Crello' },
  { src: 'https://cdn.simpleicons.org/behance', alt: 'Behance' },
];

export default function GraphicDesignTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in Canva & Graphic Design for Marketing
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
