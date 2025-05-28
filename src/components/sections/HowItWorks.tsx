import React, { useState, useRef } from 'react';
import { Wallet, Link, DollarSign, Share2, ArrowRight, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start space-x-4"
    >
      <div className="flex-shrink-0 bg-primary-500/10 w-12 h-12 rounded-full flex items-center justify-center text-primary-400 font-bold">
        {number}
      </div>
      <div>
        <div className="flex items-center mb-2">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

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

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Create a Metamask Wallet",
      description: "Download and set up your Metamask wallet - your gateway to the decentralized world. It's free, secure, and takes just a few minutes to get started.",
      icon: <Wallet className="text-primary-400" size={20} />,
    },
    {
      number: "02",
      title: "Get Referral Link",
      description: "Obtain your unique referral link that you can share with friends and family. Each referral brings rewards and helps grow the CryptoGifts community.",
      icon: <Link className="text-primary-400" size={20} />,
    },
    {
      number: "03",
      title: "Fund Your Wallet",
      description: "Add funds to your Metamask wallet using your preferred cryptocurrency. Make sure to have enough to cover your desired gift amount plus transaction fees.",
      icon: <DollarSign className="text-primary-400" size={20} />,
    },
    {
      number: "04",
      title: "Buy & Share",
      description: "Purchase CryptoGifts tokens and share them with your network. Watch as your community grows and rewards multiply through our innovative gifting system.",
      icon: <Share2 className="text-primary-400" size={20} />,
    },
  ];

  return (
    <section id="how-it-works" className="section bg-dark-300 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
              Getting Started
            </span>
            <h2 className="mb-6">How to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">Start Investing</span></h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Getting started with Crypto Gifts is easy. Follow these simple steps to begin your crypto investment journey and maximize your returns.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <a 
                href="https://metamask.io/download" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Start Now <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="bg-dark-200 p-4 rounded-2xl shadow-xl max-w-[320px] mx-auto">
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '9/16' }}>
                  <VideoPlayer 
                    src="https://res.cloudinary.com/dzxalfzwh/video/upload/v1748428081/qjeydcozyv5eyttlncjp.mp4" 
                  />
                </div>
              </div>
              
              {/* Floating card */}
              {/* <motion.div 
                className="absolute -bottom-8 -right-8 bg-dark-100 p-6 rounded-lg border border-gray-800 shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 mr-3">
                    <Wallet size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Current Balance</p>
                    <p className="text-lg font-bold">12,345 CNEX</p>
                  </div>
                </div>
                <div className="h-2 bg-dark-300 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">Initial</span>
                  <span className="text-xs text-gray-500">Target: 25,000</span>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;