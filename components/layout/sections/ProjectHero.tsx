'use client';

import { Rocket, Sparkles, ChevronRight, Code2, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ProjectHero() {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-20 pb-32 sm:pt-32 sm:pb-40 lg:pb-40 min-h-[90vh] flex flex-col justify-center items-center text-gray-900">
      
      {/* 🔦 Spotlight Effect (Light Mode) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(235,73,23,0.1),transparent_70%)] opacity-70 pointer-events-none"></div>
      
      {/* ✨ Floating Particles/Grid (Light Mode) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-8 shadow-sm"
        >
            <Sparkles className="w-4 h-4 text-[#eb4917]" />
            <span>Final Year Projects 2025-26</span>
            <div className="w-1 h-1 bg-orange-300 rounded-full mx-1"></div>
            <span className="text-gray-500">Registrations Open</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-gray-900 sm:text-7xl leading-[1.1] mb-8"
        >
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4917] to-orange-400">Industrial-Grade</span><br />
            Engineering Projects
        </motion.h1>

        {/* Description */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 mb-12"
        >
            Stop submitting basic templates. We help Computer Science & Engineering students architect, build, and deploy 
            <span className="text-gray-900 font-semibold"> research-level applications</span> with complete documentation and 1-on-1 mentorship.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <Button
                asChild
                className="bg-[#eb4917] hover:bg-orange-600 text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg shadow-orange-200 transition-all hover:scale-105"
            >
                <Link href="#project-form">
                    Start Your Project
                    <Rocket className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button
                asChild
                variant="outline"
                className="rounded-full px-8 py-7 text-lg font-semibold bg-white border-gray-200 text-gray-900 hover:bg-gray-50 transition-all hover:border-gray-300"
            >
                <Link href="#workflow" className="flex items-center gap-2">
                   View Roadmap
                   <ChevronRight className="w-4 h-4" />
                </Link>
            </Button>
        </motion.div>

        {/* Floating Icons / Tech Stack Visual */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-gray-100 flex justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
            {[
                { name: 'Full Stack', icon: Globe },
                { name: 'AI / ML', icon: Cpu },
                { name: 'Backend', icon: Code2 },
            ].map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                        <item.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="text-xs font-medium text-gray-500">{item.name}</span>
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  )
}
