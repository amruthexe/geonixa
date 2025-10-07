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
    title: 'Blockchain Essentials',
    popular: PopularPlan.NO,
    price: 599,
    description:
      'Learn the basics of blockchain, Ethereum, and wallet setup with hands-on demos.',
    buttonText: 'Start Now',
    benefitList: [
      'Blockchain Fundamentals',
      'Ethereum & Wallets',
      'Smart Contract Basics',
      'Completion Certificate',
      'Email Support',
    ],
  },
  {
    title: 'Smart Contract Developer',
    popular: PopularPlan.YES,
    price: 1499,
    description:
      'Build, test, and deploy smart contracts using Solidity, Hardhat, and Web3.js.',
    buttonText: 'Enroll Now',
    benefitList: [
      'Solidity & Truffle/Hardhat',
      'Deploy Contracts',
      'Project Showcase',
      'Live Mentor Support',
      'Internship Certificate',
    ],
  },
  {
    title: 'Full Blockchain Developer',
    popular: PopularPlan.NO,
    price: 2999,
    description:
      'Master blockchain, dApps, NFTs, IPFS, and real-world project deployment with career support.',
    buttonText: 'Talk to Mentor',
    benefitList: [
      'Full dApp Project',
      'Web3 Integration & NFT Minting',
      'IPFS + Hosting',
      'Placement Assistance',
      '1:1 Career Mentorship',
    ],
  },
]

export default function BlockchainDevelopmentPricingSection() {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Blockchain Development Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn Blockchain. Build Projects. Get Hired.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that matches your blockchain journey and goals.
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
                <CardDescription className="pb-4">
                  {description}
                </CardDescription>
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Blockchain%20Development%20course%20plans."
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
