'use client';

import { CheckCircle, FileText, MonitorPlay, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MonitorPlay,
    title: 'Complete Source Code',
    description: 'Get bug-free, well-commented source code that runs on the first compilation. No syntax errors, guaranteed.',
  },
  {
    icon: FileText,
    title: 'Dissertation & Documentation',
    description: 'We provide IEEE base papers, synopsis, SRS, system design diagrams (UML/DFD), and the final dissertation report.',
  },
  {
    icon: UserCheck,
    title: '1-on-1 Viva Mentorship',
    description: 'Dedicated sessions to explain the project architecture and code flow so you can answer any question during your viva.',
  },
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description: 'Running out of time? We have express delivery options to get your project ready in as little as 3 days.',
  },
  {
    icon: ShieldCheck,
    title: 'Plagiarism Free',
    description: '100% unique code and content. We ensure your project passes all plagiarism checks (Turnitin/Copyleaks).',
  },
  {
    icon: CheckCircle,
    title: 'Post-Delivery Support',
    description: 'We don\u2019t just send files. We set up the project on your laptop and ensure it works perfectly in your environment.',
  },
];

export default function ProjectFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#eb4917]">Everything You Need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            More Than Just Source Code
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A final year project is not just about the code. It's about the report, the presentation, and the understanding. We cover it all.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.title} 
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="rounded-lg bg-orange-50 p-2 ring-1 ring-orange-100 mb-4">
                  <feature.icon className="h-6 w-6 text-[#eb4917]" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
