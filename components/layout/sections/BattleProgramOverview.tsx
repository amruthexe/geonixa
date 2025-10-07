'use client'

import { Rocket, BadgeCheck, HeartHandshake, Users, Lightbulb, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-red-600" />,
    title: '🚀 High-Growth Challenge',
    description: 'Push your limits and grow in a fast-paced, challenging environment that values learning and experimentation.',
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-green-600" />,
    title: '🏆 Real Rewards',
    description: 'Complete the challenge and earn an exclusive internship stipend of ₹15,000, setting you up for success.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-pink-500" />,
    title: '💖 Mentorship & Guidance',
    description: 'Benefit from expert mentorship throughout the program, helping you build your skills and expand your knowledge.',
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    title: '💡 Knowledge Application',
    description: 'Test your problem-solving abilities with real-world challenges and gain hands-on experience in your field.',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: '🌍 Diverse Community',
    description: 'Collaborate with a diverse group of talented interns from various backgrounds and specialties.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-600" />,
    title: '🛡️ Career Growth',
    description: 'Gain exposure to industry professionals and opportunities that will advance your career beyond the program.',
  },
]

export default function BattleProgramOverview() {
  return (
    <section className="bg-white text-black py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join the Battle Program?</h2>
        <p className="text-muted-foreground text-md md:text-lg mb-12">
          The Brain Battle Championship is your chance to shine, showcase your skills, and win valuable rewards!
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-black border border-white rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition"
            >
              <div className="p-2 bg-black text-white rounded-full w-fit">{feature.icon}</div>
              <h3 className="text-lg text-white font-semibold">{feature.title}</h3>
              <p className="text-sm text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
