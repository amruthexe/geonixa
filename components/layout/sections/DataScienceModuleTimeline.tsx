'use client';

import { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const modules = [
  {
    id: 1,
    title: 'Python & Programming Foundations',
    module: 'Module 1',
    description:
      'Start with Python basics, control flow, and key programming fundamentals essential for Data Science.',
    topics: [
      'Installing Python & IDEs',
      'Variables, Data Types, Control Flow',
      'Functions & File Handling',
    ],
    skills: ['Python syntax', 'Logic building', 'File operations'],
  },
  {
    id: 2,
    title: 'Data Handling with Pandas & NumPy',
    module: 'Module 2',
    description:
      'Work with structured data using Pandas and perform numerical operations using NumPy for real-world datasets.',
    topics: [
      'DataFrames, Series, Indexing',
      'Missing Data Handling',
      'NumPy Arrays & Broadcasting',
    ],
    skills: ['Data cleaning', 'Array manipulation', 'Data wrangling'],
  },
  {
    id: 3,
    title: 'Data Visualization & EDA',
    module: 'Module 3',
    description:
      'Visualize insights from data using Matplotlib, Seaborn, and perform Exploratory Data Analysis (EDA).',
    topics: [
      'Matplotlib & Seaborn Basics',
      'Custom Plots & Styling',
      'Correlation, Histograms, Boxplots',
    ],
    skills: ['Data interpretation', 'Plot customization', 'EDA'],
  },
  {
    id: 4,
    title: 'Introduction to Machine Learning',
    module: 'Module 4',
    description:
      'Understand the foundations of machine learning, model building, training, and evaluation using Scikit-learn.',
    topics: [
      'Supervised & Unsupervised Learning',
      'Classification & Regression',
      'Model Evaluation (Confusion Matrix, Accuracy, etc.)',
    ],
    skills: ['ML concepts', 'Model training', 'Evaluation metrics'],
  },
  {
    id: 5,
    title: 'SQL & Databases for Data Science',
    module: 'Module 5',
    description:
      'Query databases using SQL, manage large datasets and connect Python to SQL engines.',
    topics: [
      'Basic to Advanced SQL',
      'Joins, Aggregates, Subqueries',
      'Python-SQL Integration',
    ],
    skills: ['SQL proficiency', 'Relational data handling', 'Python-DB linkage'],
  },
  {
    id: 6,
    title: 'Capstone Project & Career Prep',
    module: 'Module 6',
    description:
      'Build and present a complete data science project. Learn Git, resume optimization, and career readiness.',
    topics: [
      'GitHub Portfolio',
      'Resume & LinkedIn Review',
      'Capstone Presentation + Certification',
    ],
    skills: ['Project development', 'Git & version control', 'Job readiness'],
  },
];

export default function DataScienceModuleTimeline() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedModule(prev => (prev === id ? null : id));
  };

  const handleDownload = () => {
    window.open('/data-science-brochure.pdf', '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-[42px] bottom-[100px] w-[1px] border-l border-dashed border-gray-300 z-0" />

          {/* Modules */}
          <div className="space-y-4 relative z-10">
            {modules.map((module) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-[1.625rem] w-[20px] h-[20px] rounded-full border-4 border-white bg-indigo-600 shadow z-10" />

                <div className="ml-12 sm:ml-10">
                  <motion.div
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                    layout
                  >
                    <div
                      className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4"
                      onClick={() => handleToggle(module.id)}
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
                        animate={{ rotate: expandedModule === module.id ? 180 : 0 }}
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
                                <h3 className="font-semibold mb-4">Topics covered</h3>
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
                                      <span className="text-gray-600 text-sm">{topic}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="font-semibold mb-4">Skills acquired</h3>
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

          {/* CTA: Download Button */}
          <div className="mt-10 flex justify-center">
            <Button
              onClick={handleDownload}
              className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2 px-6 py-3 text-sm sm:text-base"
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
