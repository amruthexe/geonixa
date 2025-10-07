'use client'

import { BadgeCheck, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function GetCertified() {
  return (
    <section className="py-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Get <span className="text-black">Certified</span>.
          </h2>

          <div className="flex items-start gap-3">
            <BadgeCheck className="text-black mt-1" />
            <div>
              <p className="font-semibold">Start today</p>
              <p className="text-sm text-muted-foreground">
                You are just months away from cracking your dream company.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
          <BadgeCheck className="text-black mt-1" />
            <div>
              <p className="font-semibold">Believe in yourself</p>
              <p className="text-sm text-muted-foreground">
             Coding is simple. You just need the right guidance.
              </p>
            </div>
          </div>

         
      

          <button className="bg-black text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-black transition w-fit mt-4">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side - 2x2 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
  <Image
    src="/c1.jpg"
    width={160}
    height={160}
    alt="Certificate 1"
    className="rounded-md object-cover w-full h-auto border-2 border-black shadow-md"
  />
  <Image
    src="/c2.jpg"
    width={160}
    height={160}
    alt="Certificate 2"
    className="rounded-md object-cover w-full h-auto border-2 border-black shadow-md"
  />
  <Image
    src="/c3.jpg"
    width={160}
    height={160}
    alt="Certificate 3"
    className="rounded-md object-cover w-full h-auto border-2 border-black shadow-md"
  />
  <Image
    src="/c4.jpg"
    width={160}
    height={160}
    alt="Certificate 4"
    className="rounded-md object-cover w-full h-auto border-2 border-black shadow-md"
  />
</div>

      </div>
    </section>
  )
}
