"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Aarav Patel",
    userName: "Full Stack Developer Trainee",
    comment:
      "GeoNixa has completely transformed my coding journey! The mentors explain every concept in depth and connect it to real-world projects. Highly recommend it to anyone starting out.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Priya Sharma",
    userName: "Data Analytics Student",
    comment:
      "I loved the way the Data Analytics course blends theory with hands-on practice. The doubt support and mock interviews helped me gain real confidence.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rohit Verma",
    userName: "Software Engineering Intern",
    comment:
      "The courses are designed perfectly for beginners and working professionals. I joined the Python & React programs — both are structured and project-driven.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sneha Iyer",
    userName: "UI/UX Design Student",
    comment:
      "The UI/UX sessions at GeoNixa are top-notch. I created my first complete portfolio within two months. The design mentors are really helpful and creative!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Karthik Reddy",
    userName: "Machine Learning Enthusiast",
    comment:
      "GeoNixa’s AI & ML program gave me a clear path to follow — from basic Python to real model deployment. The live projects were the best part of the course.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ananya Das",
    userName: "B.Tech Student, CSE",
    comment:
      "The mentors are very supportive, and the community is super active. GeoNixa made learning coding enjoyable instead of stressful!",
    rating: 5.0,
  },
];


export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
       

        <h2 className="text-3xl md:text-4xl text-[#eb4917] text-center font-bold mb-4">
          Hear What Our 100+ Students Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
