'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Terminal,
  Server,
  FileText,
  Settings,
  Cpu,
  Database,
  Cloud,
  Code,
  GitBranch,
  ShieldCheck,
  FlaskConical,
  BarChart,
} from 'lucide-react'
import { FaDocker } from 'react-icons/fa'

type SyllabusItem = {
  title: string
  topics?: {
    label: string
    icon: JSX.Element
  }[]
}

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to DevOps',
    topics: [
      { label: 'What is DevOps? Why DevOps?', icon: <Cpu className="w-4 h-4" /> },
      { label: 'SDLC vs DevOps lifecycle', icon: <FileText className="w-4 h-4" /> },
      { label: 'Roles & Skills of a DevOps Engineer', icon: <Settings className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Linux & Command Line',
    topics: [
      { label: 'Linux Basics & Shell Commands', icon: <Terminal className="w-4 h-4" /> },
      { label: 'File Systems, Permissions', icon: <Server className="w-4 h-4" /> },
      { label: 'Process Management', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Version Control with Git & GitHub',
    topics: [
      { label: 'Git Basics, Branching & Merging', icon: <GitBranch className="w-4 h-4" /> },
      { label: 'GitHub Setup & Collaboration', icon: <FileText className="w-4 h-4" /> },
      { label: 'Pull Requests, Issues, Releases', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Continuous Integration (CI) using Jenkins',
    topics: [
      { label: 'Jenkins Setup & Jobs', icon: <Settings className="w-4 h-4" /> },
      { label: 'Build Pipelines & Plugins', icon: <Server className="w-4 h-4" /> },
      { label: 'CI Flow with GitHub Integration', icon: <GitBranch className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Containerization with Docker',
    topics: [
      { label: 'Docker Basics & Architecture', icon: <FaDocker className="w-4 h-4" /> },
      { label: 'Dockerfiles, Images, Volumes', icon: <Server className="w-4 h-4" /> },
      { label: 'Docker Compose & Networking', icon: <Settings className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Orchestration with Kubernetes',
    topics: [
      { label: 'Kubernetes Concepts & YAML', icon: <Code className="w-4 h-4" /> },
      { label: 'Pods, Services, Deployments', icon: <Cloud className="w-4 h-4" /> },
      { label: 'K8s Dashboard, Auto-scaling', icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Monitoring, Logging & Security',
    topics: [
      { label: 'Prometheus & Grafana Basics', icon: <BarChart className="w-4 h-4" /> },
      { label: 'Log Management (ELK Stack)', icon: <Database className="w-4 h-4" /> },
      { label: 'DevSecOps & Best Practices', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. DevOps Capstone Project & Certification',
    topics: [
      { label: 'CI/CD Pipeline Implementation', icon: <Code className="w-4 h-4" /> },
      { label: 'Deploy to Cloud with Docker + K8s', icon: <Cloud className="w-4 h-4" /> },
      { label: 'Certification & Job Prep', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function DevOpsSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">DevOps Syllabus</h2>
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
