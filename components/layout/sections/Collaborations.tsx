import React from "react";

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
    name: "AICTE",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png",
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

const Collaborations: React.FC = () => {
  return (
    <section className="bg-white text-black py-6 px-4">
      <h2 className="text-3xl font-bold mb-16 text-center">Collaborations</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-x-auto px-2">
        {collaborations.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center min-w-[120px]">
            <img
              src={item.logo}
              alt={item.name}
              className="w-28 h-16 object-contain mb-2"
              loading="lazy"
            />
            <p className="text-sm font-medium   whitespace-nowrap">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborations;
