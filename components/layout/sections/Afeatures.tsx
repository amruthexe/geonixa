import { cn } from "@/lib/utils";
import {
  GraduationCap,
  BookOpenText,
  BarChart3,
  ServerCog,
  LifeBuoy,
  Megaphone,
  Headphones,
  Globe,
} from "lucide-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Interactive Learning Portals",
      description: "Custom e-learning platforms tailored for student engagement and content delivery.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Curriculum Design",
      description: "Structured syllabus support and content planning for diverse academic needs.",
      icon: <BookOpenText className="w-6 h-6" />,
    },
    {
      title: "Analytics & Insights",
      description: "Track learner progress with integrated dashboards and performance analytics.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Cloud-Based Infrastructure",
      description: "Reliable, scalable backend architecture to power your edtech startup.",
      icon: <ServerCog className="w-6 h-6" />,
    },
    {
      title: "Dedicated Support",
      description: "We provide round-the-clock technical and academic support.",
      icon: <LifeBuoy className="w-6 h-6" />,
    },
    {
      title: "EdTech Marketing Tools",
      description: "Campaigns, lead generation, and automation to help you grow.",
      icon: <Megaphone className="w-6 h-6" />,
    },
    {
      title: "Student Help Desk",
      description: "Quick and friendly assistance for your learners anytime, anywhere.",
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      title: "Global Access",
      description: "Multi-language, multi-region infrastructure to scale across borders.",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    < div className="w-full">
      <div className="text-center pt-16 mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          We Are Professional At
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10  max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border rounded-sm gap-1 m-6 dark:border-neutral-800 transition-all duration-300  ",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 ">
        {icon}
      </div>
      <div className="text-lg font-bold  relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 ">
        {description}
      </p>
    </div>
  );
};
