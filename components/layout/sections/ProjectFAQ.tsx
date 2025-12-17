'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide the complete source code?",
    answer: "Yes, you get the full source code (Frontend + Backend + Database scripts) along with a setup guide."
  },
  {
    question: "Will you help me install the project on my laptop?",
    answer: "Absolutely. Our technical team will connect via AnyDesk/Zoom to install the required software (VS Code, Python, Node.js, etc.) and run the project on your machine."
  },
  {
    question: "Do you provide the synopsis and project report?",
    answer: "Yes, we provide a complete documentation package including the Synopsis, SRS (Software Requirements Specification), System Design Diagrams, and the Final Dissertation Report as per university standards."
  },
  {
    question: "What if my guide asks for changes?",
    answer: "We support unlimited minor modifications. If your internal guide suggests changes to the UI or flow, we will implement them for you."
  },
  {
    question: "Can I get a demo before paying?",
    answer: "Yes, we can show you a working demo of similar projects we have built. For custom ideas, we share the architecture design before starting development."
  },
  {
    question: "What technologies do you support?",
    answer: "We specialize in Python (Django/Flask), MERN Stack (React/Node), Java, Android (Flutter/Kotlin/Java), IoT (Arduino/Raspberry Pi), and MATLAB."
  }
];

export default function ProjectFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="pt-6">
              <dt>
                <button
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                  className="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span className="text-base font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-[#eb4917]" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </dt>
              {openIndex === index && (
                <dd className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
