"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = {
  name: string;
  phone: string;
  email: string;
  domain: string;
};

export const DelayedPopup = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    domain: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("seenTalentTrekPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("seenTalentTrekPopup", "true");
      }, 10000); // 10s for demo (you can set 30000)
      return () => clearTimeout(timer);
    }
  }, []);

  // example courses — replace links/images with your real content
  const featuredCourses = [
    {
      id: 1,
      title: "Full-Stack Web Development (MERN)",
      desc: "Build real projects, REST APIs and modern UIs.",
      href: "/programs/skill-boost",
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      desc: "Hands-on ML projects, model deployment & pipelines.",
      href: "/programs/ai",
    },
    {
      id: 3,
      title: "Digital Marketing & Growth",
      desc: "Growth loops, performance ads & analytics.",
      href: "/programs/campus-project-pro",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const json = await res.json().catch(() => ({}));
        console.log("send response:", json);

        setSubmitted(true);

        // show success briefly, then close popup
        setTimeout(() => {
          setShow(false);
          setSubmitted(false);
        }, 1400);

        setForm({ name: "", phone: "", email: "", domain: "" });
      } else {
        const err = await res.json().catch(() => ({}));
        console.error("Send failed:", err);
        alert("Failed to submit. Please try again later.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative bg-white text-black w-full max-w-lg rounded-2xl p-6 pt-10 shadow-2xl translate-y-[-4vh] sm:translate-y-0"
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold hover:text-red-500 z-10"
              onClick={() => setShow(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center mb-2 tracking-tight">
              🚀 Let’s Begin Your Journey
            </h2>
            <p className="text-center text-sm text-muted-foreground mb-5">
              Get personalized guidance from <span className="font-medium">GeoNixa</span>. Our team will reach out shortly.
            </p>

            {submitted ? (
              <div className="text-center text-green-500 text-lg font-semibold py-6">
                ✅ You’re all set. We’ll be in touch soon!
              </div>
            ) : submitting ? (
              // ---------- SUBMITTING STATE: show spinner + featured courses ----------
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  {/* spinner */}
                  <div className="h-9 w-9 flex items-center justify-center">
                    <svg className="h-7 w-7 animate-spin text-orange-500" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">Submitting your request…</div>
                    <div className="text-sm text-gray-500">Meanwhile, explore some popular courses you might like.</div>
                  </div>
                </div>

                {/* course cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  {featuredCourses.map((c, i) => (
                    <motion.a
                      key={c.id}
                      href={c.href}
                      className="block rounded-xl border border-gray-100 p-3 hover:shadow-md transition-colors bg-white"
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: i * 0.06 } }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="text-sm font-semibold text-gray-900 mb-1">{c.title}</div>
                      <div className="text-xs text-gray-500">{c.desc}</div>
                      <div className="mt-3 text-xs font-medium text-orange-600">View course →</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            ) : (
              // ---------- FORM STATE ----------
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Interested Domain (e.g., Web Dev, AI, UI/UX)"
                  className="w-full border border-gray-300 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                />

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.03 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-lg tracking-wide transition-all shadow-md hover:shadow-xl"
                >
                  {submitting ? "Submitting..." : "✨ Join GeoNixa"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
