'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import Link from 'next/link'

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string
  popular: PopularPlan
  price: number
  description: string
  buttonText: string
  benefitList: string[]
}

const plans: PlanProps[] = [
  {
    title: 'Data Basics Starter',
    popular: PopularPlan.NO,
    price: 4999,
    description:
      'Learn Excel, basic charts, and intro to SQL — perfect for absolute beginners.',
    buttonText: 'Start Learning',
    benefitList: [
      'Excel & Data Cleaning',
      'Charts & Pivot Tables',
      'Intro to SQL',
      'Email Support',
      'Certificate Included',
    ],
  },
  {
    title: 'Data Pro Analyst',
    popular: PopularPlan.YES,
    price: 1499,
    description:
      'Go deeper with SQL, Power BI dashboards, and real-world case studies.',
    buttonText: 'Enroll Now',
    benefitList: [
      'SQL Queries & Joins',
      'Power BI Dashboards',
      'Excel + Automation',
      'Mentor Support',
      'Project Certificate',
    ],
  },
  {
    title: 'Analytics Career Track',
    popular: PopularPlan.NO,
    price: 2999,
    description:
      'Complete career training including Python, Tableau, and job assistance.',
    buttonText: 'Talk to Mentor',
    benefitList: [
      'Python + Pandas + Matplotlib',
      'Tableau & Jupyter Labs',
      'Capstone Project',
      'Resume Review',
      'Placement Assistance',
    ],
  },
]

export const DataAnalyticsPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Data Analytics Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn to Analyze Data. Build Dashboards. Get Hired.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that aligns with your learning level and goals.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]'
                  : ''
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>
                <CardDescription className="pb-4">{description}</CardDescription>
                <div>
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground"> /one-time</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={popular === PopularPlan.YES ? 'default' : 'secondary'}
                  className="w-full"
                >
                  <Link
                    href="https://wa.me/919999999999?text=I%20am%20interested%20in%20your%20Data%20Analytics%20course%20plans."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full"
                  >
                    {buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  )
}
