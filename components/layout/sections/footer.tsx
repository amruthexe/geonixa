"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import {
  BookOpenText,
  Layers,
  Code,
  Smartphone,
  FileCode,
  FileCode2,
  Monitor,
  Brain,
  BarChart3,
  Cloud,
  Server,
  ShieldCheck,
  Link2,
  Cpu,
  GraduationCap,
  BriefcaseBusiness,
  Bot,
  Box,
  Palette,
} from "lucide-react";

// Courses List
const courseList = [
  { title: "All Courses", href: "/all-courses", icon: BookOpenText },
  { title: "Full Stack Web Dev", href: "/full-stack", icon: Layers },
  { title: "Web Development", href: "/web", icon: Code },
  { title: "App Development", href: "/app-dev", icon: Smartphone },
  { title: "Python Progamming", href: "/python", icon: FileCode },
  { title: "Java Progamming", href: "/java", icon: FileCode2 },
  { title: "UI/UX", href: "/ui-ux", icon: Monitor },
  { title: "Canva & Graphic Design", href: "/graphic-design", icon: Palette },
  { title: "Data Science", href: "/data-science", icon: Brain },
  { title: "Data Analytics", href: "/data-analytics", icon: BarChart3 },
  { title: "Cloud Computing", href: "/cloud-comp", icon: Cloud },
  { title: "DevOps", href: "/devops", icon: Server },
  { title: "Cyber Security", href: "/cyber-security", icon: ShieldCheck },
  { title: "Block Chain", href: "/block-chain", icon: Link2 },
  { title: "Artificial Intelligence", href: "/ai", icon: Cpu },
  { title: "Machine Learning", href: "/ml", icon: Bot },
  { title: "3D Learning Course", href: "/3d", icon: Box },
];

// Programs List
const programList = [
    { title: "Ambassador Program", href: "/ambassador/apply", icon: GraduationCap },
    { title: "2 Months Course", href: "/programs/pro-edge", icon: GraduationCap },
    { title: "Full-Stack Web Development (MERN)", href: "/programs/skill-boost", icon: BriefcaseBusiness },
    { title: "Digital Marketing & Growth Strategy", href: "/programs/campus-project-pro", icon: BriefcaseBusiness },
    { title: "Cross-Platform App Developer Program", href: "/programs/campus-code-start", icon: BriefcaseBusiness },
    { title: "15 Days Course", href: "/programs/career-pro", icon: GraduationCap },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return alert("Please enter a valid email.");
    }

    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Unable to subscribe right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-white border-t overflow-x-hidden">
      <Container>
        <Wrapper className="py-12 flex flex-col gap-12">
          
          {/* Top Section: Brand & Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-100 pb-12">
            
            {/* Brand */}
            <div className="flex flex-col gap-4 max-w-sm">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black tracking-tight text-[#eb4917]">GeoNixa</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We’re an edtech startup helping students learn practical skills, build projects and launch
                  careers — affordably and effectively.
                </p>
                
                {/* Socials */}
                <div className="flex items-center gap-4 mt-2">
                  {[
                    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/geonixa/" },
                    { Icon: FaInstagram, href: "https://www.instagram.com" },
                    { Icon: FaWhatsapp, href: "https://wa.me/919663216581" },
                    { Icon: FaFacebookF, href: "https://www.facebook.com" },
                    { Icon: FaGithub, href: "https://github.com" },
                  ].map(({ Icon, href }, idx) => (
                    <Link
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#eb4917] transition-transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-auto md:min-w-[360px] bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-500 mb-4">Get the latest course updates and career tips.</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#eb4917]/20 text-sm"
                    />
                    <Button 
                        type="submit" 
                        disabled={loading}
                        className="bg-[#eb4917] hover:bg-[#d73f10] text-white whitespace-nowrap"
                    >
                        {loading ? "..." : "Subscribe"}
                    </Button>
                </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Courses Column (Takes up more space) */}
            <div className="md:col-span-8">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <BookOpenText className="w-5 h-5 text-[#eb4917]" />
                    Explore Courses
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                    {courseList.map((course, idx) => (
                        <Link 
                            key={idx} 
                            href={course.href}
                            className="group flex items-center gap-2 text-sm text-gray-600 hover:text-[#eb4917] transition-colors"
                        >
                            <course.icon className="w-4 h-4 text-gray-400 group-hover:text-[#eb4917] transition-colors" />
                            <span className="truncate">{course.title}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Programs Column */}
            <div className="md:col-span-4">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#eb4917]" />
                    Our Programs
                </h3>
                 <div className="flex flex-col gap-4">
                    {programList.map((program, idx) => (
                        <Link 
                            key={idx} 
                            href={program.href}
                            className="group flex items-start gap-3 text-sm text-gray-600 hover:text-[#eb4917] transition-colors p-2 -ml-2 rounded-lg hover:bg-orange-50/50"
                        >
                            <program.icon className="w-4 h-4 text-gray-400 group-hover:text-[#eb4917] mt-0.5 shrink-0" />
                            <span className="leading-tight">{program.title}</span>
                        </Link>
                    ))}
                </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p>&copy; {year} GeoNixa. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-[#eb4917]">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#eb4917]">Terms of Service</Link>
            </div>
          </div>
          
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
