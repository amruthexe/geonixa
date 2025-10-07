'use client'

import { FileText, Laptop, UserCheck, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: <FileText className="h-14 w-14 text-red-500 animate-bounce" />,
    step: 1,
    title: 'Complete Your Course Modules',
  },
  {
    icon: <Laptop className="h-14 w-14 text-green-500 animate-bounce" />,
    step: 2,
    title: 'Take the Brain Battle Exam',
  },
  {
    icon: <UserCheck className="h-14 w-14 text-yellow-500 animate-bounce" />,
    step: 3,
    title: 'Crack the Interview',
  },
  {
    icon: <DollarSign className="h-14 w-14 text-blue-500 animate-bounce" />,
    step: 4,
    title: 'Win the Stipend',
  },
]

export default function BrainBattleChampionship() {
  return (
    <section className="relative bg-black mt-8 text-white py-14 mx-4 sm:mx-16 rounded-2xl px-6 sm:px-12 min-h-[500px] overflow-hidden">
      {/* 🔳 Thicker White Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_2px,transparent_2px)] [background-size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Brain Battle Championship</h2>
        <p className="text-md md:text-lg mb-12">
          Follow these easy steps to participate in the Brain Battle Championship
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-black text-white border border-white rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="p-4 bg-black text-white rounded-full w-fit">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">{`STEP ${step.step}: ${step.title}`}</h3>
            </div>
          ))}
        </div>

        <div className='pt-8 font-bold text-3xl'>
          Secure your ₹15,000 stipend!
        </div>
      </div>
    </section>
  )
}
