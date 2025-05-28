import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, DollarSign, Target } from "lucide-react";

const ProfitHighlight: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({
  icon,
  title,
  value,
}) => (
  <div className="card p-6">
    <div className="flex items-center space-x-4">
      <div className="rounded-full bg-primary-500/10 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-primary-400">{value}</p>
      </div>
    </div>
  </div>
);

const PotentialProfits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <DollarSign className="text-primary-400" />,
      title: "Minimum Investment",
      value: "$8",
    },
    {
      icon: <TrendingUp className="text-primary-400" />,
      title: "Potential Monthly Income",
      value: "$1000+",
    },
    {
      icon: <Target className="text-primary-400" />,
      title: "First Year Target",
      value: "$1M+",
    },
  ];

  return (
    <section id="potential-profits" className="section bg-dark-400 relative">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-dark-300 -skew-y-3 transform origin-top-left"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Profit Potential
          </span>
          <h2 className="mb-4">
            Your Path to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              Financial Freedom
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With our innovative reward system, you can start with just $8 and potentially become a millionaire within your first year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <ProfitHighlight
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/chart-image.png"
                alt="Profit Growth Chart"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-400/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PotentialProfits; 