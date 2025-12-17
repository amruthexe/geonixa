'use client';

import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Projects Delivered', value: '500+' },
  { id: 2, name: 'Success Rate', value: '100%' },
  { id: 3, name: 'Expert Mentors', value: '50+' },
  { id: 4, name: 'Technologies', value: '25+' },
];

export default function ProjectStats() {
  return (
    <div className="bg-[#eb4917] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div 
                key={stat.id} 
                className="mx-auto flex max-w-xs flex-col gap-y-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
              <dt className="text-base leading-7 text-orange-100">{stat.name}</dt>
              <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}
