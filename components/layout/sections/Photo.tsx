"use client";

import Image from "next/image";

const services = [
  {
    id: "1",
    title: "2D/3D Cartography",
    description:
      "We create detailed 2D and 3D maps using photogrammetric techniques integrating aerial imagery and advanced mapping technologies.",
    image: "/2d_3d.webp",
  },
  {
    id: "2",
    title: "DEM (Digital Elevation Model)",
    description:
      "Providing highly accurate 3D representations of terrain surfaces for flood risk mapping, infrastructure planning, and resource exploration.",
    image: "/DEM.webp",
  },
  {
    id: "3",
    title: "Orthophoto & Mosaicing",
    description:
      "Generating accurate, distortion-free aerial imagery with orthophotos and seamless mosaics for land use planning and construction monitoring.",
    image: "/Orthophoto_&_Mosaicing.webp",
  },
  {
    id: "4",
    title: "LIDAR",
    description:
      "Using laser technology to capture precise 3D data for infrastructure projects, urban development, and environmental analysis.",
    image: "/lidar.webp",
  },
  {
    id: "5",
    title: "GIS Services/Remote Sensing",
    description:
      "Providing spatial data analysis and visualization to support urban planning, agriculture, and resource management.",
    image: "/gis.webp",
  },
  {
    id: "6",
    title: "BIM (Building Information Modeling)",
    description:
      "Creating detailed 3D models of buildings and infrastructure for construction planning and asset management.",
    image: "/bim.webp",
  },
  {
    id: "7",
    title: "Drone Services",
    description:
      "Providing aerial data acquisition services for land surveying, environmental monitoring, and disaster management.",
    image: "/drone.webp", // Ensure this image is placed in /public
  },
];

export const Photogrammetry = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-background">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white dark:bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-red-500 border border-transparent"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {service.id}. {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
