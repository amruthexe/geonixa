"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  ChevronsDown,
  Github,
  Menu,
  Code,
  Smartphone,
  ShoppingCart,
  BarChart,
  Database,
  ArrowRight,
  PhoneCall,
  Camera,
  Cloud,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight,
  FileCode,
  Layers,
  Brain,
  Cpu,
  Link2,
  BarChart3,
  Monitor,
  Server,
  FileCode2,
  BookOpenText,
  BriefcaseBusiness,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Assuming these component imports are correct for your project setup
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  title: string;
  href: string;
  icon: React.ElementType;
  subServices?: ServiceProps[];
}

const routeList: RouteProps[] = [
  { href: "/carrers", label: "Careers" },
  { href: "/about-us", label: "About us" },
  { href: "/support", label: "Support" },
];

const serviceList: ServiceProps[] = [
  { title: "All Courses", href: "/all-courses", icon: BookOpenText },
  { title: "Full Stack Web Dev", href: "/full-stack", icon: Layers },
  { title: "Web Development", href: "/web", icon: Code },
  { title: "App Development", href: "/app-dev", icon: Smartphone },
  { title: "Python Progamming", href: "/python", icon: FileCode },
  { title: "Java Progamming", href: "/java", icon: FileCode2 },
  { title: "UI/UX", href: "/ui-ux", icon: Monitor },
  { title: "Data Science", href: "/data-science", icon: Brain },
  { title: "Data Analytics", href: "/data-analytics", icon: BarChart3 },
  { title: "Cloud Computing", href: "/cloud-comp", icon: Cloud },
  { title: "DevOps", href: "/devops", icon: Server },
  { title: "Cyber Security", href: "/cyber-security", icon: ShieldCheck },
  { title: "Block Chain", href: "/block-chain", icon: Link2 },
  { title: "Artificial Intelligence", href: "/ai", icon: Cpu },
];

const programList: ServiceProps[] = [
  { title: "All programs", href: "/programs", icon: GraduationCap },
    { title: "2 Months Course", href: "/programs/pro-edge", icon: GraduationCap },
  { title: "Full-Stack Web Development (MERN)", href: "/programs/skill-boost", icon: BriefcaseBusiness },
  { title: "Digital Marketing & Growth Strategy", href: "/programs/campus-project-pro", icon: BriefcaseBusiness },
  { title: "Cross-Platform App Developer Program", href: "/programs/campus-code-start", icon: BriefcaseBusiness },
    { title: " 15 Days Course", href: "/programs/career-pro", icon: GraduationCap },
  { title: "Skill Boost 2", href: "/programs/skill-boost", icon: GraduationCap },

  { title: "Dual Path 5", href: "/programs/dual-pack", icon: GraduationCap },
  { title: "Dual Path 5", href: "/programs/campus-plus", icon: GraduationCap },

  { title: "Campus+ ProjectPro", href: "/programs/campus-project-pro", icon: GraduationCap },
];

// --- Shared ListItem Component (Unchanged) ---
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: React.ElementType }
>(({ className, title, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground"
          href={props.href || "#"}
        >
          <div className="flex items-center gap-4">
            {/* Icon Size */}
            <Icon className="w-7 h-7 text-[#eb4917] flex-shrink-0 opacity-80" />
            <div>
              {/* Title Styling */}
              <div className="text-base font-semibold leading-none text-foreground">{title}</div>
            </div>
            <ArrowUpRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
// ---------------------------------------------


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      className="shadow-2xl backdrop-blur-md bg-white/70 max-w-7xl top-5 mx-auto sticky border border-gray-100 z-40 rounded-3xl flex justify-between items-center p-4 transition-all duration-300"
      style={{
        width: '90%', 
        maxWidth: '1280px' // Using a fixed max-width for consistency
      }}
    >
      {/* Logo (unchanged) */}
      <Link href="/" className="pl-2 font-bold text-lg flex items-center">
        <Image
          src="/geonixa.png" // Placeholder - assume this path is correct
          alt="Geo Nixa Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <div className="flex items-center space-x-2 ml-2">
          <span className="text-xl pb-1 font-extrabold tracking-wide text-[#eb4917]">
            Geo <span className="text-gray-700">Nixa</span>
          </span>
        </div>
      </Link>

      {/* ✅ Mobile Navbar (unchanged for this request) */}
     <div className="flex items-center lg:hidden">
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild>
      <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden w-6 h-6 text-gray-700" />
    </SheetTrigger>

    <SheetContent
      side="right" // Changed side to right for a modern feel
      className="flex flex-col justify-between rounded-none bg-card border-secondary max-w-sm w-full"
    >
      <div>
        <SheetHeader className="mb-6 border-b pb-4">
          <SheetTitle className="flex items-center">
            <Image
              src="/geonixa.png"
              alt="Geo Nixa Logo"
              width={40}
              height={40}
              className="rounded-md mr-2"
            />
            <Link href="/" className="flex items-center">
              <span className="text-xl pb-1 font-extrabold tracking-wide text-[#eb4917]">
                Geo <span className="text-gray-700">Nixa</span>
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* Mobile Accordion Menu */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services">
            <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-700 hover:no-underline">
              Courses
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pl-4">
              {serviceList.map(({ title, href, icon: Icon }) => (
                <Button
                  key={title}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base font-medium rounded-lg hover:bg-orange-50/50"
                >
                  <Link href={href} className="flex items-center gap-3">
                    {/* Increased Mobile Icon Size */}
                    <Icon className="w-5 h-5 text-[#eb4917] opacity-80" /> {title}
                  </Link>
                </Button>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="programs">
            <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-700 hover:no-underline">
              Programs
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pl-4">
              <ul className="flex flex-col gap-1">
                {programList.map(({ title, href, icon: Icon }) => (
                  <li key={title}>
                    <Link href={href} className="group flex justify-between items-center p-3 rounded-lg text-sm font-medium text-foreground hover:bg-orange-50/50 transition-colors" onClick={() => setIsOpen(false)}>
                      <span className="flex items-center gap-3">
                        {/* Increased Mobile Icon Size */}
                        <Icon className="w-5 h-5 text-[#eb4917] opacity-80" />
                        {title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex flex-col font-medium gap-1 mt-6 border-t pt-4">
          {routeList.map(({ href, label }) => (
            <Button
              key={href}
              onClick={() => setIsOpen(false)}
              asChild
              variant="ghost"
              className="justify-start font-medium text-base text-gray-700 hover:bg-orange-50/50"
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </div>
      </div>

      <SheetFooter className="flex-col sm:flex-col justify-start items-start pt-4">
        <div className="flex w-full space-x-2">
           <Button asChild className="flex-1 font-bold bg-[#eb4917] hover:bg-opacity-90 group/arrow">
              <Link
                href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                target="_blank"
              >
                Book a Demo
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="outline" className="text-green-500 border-green-500 hover:text-white hover:bg-green-500">
              <Link
                href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                target="_blank"
              >
                <FaWhatsapp className="size-5" />
              </Link>
            </Button>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</div>


      {/* ✅ Desktop Navigation */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="space-x-2">
          
          {/* Courses Menu (Unchanged) */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent font-semibold text-base text-gray-700 hover:bg-orange-50/50 rounded-lg">
              Courses
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[650px] grid-cols-2 gap-4 p-4">
                <ul className="flex flex-col gap-1">
                  {serviceList.slice(0, 7).map(({ title, href, icon }) => (
                    <ListItem key={title} title={title} href={href} icon={icon} />
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  {serviceList.slice(7).map(({ title, href, icon }) => (
                    <ListItem key={title} title={title} href={href} icon={icon} />
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Programs Menu (Updated to use ListItem) */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent font-semibold text-base text-gray-700 hover:bg-orange-50/50 rounded-lg">
              Programs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* Increased width to 650px and split into two columns */}
              <div className="grid w-[650px] grid-cols-2 gap-4 p-4"> 
                <ul className="flex flex-col gap-1">
                  {programList.slice(0, 5).map(({ title, href, icon }) => (
                    <ListItem key={title} title={title} href={href} icon={icon} />
                  ))}
                </ul>
                 <ul className="flex flex-col gap-1">
                  {programList.slice(5).map(({ title, href, icon }) => (
                    <ListItem key={title} title={title} href={href} icon={icon} />
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Simple Nav Links (unchanged) */}
          {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild className="px-3 py-2 font-semibold text-base text-gray-700 hover:bg-orange-50/50 rounded-lg transition-colors">
                  <Link href={href}>
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* ✅ CTAs (unchanged) */}
      <div className="hidden lg:flex items-center">
        <Button asChild className="mr-4 font-bold group/arrow text-sm px-6 py-3 bg-[#eb4917] hover:bg-opacity-90 transition-all duration-300 shadow-lg">
          <Link
            href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
            target="_blank"
          >
            Book a Demo
            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild size="icon" variant="outline" className="text-green-500 border-green-500 hover:text-white hover:bg-green-500">
          <Link
            href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
            target="_blank"
          >
            <FaWhatsapp className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};