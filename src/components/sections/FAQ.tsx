import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
  delay: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle, delay }) => {
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
      question: "What is CryptoGifts and how does it work?",
      answer: "CryptoGifts is the world's first fully decentralized gift system based on USDT on the BSC network. It operates on a binary structure where each person can have up to two direct partners beneath them. When you give a gift of a certain level, you unlock the ability to receive gifts of the same level. The system fills from top to bottom, left to right, maintaining connections to superior partners and generating regular income streams."
    },
    {
      question: "How much do I need to start with CryptoGifts?",
      answer: "You can start your journey with CryptoGifts with just $8! This minimal investment gives you access to our decentralized gifting system. As you progress through the 14 gift levels, your potential for earnings grows significantly, with the possibility of becoming a dollar millionaire within a year through active participation and community building."
    },
    {
      question: "What are the different types of bonuses I can earn?",
      answer: "CryptoGifts offers multiple income streams: a 30% personal bonus for gifts from your direct partners, a 40% team bonus as your structure grows, and exclusive pool bonuses at higher levels. All gifts are distributed instantly to your wallet, ensuring immediate access to your earnings."
    },
    {
      question: "Is CryptoGifts truly decentralized?",
      answer: "Yes, CryptoGifts is fully decentralized with open smart contracts on the BSC network. There are no administrators controlling the system, ensuring complete transparency and reliability. All transactions are automated and executed through smart contracts, making the system trustless and secure."
    },
    {
      question: "How does the binary structure work?",
      answer: "The binary structure means that each person can have a maximum of two direct partners beneath them. When you invite more than two partners, they are automatically placed under existing members in your downline, filling the structure from top to bottom and left to right. This ensures that everyone in the system benefits, not just the top-level participants."
    },
    {
      question: "What happens to my third and subsequent referrals?",
      answer: "Your third and subsequent personally invited partners are automatically placed in the overall structure, filling positions from top to bottom and left to right. While they maintain their connection to you as their superior partner, they also help generate income for the entire structure, creating a sustainable ecosystem of giving and receiving."
    },
    {
      question: "How are the gift levels activated?",
      answer: "Gift levels in CryptoGifts are activated strictly in sequence. You must complete each level before moving to the next one. This systematic approach ensures stable growth and fair distribution of gifts throughout the community, while maintaining the integrity of the binary structure."
    },
    {
      question: "Do I need to actively invite people to receive benefits?",
      answer: "No, one of the unique features of CryptoGifts is that you can receive benefits even without actively inviting others. While building a team can increase your earnings through bonuses, simply participating in the gifting system by giving gifts to others allows you to receive gifts in return."
    }
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
            Find answers to the most common questions about Crypto Gifts and our services.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="space-y-4">
              {faqs.map((faq: FAQItem, index: number) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeIndex === index}
                  toggle={() => toggleFAQ(index)}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Can't find what you're looking for?</p>
          <a href="#" className="btn btn-outline">
            Contact Support
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FAQ;