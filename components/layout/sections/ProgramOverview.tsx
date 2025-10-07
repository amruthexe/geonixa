'use client'

import { Rocket, BadgeCheck, HeartHandshake, Users, Lightbulb, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'



export default function ProgramOverview() {
  return (
    <section className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🧠 Brain Battle Championship</h2>
        <p className="text-muted-foreground text-md md:text-lg mb-4">
          Join the ultimate intellectual showdown! Showcase your skills and stand a chance to win ₹15,000. 
          It's your moment to shine, whether you're a tech, creative, or business intern!
        </p>

     

        <Button className="mt-6 bg-blue-500 text-white" onClick={() => alert('Redirect to full program details')}>
          View More Details
        </Button>
      </div>
    </section>
  )
}
