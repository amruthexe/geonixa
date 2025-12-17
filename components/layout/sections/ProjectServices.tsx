'use client';

import {
  Brain,
  Smartphone,
  Globe,
  Database,
  ShieldCheck,
  Wifi,
  Cloud,
  Box,
  Layers,
  Server,
  Activity, 
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Machine Learning', icon: Brain, description: 'Prediction models, Analysis, NLP', color: 'text-purple-600 bg-purple-50' },
  { title: 'Deep Learning', icon: Layers, description: 'Neural Networks, CNNs, GANs', color: 'text-blue-600 bg-blue-50' },
  { title: 'Web Development', icon: Globe, description: 'Full Stack MERN, Next.js Apps', color: 'text-green-600 bg-green-50' },
  { title: 'Android Apps', icon: Smartphone, description: 'Native & Flutter Applications', color: 'text-emerald-600 bg-emerald-50' },
  { title: 'Data Science', icon: Database, description: 'Big Data, Visualizations, EDA', color: 'text-pink-600 bg-pink-50' },
  { title: 'Cyber Security', icon: ShieldCheck, description: 'Encryption, Malware Analysis', color: 'text-red-600 bg-red-50' },
  { title: 'IoT Projects', icon: Wifi, description: 'Arduino, Raspberry Pi, Sensors', color: 'text-cyan-600 bg-cyan-50' },
  { title: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure Deployments', color: 'text-sky-600 bg-sky-50' },
  { title: 'Blockchain', icon: Box, description: 'Smart Contracts, DApps', color: 'text-yellow-600 bg-yellow-50' },
  { title: 'Image Processing', icon: Activity, description: 'OpenCV, Object Detection', color: 'text-rose-600 bg-rose-50' },
  { title: 'DevOps', icon: Server, description: 'CI/CD Pipelines, Docker, Kubernetes', color: 'text-orange-600 bg-orange-50' },
  { title: 'Research Work', icon: Search, description: 'Paper writing & Publishing support', color: 'text-indigo-600 bg-indigo-50' },
];

export default function ProjectServices() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(235,73,23,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-[#eb4917]">
            Domains We Expert In
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cutting-edge technologies for your final year masterpiece.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title} 
                className="group flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="text-lg font-bold leading-7 text-gray-900 group-hover:text-[#eb4917] transition-colors">
                  {service.title}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-gray-500">
                  {service.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
