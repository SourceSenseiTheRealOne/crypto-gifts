import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/20 rounded-full filter blur-[100px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="mb-6">Stay Updated with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">CryptoNexus</span></h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new features, token updates, and exclusive opportunities.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 bg-dark-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-800"
              required
            />
            <button
              type="submit"
              className="btn btn-primary whitespace-nowrap"
            >
              Subscribe <Send size={16} className="ml-2" />
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and to receive updates from CryptoNexus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;