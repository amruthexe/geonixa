'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The team helped me build a complex Deep Learning model for plant disease detection. The explanation provided made my Viva very smooth!",
    author: "Rahul Verma",
    role: "CSE Final Year, VIT"
  },
  {
    content: "I received the complete source code and documentation within 4 days. The setup on my laptop was done via AnyDesk. Highly professional service.",
    author: "Sneha Reddy",
    role: "ISE Student, RVCE"
  },
  {
    content: "The IoT hardware integration was perfect. They even provided a video explanation of the circuit connections which helped me significantly.",
    author: "Arjun Nair",
    role: "ECE Student, BMSIT"
  },
];

export default function ProjectTestimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#eb4917]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Engineering Students
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 ring-1 ring-gray-900/5 hover:bg-orange-50 transition-colors">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#eb4917] text-[#eb4917]" />
                    ))}
                </div>
                <blockquote className="text-gray-900">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
