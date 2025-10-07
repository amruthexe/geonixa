'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Anjali Mehta',
    content:
      'This course gave me the confidence and skills I needed to transition into a data analyst role in just 3 months!',
    role: 'Business Analyst at TCS',
  },
  {
    name: 'Rohit Sinha',
    content:
      'The hands-on projects and mentorship made a huge difference. Loved how well-structured the course is.',
    role: 'Data Analyst Intern at Zoho',
  },
  {
    name: 'Shruti Agarwal',
    content:
      'I had no coding background, but the way concepts were explained made it super easy to understand.',
    role: 'Junior Data Analyst at Wipro',
  },
  {
    name: 'Faizan Khan',
    content:
      'After completing this course, I cracked interviews with confidence. Totally worth it!',
    role: 'Freelance Data Consultant',
  },
  {
    name: 'Ritika Deshmukh',
    content:
      'The best part is the combination of theory and real-world tools like SQL, Python, Power BI.',
    role: 'MIS Executive at Deloitte',
  },
  {
    name: 'Manoj Pillai',
    content:
      'I never thought online learning could be so engaging. Hats off to the instructors!',
    role: 'Graduate Trainee – Analytics',
  },
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrame: number
    const scrollSpeed = reverse ? -0.5 : 0.5

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed
        if (container.scrollLeft >= container.scrollWidth) {
          container.scrollLeft = 0
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth
        }
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [reverse])

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-6"
    >
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="min-w-[300px] max-w-sm bg-white dark:bg-zinc-900 rounded-xl shadow-md p-4"
        >
          <p className="text-sm text-muted-foreground mb-2">“{item.content}”</p>
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-xs text-muted-foreground">{item.role}</p>
        </div>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center">What our learners say</h2>

        <div className="space-y-6">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </div>
    </section>
  )
}
