'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Cloud,
  Terminal,
  Database,
  Settings,
  Layers,
  Lock,
  Cpu,
  BookOpen,
  ShieldCheck,
} from 'lucide-react'

type SyllabusItem = {
  title: string
  topics?: {
    label: string
    icon: JSX.Element
  }[]
}

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to Cloud Computing',
    topics: [
      { label: 'What is Cloud Computing?', icon: <Cloud className="w-4 h-4" /> },
      { label: 'IaaS, PaaS, SaaS Models', icon: <Layers className="w-4 h-4" /> },
      { label: 'Cloud Deployment Models', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Amazon Web Services (AWS)',
    topics: [
      { label: 'EC2, S3, IAM, VPC', icon: <Cloud className="w-4 h-4" /> },
      { label: 'RDS, Lambda, CloudWatch', icon: <Database className="w-4 h-4" /> },
      { label: 'Hands-on AWS Console', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Microsoft Azure & GCP Basics',
    topics: [
      { label: 'Azure Portal & VM Setup', icon: <Cloud className="w-4 h-4" /> },
      { label: 'Google Cloud Storage & Compute', icon: <Database className="w-4 h-4" /> },
      { label: 'Cloud CLI Tools & Practice', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. DevOps & CI/CD Integration',
    topics: [
      { label: 'Docker & Containerization', icon: <Settings className="w-4 h-4" /> },
      { label: 'Jenkins & CI/CD Pipelines', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Terraform & Infrastructure as Code', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Cloud Networking & Security',
    topics: [
      { label: 'Firewalls, Subnets & Route Tables', icon: <Cloud className="w-4 h-4" /> },
      { label: 'IAM, Policies & Roles', icon: <Lock className="w-4 h-4" /> },
      { label: 'DDoS Protection & Security Groups', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Monitoring & Cost Optimization',
    topics: [
      { label: 'CloudWatch, Azure Monitor, GCP Ops', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Logging, Alerts & Health Checks', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Cost Estimation & Billing Tools', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Cloud Migration & Real-World Projects',
    topics: [
      { label: 'Cloud Migration Strategies', icon: <Cloud className="w-4 h-4" /> },
      { label: 'Lift-and-Shift vs Refactor Approaches', icon: <Layers className="w-4 h-4" /> },
      { label: 'Multi-Cloud & Hybrid Deployments', icon: <Settings className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Capstone Project & Certification Prep',
    topics: [
      { label: 'End-to-End Cloud Architecture Project', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Documentation & Presentation', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'AWS/Azure/GCP Exam Guidance', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
]

export default function CloudComputingSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Syllabus</h2>
        <div className="space-y-2">
          {syllabusData.map((item, index) => (
            <div
              key={index}
              className="rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-base font-medium"
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && item.topics && (
                <div className="px-6 pb-4 space-y-2">
                  {item.topics.map((topic, tIndex) => (
                    <div
                      key={tIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      {topic.icon}
                      {topic.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
