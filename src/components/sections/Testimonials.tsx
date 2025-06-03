import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

interface VideoTestimonialProps {
  name: string;
  role: string;
  videoUrl: string;
  delay: number;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ name, role, videoUrl, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="card overflow-hidden"
    >
      <div className="relative mb-4 rounded-lg overflow-hidden group cursor-pointer" style={{ maxWidth: '300px', height: '534px', margin: '0 auto' }}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={handlePlayClick}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="absolute inset-0 bg-dark-300/50 flex items-center justify-center group-hover:bg-dark-300/30 transition-all duration-300" onClick={handlePlayClick}>
            <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="text-white ml-1" size={24} />
            </div>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1 text-center">{name}</h3>
      <p className="text-gray-400 text-center">{role}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Investment Manager",
      videoUrl: "https://res.cloudinary.com/dzxalfzwh/video/upload/v1748947298/WhatsApp_Video_2025-06-01_at_22.52.25_sc6uj9.mp4",
    },
    {
      name: "Michael Chen",
      role: "Crypto Entrepreneur",
      videoUrl: "https://res.cloudinary.com/dzxalfzwh/video/upload/v1748947298/WhatsApp_Video_2025-05-30_at_20.00.05_rrmxfm.mp4",
    },
    {
      name: "Emily Rodriguez",
      role: "DeFi Developer",
      videoUrl: "https://res.cloudinary.com/dzxalfzwh/video/upload/v1748947298/WhatsApp_Video_2025-05-31_at_20.45.04_cfsxxc.mp4",
    },
  ];

  return (
    <section id="testimonials" className="section bg-dark-200">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear directly from our community members about their experiences with Crypto Gifts and how it has transformed their approach to Web3.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial
              key={testimonial.name}
              {...testimonial}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 