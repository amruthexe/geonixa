"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Mail, Phone, User } from "lucide-react";

export const metadata = {
  title: "Student Onboarding | GeoNixa — Welcome to Your Learning Journey",
  description:
    "Thanks for enrolling at GeoNixa! Complete your onboarding to receive your welcome email, course access, and next steps for your learning journey.",
  keywords: [
    "GeoNixa onboarding",
    "student onboarding",
    "course enrollment",
    "geonixa courses",
    "full stack training onboarding",
    "ai training",
    "ui ux training",
    "student admission geonixa",
    "bootcamp onboarding"
  ],
  openGraph: {
    title: "GeoNixa Student Onboarding",
    description:
      "Complete your onboarding to unlock course access, support, and next steps.",
    url: "https://www.geonixa.com/onboarding",
    siteName: "GeoNixa",
    images: [
      {
        url: "https://www.geonixa.com/og/geonixa-banner.png",
        width: 1200,
        height: 630,
        alt: "GeoNixa Student Onboarding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoNixa Student Onboarding",
    description:
      "Welcome to GeoNixa! Complete onboarding to access your course materials and next steps.",
    images: ["https://www.geonixa.com/og/geonixa-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.geonixa.com/onboarding",
  },
};


const enrollSchema = z.object({
  name: z.string().min(2, "Enter full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter phone"),
  course: z.string().min(2, "Enter course enrolled"),
  batch: z.string().optional(),
  enrollDate: z.string().optional(),
  college: z.string().optional(),
  referral: z.string().optional(),
  notes: z.string().optional(),
});

type EnrollData = z.infer<typeof enrollSchema>;

export default function StudentOnboarding() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [showAmbassadorPrompt, setShowAmbassadorPrompt] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm<EnrollData>({
    resolver: zodResolver(enrollSchema),
  });

  const onSubmit = async (values: EnrollData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        alert("Failed to submit onboarding. Try again.");
        return;
      }

      setDone(true);
      setShowAmbassadorPrompt(true);
      reset();
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-12 max-w-3xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-orange-600">
            🎉 Thanks for Enrolling!
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mt-2">
            Complete your onboarding details below. We’ll send your welcome email & next steps.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-xl p-6">
          {done && (
            <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-700 px-4 py-3 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              Onboarding submitted — check your email!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">

            {/* Name + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-4 text-gray-400" />
                  <input
                    {...register("name")}
                    placeholder="Your full name"
                    className="pl-10 w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <p className="text-xs text-red-500">{formState.errors.name?.message}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-4 text-gray-400" />
                  <input
                    {...register("email")}
                    placeholder="you@domain.com"
                    type="email"
                    className="pl-10 w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <p className="text-xs text-red-500">{formState.errors.email?.message}</p>
              </div>
            </div>

            {/* Phone + course */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <div className="relative">
                  <Phone size={20} className="absolute left-3 top-4 text-gray-400" />
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="pl-10 w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <p className="text-xs text-red-500">{formState.errors.phone?.message}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Course Enrolled</label>
                <input
                  {...register("course")}
                  placeholder="Full Stack / AI / UI-UX / etc."
                  className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
                />
                <p className="text-xs text-red-500">{formState.errors.course?.message}</p>
              </div>
            </div>

            {/* Batch + date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                {...register("batch")}
                placeholder="Batch (Optional)"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
              />

              <input
                {...register("enrollDate")}
                type="date"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* College & referral */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                {...register("college")}
                placeholder="College (Optional)"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
              />

              <input
                {...register("referral")}
                placeholder="Referral (Optional)"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Notes */}
            <textarea
              {...register("notes")}
              placeholder="Notes (Optional)..."
              className="w-full min-h-[100px] p-3 border rounded-xl focus:ring-2 focus:ring-orange-400"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-full shadow hover:bg-orange-700 transition"
            >
              {submitting ? "Submitting..." : "Submit Onboarding"}
            </button>
          </form>

          {/* Ambassador Program Prompt */}
          {showAmbassadorPrompt && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 border rounded-lg bg-orange-50">
              <h3 className="text-lg font-semibold text-orange-700">Become a Student Ambassador 🚀</h3>
              <p className="text-sm text-gray-700 mt-1">
                Represent GeoNixa on your campus and unlock rewards, mentorship & stipend.
              </p>
              <a
                href="/ambassador/apply"
                className="inline-block mt-3 bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700"
              >
                Apply Now
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
