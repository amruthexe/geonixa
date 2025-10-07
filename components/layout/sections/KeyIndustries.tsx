"use client";

import { MapPin, Network, Home,  Truck, BarChart, Package, User, Leaf, Book, HeartIcon, HeartPulseIcon } from "lucide-react"; // Updated with available icons

const industries = [
  {
    id: "1",
    title: "Smart Cities & Urban Development",
    description:
      "With governments worldwide investing heavily in smart city projects, this industry presents opportunities in urban mapping, infrastructure development, traffic planning, and sustainability using photogrammetry and GIS solutions.",
    icon: MapPin, // Replaced with MapPin icon
  },
  {
    id: "2",
    title: "Telecom Infrastructure Development",
    description:
      "With the rollout of advanced networks like 5G, our expertise in drone mapping, GIS services, and photogrammetry can assist in network coverage planning, infrastructure mapping, and optimization, offering significant opportunities in this sector.",
    icon: Network,
  },
  {
    id: "3",
    title: "Real Estate & Land Management",
    description:
      "With demand for strategic land development and urban expansion, we can provide land use planning, site analysis, and GIS-driven real estate insights to support real estate companies and governments in optimizing land development strategies.",
    icon: Home,
  },
  {
    id: "4",
    title: "Healthcare Mapping & Public Health Analytics",
    description:
      "Analyzing geographic trends can have a significant impact on disease monitoring, urban healthcare planning, and resource distribution. Our expertise in spatial data can help identify healthcare gaps and optimize infrastructure investments.",
    icon: HeartIcon, // Replaced with Heartbeat icon
  },
  {
    id: "5",
    title: "Transportation & Logistics Planning",
    description:
      "Logistics companies require advanced mapping tools for route optimization, supply chain planning, and monitoring infrastructure. Using drones, GIS, and photogrammetry, we can support efficient and cost-effective logistics planning.",
    icon: Truck,
  },
  {
    id: "6",
    title: "Technology & Software Solutions",
    description:
      "The tech industry continues to grow rapidly, especially in areas like SaaS, AI, and cloud computing. These areas offer high profit margins and scalability, perfect for a Private Limited Company.",
    icon: BarChart,
  },
  {
    id: "7",
    title: "E-commerce & Digital Retail",
    description:
      "With the continued rise of online shopping and digital platforms, e-commerce is one of the most profitable sectors. A Private Limited structure allows you to expand your online store without the complexities of public funding.",
    icon: Package,
  },
  {
    id: "8",
    title: "Financial Services & FinTech",
    description:
      "The FinTech sector is booming, offering digital solutions in payments, lending, investments, and insurance. Profitability comes from transaction fees, subscriptions, and financial products.",
    icon: User,
  },
  {
    id: "9",
    title: "HealthTech & Telemedicine",
    description:
      "Health technology is a rapidly growing market, especially with telemedicine and digital health tools. The demand for healthcare services continues to rise, making this a highly lucrative space.",
    icon: HeartPulseIcon,
  },
  {
    id: "10",
    title: "Sustainability & Green Technologies",
    description:
      "As sustainability becomes a key concern for both businesses and consumers, this sector offers substantial growth. Clean energy, recycling, and eco-friendly products are in demand.",
    icon: Leaf,
  },
  {
    id: "11",
    title: "Artificial Intelligence & Automation",
    description:
      "AI and automation are transforming industries across the globe. Businesses are increasingly adopting AI solutions to optimize processes, enhance customer experience, and reduce costs.",
    icon: BarChart,
  },
  {
    id: "12",
    title: "Education Technology (EdTech)",
    description:
      "Online learning and e-learning platforms continue to grow, with demand for both personal and corporate training solutions. Subscription models and content delivery provide strong revenue potential.",
    icon: Book,
  },
  {
    id: "13",
    title: "Real Estate & Property Technology (PropTech)",
    description:
      "Real estate remains a solid investment, and PropTech is revolutionizing the industry with innovative solutions in property management, digital real estate platforms, and smart homes.",
    icon: Home,
  },
  {
    id: "14",
    title: "FoodTech & Delivery Services",
    description:
      "The food industry, especially in the delivery and subscription model sector, is highly profitable, with growing demand for convenience and innovation in food options.",
    icon: Package,
  },
  {
    id: "15",
    title: "Logistics & Supply Chain Management",
    description:
      "With global trade growing and the demand for faster deliveries increasing, logistics and supply chain innovations are essential to meet consumer needs and improve operational efficiency.",
    icon: Truck,
  },
];

export const KeyIndustries = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary tracking-wider mb-2">
          Key Industries for Future Growth & Profitability
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          At Triset Solutions, we are exploring opportunities across industries where technological innovation, data analysis, and geospatial solutions can generate strong business value.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="group bg-white dark:bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-red-500 border border-transparent"
          >
            <div className="p-6 flex items-center justify-center text-primary">
              <industry.icon className="w-10 h-10" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {industry.title}
              </h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
