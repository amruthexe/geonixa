'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Code,
  BookOpen,
  Database,
  FileText,
  Cpu,
  Layers,
  Shield,
  Server,
  Network,
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
    title: '1. Introduction to Blockchain',
    topics: [
      { label: 'What is Blockchain?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Use Cases & Architecture', icon: <Network className="w-4 h-4" /> },
      { label: 'Public vs Private Chains', icon: <Shield className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Ethereum & Smart Contracts',
    topics: [
      { label: 'Intro to Ethereum', icon: <Database className="w-4 h-4" /> },
      { label: 'Solidity Language Basics', icon: <Code className="w-4 h-4" /> },
      { label: 'Deploying Smart Contracts', icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Web3 & Frontend Integration',
    topics: [
      { label: 'What is Web3?', icon: <Network className="w-4 h-4" /> },
      { label: 'Using Metamask & Wallets', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Connecting Contracts to UI', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. NFT Development',
    topics: [
      { label: 'NFT Standards (ERC-721, 1155)', icon: <Layers className="w-4 h-4" /> },
      { label: 'Minting & Selling NFTs', icon: <FileText className="w-4 h-4" /> },
      { label: 'Real NFT Project', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Decentralized Applications (dApps)',
    topics: [
      { label: 'dApp Architecture', icon: <Cpu className="w-4 h-4" /> },
      { label: 'IPFS & Decentralized Storage', icon: <Database className="w-4 h-4" /> },
      { label: 'Building & Hosting dApps', icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Capstone Project + Certification',
    topics: [
      { label: 'Build & Showcase Your dApp', icon: <Code className="w-4 h-4" /> },
      { label: 'Final Review + Deployment', icon: <FileText className="w-4 h-4" /> },
      { label: 'Certification & Career Support', icon: <Shield className="w-4 h-4" /> },
    ],
  },
]

export default function BlockchainDevelopmentSyllabus() {
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
