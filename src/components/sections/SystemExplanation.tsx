import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Network, Gift, Users, ArrowDownToLine, ArrowRightToLine, Play } from "lucide-react";

interface ExplanationStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

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

const ExplanationStep: React.FC<ExplanationStepProps> = ({ icon, title, description, delay }) => {
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
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const SystemExplanation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Network className="text-primary-400" />,
      title: "Structured Growth",
      description: "The third and subsequent personally invited partners fill out the overall structure from top to bottom, from left to right, while maintaining their connection to the superior partner.",
    },
    {
      icon: <ArrowDownToLine className="text-primary-400" />,
      title: "Level-Based Activation",
      description: "By giving a gift of a certain level, you get the opportunity to receive gifts of the same level. The gift levels are activated strictly in turn.",
    },
    {
      icon: <Gift className="text-primary-400" />,
      title: "Universal Benefits",
      description: "In our system, not only those who actively invite people receive gifts, but also those partners who simply gave gifts to others.",
    },
  ];

  return (
    <section id="system-explanation" className="section bg-dark-300">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            System Overview
          </span>
          <h2 className="mb-4">
            How Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              System Works
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Understanding our innovative gift-giving and reward structure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <ExplanationStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={0.1 + index * 0.1}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-dark-200 p-4 rounded-2xl shadow-xl max-w-[320px] mx-auto">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <VideoPlayer 
                  src="https://res.cloudinary.com/dzxalfzwh/video/upload/v1749052585/VID-20250421-WA0006_1_kfs0l5.mp4" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemExplanation; 