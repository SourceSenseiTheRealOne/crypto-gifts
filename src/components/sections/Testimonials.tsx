import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

interface VideoTestimonialProps {
  name: string;
  role: string;
  videoUrl: string;
  thumbnailUrl: string;
  delay: number;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ name, role, videoUrl, thumbnailUrl, delay }) => {
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
      className="card overflow-hidden"
    >
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group cursor-pointer">
        <video
          className="w-full h-full object-cover"
          poster={thumbnailUrl}
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-dark-300/50 flex items-center justify-center group-hover:bg-dark-300/30 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="text-white ml-1" size={24} />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-400">{role}</p>
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
      videoUrl: "/videos/testimonial1.mp4",
      thumbnailUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Michael Chen",
      role: "Crypto Entrepreneur",
      videoUrl: "/videos/testimonial2.mp4",
      thumbnailUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Emily Rodriguez",
      role: "DeFi Developer",
      videoUrl: "/videos/testimonial3.mp4",
      thumbnailUrl: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
            Hear directly from our community members about their experiences with Crypto Gifts and how it has transformed their approach to DeFi.
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