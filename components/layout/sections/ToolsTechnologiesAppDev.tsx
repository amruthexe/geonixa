"use client";
import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * Small reusable card that loads an icon from a URL (devicon / other CDN)
 */
const ToolCard = ({ iconUrl, title, description }: { iconUrl: string; title: string; description: string; }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-orange-50 hover:shadow-md transition"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
      <img src={iconUrl} alt={`${title} icon`} className="w-8 h-8 object-contain" />
    </div>

    <div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{description}</p>
    </div>
  </motion.div>
);

/* Devicon base (official devicon CDN) */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

/* Extra icon sources (some logos not in devicon) */
const ICONS: Record<string, string> = {
  vscode: `${DEVICON}vscode/vscode-original.svg`,
  figma: `${DEVICON}figma/figma-original.svg`,
  github: `${DEVICON}github/github-original.svg`,
  react: `${DEVICON}react/react-original.svg`,
  expo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
  reanimated: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reach/reach-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/supabase/supabase@master/www/static/supabase-logo.png",
  mongodb: `${DEVICON}mongodb/mongodb-original.svg`,
  postman: `${DEVICON}postman/postman-original.svg`,
  sentry: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg",
  eas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg", // visual fallback for EAS
  trello: `${DEVICON}trello/trello-original.svg`,
};

export default function ToolsTechnologiesAppDev() {
  return (
    <section className={`${poppins.className} bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
          Tools & Technologies — App Development
        </h1>
        <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-700 rounded-full mb-4" />
        <p className="max-w-2xl mx-auto text-slate-600">
          Industry-standard tools and platforms mobile engineers use to build, test and ship production apps.
        </p>
      </motion.header>

      {/* Grid: Development / Native / Cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Column 1 — Editors & UI */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-5 border-b border-orange-100 pb-3">Editor & Design</h2>
          <div className="space-y-4">
            <ToolCard
              iconUrl={ICONS.vscode}
              title="VS Code"
              description="Primary code editor — extensions for RN, TypeScript, linting & debugging."
            />
            <ToolCard
              iconUrl={ICONS.figma}
              title="Figma"
              description="Design, prototype and handoff UI assets for mobile screens."
            />
            <ToolCard
              iconUrl={ICONS.react}
              title="React (React Native)"
              description="Core framework for cross-platform mobile UI and components."
            />
          </div>
        </div>

        {/* Column 2 — Native & Runtime */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-5 border-b border-orange-100 pb-3">Runtime & Native</h2>
          <div className="space-y-4">
            <ToolCard
              iconUrl={ICONS.expo}
              title="Expo"
              description="Fast iteration, Expo Go, and EAS builds for publishing to stores."
            />
            <ToolCard
              iconUrl={ICONS.reanimated}
              title="Reanimated / Moti"
              description="High-performance animations and gesture-driven micro-interactions."
            />
            <ToolCard
              iconUrl={ICONS.github}
              title="GitHub"
              description="Version control, PR flow, code reviews and CI integrations."
            />
          </div>
        </div>

        {/* Column 3 — Backend, Monitoring & CI */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-5 border-b border-orange-100 pb-3">Backend & Release</h2>
          <div className="space-y-4">
            <ToolCard
              iconUrl={ICONS.firebase}
              title="Firebase / Supabase"
              description="Auth, Realtime DB, storage & serverless functions for mobile apps."
            />
            <ToolCard
              iconUrl={ICONS.postman}
              title="Postman / Thunder Client"
              description="API design, testing and mocking for backend endpoints."
            />
            <ToolCard
              iconUrl={ICONS.sentry}
              title="Sentry / Monitoring"
              description="Crash reporting and performance monitoring for production apps."
            />
          </div>
        </div>
      </motion.div>

      {/* Secondary Grid: CI, Builds, Productivity */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
      >
        <div className="bg-white rounded-xl p-6 border border-orange-50 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Builds & CI</h3>
          <div className="grid gap-3">
            <ToolCard
              iconUrl={ICONS.eas}
              title="EAS / Fastlane"
              description="Automated builds, app signing, and release pipelines for stores."
            />
            <ToolCard
              iconUrl={ICONS.github}
              title="GitHub Actions"
              description="CI for tests, linting, builds and deployment automation."
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-orange-50 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Productivity & Collaboration</h3>
          <div className="grid gap-3">
            <ToolCard
              iconUrl={ICONS.trello}
              title="Trello / Jira"
              description="Sprint planning, tasks and release management for teams."
            />
            <ToolCard
              iconUrl={ICONS.github}
              title="Code Reviews & PRs"
              description="Collaborative workflows, protected branches and review guidelines."
            />
          </div>
        </div>
      </motion.div>

      {/* Footer / Callout */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-center mt-14 max-w-3xl mx-auto"
      >
        <p className="text-lg font-medium text-slate-800">
          Master these tools to build, ship and maintain production-grade mobile apps.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Want alternate icons (SVG inline), or prefer local assets instead of CDNs? I can update the ToolCard to accept imported SVG React components.
        </p>
      </motion.div>
    </section>
  );
}
