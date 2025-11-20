"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  University,
  Calendar,
  BookOpen,
  CheckCircle,
  Award,
  Users,
  BookOpen as BookIcon,
} from "lucide-react";

/* ---------- validation schema ---------- */
const formSchema = z.object({
  name: z.string().min(3, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .max(15, "Enter a valid phone"),
  year: z.enum(["1st", "2nd", "3rd", "4th", "Other"]),
  branch: z.string().min(2, "Enter your branch"),
  college: z.string().min(2, "Enter your college name"),
});

type FormData = z.infer<typeof formSchema>;

export default function StudentAmbassadorSection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      year: "3rd",
      branch: "",
      college: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setSubmitting(true);
    try {
      await axios.post("/api/studentAmbassador", values);
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    {
      id: 1,
      title: "Stipend & Rewards",
      desc: "Monthly stipend & performance-based rewards for active ambassadors.",
      icon: Award,
    },
    {
      id: 2,
      title: "Industry Mentorship",
      desc: "One-on-one mentorship from experienced professionals and hiring leads.",
      icon: Users,
    },
    {
      id: 3,
      title: "Free Training",
      desc: "Hands-on training in AI, Web Development & Digital Marketing.",
      icon: BookIcon,
    },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT - Overview */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
              Geonixa Student Ambassador Program — 2025
            </h2>

            <p className="text-black max-w-md">
              The Geonixa Student Ambassador Program 2025 offers students across India an opportunity to
              represent Geonixa on their campuses, gain real-world experience, and develop essential
              leadership and technical skills.
            </p>

            <div className="bg-white/5 rounded-3xl p-6 space-y-4 border border-white/6">
              <h3 className="font-semibold text-lg text-black">Program overview</h3>
              <p className="text-black text-sm">
                As a Geonixa Student Ambassador, you'll organize workshops, seminars and events on AI,
                Web Development, and Digital Marketing — while leading an active tech community on campus.
              </p>

              <ul className="grid gap-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-400" />
                  <span className="text-sm text-black">Monthly stipend (performance based)</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-400" />
                  <span className="text-sm text-black">Official certificate &amp; national exposure</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-400" />
                  <span className="text-sm text-black">Exclusive internships &amp; mentorship</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="text-lime-400" />
                  <span className="text-sm text-black">Free training (AI, Web, Digital Marketing)</span>
                </li>
              </ul>

              <div className="pt-4 text-sm text-black">
                <strong>Eligibility:</strong> Open to UG &amp; PG students. Dedicate ~4–5 hours/week.
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Form + Submitting Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden border border-orange-500/60 shadow-2xl bg-gradient-to-br from-black/80 to-black/90 p-0 max-w-lg mx-auto my-8">
              <div className="bg-gradient-to-r from-orange-600/80 to-orange-700/80 p-6">
                <h3 className="text-2xl font-extrabold text-white">Apply to be a Student Ambassador</h3>
                <p className="text-sm text-gray-100 mt-1">Fill the form below — we'll get back within 7 working days.</p>
              </div>

              <div className="p-6">
                {sent && (
                  <div className="mb-4 rounded-lg bg-orange-900/40 border border-orange-700 text-orange-200 px-4 py-3 text-sm">
                    Application submitted — thank you! We'll contact you soon.
                  </div>
                )}

                {/* SHOW BENEFITS WHEN SUBMITTING */}
                {submitting ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {/* spinner */}
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-50/10">
                        <svg className="h-6 w-6 animate-spin text-orange-400" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">Submitting your application…</div>
                        <div className="text-sm text-orange-200">While we process your request, here's what you'll gain as an ambassador.</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                      {benefits.map((b, i) => {
                        const Icon = b.icon;
                        return (
                          <motion.div
                            key={b.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.06 } }}
                            className="rounded-lg border border-orange-600/30 bg-gradient-to-b from-white/5 to-white/3 p-3"
                          >
                            <div className="flex items-start gap-3">
                              <div className="bg-orange-600/10 rounded-full p-2">
                                <Icon className="w-5 h-5 text-orange-400" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white">{b.title}</div>
                                <div className="text-xs text-orange-200 mt-1">{b.desc}</div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="text-xs text-gray-300 mt-2">
                      Note: If submission takes longer than expected, we will still process and contact you via the email/phone provided.
                    </div>
                  </div>
                ) : (
                  /* ---------- FORM STATE ---------- */
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-orange-400 flex items-center gap-2 font-medium mb-1">
                          <User size={16} className="text-orange-400" /> Full name
                        </label>
                        <input
                          {...form.register("name")}
                          className="w-full bg-black/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                          placeholder="Your full name"
                          aria-label="Full name"
                        />
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.name?.message as string}</p>
                      </div>

                      <div>
                        <label className="text-sm text-orange-400 flex items-center gap-2 font-medium mb-1">
                          <Mail size={16} className="text-orange-400" /> Email
                        </label>
                        <input
                          {...form.register("email")}
                          type="email"
                          className="w-full bg-black/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                          placeholder="you@college.edu"
                          aria-label="Email"
                        />
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.email?.message as string}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-orange-400 flex items-center gap-2 font-medium mb-1">
                          <Phone size={16} className="text-orange-400" /> Phone
                        </label>
                        <input
                          {...form.register("phone")}
                          className="w-full bg-black/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                          placeholder="+91 98765 43210"
                          aria-label="Phone"
                        />
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.phone?.message as string}</p>
                      </div>

                      <div>
                        <label className="text-sm text-orange-400 flex items-center gap-2 font-medium mb-1">
                          <Calendar size={16} className="text-orange-400" /> Year
                        </label>
                        <select
                          {...form.register("year")}
                          className="w-full bg-black/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 appearance-none"
                          aria-label="Year"
                        >
                          <option value="" disabled className="bg-black text-gray-500">Select your year</option>
                          <option value="1st" className="bg-black">1st</option>
                          <option value="2nd" className="bg-black">2nd</option>
                          <option value="3rd" className="bg-black">3rd</option>
                          <option value="4th" className="bg-black">4th</option>
                          <option value="Other" className="bg-black">Other</option>
                        </select>
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.year?.message as string}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-orange-400 flex items-center gap-2 font-medium mb-1">
                          <BookOpen size={16} className="text-orange-400" /> Branch
                        </label>
                        <input
                          {...form.register("branch")}
                          className="w-full bg-black/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                          placeholder="Computer Science / ECE / IT"
                          aria-label="Branch"
                        />
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.branch?.message as string}</p>
                      </div>

                      <div>
                        <label className="text-sm text-orange-400 flex items-center gap-2 font-medium mb-1">
                          <University size={16} className="text-orange-400" /> College name
                        </label>
                        <input
                          {...form.register("college")}
                          className="w-full bg-black/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                          placeholder="Your college name"
                          aria-label="College name"
                        />
                        <p className="text-xs text-red-400 mt-1">{form.formState.errors.college?.message as string}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-orange-500 text-white font-semibold text-base rounded-full py-3 shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending..." : "Apply now"}
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        We'll contact shortlisted candidates at provided email/phone.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
