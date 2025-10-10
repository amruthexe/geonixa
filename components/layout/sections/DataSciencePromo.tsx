'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DataSciencePromo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', domain: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Data Science Course</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Transform Data into Insight. Build a Data-Driven Career!
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700">
              Learn Python, Pandas, Machine Learning, SQL, and Data Visualization with real projects.
            </p>
            <p className="text-lg text-gray-700">
              Designed for beginners & professionals, with step-by-step modules and mentor support.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-2 text-xl">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">4.9/5 Rated by 10,000+ learners</span>
            </div>
            <p className="text-md text-gray-700">
              Certification + Real Projects + Career Support included.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
            <Button
              asChild
              className="w-5/6 sm:w-1/3 font-bold group/arrow bg-black hover:bg-gray-800 text-white rounded-full px-24 py-3 transition duration-300"
            >
              <Link href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20your%20Data%20Science%20course.">
                Start Learning at ₹4999
                <Play className="size-4 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 sm:w-1/3 font-bold border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-3 transition duration-300"
            >
              <Link href="tel:+919663216581">Call Us</Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2">
          <div
            onClick={handleVideoClick}
            className="cursor-pointer relative w-full aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src="/html.jpeg"
              alt="Data Science Course Demo"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>

          {isVideoOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
              <div className="relative w-full max-w-3xl aspect-[16/9]">
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  controls
                  autoPlay
                >
                  <source src="/html.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute top-2 right-2 text-white text-xl"
                  onClick={() => setIsVideoOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {showForm && (
            <div className="mt-10 w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-3xl shadow-xl p-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 tracking-tight">
                🚀 Ready to explore Data Science?
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm sm:text-base">
                Share your details and our team will guide you further.
              </p>

              {submitted ? (
                <p className="text-green-600 text-center font-medium text-lg">✅ Submitted! We'll reach you soon.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white dark:bg-neutral-800 text-gray-800 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-neutral-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white dark:bg-neutral-800 text-gray-800 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-neutral-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white dark:bg-neutral-800 text-gray-800 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-neutral-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />

                  <input
                    type="text"
                    placeholder="Interested Domain (e.g., ML, AI, Visualization)"
                    className="w-full bg-white dark:bg-neutral-800 text-gray-800 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-neutral-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                    required
                    value={form.domain}
                    onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-2xl text-lg font-semibold hover:opacity-90 transition-all duration-200"
                  >
                    {submitting ? "Submitting..." : "✨ Submit & Get Details"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
