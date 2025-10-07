"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Eye, LinkIcon } from "lucide-react";

const counters = [
  { icon: <Users className="w-6 h-6" />, label: "Happy Learners", value: 6000000 },
  { icon: <Eye className="w-6 h-6" />, label: "Monthly Views", value: 20000000 },
  { icon: <LinkIcon className="w-6 h-6" />, label: "New Monthly Subscribers", value: 100000 },
];

const Counter = ({ end, label, icon }: { end: number; label: string; icon: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const duration = 2000;
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center text-white">
      <div className="flex items-center justify-center gap-2 mb-1">
        {icon}
        <motion.span className="text-xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {count.toLocaleString()}+
        </motion.span>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wide">{label}</p>
    </div>
  );
};

export default function CommunityStats() {
  return (
    <section className="bg-black my-8 py-10 relative overflow-hidden">
      {/* Background curves (optional styling placeholder) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900 opacity-20 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          INDIA'S MOST LOVED CODING COMMUNITY <span className="text-red-500">❤️</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map((item, idx) => (
            <Counter key={idx} end={item.value} label={item.label} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}