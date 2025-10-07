'use client'

import { motion } from 'framer-motion'

const devOpsToolsIcons = [
  { src: 'https://cdn.simpleicons.org/git', alt: 'Git' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/gitlab', alt: 'GitLab' },
  { src: 'https://cdn.simpleicons.org/bitbucket', alt: 'Bitbucket' },
  { src: 'https://cdn.simpleicons.org/jenkins', alt: 'Jenkins' },
  { src: 'https://cdn.simpleicons.org/docker', alt: 'Docker' },
  { src: 'https://cdn.simpleicons.org/kubernetes', alt: 'Kubernetes' },
  { src: 'https://cdn.simpleicons.org/terraform', alt: 'Terraform' },
  { src: 'https://cdn.simpleicons.org/ansible', alt: 'Ansible' },
  { src: 'https://cdn.simpleicons.org/azuredevops', alt: 'Azure DevOps' },
  { src: 'https://cdn.simpleicons.org/aws', alt: 'AWS' },
  { src: 'https://cdn.simpleicons.org/googlecloud', alt: 'Google Cloud' },
  { src: 'https://cdn.simpleicons.org/prometheus', alt: 'Prometheus' },
  { src: 'https://cdn.simpleicons.org/grafana', alt: 'Grafana' },
  { src: 'https://cdn.simpleicons.org/nginx', alt: 'NGINX' },
  { src: 'https://cdn.simpleicons.org/apachemaven', alt: 'Maven' },
  { src: 'https://cdn.simpleicons.org/selenium', alt: 'Selenium' },
  { src: 'https://cdn.simpleicons.org/elastic', alt: 'Elastic Stack' },
]

export default function DevOpsTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          DevOps Tools You’ll Master
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {devOpsToolsIcons.map((icon, index) => (
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
