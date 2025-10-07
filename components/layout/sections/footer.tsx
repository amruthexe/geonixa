'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebookF, FaGithub } from "react-icons/fa";

// Data for route list, service list, and program list
const routeList = [
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/about-us", label: "About us" },
];
const routeLists = [
  { href: "/support", label: "Support" },
  { href: "/privacy-policy", label: "Privacy Policy" },  // Added Privacy Policy
  { href: "/refund-policy", label: "Refund Policy" },    // Added Refund Policy
];

const serviceList = [
  { title: "Web Development", href: "/web", icon: "Code" },
  { title: "App Development", href: "/app-dev", icon: "Smartphone" },
  { title: "Cloud Computing", href: "/cloud-comp", icon: "Cloud" },
  { title: "Cyber Security", href: "/cyber-security", icon: "ShieldCheck" },
  { title: "Data Science", href: "/data-science", icon: "Brain" },
  { title: "Full Stack Web Dev", href: "/full-stack", icon: "Layers" },
  { title: "Python Programming", href: "/python", icon: "FileCode" },
];

const programList = [
  { title: "All programs", href: "/programs", icon: "GraduationCap" },
  { title: "Fast Track 45", href: "/programs/fast-track", icon: "GraduationCap" },
  { title: "Skill Boost 2", href: "/programs/skill-boost", icon: "GraduationCap" },
  { title: "Pro Edge 3", href: "/programs/pro-edge", icon: "GraduationCap" },
  { title: "Dual Path 5", href: "/programs/dual-pack", icon: "GraduationCap" },
  { title: "Career Pro 6", href: "/programs/career-pro", icon: "GraduationCap" },
  { title: "Campus+ LearnTrack", href: "/programs/campus-plus", icon: "GraduationCap" },
  { title: "Campus+ ProjectPro", href: "/programs/campus-project-pro", icon: "GraduationCap" },
  { title: "Campus+ CodeStart", href: "/programs/campus-code-start", icon: "GraduationCap" },
];

const Footer = () => {
  return (
    <footer className="w-full py-10 relative">
      <Container>
        <Wrapper className="relative flex flex-col md:flex-row justify-between pb-4 overflow-hidden footer">
          <div className="flex flex-col items-start max-w-48">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium">GeoNixa</span>
            </div>
            <p className="text-base max-w mt-4">
              We are an edtech startup helping students excel in their careers.
            </p>
            <Button className="mt-8">
              <Link href="/app">Start for free</Link>
            </Button>
          </div>

          {/* Route Links Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-4 w-full">
                {routeList.map((route, index) => (
                  <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                    <Link href={route.href} className="w-full">{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links Section */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-4 w-full">
                {serviceList.map((service, index) => (
                  <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                    <Link href={service.href} className="w-full">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Links Section */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-medium">Programs</h4>
              <ul className="space-y-4 w-full">
                {programList.map((program, index) => (
                  <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                    <Link href={program.href} className="w-full">{program.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-medium">Other</h4>
              <ul className="space-y-4 w-full">
                {routeLists.map((route, index) => (
                  <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                    <Link href={route.href} className="w-full">{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Wrapper>
      </Container>

      {/* Bottom Socials */}
     <Container>
  <Wrapper className="pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
    <p className="text-sm text-secondary-foreground">
      &copy; {new Date().getFullYear()} GeoNixa All rights reserved.
    </p>
   
    <div className="flex justify-center sm:justify-end items-center gap-4">
      <Link href="https://www.linkedin.com" target="_blank" className="p-1">
        <FaLinkedin className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
      </Link>
      <Link href="https://www.instagram.com" target="_blank" className="p-1">
        <FaInstagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
      </Link>
      <Link href="https://wa.me/919999999999" target="_blank" className="p-1">
        <FaWhatsapp className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" className="p-1">
        <FaFacebookF className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
      </Link>
      <Link href="https://github.com" target="_blank" className="p-1">
        <FaGithub className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
      </Link>
    </div>
  </Wrapper>
</Container>

    </footer>
  );
};

export default Footer;
