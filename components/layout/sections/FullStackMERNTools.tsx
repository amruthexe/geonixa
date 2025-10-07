'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/html5', alt: 'HTML5' },
  { src: 'https://cdn.simpleicons.org/css3', alt: 'CSS3' },
  { src: 'https://cdn.simpleicons.org/javascript', alt: 'JavaScript' },
  { src: 'https://cdn.simpleicons.org/react', alt: 'React' },
  { src: 'https://static-00.iconduck.com/assets.00/nodejs-icon-2048x1254-fc24w6ld.png', alt: 'Node.js' },
  { src: 'https://cdn.simpleicons.org/express', alt: 'Express.js' },
  { src: 'https://cdn.simpleicons.org/mongodb', alt: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/postman', alt: 'Postman' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/git', alt: 'Git' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_T_PXm3ME7rJ4IexW1TiQLLZi4Fc7WoomQ&s', alt: 'VS Code' },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel' },
  { src: 'https://cdn.simpleicons.org/netlify', alt: 'Netlify' },
  { src: 'https://cdn.simpleicons.org/npm', alt: 'NPM' },
  { src: 'https://cdn.simpleicons.org/firebase', alt: 'Firebase (optional)' },
];

export default function FullStackMERNTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You’ll Work With
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
              <span className="mt-2 text-sm text-gray-700 text-center">{icon.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
