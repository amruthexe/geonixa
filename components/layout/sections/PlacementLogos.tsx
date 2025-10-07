"use client";
import Image from "next/image";

const companyLogos = [
  { name: "Amazon", slug: "amazon" },
  { name: "Google", slug: "google" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Goldman Sachs", slug: "goldmansachs" },
  { name: "PayPal", slug: "paypal" },
  { name: "Samsung", slug: "samsung" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "NetApp", slug: "netapp" },
  { name: "Hitachi", slug: "hitachi" },
  { name: "JPMorgan", slug: "jpmorgan" },
  { name: "IBM", slug: "ibm" },
  { name: "Dell", slug: "dell" },
  { name: "Deloitte", slug: "deloitte" },
  { name: "KPMG", slug: "kpmg" },
  { name: "ISRO", slug: "isro" }, // Not available on SimpleIcons, will use fallback
  { name: "Mercedes-Benz", slug: "mercedes" },
  { name: "EY", slug: "ey" },
  { name: "Airtel", slug: "airtel" },
];

export const PlacementLogos = () => {
  return (
    <section className="text-center py-12 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Thousands of students achieved their{" "}
        <span className="text-blue-400 font-bold">dream job at</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 max-w-7xl mx-auto">
        {companyLogos.map((company, index) => {
          const iconUrl =
            company.slug === "isro"
              ? "/isro-logo.png" // You must place a custom ISRO logo in /public
              : `https://cdn.simpleicons.org/${company.slug}/FFFFFF`;

          return (
            <div key={index} className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all">
              <Image
                src={iconUrl}
                alt={company.name}
                width={80}
                height={40}
                className="object-contain max-h-12"
              />
            </div>
          );
        })}
      </div>

      <p className="text-sm text-gray-400 mt-6">+ many more</p>
    </section>
  );
};
