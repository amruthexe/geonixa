"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  GraduationCap,
  Loader2,
  Sparkles,
} from "lucide-react";

const courseOptions = [
  "Fast Track 45 (Recorded)",
  "Skill Boost 2 (Live + Recorded)",
  "Pro Edge 3 (Live + Recorded)",
  "Dual Path 5 (Live + Recorded)",
  "Career Pro 6 (Live + Recorded)",
  "AI & Data Career Track",
  "Campus+ LearnTrack",
  "Campus+ ProjectPro",
  "Campus+ CodeStart",
];

const ProgramContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: courseOptions[0],
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/programmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center font-bold pb-10 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Fill the form and get a cookie 🍪
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="max-w-2xl mx-auto p-6 bg-white dark:bg-black shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-center mb-4 tracking-tight text-black dark:text-white">
          <Sparkles className="inline-block mr-2 text-yellow-400" />
          Let’s Begin Your Journey
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-5">
          Get personalized guidance from <span className="font-medium">GeoNixa</span>. Our team will reach out shortly.
        </p>

        {submitted ? (
          <div className="text-center text-green-500 text-lg font-semibold py-6">
            ✅ You’re all set. We’ll be in touch soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Course Dropdown */}
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <select
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                required
              >
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-lg tracking-wide transition-all shadow-md hover:shadow-xl flex justify-center items-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Submitting...
                </>
              ) : (
                <>
                  ✨ Join GeoNixa
                </>
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </>
  );
};

export default ProgramContactForm;
