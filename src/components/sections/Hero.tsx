import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, rgba(10, 10, 16, 0.9), rgba(10, 10, 16, 0.99)), url("https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-5">
                The Future of DeFi
              </span>
              <h1 className="mb-6 font-bold">
                <span className="block">Revolutionizing Crypto</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
                  Investment & Yield
                </span>
              </h1>
              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
                CryptoNexus combines cutting-edge blockchain technology with innovative DeFi protocols to provide secure, high-yield investment opportunities for everyone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a href="#how-it-works" className="btn btn-primary">
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#" className="btn btn-outline">
                Read Whitepaper
              </a>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-dark-200 p-2 rounded-2xl shadow-xl glow">
                {/* Video container */}
                <div className="relative aspect-video bg-dark-100 rounded-lg overflow-hidden">
                  {/* Video placeholder - replace with actual video embed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary-500/90 flex items-center justify-center cursor-pointer hover:bg-primary-600 transition-colors duration-300">
                      <Play size={32} fill="white" className="ml-1" />
                    </div>
                  </div>
                  <img 
                    src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="CryptoNexus Intro Video" 
                    className="object-cover w-full h-full opacity-50"
                  />
                </div>
              </div>
              
              {/* Floating stats cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-dark-200 p-4 rounded-lg border border-gray-800 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-sm text-gray-400">Total Value Locked</p>
                <p className="text-xl font-bold">$142.5M</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-dark-200 p-4 rounded-lg border border-gray-800 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-sm text-gray-400">APY Up To</p>
                <p className="text-xl font-bold text-primary-400">23.5%</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Coinbase_logo.svg" alt="Coinbase" className="h-6 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg" alt="Binance" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cryptologos.cc/logos/polygon-matic-logo.svg" alt="Polygon" className="h-6 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cryptologos.cc/logos/chainlink-link-logo.svg" alt="Chainlink" className="h-6 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://cryptologos.cc/logos/avalanche-avax-logo.svg" alt="Avalanche" className="h-6 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;