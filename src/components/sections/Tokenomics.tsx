import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Tokenomics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Tokenomics distribution data
  const distribution = [
    { name: "Public Sale", percentage: 30, color: "bg-primary-500" },
    { name: "Team & Advisors", percentage: 20, color: "bg-secondary-500" },
    { name: "Treasury", percentage: 20, color: "bg-accent-500" },
    { name: "Ecosystem Fund", percentage: 15, color: "bg-indigo-500" },
    { name: "Liquidity", percentage: 10, color: "bg-emerald-500" },
    { name: "Marketing", percentage: 5, color: "bg-amber-500" },
  ];

  // Token details
  const tokenDetails = [
    { label: "Token Name", value: "CryptoNexus" },
    { label: "Symbol", value: "CNEX" },
    { label: "Total Supply", value: "100,000,000 CNEX" },
    { label: "Token Type", value: "ERC-20" },
    { label: "Initial Price", value: "$0.50 USD" },
  ];

  return (
    <section id="tokenomics" className="section bg-dark-300">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Tokenomics
          </span>
          <h2 className="mb-4">Token <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">Distribution</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The CNEX token powers the entire CryptoNexus ecosystem, providing governance rights, fee reductions, and staking rewards.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Distribution pie chart (visual representation) */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-dark-200 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-1/2 h-1/2 rounded-full bg-dark-300 flex items-center justify-center">
                    <span className="font-bold text-primary-400 text-lg">CNEX</span>
                  </div>
                </div>
                
                {/* Pie chart segments */}
                {distribution.map((segment, index) => {
                  const rotation = index > 0 
                    ? distribution.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0) * 3.6
                    : 0;
                  
                  return (
                    <div 
                      key={segment.name}
                      className={`absolute inset-0 ${segment.color}`}
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0, ${50 + 50 * Math.cos(rotation * Math.PI/180)}% ${50 - 50 * Math.sin(rotation * Math.PI/180)}%, ${50 + 50 * Math.cos((rotation + segment.percentage * 3.6) * Math.PI/180)}% ${50 - 50 * Math.sin((rotation + segment.percentage * 3.6) * Math.PI/180)}%)`,
                      }}
                    ></div>
                  );
                })}
              </div>
              
              {/* Floating card with additional info */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-dark-200 p-4 rounded-lg border border-gray-800 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-sm text-gray-400">Market Cap (Fully Diluted)</p>
                <p className="text-xl font-bold">$50,000,000</p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="lg:w-1/2">
            <div className="grid gap-6">
              {/* Token details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">Token Details</h3>
                <div className="space-y-2">
                  {tokenDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-800">
                      <span className="text-gray-400">{detail.label}</span>
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Distribution breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">Distribution Breakdown</h3>
                <div className="space-y-4">
                  {distribution.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span>{item.name}</span>
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-dark-300 rounded-full">
                        <div 
                          className={`h-2 ${item.color} rounded-full`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;