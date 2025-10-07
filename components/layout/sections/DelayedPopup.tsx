"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const DelayedPopup = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
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
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSubmitted(true);
    }
    setSubmitting(false);
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
            className="relative bg-white dark:bg-black text-black dark:text-white w-full max-w-md rounded-2xl p-6 pt-10 shadow-2xl translate-y-[-4vh] sm:translate-y-0"
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
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Interested Domain (e.g., Web Dev, AI, UI/UX)"
                  className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  required
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.03 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-lg tracking-wide transition-all shadow-md hover:shadow-xl"
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
