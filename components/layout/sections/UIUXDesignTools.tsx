'use client'

import { motion } from 'framer-motion'

const uiuxToolsIcons = [
  { src: 'https://cdn.simpleicons.org/figma', alt: 'Figma' },
  { src: 'https://cdn.simpleicons.org/sketch', alt: 'Sketch' },
  { src: 'https://cdn.simpleicons.org/adobexd', alt: 'Adobe XD' },
  { src: 'https://cdn.simpleicons.org/invision', alt: 'InVision' },
  { src: 'https://cdn.simpleicons.org/zeplin', alt: 'Zeplin' },
  { src: 'https://cdn.simpleicons.org/canva', alt: 'Canva' },
  { src: 'https://cdn.simpleicons.org/photoshop', alt: 'Photoshop' },
  { src: 'https://cdn.simpleicons.org/illustrator', alt: 'Illustrator' },
  { src: 'https://cdn.simpleicons.org/miro', alt: 'Miro' },
  { src: 'https://cdn.simpleicons.org/notion', alt: 'Notion' },
  { src: 'https://cdn.simpleicons.org/whimsical', alt: 'Whimsical' },
  { src: 'https://cdn.simpleicons.org/overflow', alt: 'Overflow' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub (handoff)' },
]

export default function UIUXDesignTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          UI/UX Design Tools You’ll Master
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {uiuxToolsIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-md p-4 flex flex-col items-center shadow-sm bg-white cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="h-[50px] flex items-center justify-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-[40px] w-auto object-contain transition duration-300"
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {icon.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
