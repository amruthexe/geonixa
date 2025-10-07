'use client'

import { motion } from 'framer-motion'

const cloudToolsIcons = [
  // Cloud Platforms
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s', alt: 'AWS' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDJHCPEwjND1n8zRkZij43mASb-r5NFAh5A&s', alt: 'Azure' },
  { src: 'https://cdn.simpleicons.org/googlecloud', alt: 'Google Cloud' },

  // Programming & Libraries
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/pandas', alt: 'Pandas' },
  { src: 'https://cdn.simpleicons.org/numpy', alt: 'NumPy' },
  { src: 'https://cdn.simpleicons.org/scikitlearn', alt: 'Scikit-learn' },
  { src: 'https://cdn.simpleicons.org/tensorflow', alt: 'TensorFlow' },

  // Cloud Databases
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'Amazon RDS / MySQL' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2xmeWTLvbszJVYNVzB70SGBa7ns44bzP9g&s', alt: 'Azure SQL' },
  { src: 'https://cdn.simpleicons.org/postgresql', alt: 'Google Cloud SQL' },

  // Big Data Tools
  { src: 'https://cdn.simpleicons.org/apachehadoop', alt: 'AWS EMR / Hadoop' },
  { src: 'https://cdn.simpleicons.org/apachehive', alt: 'Azure HDInsight' },
  { src: 'https://cdn.simpleicons.org/googlebigquery', alt: 'Google Dataproc' },

  // Visualization
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg', alt: 'Matplotlib' },
  { src: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg', alt: 'Seaborn' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/D3js-logo.svg', alt: 'D3.js' },
  { src: 'https://avatars.githubusercontent.com/u/22112899?s=200&v=4', alt: 'Plotly' },
  { src: 'https://cdn.worldvectorlogo.com/logos/amazon-quicksight.svg', alt: 'AWS QuickSight' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1024px-New_Power_BI_Logo.svg.png', alt: 'Power BI' },
  { src: 'https://cdn.simpleicons.org/googledatastudio', alt: 'Google Data Studio' },

  // Serverless & DevOps
  { src: 'https://cdn.simpleicons.org/awslambda', alt: 'AWS Lambda' },


  { src: 'https://cdn.simpleicons.org/git', alt: 'Git' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/docker', alt: 'Docker' },
  { src: 'https://cdn.simpleicons.org/kubernetes', alt: 'Kubernetes' },
];

export default function CloudComputingTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools Covered in Cloud Computing Course
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cloudToolsIcons.map((icon, index) => (
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
