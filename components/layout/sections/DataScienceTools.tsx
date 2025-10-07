'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/pandas', alt: 'Pandas' },
  { src: 'https://cdn.simpleicons.org/numpy', alt: 'NumPy' },
  { src: 'https://cdn.simpleicons.org/scikitlearn', alt: 'Scikit-learn' },
  { src: 'https://cdn.simpleicons.org/tensorflow', alt: 'TensorFlow' },
  { src: 'https://cdn.simpleicons.org/mongodb', alt: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/sqlite', alt: 'SQLite' },
  { src: 'https://cdn.simpleicons.org/matplotlib', alt: 'Matplotlib' },
  { src: 'https://avatars.githubusercontent.com/u/22112899?s=200&v=4', alt: 'Plotly' },
];

export default function DataScienceTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Libraries You'll Learn
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
