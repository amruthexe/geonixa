'use client'

import { motion } from 'framer-motion'

const dataAnalyticsTools = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/509px-Microsoft_Excel_2013-2019_logo.svg.png', alt: 'Excel' },
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/postgresql', alt: 'PostgreSQL' },
  { src: 'https://cdn.simpleicons.org/powerbi', alt: 'Power BI' },
  { src: 'https://cdn.simpleicons.org/tableau', alt: 'Tableau' },
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/pandas', alt: 'Pandas' },
  { src: 'https://cdn.simpleicons.org/numpy', alt: 'NumPy' },
  { src: 'https://cdn.simpleicons.org/seaborn', alt: 'Seaborn' },
  { src: 'https://cdn.simpleicons.org/matplotlib', alt: 'Matplotlib' },
  { src: 'https://cdn.simpleicons.org/scikitlearn', alt: 'Scikit-learn' },
  { src: 'https://cdn.simpleicons.org/jupyter', alt: 'Jupyter Notebook' },
  { src: 'https://cdn.simpleicons.org/googlecolab', alt: 'Google Colab' },
  { src: 'https://cdn.simpleicons.org/git', alt: 'Git' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
]

export default function DataAnalyticsTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Libraries You'll Master in Data Analytics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {dataAnalyticsTools.map((icon, index) => (
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
              <span className="mt-2 text-sm font-medium text-gray-700 text-center">
                {icon.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
