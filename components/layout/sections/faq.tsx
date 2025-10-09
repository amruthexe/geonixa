import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Are your learning programs certified?",
    answer:
      "Yes, all our programs come with recognized certifications upon successful completion, helping learners validate their skills in the industry.",
    value: "item-1",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "You can enroll directly through our website by selecting your desired program and completing the registration form. If you need help, our support team is available to assist you.",
    value: "item-2",
  },
  {
    question: "Are the courses beginner-friendly?",
    answer:
      "Absolutely! We offer courses for all levels — from beginner to advanced — and our instructors provide step-by-step guidance to ensure easy understanding.",
    value: "item-3",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we offer placement support including resume building, mock interviews, and referrals through our network of hiring partners.",
    value: "item-4",
  },
  {
    question: "Is there any support available after course completion?",
    answer:
      "Yes, we provide continuous learning resources, alumni support, and access to our community forums even after course completion.",
    value: "item-5",
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer:
      "Yes, our learning platform is fully mobile-responsive, allowing you to learn anytime, anywhere on your smartphone or tablet.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-16">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold pt-10 text-[#eb4917] mb-2 tracking-wider">
          FAQS
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold text-[#eb4917]">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="border border-[#eb4917]/30 rounded-lg bg-[#fff3f0] overflow-hidden"
          >
            <AccordionTrigger
              className="text-left text-[#eb4917] font-medium px-4 py-3 hover:bg-[#eb4917]/10 transition-colors"
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-[#eb4917]/90">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
