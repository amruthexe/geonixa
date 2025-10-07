'use client';

import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CloudComputingModuleTimeline() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: 'Cloud Foundations & Architecture',
      module: 'Module 1',
      description:
        'Get introduced to the basics of cloud computing, its models, and core architecture principles. Understand why cloud is transforming industries.',
      topics: [
        'Cloud Service Models (IaaS, PaaS, SaaS)',
        'Deployment Models (Public, Private, Hybrid)',
        'Virtualization, Containers, Serverless Concepts',
      ],
      skills: [
        'Cloud fundamentals',
        'Architecture design',
        'Cloud-native mindset',
      ],
    },
    {
      id: 2,
      title: 'Working with AWS, Azure & GCP',
      module: 'Module 2',
      description:
        'Learn to provision, configure, and manage infrastructure on the three major cloud platforms through real-world use cases.',
      topics: [
        'AWS (EC2, S3, RDS, IAM)',
        'Azure Portal, VMs, Functions, Azure SQL',
        'GCP: Compute Engine, Cloud Functions, BigQuery',
      ],
      skills: [
        'Multi-cloud deployment',
        'Resource management',
        'Access & Identity controls',
      ],
    },
    {
      id: 3,
      title: 'Cloud DevOps & Automation',
      module: 'Module 3',
      description:
        'Dive into DevOps practices with hands-on experience using Docker, CI/CD pipelines, and infrastructure as code (IaC) tools.',
      topics: [
        'CI/CD with GitHub Actions, Jenkins',
        'Docker & Kubernetes',
        'Terraform & CloudFormation (IaC)',
      ],
      skills: [
        'Automation pipelines',
        'Container orchestration',
        'IaC proficiency',
      ],
    },
    {
      id: 4,
      title: 'Monitoring, Cost, & Deployment',
      module: 'Module 4',
      description:
        'Learn about monitoring cloud services, optimizing cost, and deploying scalable applications with best practices.',
      topics: [
        'Cloud Monitoring: CloudWatch, Azure Monitor',
        'Cost Estimation & Billing Tools',
        'Deploying Full-Stack Apps using Vercel/Netlify',
      ],
      skills: [
        'Cloud monitoring',
        'Cost optimization',
        'App deployment',
      ],
    },
  ];

  const handleModuleClick = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleDownload = () => {
    window.open('/cloud-brochure.pdf', '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative">
          {/* Dotted timeline line */}
          <div className="absolute left-[11px] top-[42px] bottom-[100px] w-[1px] border-l border-dashed border-gray-300 z-0" />

          <div className="space-y-4 relative z-10">
            {modules.map((module) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-[1.625rem] w-[20px] h-[20px] rounded-full border-4 border-white bg-red-500 shadow z-10" />

                <div className="ml-12 sm:ml-10">
                  <motion.div
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                    layout
                  >
                    <div
                      className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4"
                      onClick={() => handleModuleClick(module.id)}
                    >
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                          {module.title}
                        </h2>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base">
                          {module.module}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedModule === module.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expandedModule === module.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 border-t border-gray-100 pt-4">
                            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                              {module.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                              <div>
                                <h3 className="font-semibold mb-4">
                                  Topics covered
                                </h3>
                                <ul className="space-y-3">
                                  {module.topics.map((topic, index) => (
                                    <motion.li
                                      key={index}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                      className="flex items-start gap-2"
                                    >
                                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-400" />
                                      <span className="text-gray-600 text-sm">
                                        {topic}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="font-semibold mb-4">
                                  Skills acquired
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {module.skills.map((skill, index) => (
                                    <motion.span
                                      key={index}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: index * 0.1 }}
                                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                      {skill}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <Button
              onClick={handleDownload}
              className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 px-6 py-3 text-sm sm:text-base"
            >
              <Download className="w-4 h-4" />
              Download Syllabus
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
