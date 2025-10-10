"use client";
import Image from "next/image";

const collaborations = [
  {
    name: "Microsoft Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "AWS Partner",
    logo: "https://img.icons8.com/color/512/amazon-web-services.png",
  },
 
  {
    name: "MSME",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/MSME_logo_%28colour%29.svg/640px-MSME_logo_%28colour%29.svg.png",
  },
  {
    name: "APSCHE",
    logo: "/ap.jpg",
  },
  {
    name: "ISO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ISO_Logo_%28Red_square%29.svg/1200px-ISO_Logo_%28Red_square%29.svg.png",
  },
  {
    name: "Startup India",
    logo: "/startup.jpg",
  },
];

export default function Collaborations() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Text Section */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#eb4917] leading-snug">
              Trusted by India’s leading organizations
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              GeoNixa collaborates with global and national leaders to bring innovation in education and technology. 
              Together, we’re building smarter learning ecosystems that empower institutions and students.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/919392855968"
                target="_blank"
                className="inline-block bg-black text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-800 transition-all duration-200"
              >
                Talk to us 
              </a>
            </div>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 place-items-center">
            {collaborations.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl shadow-sm  flex items-center justify-center w-40 h-24 hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
