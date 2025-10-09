"use client";
import { motion } from "framer-motion"; // Import Framer Motion
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

// --- Feature Data (Content remains relevant to EdTech) ---
interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  // New property for styling the icon background
  color: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "GraduationCap",
    title: "World-Class Instructors",
    description:
      "Learn directly from top industry experts with verifiable experience, ensuring you receive the most relevant and cutting-edge knowledge.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "Code",
    title: "Hands-On Portfolio Projects",
    description:
      "Master skills through applied learning. Every course culminates in a real-world project to build a robust portfolio for interviews.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: "Trophy",
    title: "Guaranteed Career Support",
    description:
      "From resume reviews and mock interviews to direct placement assistance, we ensure your learning translates directly into a job offer.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: "Zap",
    title: "AI-Powered Learning Paths",
    description:
      "Our smart platform dynamically adjusts lessons and quizzes, ensuring efficient learning and mastery of concepts at your optimal pace.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: "MessageSquare",
    title: "24/7 Mentor Access",
    description:
      "Get instant help with your doubts and project feedback from dedicated mentors, eliminating bottlenecks in your learning process.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: "Briefcase",
    title: "Future-Proof Skill Mastery",
    description:
      "We constantly update our curriculum to cover the emerging technologies that employers are actively hiring for right now.",
    color: "bg-pink-100 text-pink-600",
  },
];

// --- Animation Variants ---
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export const NextGenEdTechFeatures = () => { // Changed component name
  return (
    <section id="features" className="container py-16 sm:py-24">
      {/* Section Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Why We Are The Future Of Learning 🚀
        </h2>

        <h3 className="text-md sm:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We designed our platform from the ground up to solve the challenges of modern education, focusing purely on **career outcomes** and **personalized mastery**.
        </h3>
      </motion.div>

      {/* Grid Layout - Staggered 3x2 Design */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            // Staggering: Even indices (0, 2, 4) delay less, odd indices (1, 3, 5) delay more
            transition={{ delay: (i % 2 === 0 ? 0.2 : 0.4) + i * 0.05 }}
            className={`
                h-full 
                // Wavy effect: push odd cards down slightly on large screens
                lg:mt-${i % 2 !== 0 ? 8 : 0} 
            `}
          >
            <Card className="h-full border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group">
              <CardHeader className="flex flex-row items-start space-x-4 p-6">
                {/* Icon Container with unique background color */}
                <div 
                  className={`p-3 rounded-xl ${feature.color} flex-shrink-0 transition-transform group-hover:scale-110`}
                >
                  <Icon
                    name={feature.icon as keyof typeof icons}
                    size={28}
                    // FIX: Pass the required 'color' prop. 
                    // Use 'currentColor' so the color is inherited from the Tailwind class.
                    color="currentColor" 
                    
                    // Use text color from the feature.color property
                    className={feature.color.split(' ')[1]} 
                  />
                </div>
                
                {/* Title */}
                <CardTitle className="text-xl font-bold text-left pt-1">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              {/* Description */}
              <CardContent className="text-gray-600 text-left px-6 pb-6">
                {feature.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};