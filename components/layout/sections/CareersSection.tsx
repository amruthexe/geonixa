'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface JobOpening {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const jobs: JobOpening[] = [
  {
    title: 'App Developer (React)',
    subtitle: 'Join Our Team 🚀',
    description:
      "As an App Developer (React), you'll build dynamic web apps with React.js, ensuring they are scalable, high-performance, and user-friendly. You'll collaborate closely with our design team to create seamless UIs.",
    points: [
      'Develop dynamic and interactive web apps using React.js.',
      'Collaborate with the design team for seamless UI/UX.',
      'Ensure responsive design and cross-browser compatibility.',
      'Participate in code reviews and contribute to continuous improvements.',
      'Optimize applications for maximum performance.',
    ],
  },
  {
    title: 'PHP Developer',
    subtitle: '',
    description:
      "As a PHP Developer, you'll be responsible for developing robust, scalable web applications using PHP. Your focus will be on optimizing performance and building secure, efficient solutions.",
    points: [
      'Write clean, scalable, and efficient PHP code.',
      'Collaborate with frontend developers to integrate user-facing elements.',
      'Troubleshoot, test, and maintain core product software and databases.',
      'Optimize applications for maximum speed and scalability.',
      'Ensure secure and reliable integration with third-party tools.',
    ],
  },
  {
    title: 'Web Developer',
    subtitle: '',
    description:
      "As a Web Developer, you'll work on creating responsive websites using modern technologies like HTML, CSS, JavaScript, and Bootstrap. Your work will be focused on providing high-quality user experiences and ensuring the sites are SEO-friendly.",
    points: [
      'Create responsive, SEO-friendly websites.',
      'Work with HTML, CSS, JavaScript, and other frontend technologies.',
      'Test and debug websites to ensure optimum performance.',
      'Collaborate with backend developers for API integrations.',
      'Ensure proper SEO practices for websites to rank higher on search engines.',
    ],
  },
  {
    title: 'Digital Marketing Executive',
    subtitle: '',
    description:
      "As a Digital Marketing Executive, you’ll plan and execute result-driven digital campaigns, optimise content, and measure performance across channels to improve engagement and conversion.",
    points: [
      'Manage Google Ads, Meta Ads, and SEO efforts.',
      'Develop engaging social media content and creatives.',
      'Use analytics to track performance and optimise results.',
      'Collaborate with content creators and designers.',
      'Run email marketing and automation workflows.',
    ],
  },
  {
    title: 'HR Executive',
    subtitle: '',
    description:
      "As an HR Executive, you'll oversee recruitment, onboarding, and employee engagement programs, while supporting a positive workplace culture and ensuring compliance with HR policies.",
    points: [
      'Handle end-to-end recruitment and onboarding.',
      'Maintain HR databases, records, and documentation.',
      'Conduct employee engagement and feedback sessions.',
      'Support payroll and leave management processes.',
      'Ensure adherence to HR policies and labor laws.',
    ],
  },
];

export default function CareersSection() {
  return (
    <section className="bg-background text-foreground py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">We’re Hiring</h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-xl bg-card p-6 shadow-sm"
            >
              {job.subtitle && (
                <p className="text-sm text-muted-foreground mb-1">{job.subtitle}</p>
              )}
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
              <ul className="list-disc list-inside text-sm text-foreground space-y-1 mb-6">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Button variant="default" className="rounded-full text-sm">
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
