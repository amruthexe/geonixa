'use client';

import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ProjectPromoHome() {
  return (
    <section className="relative overflow-hidden bg-balck py-16 sm:py-24 isolate">
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb4917]/20 border border-[#eb4917]/50 text-[#eb4917] text-sm font-bold mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>For BE, B.Tech, MCA & Diploma</span>
                </div>
                
                <h2 className="text-4xl font-black tracking-tight text-balck sm:text-5xl mb-6">
                    Final Year Projects <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4917] to-orange-400">Made Simple.</span>
                </h2>
                
                <p className="text-lg leading-8 text-black mb-8 max-w-xl">
                    Struggling with your final year project? Get complete 
                    <span className="text-black font-semibold"> Source Code, Documentation, and Viva Support </span> 
                    for ML, AI, IoT, Web, and Android domains.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button 
                        asChild
                        className="bg-[#eb4917] hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-orange-900/20"
                    >
                        <Link href="/project">
                            Explore Projects
                            <Code2 className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button 
                        asChild
                        variant="link"
                        className="text-white text-lg font-semibold hover:text-[#eb4917]"
                    >
                        <Link href="/project" className="flex items-center gap-2">
                            View 50+ Domains <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-sm">
                    <div className="rounded-xl overflow-hidden bg-neutral-950 p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                             {/* Mock Item 1 */}
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">IEEE Base Papers 2024</h4>
                                    <p className="text-sm text-gray-400">Latest research papers implementation.</p>
                                </div>
                            </div>
                            
                            {/* Mock Item 2 */}
                             <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="h-10 w-10 shrink-0 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">100% Viva Guarantee</h4>
                                    <p className="text-sm text-gray-400">We explain every line of code.</p>
                                </div>
                            </div>
                        </div>
                         {/* Stats */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between px-2">
                             <div className="text-center">
                                <div className="text-2xl font-bold text-white">500+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                             </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Mentors</div>
                             </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Success</div>
                             </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  )
}
