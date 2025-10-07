'use client'

import { motion } from 'framer-motion'

const blockchainToolsIcons = [
  { src: 'https://cdn.simpleicons.org/ethereum', alt: 'Ethereum' },
  { src: 'https://cdn.simpleicons.org/solidity', alt: 'Solidity' },
  { src: 'https://cdn.simpleicons.org/hardhat', alt: 'Hardhat' },
  { src: 'https://cdn.simpleicons.org/trufflesuite', alt: 'Truffle' },
  { src: 'https://cdn.simpleicons.org/metamask', alt: 'Metamask' },
  { src: 'https://cdn.simpleicons.org/ipfs', alt: 'IPFS' },
  { src: 'https://cdn.simpleicons.org/web3dotjs', alt: 'Web3.js' },
  { src: 'https://cdn.simpleicons.org/ethers', alt: 'Ethers.js' },
  { src: 'https://cdn.simpleicons.org/alchemy', alt: 'Alchemy' },
  { src: 'https://cdn.simpleicons.org/infura', alt: 'Infura' },
  { src: 'https://cdn.simpleicons.org/polygon', alt: 'Polygon' },
  { src: 'https://cdn.simpleicons.org/binance', alt: 'BNB Chain' },
  { src: 'https://cdn.simpleicons.org/github', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/visualstudiocode', alt: 'VS Code' },
]

export default function BlockchainTools() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Tools & Frameworks You’ll Master
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {blockchainToolsIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-md p-4 flex flex-col items-center shadow-sm bg-white cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="h-[50px] flex items-center justify-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-[40px] w-auto object-contain transition duration-300"
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">
                {icon.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
