'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Users,
  BadgeCheck,
  Calendar,
  Laptop2,
  Sparkles,
  BrainCircuit
} from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
  icon: JSX.Element
}

const faqList: FAQItem[] = [
  {
    question: "How will this course help me advance my career in data analytics?",
    answer:
      "This course equips you with practical analytics skills, exposure to real-world datasets, and tools like Excel, SQL, and Python that are in high demand across industries.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    question: "Who should enroll in this program?",
    answer:
      "The course is ideal for beginners, early professionals, or anyone looking to switch to a career in data analytics.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    question: "What are the key skills I will learn in this course?",
    answer:
      "You’ll learn Excel, SQL, Python, data visualization, and foundational statistics for data analysis.",
    icon: <BadgeCheck className="w-5 h-5" />,
  },
  {
    question: "How long is the program, and what is the weekly commitment?",
    answer:
      "The program typically spans 8–12 weeks and requires about 8–10 hours of learning per week.",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    question: "What tools and technologies will be covered in this course?",
    answer:
      "The course covers Excel, SQL, Power BI, Python, Pandas, and Jupyter Notebooks.",
    icon: <Laptop2 className="w-5 h-5" />,
  },
  {
    question: "How does Generative AI enhance data analysis?",
    answer:
      "Generative AI tools help automate insight generation, support data storytelling, and augment traditional analysis workflows.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    question: "Do I need prior experience in AI or coding to enroll?",
    answer:
      "No prior experience is required. The course starts from the basics and gradually builds up.",
    icon: <BrainCircuit className="w-5 h-5" />,
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions <span className="text-red-500">FAQs</span>
        </h2>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-4 flex items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-md">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-muted-foreground">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
