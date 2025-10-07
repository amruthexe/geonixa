'use client'

import {
    Rocket,
    BookOpenCheck,
    UsersRound,
    BrainCog,
    ActivitySquare,
    Medal,
  } from 'lucide-react'
  
  export const specialPrograms = [
    {
      icon: <Rocket className="h-6 w-6 text-red-600" />,
      title: 'High-Growth Culture',
      description:
        'Work in a fast-paced environment that values learning, experimentation, and real-world impact.',
    },
    {
      icon: <BookOpenCheck className="h-6 w-6 text-blue-600" />,
      title: 'Skill Development Bootcamps',
      description:
        'Exclusive training bootcamps to upskill in full stack, AI, cloud, and security domains.',
    },
    {
      icon: <UsersRound className="h-6 w-6 text-green-600" />,
      title: 'Mentorship from Industry Leaders',
      description:
        'Learn from top mentors with real-world experience in MNCs and fast-scaling startups.',
    },
    {
      icon: <BrainCog className="h-6 w-6 text-purple-600" />,
      title: 'Innovation Labs Access',
      description:
        'Work on live projects and R&D experiments inside our dedicated innovation labs.',
    },
    {
      icon: <ActivitySquare className="h-6 w-6 text-yellow-600" />,
      title: 'Hackathons & Challenges',
      description:
        'Participate in in-house hackathons to solve problems, win prizes, and get recognized.',
    },
    {
      icon: <Medal className="h-6 w-6 text-pink-600" />,
      title: 'Certification & Internship Path',
      description:
        'Receive verified certifications and internship experience letter after every milestone.',
    },
  ]
  

export default function WhyJoinUs() {
  return (
    <section className="bg-white text-black py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider uppercase">
        GeoNixa Specials
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose a Program That Matches Your Goals
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Smart learning paths designed for beginners to career-focused learners.
      </h3>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {specialPrograms.map((feature, idx) => (
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
