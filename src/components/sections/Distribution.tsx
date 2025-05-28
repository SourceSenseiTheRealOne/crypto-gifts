import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Gift, Users, Trophy, Sparkles, Code } from "lucide-react";

interface DistributionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  percentage: number;
  delay: number;
}

const DistributionCard: React.FC<DistributionCardProps> = ({ icon, title, description, percentage, delay }) => {
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
      className="card hover:bg-dark-200/80 transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="rounded-full bg-primary-500/10 w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-2xl font-bold text-primary-400">{percentage}%</span>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Distribution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const distributions = [
    {
      icon: <Gift className="text-primary-400" />,
      title: "Personal Bonus",
      description: "Paid for giving a gift of any level by personally invited partners.",
      percentage: 30,
    },
    {
      icon: <Users className="text-primary-400" />,
      title: "Team Bonus",
      description: "Paid for filling in certain binary lines in your structure at each level.",
      percentage: 40,
    },
    {
      icon: <Trophy className="text-primary-400" />,
      title: "Pool Bonus",
      description: "Paid to partners at the five highest levels.",
      percentage: 10,
    },
    {
      icon: <Sparkles className="text-primary-400" />,
      title: "Marketing Budget",
      description: "Regular sweepstakes, gifts to active partners, joint trips and events in different countries of the world.",
      percentage: 10,
    },
    {
      icon: <Code className="text-primary-400" />,
      title: "Developers Commission",
      description: "Allocated for ongoing development and maintenance of the platform.",
      percentage: 10,
    },
  ];

  return (
    <section id="distribution" className="section bg-dark-300">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Distribution System
          </span>
          <h2 className="mb-4">
            How the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              Rewards
            </span> are Distributed
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our transparent distribution system ensures fair rewards for all participants in the ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {distributions.map((item, index) => (
            <DistributionCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              percentage={item.percentage}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Distribution; 