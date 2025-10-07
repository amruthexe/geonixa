'use client';

import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CyberSecurityModuleTimeline() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: 'Foundations of Cyber Security',
      module: 'Module 1',
      description:
        'Understand the core principles of cyber security, types of cyber threats, and security frameworks followed by modern enterprises.',
      topics: [
        'Introduction to Cyber Security',
        'CIA Triad & Security Terminologies',
        'Types of Attacks and Threat Actors',
      ],
      skills: [
        'Risk awareness',
        'Cyber threat intelligence',
        'Security mindset',
      ],
    },
    {
      id: 2,
      title: 'Network & Web Security',
      module: 'Module 2',
      description:
        'Dive deep into the workings of computer networks, common vulnerabilities, and protocols used for securing communication.',
      topics: [
        'TCP/IP, DNS, DHCP basics',
        'Firewalls, IDS, IPS',
        'OWASP Top 10 & Secure Web Practices',
      ],
      skills: [
        'Network analysis',
        'Vulnerability scanning',
        'Web security',
      ],
    },
    {
      id: 3,
      title: 'Ethical Hacking & Tools',
      module: 'Module 3',
      description:
        'Hands-on introduction to penetration testing tools and environments using Kali Linux, Burp Suite, Metasploit and more.',
      topics: [
        'Kali Linux & OSINT',
        'Burp Suite & OWASP ZAP',
        'Metasploit Framework & Payloads',
      ],
      skills: [
        'Ethical hacking',
        'Tool-based scanning',
        'Payload analysis',
      ],
    },
    {
      id: 4,
      title: 'Security Operations & Incident Response',
      module: 'Module 4',
      description:
        'Explore the role of Security Operations Centers (SOC), incident response planning, SIEM tools, and post-incident actions.',
      topics: [
        'Security Information & Event Management (SIEM)',
        'Incident response lifecycle',
        'Working with Splunk & ELK',
      ],
      skills: [
        'SOC operations',
        'SIEM monitoring',
        'Forensic readiness',
      ],
    },
  ];

  const handleModuleClick = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleDownload = () => {
    window.open('/cybersecurity-brochure.pdf', '_blank');
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
