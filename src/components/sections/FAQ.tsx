import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQItem = ({ question, answer, isOpen, toggle, delay }) => {
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
      className="border-b border-gray-800 last:border-b-0"
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <span className="flex-shrink-0 ml-2">
          {isOpen ? (
            <ChevronUp className="text-primary-400" size={20} />
          ) : (
            <ChevronDown className="text-gray-400" size={20} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What is CryptoNexus?",
      answer: "CryptoNexus is a decentralized finance (DeFi) platform that enables users to invest, earn, and manage cryptocurrency assets. We provide innovative investment strategies, cross-chain swaps, and high-yield opportunities in a secure environment.",
    },
    {
      question: "How do I get started with CryptoNexus?",
      answer: "Getting started is easy. Simply create an account, complete verification, fund your wallet with crypto or fiat, and start investing in your preferred assets or yield-generating strategies.",
    },
    {
      question: "What are the fees for using CryptoNexus?",
      answer: "CryptoNexus charges a small performance fee on earnings (2%) and minimal transaction fees (0.1%). Holding CNEX tokens reduces these fees by up to 50%. There are no account maintenance fees or hidden charges.",
    },
    {
      question: "Is my investment safe with CryptoNexus?",
      answer: "Security is our top priority. We employ bank-grade encryption, multi-signature wallets, regular security audits, and insurance coverage for assets under management. Our smart contracts have been audited by leading security firms.",
    },
    {
      question: "What cryptocurrencies does CryptoNexus support?",
      answer: "CryptoNexus supports major cryptocurrencies including Bitcoin, Ethereum, Solana, Avalanche, and many popular altcoins and stablecoins. We're continuously adding support for new assets based on community demand.",
    },
    {
      question: "How can I earn with the CNEX token?",
      answer: "CNEX token holders can earn through multiple streams: staking rewards, governance participation, fee reductions, and revenue sharing from the protocol. As the ecosystem grows, the token value may appreciate.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section bg-dark-300">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="mb-4">Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">Questions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about CryptoNexus and our services.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="card">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                toggle={() => toggleFAQ(index)}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Can't find what you're looking for?</p>
          <a href="#" className="btn btn-outline">
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;