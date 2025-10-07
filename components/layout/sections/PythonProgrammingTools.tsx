'use client'

import { motion } from 'framer-motion'

const pythonToolsIcons = [
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/pandas', alt: 'Pandas' },
  { src: 'https://cdn.simpleicons.org/numpy', alt: 'NumPy' },
  { src: 'https://cdn.simpleicons.org/scikitlearn', alt: 'Scikit-learn' },
  { src: 'https://cdn.simpleicons.org/tensorflow', alt: 'TensorFlow' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png', alt: 'Matplotlib' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacFRGA2LUub2tW1msStkDLbZX8-Idsj8zkw&s', alt: 'Seaborn' },
  { src: 'https://avatars.githubusercontent.com/u/22112899?s=200&v=4', alt: 'Plotly' },
  { src: 'https://avatars.githubusercontent.com/u/27804?s=200&v=4', alt: 'Dash' },
  { src: 'https://cdn.simpleicons.org/git', alt: 'Git' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/mongodb', alt: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/heroku', alt: 'Heroku' },
  { src: 'https://cdn.simpleicons.org/vercel', alt: 'Vercel' },
  { src: 'https://cdn.simpleicons.org/netlify', alt: 'Netlify' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s', alt: 'AWS' },
];

export default function PythonProgrammingTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Libraries Covered in Python Programming
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {pythonToolsIcons.map((icon, index) => (
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
