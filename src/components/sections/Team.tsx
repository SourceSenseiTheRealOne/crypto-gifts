import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamMember = ({ name, position, image, socials, delay }) => {
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
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-center space-x-3">
            {socials.twitter && (
              <a href={socials.twitter} className="w-8 h-8 rounded-full bg-dark-200/80 text-white flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
                <Twitter size={16} />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} className="w-8 h-8 rounded-full bg-dark-200/80 text-white flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            )}
            {socials.github && (
              <a href={socials.github} className="w-8 h-8 rounded-full bg-dark-200/80 text-white flex items-center justify-center hover:bg-primary-500 transition-colors duration-300">
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-gray-400">{position}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      position: "CTO & Lead Developer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Elena Rodriguez",
      position: "Chief Security Officer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "James Wilson",
      position: "Head of Operations",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section id="team" className="section bg-dark-400">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="mb-4">The <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">People</span> Behind CryptoNexus</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team combines expertise in blockchain technology, finance, and security to deliver a revolutionary crypto platform.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              socials={member.socials}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;