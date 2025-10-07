"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  MessageCircle,
  MailWarning,
  ShieldCheck,
  PhoneCall,
  Mail,
  MessageSquareWarning,
  Loader2,
  User,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";


const features = [
  {
    icon: <RefreshCw className="h-6 w-6 text-blue-600" />, title: "Refund Policy",
    description: "Fast-track resolution for refund requests with transparent status tracking."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-green-600" />, title: "Live Chat & WhatsApp",
    description: "Talk to a real person within minutes through WhatsApp or our chat tool."
  },
  {
    icon: <MailWarning className="h-6 w-6 text-yellow-600" />, title: "Issue Reporting",
    description: "Whether it's a missed class or platform error, we’ll resolve it in under 24 hours."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-600" />, title: "Data Privacy Assured",
    description: "Your queries and identity remain confidential under our strict data policy."
  },
  {
    icon: <PhoneCall className="h-6 w-6 text-red-500" />, title: "Direct Human Support",
    description: "No bots — real agents on call for urgent escalations and status inquiries."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-indigo-500" />, title: "Email + Ticket Tracking",
    description: "Email us and track your request with a case ID issued instantly."
  },
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/supportwemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-black">
      {/* Support Feature Highlights */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Support You</h2>
          <p className="text-muted-foreground text-md md:text-lg mb-12">
            We handle refund concerns, technical glitches, and user feedback with real-time solutions.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-black border border-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <div className="p-2 bg-black text-white rounded-full w-fit hidden sm:block">{feature.icon}</div>
                <h3 className="text-lg text-white font-semibold">{feature.title}</h3>
                <p className="text-sm text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Details + Form */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Support & Help Centre</h1>

        <div className="mb-10 text-gray-700 space-y-4">
          <p className="flex items-start gap-2 text-sm sm:text-base">
            <MessageSquareWarning className="text-black hidden sm:block" />
            For refund issues, learning interruptions, or technical difficulties — we’re here to support you.
          </p>
          <p className="flex items-start gap-2 text-sm sm:text-base">
            <PhoneCall className="text-black hidden sm:block" />
            Call/WhatsApp us at: <strong className="text-black">+91 96069 95925</strong>
          </p>
          <p className="flex items-start gap-2 text-sm sm:text-base">
            <Mail className="text-black hidden sm:block" />
            Email: <strong className="text-black">hr@talenttrekelearning.com</strong>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="bg-black text-white p-6 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Submit a Support Request</h2>

          {submitted ? (
            <div className="text-center text-green-500 text-lg font-semibold py-6">
              ✅ Your request has been received. We'll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="relative">
                <PhoneCall className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Describe your issue here..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white text-black border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
                  rows={5}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.03 }}
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-white text-black font-semibold text-lg tracking-wide transition-all shadow-md hover:shadow-xl flex justify-center items-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Sending...
                  </>
                ) : (
                  <>📨 Submit Request</>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}