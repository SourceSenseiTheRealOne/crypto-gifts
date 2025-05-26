import React from 'react';
import { CreditCard, Wallet, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Step = ({ number, title, description, icon, delay }) => {
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

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up for a CryptoNexus account using your email. Complete verification to enhance your security and increase transaction limits.",
      icon: <CreditCard className="text-primary-400" size={20} />,
    },
    {
      number: "02",
      title: "Fund Your Wallet",
      description: "Deposit cryptocurrency from an external wallet or buy directly with a credit card, bank transfer, or other supported payment methods.",
      icon: <Wallet className="text-primary-400" size={20} />,
    },
    {
      number: "03",
      title: "Invest & Earn",
      description: "Choose from our curated investment strategies or create your own. Monitor your portfolio's performance and watch your assets grow.",
      icon: <BarChart3 className="text-primary-400" size={20} />,
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
              Getting started with CryptoNexus is easy. Follow these simple steps to begin your crypto investment journey and maximize your returns.
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
              <a href="#" className="btn btn-primary">
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
              <div className="bg-dark-200 p-4 rounded-2xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CryptoNexus App Interface" 
                  className="rounded-lg w-full"
                />
              </div>
              
              {/* Floating card */}
              <motion.div 
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;