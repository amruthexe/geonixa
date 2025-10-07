'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Terminal,
  GlobeLock,
  Cpu,
  Lock,
  Bug,
  Database,
  BookOpen,
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
    title: '1. Introduction to Cyber Security',
    topics: [
      { label: 'What is Cyber Security?', icon: <ShieldCheck className="w-4 h-4" /> },
      { label: 'Threat Landscape & Common Attacks', icon: <Bug className="w-4 h-4" /> },
      { label: 'CIA Triad: Confidentiality, Integrity, Availability', icon: <Lock className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Networking & Security Fundamentals',
    topics: [
      { label: 'Network Protocols & TCP/IP', icon: <GlobeLock className="w-4 h-4" /> },
      { label: 'Firewalls, IDS/IPS', icon: <ShieldCheck className="w-4 h-4" /> },
      { label: 'Wireshark & Packet Analysis', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Linux & Command Line for Security',
    topics: [
      { label: 'Basic Linux Commands', icon: <Terminal className="w-4 h-4" /> },
      { label: 'User Management & Permissions', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Shell Scripting Basics', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Ethical Hacking & Vulnerability Assessment',
    topics: [
      { label: 'Kali Linux & Security Tools', icon: <Bug className="w-4 h-4" /> },
      { label: 'Nmap, Nessus, Metasploit', icon: <Terminal className="w-4 h-4" /> },
      { label: 'OWASP Top 10', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Web Application & Cloud Security',
    topics: [
      { label: 'SQL Injection, XSS, CSRF', icon: <Bug className="w-4 h-4" /> },
      { label: 'Secure Authentication', icon: <Lock className="w-4 h-4" /> },
      { label: 'Cloud Infrastructure Security', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Security Operations & Monitoring',
    topics: [
      { label: 'Introduction to SOC', icon: <Cpu className="w-4 h-4" /> },
      { label: 'SIEM Tools: Splunk, ELK', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Incident Response & Forensics', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Cyber Law & Compliance',
    topics: [
      { label: 'IT Act, GDPR, HIPAA Basics', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Audit & Risk Management', icon: <ShieldCheck className="w-4 h-4" /> },
      { label: 'Security Policies & Standards', icon: <Lock className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Capstone Project & Certification',
    topics: [
      { label: 'End-to-End Security Audit Project', icon: <Bug className="w-4 h-4" /> },
      { label: 'Presentation & Documentation', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Receive Certificate + Placement Help', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
]

export default function CyberSecuritySyllabus() {
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
