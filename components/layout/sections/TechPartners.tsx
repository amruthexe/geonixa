'use client'

import { motion } from 'framer-motion'

const techIcons = [
  { src: "https://cdn.simpleicons.org/html5", alt: "HTML5" },
  { src: "https://cdn.simpleicons.org/css3", alt: "CSS3" },
  { src: "https://cdn.simpleicons.org/javascript", alt: "JavaScript" },
  { src: "https://cdn.simpleicons.org/typescript", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/react", alt: "React" },
  { src: "https://cdn.simpleicons.org/nextdotjs", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/tailwindcss", alt: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/nodedotjs", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/python", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.simpleicons.org/cplusplus", alt: "C++" },
  { src: "https://cdn.simpleicons.org/mysql", alt: "MySQL" },
  { src: "https://cdn.simpleicons.org/mongodb", alt: "MongoDB" },
  { src: "https://cdn.simpleicons.org/git", alt: "Git" },
  { src: "https://cdn.simpleicons.org/docker", alt: "Docker" },
];

export default function TechPartners() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted by Tech, Powered by Code
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techIcons.map((icon, index) => (
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
