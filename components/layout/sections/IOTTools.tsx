'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/raspberrypi', alt: 'Raspberry Pi' },
  { src: 'https://cdn.simpleicons.org/arduino', alt: 'Arduino' },
  { src: 'https://cdn.simpleicons.org/esp32', alt: 'ESP32' },
  { src: 'https://cdn.simpleicons.org/ni', alt: 'NI LabVIEW' },
  { src: 'https://cdn.simpleicons.org/mqtt', alt: 'MQTT' },
  { src: 'https://cdn.simpleicons.org/simulink', alt: 'Simulink' },
  { src: 'https://cdn.simpleicons.org/aws', alt: 'AWS IoT' },
  { src: 'https://cdn.simpleicons.org/googlecloud', alt: 'Google Cloud IoT' },
  { src: 'https://cdn.simpleicons.org/microsoftazure', alt: 'Microsoft Azure IoT' },
  { src: 'https://cdn.simpleicons.org/nodejs', alt: 'Node.js' },
];

export default function IOTTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Technologies You'll Learn in IoT
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
