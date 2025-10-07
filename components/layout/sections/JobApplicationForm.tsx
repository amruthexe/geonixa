'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function JobApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="px-4 md:px-8 lg:px-0">
      <h2 className="text-center text-3xl font-bold mb-8 text-black dark:text-white">
        Fill the Form Below
      </h2>

      <section className="max-w-2xl mx-auto bg-black text-white rounded-3xl p-8 md:p-10 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for This Position</h2>

        {!submitted ? (
          <form
            action="https://getform.io/f/YOUR-GETFORM-ENDPOINT"
            method="POST"
            encType="multipart/form-data"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium">Full Name</label>
              <Input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <Input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone Number</label>
              <Input
                type="tel"
                name="phone"
                required
                placeholder="+91 9876543210"
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Cover Letter / Message</label>
              <Textarea
                name="message"
                rows={5}
                placeholder="Why should we hire you?"
                required
                className="bg-white text-black"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Upload Resume</label>
              <Input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="bg-white text-black"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-black font-semibold hover:bg-gray-100 rounded-full transition"
            >
              Submit Application
            </Button>
          </form>
        ) : (
          <div className="text-center text-green-400 font-semibold text-lg">
            ✅ Thank you! Your application was submitted successfully.
          </div>
        )}
      </section>
    </div>
  )
}
