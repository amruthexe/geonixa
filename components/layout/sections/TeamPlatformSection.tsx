"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// --- UPDATED Card Data for EdTech Startup ---
const cards = [
  {
    title: "Skills that guarantee career success",
    desc: "Measure the direct return on educational investment by tracking skill mastery, portfolio completion, and industry job placement rates.",
    img: "https://cdn.sanity.io/images/6y1mknvo/prod-20240319/beaedc5fb11dd65283a4ee17360ffb44433a3a7e-1248x576.webp?w=840&q=75&fit=clip&auto=format",
    bg: "bg-[#F6F5FF]",
    layout: "full",
  },
  {
    title: "Project-based, real-world learning",
    desc: "Students build job-ready portfolios by completing industry-standard projects, guided by mentors and tailored to their career path.",
    img: "https://cdn.sanity.io/images/6y1mknvo/prod-20240319/0d7766b9bf9c5d04a0f3d7c53cc42467fc3e4b3a-1248x764.png?w=840&q=75&fit=clip&auto=format",
    bg: "bg-[#ECEBFF]",
    layout: "full",
  },
  {
    title: "Personalized AI and human mentorship",
    desc: "An ecosystem of human mentors and AI teaching assistants provides 24/7 personalized feedback and guidance throughout the student's learning journey.",
    img: "https://cdn.sanity.io/images/6y1mknvo/prod-20240319/dcf4c9d28a21105e9e08f77cc979f64c3f894c01-1248x698.webp?w=840&q=75&fit=clip&auto=format",
    bg: "bg-[#EAFBE3]", // Light green
    layout: "full",
  },
  {
    title: "Launch a high-value career",
    desc: "Every student gains equitable access to premium courses, one-on-one career coaching, and connections to top companies for immediate opportunity.",
    img: "https://cdn.sanity.io/images/6y1mknvo/prod-20240319/d5d115338a88bc4970f9f4c55af633b201befa8b-1248x764.png?w=840&q=75&fit=clip&auto=format",
    bg: "bg-[#F7F7F7]",
    layout: "full",
  },
];

// --- Animation Variants (Kept the same for consistency) ---
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

export default function StudentPlatformSection() { // Renamed component for relevance
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-[#eb4917] text-center font-bold mb-4">
          One platform for your education and career 🎓
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            // Framer Motion Animation Props
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
            transition={{ delay: i * 0.1 }}
            className={`
              ${card.bg} 
              rounded-2xl p-6 
              flex flex-col 
              hover:shadow-xl transition-shadow duration-300 ease-in-out 
              ${card.title.includes('Personalized') ? 'md:col-start-1' : ''} 
              h-auto min-h-[300px]
            `}
          >
            {/* Card Content */}
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-[#eb4917]  mb-3">
                {card.title}
              </h3>
              <p className="text-black text-sm  sm:text-base mb-4">
                {card.desc}
              </p>
            </div>

            {/* Card Image/Visual */}
            <div
              className={`
                relative w-full rounded-xl overflow-hidden mt-4 
                ${i === 0 || i === 2 ? "h-60" : "h-48"}
              `}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i < 2}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}