"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Eye, Link } from "lucide-react";

const counters = [
  { icon: <Users className="w-6 h-6 text-orange-400" />, label: "Happy Learners", value: 6000000 },
  { icon: <Eye className="w-6 h-6 text-orange-400" />, label: "Monthly Views", value: 20000000 },
  { icon: <Link className="w-6 h-6 text-orange-400" />, label: "New Monthly Subscribers", value: 100000 },
];

const Counter = ({ end, label, icon }: { end: number; label: string; icon: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const duration = 1800; // ms
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="w-full">
      <div className="bg-zinc-900/60 border border-lime-400/20 rounded-3xl p-6 flex flex-col items-center gap-2 shadow-sm">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/40">
          {icon}
        </div>
        <motion.span
          className="text-2xl md:text-3xl font-extrabold text-white"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {count.toLocaleString()}+
        </motion.span>
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-300 text-center">{label}</p>
      </div>
    </div>
  );
};

export default function CommunityStats() {
  return (
    <section className="bg-black py-10 relative overflow-hidden">
      {/* subtle background gradient (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900 opacity-20 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            INDIA'S MOST LOVED CODING COMMUNITY <span className="text-orange-400">❤️</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Join millions of learners building real projects, getting jobs, and growing careers.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {counters.map((c, i) => (
            <Counter key={i} end={c.value} label={c.label} icon={c.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
