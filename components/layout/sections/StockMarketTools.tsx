'use client';

import { motion } from 'framer-motion';

const tools = [
  { src: 'https://cdn.simpleicons.org/robinhood', alt: 'Robinhood' },
  { src: 'https://cdn.simpleicons.org/e*trade', alt: 'E*TRADE' },
  { src: 'https://cdn.simpleicons.org/tdameritrade', alt: 'TD Ameritrade' },
  { src: 'https://cdn.simpleicons.org/fidelity', alt: 'Fidelity' },
  { src: 'https://cdn.simpleicons.org/thinkorswim', alt: 'ThinkOrSwim' },
  { src: 'https://cdn.simpleicons.org/stocktwits', alt: 'StockTwits' },
  { src: 'https://cdn.simpleicons.org/yahoo', alt: 'Yahoo Finance' },
  { src: 'https://cdn.simpleicons.org/tradingview', alt: 'TradingView' },
  { src: 'https://cdn.simpleicons.org/cryptocompare', alt: 'CryptoCompare' },
  { src: 'https://cdn.simpleicons.org/marketwatch', alt: 'MarketWatch' },
];

export default function StockMarketTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Platforms You'll Use in Stock Market Trading
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
