'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Cpu,
  Database,
  Code,
  BarChart2,
  FileText,
} from 'lucide-react';
import { IconRobot } from '@tabler/icons-react';

type SyllabusItem = {
  title: string;
  topics?: {
    label: string;
    icon: JSX.Element;
  }[];
};

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to Robotics',
    topics: [
      { label: 'What is Robotics?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'History of Robotics', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Types of Robots', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Robotics Components',
    topics: [
      { label: 'Sensors and Actuators', icon: <Code className="w-4 h-4" /> },
      { label: 'Microcontrollers and Microprocessors', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Power Systems', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Robotics Programming and Control Systems',
    topics: [
      { label: 'Introduction to Robotics Programming', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'PID Controllers and Algorithms', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Feedback Loops and Stability', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Robot Kinematics and Dynamics',
    topics: [
      { label: 'Forward and Inverse Kinematics', icon: <Code className="w-4 h-4" /> },
      { label: 'Path Planning Algorithms', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Robotic Motion and Dynamics', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Sensors and Perception',
    topics: [
      { label: 'Types of Sensors (Ultrasonic, IR, Camera)', icon: <IconRobot className="w-4 h-4" /> },
      { label: 'Sensor Fusion Techniques', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Robotics Vision Systems', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Autonomous Robots and Machine Learning',
    topics: [
      { label: 'Autonomous Navigation', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Pathfinding and SLAM', icon: <Database className="w-4 h-4" /> },
      { label: 'Machine Learning for Robotics', icon: <IconRobot className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Robotic Systems and Applications',
    topics: [
      { label: 'Industrial Robotics', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Mobile Robotics', icon: <FileText className="w-4 h-4" /> },
      { label: 'Service Robots', icon: <IconRobot className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Robotics Project & Certification',
    topics: [
      { label: 'Capstone Robotics Project', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Certification + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function RoboticsSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Robotics Course Syllabus</h2>
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
