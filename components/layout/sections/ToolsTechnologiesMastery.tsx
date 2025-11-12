"use client";
import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Component for a single tool card, now using direct Devicon SVG links
const ToolCard = ({ iconUrl , title, description }:any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start p-4 bg-orange-500 rounded-xl hover:bg-blue-700 transition duration-300"
  >
    {/* Use img tag with the provided SVG URL */}
    <div className="flex-shrink-0 mr-4 w-10 h-10">
      <img
        src={iconUrl}
        alt={`${title} Icon`}
        className="w-full h-full object-contain"
      />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-black mb-1">{title}</h3>
      <p className="text-sm text-black-200">{description}</p>
    </div>
  </motion.div>
);

// Define Devicon SVG URLs
const ICON_BASE_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const ICONS = {
  vscode: `${ICON_BASE_URL}vscode/vscode-original.svg`,
  figma: `${ICON_BASE_URL}figma/figma-original.svg`,
  github: `${ICON_BASE_URL}github/github-original.svg`,
  mongodb: `${ICON_BASE_URL}mongodb/mongodb-original.svg`,
  postman: `${ICON_BASE_URL}postman/postman-original.svg`,
  trello: `${ICON_BASE_URL}trello/trello-original.svg`,
};

// Main Component
export default function ToolsTechnologiesMastery() {
  return (
    <section
      className={`${poppins.className} bg-white text-black py-20 px-6 min-h-screen`}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-extrabold text-black mb-3 tracking-tight">
          Tools & Technologies Mastery
        </h1>
        <div className="w-20 h-1.5 bg-black rounded-full mb-4"></div>
        <p className="text-lg text-balck">
          Industry-standard tools used by professional developers
        </p>
      </motion.header>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Column 1: Development Tools */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-blue-700 pb-2">
            Development Tools
          </h2>
          <div className="space-y-6">
            <ToolCard
              iconUrl={ICONS.vscode}
              title="VS Code"
              description="Code editor for building web App"
            />
            <ToolCard
              iconUrl={ICONS.figma}
              title="Figma"
              description="UI/UX design tool for prototyping"
            />
          </div>
        </div>

        {/* Column 2: Version Control & Database */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-blue-700 pb-2">
            Version Control & Database
          </h2>
          <div className="space-y-6">
            <ToolCard
              iconUrl={ICONS.github}
              title="GitHub"
              description="Version control for code collaboration"
            />
            <ToolCard
              iconUrl={ICONS.mongodb}
              title="MongoDB Atlas"
              description="Cloud database for applications"
            />
          </div>
        </div>

        {/* Column 3: API & Collaboration */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6 border-b border-blue-700 pb-2">
            API & Collaboration
          </h2>
          <div className="space-y-6">
            <ToolCard
              iconUrl={ICONS.postman}
              title="Postman"
              description="API testing and development"
            />
            <ToolCard
              iconUrl={ICONS.trello} // Visual representation for team collaboration (Slack, Trello)
              title="Team Collaboration"
              description="Slack, Trello for team communication"
            />
          </div>
        </div>
      </motion.div>

      {/* Footer / Callout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="text-center mt-20 max-w-4xl mx-auto"
      >
        <p className="text-lg font-medium text-blue-300">
          **Master these tools** to enhance your development workflow
        </p>
      </motion.div>
    </section>
  );
}