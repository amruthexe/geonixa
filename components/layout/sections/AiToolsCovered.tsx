'use client'

import { motion } from 'framer-motion'

const aiToolsIcons = [
  { src: "https://cdn.simpleicons.org/tensorflow", alt: "TensorFlow" },
  { src: "https://cdn.simpleicons.org/keras", alt: "Keras" },
  { src: "https://cdn.simpleicons.org/scikitlearn", alt: "Scikit-learn" },
  { src: "https://cdn.simpleicons.org/pytorch", alt: "PyTorch" },
  { src: "https://cdn.simpleicons.org/pandas", alt: "pandas" },
  { src: "https://cdn.simpleicons.org/numpy", alt: "NumPy" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3G0vbX2YRfUGbSAjdnr80irxYceyKacZBmg&s", alt: "NLTK" },
  { src: "https://cdn.simpleicons.org/opencv", alt: "OpenCV" },
  { src: "https://cdn.simpleicons.org/jupyter", alt: "Jupyter Notebooks" },
  { src: "https://cdn.simpleicons.org/googlecolab", alt: "Google Colab" },
  { src: "https://cdn.simpleicons.org/flask", alt: "Flask" },
  { src: "https://cdn.simpleicons.org/django", alt: "Django" },
  { src: "https://cdn.simpleicons.org/git", alt: "Git" },
  { src: "https://cdn.simpleicons.org/github", alt: "GitHub" },
];

export default function AiToolsCovered() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools Covered in AI & ML Course
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {aiToolsIcons.map((icon, index) => (
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
