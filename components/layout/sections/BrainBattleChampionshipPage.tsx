'use client'

import { Button } from '@/components/ui/button'
import { ArrowRightCircle } from 'lucide-react'

export default function YBrainBattleChampionship() {
  return (
    <section className="relative text-black py-8 px-6 overflow-hidden">
      {/* 🔳 White Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🧠 Brain  Championship</h2>
        <p className="text-md md:text-lg mb-12">
          Welcome to the Brain Battle Championship — the ultimate intellectual showdown for all our interns!
          This isn’t just another exam. It's your chance to shine, showcase your skills, and earn your place among the best.
          Whether you’re taking a tech, creative, or business course — this challenge is for YOU.
        </p>

        <div className="text-2xl font-semibold text-green-500 mb-6">
          🚀 Crack the Brain Battle and ace the interview round to unlock an exclusive internship stipend of <span className="font-bold text-3xl text-red-400">₹15,000</span>!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          {/* What’s the Brain Battle */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <ArrowRightCircle className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">🚀 What’s the Brain Battle?</span>
            </div>
            <p>
              The Brain Battle Championship is a carefully designed assessment tailored for our interns across various courses.
              It’s meant to push boundaries, test your learning, and prepare you for the real world — with a real reward.
            </p>
          </div>

          {/* What’s at Stake */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <ArrowRightCircle className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">🏆 What’s at Stake?</span>
            </div>
            <p>
              Crack the Brain Battle and ace the interview round, and you’ll unlock an exclusive internship stipend of ₹15,000.
              That’s right — your knowledge can now pay off, literally.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          {/* Who Can Participate */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <ArrowRightCircle className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">💡 Who Can Participate?</span>
            </div>
            <ul className="list-disc pl-6">
              <li>All active interns currently enrolled in any of our courses.</li>
              <li>You must complete your course modules to be eligible for the exam.</li>
              <li>Passion, dedication, and a brain ready for a battle — that’s all you need!</li>
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <ArrowRightCircle className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">📝 How It Works</span>
            </div>
            <ol className="list-decimal pl-6">
              <li><strong>Step 1:</strong> Complete Your Course Modules — Build a strong foundation before the battle.</li>
              <li><strong>Step 2:</strong> Take the Brain Battle Exam — A mix of technical, logical, and problem-solving questions tailored to your course.</li>
              <li><strong>Step 3:</strong> Crack the Interview — Impress our expert panel in a short, focused interview.</li>
              <li><strong>Step 4:</strong> Win the Stipend — If you pass, you walk away with ₹15,000 and a big leap in your career!</li>
            </ol>
            <div className="mt-4 text-lg">
              <strong>📅 Upcoming Championship Dates:</strong> Stay tuned! We'll be announcing exam windows shortly. Make sure you're on track with your coursework and ready to compete.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
