import { REVIEWS } from "@/constants/reviews";
import Container from "@/components/global/container";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center md:py-16 w-full bg-white">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-headingn font-bold !leading-snug mt-6 text-[#eb4917]">
            What our Students say
          </h2>
          <p className="text-base md:text-lg text-center text-[#eb4917]/70 mt-6">
            We are proud to have helped thousands of customers across the globe. Here are some of their stories
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-16 w-full relative overflow-hidden">
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s] pb-4">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee  className="[--duration:30s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#fff8f3]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#fff8f3]"></div>

            {/* Orange blur circles */}
            <div className="absolute hidden lg:block top-1/4 left-1/4 w-28 h-28 rounded-full bg-[#eb4917]/40 -z-10 blur-[6rem]"></div>
            <div className="absolute hidden lg:block top-1/4 right-1/4 w-28 h-28 rounded-full bg-[#eb4917]/40 -z-10 blur-[6rem]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ReviewCard = ({
  img,
  name,
  username,
  review,
}: {
  img: string;
  name: string;
  username: string;
  review: string;
}) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-[#eb4917]/20 bg-[#fff3f0] hover:bg-[#eb4917]/10 p-4 transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-[#eb4917]">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#eb4917]/50">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-[#eb4917]/90">{review}</blockquote>
    </figure>
  );
};

export default Reviews;
