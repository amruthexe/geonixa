'use client';

import { Lightbulb, PenTool, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Ideation',
    description: 'We help you finalize a trending topic and prepare a solid project abstract.',
    icon: Lightbulb,
  },
  {
    id: '02',
    name: 'Design',
    description: 'Architecture diagrams, UML diagrams, and Database schema.',
    icon: PenTool,
  },
  {
    id: '03',
    name: 'Development',
    description: 'Writing robust code (Frontend + Backend + Algorithms) from scratch.',
    icon: Code,
  },
  {
    id: '04',
    name: 'Testing',
    description: 'Rigorous testing, debugging, and performance analysis.',
    icon: TestTube,
  },
  {
    id: '05',
    name: 'Deployment',
    description: 'Hosting the app live and preparing the final dissertation report.',
    icon: Rocket,
  },
];

export default function ProjectWorkflow() {
  return (
    <section id="workflow" className="relative isolate overflow-hidden bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Execution Flow</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    A systematic roadmap from idea to specialized execution.
                </p>
            </div>
            
            <div className="mx-auto mt-20">
                <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-5">
                     
                     {/* Timeline Bar (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gray-200 rounded-full"></div>

                    {steps.map((step, idx) => (
                        <div key={step.name} className="relative flex flex-col items-center text-center group">
                            
                            {/* Icon Circle */}
                            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-gray-200 group-hover:border-[#eb4917] group-hover:scale-110 transition-all duration-300 shadow-sm">
                                <step.icon className="h-7 w-7 text-gray-400 group-hover:text-[#eb4917] transition-colors" />
                            </div>

                            {/* Number Bubble */}
                             <div className="mt-4 mb-2 inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-gray-100 text-gray-500">
                                {step.id}
                             </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold leading-7 text-gray-900 group-hover:text-[#eb4917] transition-colors">
                                {step.name}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
