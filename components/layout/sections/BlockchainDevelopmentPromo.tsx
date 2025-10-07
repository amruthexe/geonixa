'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BlockchainDevelopmentPromo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', domain: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleVideoClick = () => {
    setIsVideoOpen(true)
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* TEXT SECTION */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Blockchain Development</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Build Decentralized Future with Code.
          </h2>

          <div className="flex flex-col gap-4 text-lg text-gray-700">
            <p>Learn Smart Contracts, Solidity, dApps, Web3 & more in one course.</p>
            <p>From NFTs to DAOs — build real blockchain projects with mentor support.</p>
            <p className="text-md">Certification + Capstone + Internship Assistance included.</p>
            <div className="flex justify-center lg:justify-start items-center gap-2 text-xl">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">4.9/5 Rated by 5,000+ learners</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              asChild
              className="font-bold w-full sm:w-52 bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 transition"
            >
              <Link href="https://wa.me/919606995925?text=Hi%2C%20I'm%20interested%20in%20your%20Blockchain%20Development%20course.">
                Enroll for ₹4999
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="font-bold w-full sm:w-52 border-2 border-black text-black hover:bg-gray-50 rounded-full px-6 py-3 transition"
            >
              <Link href="tel:+919606995925">Call Us</Link>
            </Button>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="relative w-full lg:w-1/2">
          <div
            onClick={handleVideoClick}
            className="cursor-pointer relative w-full aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src="/html.jpeg"
              alt="Blockchain Development Demo"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* VIDEO MODAL */}
          {isVideoOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
              <div className="relative w-full max-w-3xl aspect-[16/9]">
                <video className="absolute top-0 left-0 w-full h-full rounded-lg" controls autoPlay>
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

          {/* FORM */}
          {showForm && (
            <div className="mt-10 w-full bg-white border border-gray-200 rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-4">
                🚀 Start your Blockchain Journey
              </h3>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Fill in your details and we’ll guide you through everything.
              </p>

              {submitted ? (
                <p className="text-green-600 text-center font-medium text-lg">
                  ✅ Submitted! We'll reach you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="input"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Interest (e.g., NFTs, dApps)"
                    className="input"
                    required
                    value={form.domain}
                    onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-black text-white py-3 rounded-2xl text-lg font-semibold hover:opacity-90"
                  >
                    {submitting ? "Submitting..." : "✨ Submit & Get Details"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Reusable input styling */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid #ccc;
          font-size: 1rem;
          transition: all 0.2s ease;
        }
        .input:focus {
          outline: none;
          border-color: black;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </main>
  )
}
