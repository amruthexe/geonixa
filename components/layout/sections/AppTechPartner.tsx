'use client'

import { motion } from 'framer-motion'

const appTechIcons = [
  { src: "https://cdn.simpleicons.org/flutter", alt: "Flutter" },
  { src: "https://cdn.simpleicons.org/dart", alt: "Dart" },
  { src: "https://cdn.simpleicons.org/firebase", alt: "Firebase" },
  { src: "https://cdn.simpleicons.org/android", alt: "Android" },
  { src: "https://cdn.simpleicons.org/apple", alt: "iOS" },
  { src: "https://cdn.simpleicons.org/github", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/git", alt: "Git" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6NCxPLGi_MIQmnA7DwXINCdm5vHiGUkygA&s", alt: "VS Code" },
  { src: "https://cdn.simpleicons.org/postman", alt: "Postman" },
  { src: "https://cdn.simpleicons.org/linux", alt: "Linux" },
];

export default function AppTechPartners() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted by Developers. Built for Real Apps.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {appTechIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-md p-4 flex flex-col items-center shadow-sm bg-white cursor-pointer"
              whileHover={{ scale: 1.05, y: -4, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
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
              <span className="mt-2 text-sm font-medium text-gray-700">{icon.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
