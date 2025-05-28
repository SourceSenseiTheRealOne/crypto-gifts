import React from "react";
import {
  Shield,
  TrendingUp,
  ArrowRightLeft,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, description, delay }) => {
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
      <div className="rounded-full bg-primary-500/10 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Shield className="text-primary-400" />,
      title: "Full decentralization",
      description:
        "The project is based on an open BSC smart contract, which guarantees reliability, transparency and eliminates any kind of risks",
    },
    {
      icon: <TrendingUp className="text-primary-400" />,
      title: "The absence of an administrator and a money vault",
      description:
        "No one can manage the project, they cannot change its terms, and the gifts are immediately distributed to the wallets of the partners.",
    },
    {
      icon: <ArrowRightLeft className="text-primary-400" />,
      title: "Profitability",
      description:
        "With us, absolutely anyone with just $8 to start can become a dollar millionaire in the first year.",
    },
    // {
    //   icon: <Zap className="text-primary-400" />,
    //   title: "Idea",
    //   description:
    //     "What could be better than realizing both your dreams and the dreams of others at the same time? To see those who create a dream life every day and to be one of them yourself!",
    // },
    // {
    //   icon: <Users className="text-primary-400" />,
    //   title: "Community Governance",
    //   description:
    //     "Token holders vote on protocol upgrades and treasury allocation through our DAO structure.",
    // },
    // {
    //   icon: <Globe className="text-primary-400" />,
    //   title: "Global Accessibility",
    //   description:
    //     "Available worldwide with support for multiple languages and fiat on-ramps from 180+ countries.",
    // },
  ];

  return (
    <section id="features" className="section bg-dark-400 relative">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-dark-300 -skew-y-3 transform origin-top-right"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Key Features
          </span>
          <h2 className="mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              Crypto Gifts
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The Crypto Gifts system is based on the gratuitous and decentralized
            donation of USDT on the BSC network. Probably, each of us dreamed
            that many people would give us even a very small amount.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
