'use client'

import {
  Rocket,
  BadgeCheck,
  HeartHandshake,
  Users,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-red-600" />,
    title: 'High-Growth Culture',
    description: 'Work in a fast-paced environment that values learning, experimentation, and real-world impact.',
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-green-600" />,
    title: 'Real Projects, Real Results',
    description: 'Contribute to meaningful client projects and products used by thousands.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-pink-500" />,
    title: 'Supportive Team',
    description: 'You’ll collaborate with humble, talented folks who actually care about your growth.',
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    title: 'Creative Freedom',
    description: 'We encourage fresh ideas, innovation, and ownership from day one.',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: 'Inclusive Environment',
    description: 'Everyone is welcomed and empowered to grow—regardless of background.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-600" />,
    title: 'Job Security',
    description: 'We’re financially stable, profitable, and focused on long-term growth.',
  },
]

export default function WhyJoinUs() {
  return (
    <section className="bg-white text-black py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join GeoNixa?</h2>
        <p className="text-muted-foreground text-md md:text-lg mb-12">
          We’re not just another tech company. We’re a team that invests in people, purpose, and progress.
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
