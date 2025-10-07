'use client'

import { motion } from 'framer-motion'

const sqlToolsIcons = [
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/postgresql', alt: 'PostgreSQL' },
  { src: 'https://cdn.simpleicons.org/sqlite', alt: 'SQLite' },
  { src: 'https://cdn.simpleicons.org/sqlserver', alt: 'SQL Server' },
  { src: 'https://cdn.simpleicons.org/oracle', alt: 'Oracle' },
  { src: 'https://cdn.simpleicons.org/redis', alt: 'Redis' },
  { src: 'https://cdn.simpleicons.org/mongodb', alt: 'MongoDB' },
  { src: 'https://cdn.simpleicons.org/vertica', alt: 'Vertica' },
  { src: 'https://cdn.simpleicons.org/amazonaws', alt: 'AWS RDS' },
  { src: 'https://cdn.simpleicons.org/googlecloud', alt: 'Google Cloud SQL' },
  { src: 'https://cdn.simpleicons.org/azuredevops', alt: 'Azure SQL' },
  { src: 'https://cdn.simpleicons.org/heroku', alt: 'Heroku Postgres' },
  { src: 'https://cdn.simpleicons.org/datadog', alt: 'Datadog' },
  { src: 'https://cdn.simpleicons.org/terraform', alt: 'Terraform' },
  { src: 'https://cdn.simpleicons.org/ansible', alt: 'Ansible' },
]

export default function SQLTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Popular SQL Tools You’ll Master
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {sqlToolsIcons.map((icon, index) => (
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
