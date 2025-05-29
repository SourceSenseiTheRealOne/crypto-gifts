import React, { useState, useRef } from 'react';
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 rounded-full bg-primary-500/90 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
            <Play size={32} className="text-white ml-1" />
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, rgba(10, 10, 16, 0.9), rgba(10, 10, 16, 0.99)), url("https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
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
                Build Your Future
              </span>
              <h1 className="mb-6 font-bold">
                <span className="block">Revolutionizing Decentralized</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
                  Crypto Gifts
                </span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Crypto Gifts is the world's first fully decentralized gift
                system in which all people help each other realize their
                personal financial dreams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button 
                onClick={() => {
                  const howItWorksSection = document.querySelector('#how-it-works');
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }} 
                className="btn btn-primary"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <a 
                href="/CryptoGifts(en).pdf" 
                download
                className="btn btn-outline"
              >
                Read Whitepaper
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="bg-dark-200 p-4 rounded-2xl shadow-xl max-w-[280px]">
                <div className="relative rounded-xl overflow-hidden max-h-[460px]" style={{ aspectRatio: '9/16' }}>
                  <VideoPlayer 
                    src="https://res.cloudinary.com/dzxalfzwh/video/upload/v1748428078/rtlgcia47z08haqvyiwu.mp4" 
                  />
                </div>
              </div>
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
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img
              src="/coinbase-logo-removebg-preview.png"
              alt="Coinbase"
              className="h-8 transition-all duration-300"
            />
            <img
              src="/binance-logo-removebg-preview.png"
              alt="Binance"
              className="h-8 transition-all duration-300"
            />
            <img
              src="/polygon-logo-removebg-preview.png"
              alt="Polygon"
              className="h-8 transition-all duration-300"
            />
            <img
              src="/chainlink-logo-removebg-preview.png"
              alt="Chainlink"
              className="h-8 transition-all duration-300"
            />
            <img
              src="/avalanche-logo.png"
              alt="Avalanche"
              className="h-8 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
