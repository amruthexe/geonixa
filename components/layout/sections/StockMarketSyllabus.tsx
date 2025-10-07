'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Cpu,
  BarChart2,
  FileText,
  Database,
  DollarSign,
  Briefcase,
} from 'lucide-react';

type SyllabusItem = {
  title: string;
  topics?: {
    label: string;
    icon: JSX.Element;
  }[];
};

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to Stock Market',
    topics: [
      { label: 'What is the Stock Market?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Stock Market Terminology', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Types of Stock Markets', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Understanding Stocks and Bonds',
    topics: [
      { label: 'What are Stocks?', icon: <Database className="w-4 h-4" /> },
      { label: 'Stock Valuation Methods', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Introduction to Bonds', icon: <Briefcase className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Technical Analysis',
    topics: [
      { label: 'Charts and Trends', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Candlestick Patterns', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Support and Resistance', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Fundamental Analysis',
    topics: [
      { label: 'Financial Statements Analysis', icon: <Database className="w-4 h-4" /> },
      { label: 'Earnings Reports and Ratios', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Economic Indicators', icon: <Briefcase className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Stock Market Investment Strategies',
    topics: [
      { label: 'Value vs Growth Investing', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Risk Management Strategies', icon: <FileText className="w-4 h-4" /> },
      { label: 'Dividend Investing', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Trading Psychology & Risk Management',
    topics: [
      { label: 'Psychology of Trading', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Managing Emotions in Trading', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Stop-Loss and Take-Profit', icon: <Briefcase className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Portfolio Management',
    topics: [
      { label: 'Building a Diversified Portfolio', icon: <Database className="w-4 h-4" /> },
      { label: 'Rebalancing and Performance Tracking', icon: <DollarSign className="w-4 h-4" /> },
      { label: 'Investment Funds and ETFs', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Advanced Stock Market Techniques',
    topics: [
      { label: 'Options and Futures', icon: <FileText className="w-4 h-4" /> },
      { label: 'Short Selling and Margin Trading', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Hedging Strategies', icon: <Briefcase className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Final Project & Certification',
    topics: [
      { label: 'Stock Market Simulation', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Final Exam and Review', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <DollarSign className="w-4 h-4" /> },
    ],
  },
];

export default function StockMarketSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Stock Market Course Syllabus</h2>
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
  );
}
