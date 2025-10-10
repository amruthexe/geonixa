import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Users",
    title: "40+ Hiring Partners",
    description:
      "Discover your dream job with personalized career support.",
  },
  {
    icon: "Book",
    title: "50+ Courses",
    description:
      "Match your goals with the right course.",
  },
  {
    icon: "UserCheck",
    title: "20+ Industry Experts",
    description:
      "Boost your learning with engaging live classes.",
  },
  {
    icon: "UserPlus",
    title: "25+ Career Experts",
    description:
      "Get advice on picking the right course.",
  }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container sm:py-12">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
         

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#eb4917]">
            What gives us an edge?
          </h2>

          <p className="text-xl  mb-8">
            Explore how we bring unmatched value with our diverse offerings that empower your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }) => (
            <Card
              key={title}
              className=" border  hover:bg-[#ffe8df] transition-all rounded-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  
                  <CardTitle >{title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="text-[#eb4917]/90">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
