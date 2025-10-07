'use client'

import { motion } from 'framer-motion'

const businessAnalyticsToolsIcons = [
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/rstudio', alt: 'RStudio' },
  { src: 'https://cdn.simpleicons.org/powerbi', alt: 'Power BI' },
  { src: 'https://cdn.simpleicons.org/tableau', alt: 'Tableau' },
  { src: 'https://cdn.simpleicons.org/sqlite', alt: 'SQLite' },
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/postgresql', alt: 'PostgreSQL' },
  { src: 'https://cdn.simpleicons.org/git', alt: 'Git' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/apachekafka', alt: 'Apache Kafka' },
  { src: 'https://cdn.simpleicons.org/azure', alt: 'Microsoft Azure' },
  { src: 'https://cdn.simpleicons.org/googlecloud', alt: 'Google Cloud' },
  { src: 'https://cdn.simpleicons.org/docker', alt: 'Docker' },
  { src: 'https://cdn.simpleicons.org/spark', alt: 'Apache Spark' },
  { src: 'https://cdn.simpleicons.org/aws', alt: 'AWS' },
];

export default function BusinessAnalyticsTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies Covered in Business Analytics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {businessAnalyticsToolsIcons.map((icon, index) => (
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
