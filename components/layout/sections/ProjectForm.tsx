'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MessageSquare, Briefcase, Zap } from 'lucide-react';

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/project-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="project-form" className="py-24 bg-white relative overflow-hidden">
      
      {/* 🌟 Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#eb4917]/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Call to Action */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#eb4917] text-xs font-semibold uppercase tracking-wider mb-6">
                    <Zap className="w-3 h-3" />
                    Get Started Now
                </div>
                 <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-6">
                    Ready to build something <span className="text-[#eb4917]">extraordinary?</span>
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                    Fill out the form and our technical lead will get in touch with you within 24 hours to discuss your problem statement.
                </p>
                
                <div className="space-y-6">
                     <div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#eb4917]/50 transition-all cursor-pointer hover:bg-white hover:shadow-md">
                        <div className="bg-[#eb4917]/10 p-3 rounded-full text-[#eb4917] group-hover:scale-110 transition-transform"><Phone className="h-6 w-6"/></div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Call / WhatsApp</p>
                            <span className="text-gray-900 text-lg font-medium">+91 96632 16581</span>
                        </div>
                     </div>
                      <div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#eb4917]/50 transition-all cursor-pointer hover:bg-white hover:shadow-md">
                        <div className="bg-[#eb4917]/10 p-3 rounded-full text-[#eb4917] group-hover:scale-110 transition-transform"><Mail className="h-6 w-6"/></div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email Us</p>
                            <span className="text-gray-900 text-lg font-medium">contact@geonixa.com</span>
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 opacity-50 blur-lg"></div>
                <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Project Inquiry</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#eb4917] transition-colors" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#eb4917] focus:ring-1 focus:ring-[#eb4917] outline-none transition-all"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#eb4917] transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#eb4917] focus:ring-1 focus:ring-[#eb4917] outline-none transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#eb4917] transition-colors" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#eb4917] focus:ring-1 focus:ring-[#eb4917] outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Briefcase className="h-5 w-5 text-gray-400 group-focus-within:text-[#eb4917] transition-colors" />
                            </div>
                            <select
                                name="projectType"
                                required
                                value={formData.projectType}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#eb4917] focus:ring-1 focus:ring-[#eb4917] outline-none transition-all"
                            >
                                <option value="" className="">Select Project Domain</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Deep Learning">Deep Learning</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Android App">Android App</option>
                                <option value="IoT">IoT</option>
                                <option value="Blockchain">Blockchain</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="relative group">
                             <div className="absolute top-3 left-3 pointer-events-none">
                                <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-[#eb4917] transition-colors" />
                            </div>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell us about your project idea..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#eb4917] focus:ring-1 focus:ring-[#eb4917] outline-none transition-all resize-none"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full py-6 text-lg font-bold rounded-xl transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 ${
                            status === 'success' 
                            ? 'bg-green-600 hover:bg-green-700 text-white' 
                            : 'bg-[#eb4917] hover:bg-orange-600 text-white'
                        }`}
                    >
                        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Inquiry Sent Successfully!' : 'Get Free Consultation'}
                    </Button>
                    
                    {status === 'error' && (
                        <p className="text-red-500 text-center text-sm font-medium">Failed to send inquiry. Please try again.</p>
                    )}
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
