'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/google', alt: 'Google' },
  { src: 'https://cdn.simpleicons.org/facebook', alt: 'Facebook' },
  { src: 'https://cdn.simpleicons.org/instagram', alt: 'Instagram' },
  { src: 'https://cdn.simpleicons.org/twitter', alt: 'Twitter' },
  { src: 'https://cdn.simpleicons.org/linkedin', alt: 'LinkedIn' },
  { src: 'https://cdn.simpleicons.org/mailchimp', alt: 'Mailchimp' },
  { src: 'https://cdn.simpleicons.org/hootsuite', alt: 'Hootsuite' },
  { src: 'https://cdn.simpleicons.org/googleanalytics', alt: 'Google Analytics' },
  { src: 'https://cdn.simpleicons.org/semrush', alt: 'SEMrush' },
  { src: 'https://cdn.simpleicons.org/surferseo', alt: 'Surfer SEO' },
];

export default function DigitalMarketingTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in Digital Marketing
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((icon, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-md bg-white shadow-sm flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src={icon.src} alt={icon.alt} className="h-[40px] object-contain" />
              <span className="mt-2 text-sm text-gray-700">{icon.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
