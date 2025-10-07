"use client";

import React from "react";
import { ArrowBigDown, Globe} from "lucide-react"; // Icons for job roles
import Link from "next/link"; // Import the Link component from Next.js
import { Briefcase, Code, Laptop, Megaphone, Users } from 'lucide-react'


export default function JobsPage() {
   const jobOpenings = [
    {
      title: 'App Developer (React)',
      icon: <Laptop className="h-6 w-6 text-red-500" />,
      description:
        "As an App Developer (React), you'll build dynamic web apps with React.js, ensuring they are scalable, high-performance, and user-friendly. You'll collaborate closely with our design team to create seamless UIs.",
      responsibilities: [
        'Develop dynamic and interactive web apps using React.js.',
        'Collaborate with the design team for seamless UI/UX.',
        'Ensure responsive design and cross-browser compatibility.',
        'Participate in code reviews and contribute to continuous improvements.',
        'Optimize applications for maximum performance.',
      ],
    },
    {
      title: 'PHP Developer',
      icon: <Code className="h-6 w-6 text-green-500" />,
      description:
        "As a PHP Developer, you'll be responsible for developing robust, scalable web applications using PHP. Your focus will be on optimizing performance and building secure, efficient solutions.",
      responsibilities: [
        'Write clean, scalable, and efficient PHP code.',
        'Collaborate with frontend developers to integrate user-facing elements.',
        'Troubleshoot, test, and maintain core product software and databases.',
        'Optimize applications for maximum speed and scalability.',
        'Ensure secure and reliable integration with third-party tools.',
      ],
    },
    {
      title: 'Web Developer',
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      description:
        "As a Web Developer, you'll work on creating responsive websites using modern technologies like HTML, CSS, JavaScript, and Bootstrap. Your work will be focused on providing high-quality user experiences and ensuring the sites are SEO-friendly.",
      responsibilities: [
        'Create responsive, SEO-friendly websites.',
        'Work with HTML, CSS, JavaScript, and other frontend technologies.',
        'Test and debug websites to ensure optimum performance.',
        'Collaborate with backend developers for API integrations.',
        'Ensure proper SEO practices for websites to rank higher on search engines.',
      ],
    },
    {
      title: 'Digital Marketing Executive',
      icon: <Megaphone className="h-6 w-6 text-yellow-500" />,
      description:
        "As a Digital Marketing Executive, you’ll plan and execute result-driven digital campaigns, optimise content, and measure performance across channels to improve engagement and conversion.",
      responsibilities: [
        'Manage Google Ads, Meta Ads, and SEO efforts.',
        'Develop engaging social media content and creatives.',
        'Use analytics to track performance and optimise results.',
        'Collaborate with content creators and designers.',
        'Run email marketing and automation workflows.',
      ],
    },
    {
      title: 'HR Executive',
      icon: <Users className="h-6 w-6 text-purple-500" />,
      description:
        "As an HR Executive, you'll oversee recruitment, onboarding, and employee engagement programs, while supporting a positive workplace culture and ensuring compliance with HR policies.",
      responsibilities: [
        'Handle end-to-end recruitment and onboarding.',
        'Maintain HR databases, records, and documentation.',
        'Conduct employee engagement and feedback sessions.',
        'Support payroll and leave management processes.',
        'Ensure adherence to HR policies and labor laws.',
      ],
    },{
      title: 'Next.js Developer',
      icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
      description:
        "As a Next.js Developer, you'll be responsible for building server-side rendered web applications and static websites using Next.js. You'll work closely with designers and backend developers to deliver scalable and SEO-optimized solutions.",
      responsibilities: [
        'Build high-performance web apps using Next.js and React.',
        'Implement server-side rendering (SSR) and static site generation (SSG).',
        'Collaborate with UI/UX designers to create modern interfaces.',
        'Integrate REST APIs or GraphQL services for dynamic content.',
        'Write clean, reusable code and participate in code reviews.',
      ],
    }
  ]

  return (
    <section id="career" className="bg-white dark:bg-background text-black dark:text-white  ">
      <div className="container mx-auto px-4 py-8">
        
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Join Our Team  🚀
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-muted/50 dark:bg-card hover:bg-background  delay-75 group/number p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                {job.icon}
                <h3 className="text-xl font-semibold">{job.title}</h3>
              </div>
              <p className="text-lx text-muted-foreground mb-4">{job.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {job.responsibilities.map((task, idx) => (
                  <li key={idx} className="list-disc ml-5">{task}</li>
                ))}
              </ul>
              <Link
                href="/carrer"
                passHref
                className="mt-4 inline-block py-2 px-6 bg-black text-white rounded-lg text-center w-full hover:bg-red-600 transition"
              >
                Apply Below <ArrowBigDown className="inline"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
