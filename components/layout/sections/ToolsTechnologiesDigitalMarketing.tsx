"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Figma,
  Monitor,
  BarChart,
  Users,
  Mail,
  Globe,
  Database,
  Clipboard,
  Calendar,
  Zap,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * ToolCard accepts either:
 *  - Icon (React element from lucide-react) OR
 *  - iconUrl (string) for CDN/svg logos
 */
function ToolCard({
  Icon,
  iconUrl,
  title,
  description,
}: {
  Icon?: React.ReactElement;
  iconUrl?: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-orange-50 shadow-sm hover:shadow-md transition"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
        {Icon ? (
          <div className="text-orange-600">{Icon}</div>
        ) : iconUrl ? (
          <img src={iconUrl} alt={`${title} logo`} className="w-8 h-8 object-contain" />
        ) : null}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-600 mt-1">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ToolsTechnologiesDigitalMarketing(): JSX.Element {
  return (
    <section className={`${poppins.className} bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
          Tools & Technologies — Digital Marketing
        </h1>
        <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-700 rounded-full mb-4" />
        <p className="max-w-2xl mx-auto text-slate-600">
          Industry-standard tools and platforms that digital marketers use to build,
          run and measure high-performing campaigns.
        </p>
      </motion.header>

      {/* 3-column primary grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Column 1 — Content & Creative */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-5 pb-2 border-b border-orange-100">Content & Creative</h2>
          <div className="space-y-4">
            <ToolCard
              Icon={<Figma className="w-5 h-5" />}
              title="Figma / Canva"
              description="Design creatives, ad banners, and wireframes for high-converting campaigns."
            />
            <ToolCard
              Icon={<Megaphone className="w-5 h-5" />}
              title="Copywriting & Creative Testing"
              description="Headlines, CTAs & A/B testing creative variations for better CTR."
            />
            <ToolCard
              Icon={<Monitor className="w-5 h-5" />}
              title="Landing Page Builders"
              description="Optimize landing page UX for conversion — builders like Webflow/Lander."
            />
          </div>
        </div>

        {/* Column 2 — Ads, Paid & Channels */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-5 pb-2 border-b border-orange-100">Paid Channels & Ads</h2>
          <div className="space-y-4">
            <ToolCard
              Icon={<Globe className="w-5 h-5" />}
              title="Google Ads"
              description="Search, Performance Max, Shopping & Display campaigns; keyword & audience strategies."
            />
            <ToolCard
              Icon={<Users className="w-5 h-5" />}
              title="Meta Ads (Facebook & Instagram)"
              description="Audience building, creatives, placements and scaling strategies for social ads."
            />
            <ToolCard
              Icon={<ShoppingCart className="w-5 h-5" />}
              title="Programmatic & DSPs"
              description="Intro to programmatic buying and retargeting platforms for advanced funnels."
            />
          </div>
        </div>

        {/* Column 3 — Analytics & Growth */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-5 pb-2 border-b border-orange-100">Analytics & Growth</h2>
          <div className="space-y-4">
            <ToolCard
              Icon={<BarChart className="w-5 h-5" />}
              title="Google Analytics 4"
              description="Event measurement, attribution, funnel analysis and dashboarding (GA4)."
            />
            <ToolCard
              Icon={<Database className="w-5 h-5" />}
              title="Tag Manager & Tracking"
              description="Google Tag Manager, data-layer setup and event-driven analytics."
            />
            <ToolCard
              Icon={<Zap className="w-5 h-5" />}
              title="Experimentation & CRO"
              description="A/B testing platforms, session replay tools (Hotjar), and CRO tactics."
            />
          </div>
        </div>
      </motion.div>

      {/* Secondary grid: Email, CRM, Productivity */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
      >
        <div className="bg-white rounded-xl p-6 border border-orange-50 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Email & CRM</h3>
          <div className="grid gap-3">
            <ToolCard
              Icon={<Mail className="w-5 h-5" />}
              title="Mailchimp / SendGrid"
              description="Build automation, nurture flows and product onboarding sequences."
            />
            <ToolCard
              Icon={<Clipboard className="w-5 h-5" />}
              title="CRM & Lead Management"
              description="Lead capture, segmentation and workflows using CRMs (HubSpot/Salesforce basics)."
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-orange-50 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Build & Ship</h3>
          <div className="grid gap-3">
            <ToolCard
              Icon={<Calendar className="w-5 h-5" />}
              title="Campaign Ops & Scheduling"
              description="Editorial calendars, campaign timelines and sprint-based campaign ops."
            />
            <ToolCard
              Icon={<Settings className="w-5 h-5" />}
              title="Reporting & Dashboards"
              description="Looker Studio / Data Studio dashboards and automated reporting."
            />
          </div>
        </div>
      </motion.div>

      {/* Footer / Callout */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-14 max-w-3xl mx-auto"
      >
        <p className="text-lg font-medium text-slate-800">
          Master these tools to design, run, and scale measurable marketing campaigns.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Want the same layout but split into B2B vs B2C toolkits, or prefer to use logo SVGs from a CDN instead of lucide icons? I can update that.
        </p>
      </motion.div>
    </section>
  );
}
