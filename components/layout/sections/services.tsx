import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Monitor, Brush, Smartphone, Mail } from "lucide-react";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  icon: React.ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "Web Design",
    description: "Creating responsive, user-friendly designs that engage and convert visitors.",
    pro: 0,
    icon: <Code className="text-blue-500" />,
  },
  {
    title: "Web Development",
    description: "Building custom websites using the latest technologies to enhance performance.",
    pro: 0,
    icon: <Monitor className="text-green-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Optimizing user experiences through design and intuitive user interfaces.",
    pro: 0,
    icon: <Brush className="text-pink-500" />,
  },
  {
    title: "Web Security",
    description: "Protecting your digital assets with top-notch security protocols and practices.",
    pro: 1,
    icon: <Brush className="text-red-500" />,  // Web Security with different color
  },
  {
    title: "App Development",
    description: "Developing seamless mobile applications to extend your reach to users worldwide.",
    pro: 0,
    icon: <Smartphone className="text-purple-500" />,
  },
  {
    title: "Digital Marketing",
    description: "Boosting your business presence through targeted marketing strategies.",
    pro: 1,
    icon: <Mail className="text-yellow-500" />,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary font-bold text-center mb-2 tracking-wider">
        Our Services
      </h2>

      <h2 className="text-3xl font-bold md:text-4xl text-center font-bold mb-4">
        Explore Our Expertise
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From Web Design to App Development, we provide a wide range of digital services.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceList.map(({ title, description, pro, icon }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader className="text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
