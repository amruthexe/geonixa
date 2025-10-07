"use client";

import { useState, useEffect } from "react";

interface StatsProps {
  number: number;
  label: string;
}

const statsData: StatsProps[] = [
  { number: 15, label: "Years on market" },
  { number: 400, label: "People on board" },
  { number: 2500, label: "Projects delivered" },
  { number: 73, label: "Our current NPS score" },
];

export const WhyTrisetSolutionsSection = () => {
  return (
    <section id="why-triset-solutions" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-red-700 dark:text-red-700">
            Why Triset Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We speed up AI adoption and ramp up engineering and design teams to help you lead your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {statsData.map(({ number, label }) => (
            <StatCard key={label} number={number} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: StatsProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration for the number to increment (in ms)
    const increment = Math.ceil(number / (duration / 100)); // Calculate the increment per interval
    let interval: NodeJS.Timeout;

    if (currentValue < number) {
      interval = setInterval(() => {
        setCurrentValue((prev) => Math.min(prev + increment, number));
      }, 100);
    } else {
      setCurrentValue(number);
    }

    return () => clearInterval(interval);
  }, [currentValue, number]);

  return (
    <div className="relative p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white dark:bg-card ">
      <div className="flex items-center justify-center space-x-4">
        <span className="text-5xl font-semibold text-red-700 dark:text-red-700">
          {currentValue}
        </span>
        <span className="text-xl font-medium text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};
