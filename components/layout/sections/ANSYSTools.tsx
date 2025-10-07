'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/ansys', alt: 'ANSYS' },
  { src: 'https://cdn.simpleicons.org/solidworks', alt: 'SolidWorks' },
  { src: 'https://cdn.simpleicons.org/autodesk', alt: 'AutoCAD' },
  { src: 'https://cdn.simpleicons.org/siemens', alt: 'Siemens NX' },
  { src: 'https://cdn.simpleicons.org/abacus', alt: 'ABAQUS' },
  { src: 'https://cdn.simpleicons.org/altair', alt: 'Altair HyperWorks' },
  { src: 'https://cdn.simpleicons.org/comsol', alt: 'COMSOL Multiphysics' },
  { src: 'https://cdn.simpleicons.org/matlab', alt: 'MATLAB' },
  { src: 'https://cdn.simpleicons.org/openfoam', alt: 'OpenFOAM' },
  { src: 'https://cdn.simpleicons.org/ansysfluent', alt: 'ANSYS Fluent' },
];

export default function ANSYSTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in ANSYS for FEA & CFD
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((icon, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-md bg-white shadow-sm flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src={icon.src} alt={icon.alt} className="h-[40px] object-contain" />
              <span className="mt-2 text-sm text-gray-700">{icon.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
