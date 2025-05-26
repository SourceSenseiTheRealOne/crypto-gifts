import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Book, ChevronRight } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

interface WhitepaperSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
  id?: string;
}

const WhitepaperSection: React.FC<WhitepaperSectionProps> = ({ title, children, delay = 0, id }) => {
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
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </motion.div>
  );
};

const Whitepaper = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CryptoNexus Whitepaper
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              A comprehensive overview of our revolutionary DeFi platform, tokenomics, and vision for the future.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/whitepaper.pdf"
                className="btn btn-primary"
                download
              >
                <Download className="mr-2" size={20} />
                Download PDF
              </a>
              <a
                href="#whitepaper-content"
                className="btn btn-outline"
              >
                <FileText className="mr-2" size={20} />
                Read Online
              </a>
            </div>
          </motion.div>

          {/* Table of Contents */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="card sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    Introduction
                  </a>
                  <a href="#technology" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    Technology
                  </a>
                  <a href="#tokenomics" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    Tokenomics
                  </a>
                  <a href="#roadmap" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    Roadmap
                  </a>
                  <a href="#team" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    Team
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div id="whitepaper-content" className="md:col-span-2">
              <WhitepaperSection title="Introduction" id="introduction">
                <p className="text-gray-400 mb-4">
                  CryptoNexus is a revolutionary DeFi platform that combines cutting-edge blockchain technology with user-friendly interfaces to make decentralized finance accessible to everyone. Our mission is to bridge the gap between traditional finance and the crypto world, providing innovative solutions for both retail and institutional investors.
                </p>
                <p className="text-gray-400">
                  This whitepaper outlines our vision, technology stack, tokenomics model, and roadmap for the future. We believe in transparency and community governance, which is why we're making this document publicly available to all stakeholders.
                </p>
              </WhitepaperSection>

              <WhitepaperSection title="Technology" id="technology" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Architecture Overview</h3>
                  <p className="text-gray-400">
                    Our platform is built on a multi-layer architecture that combines the security of Ethereum with the scalability of Layer 2 solutions. We utilize advanced smart contracts, cross-chain bridges, and automated market makers to provide a seamless trading experience.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Security Measures</h3>
                  <p className="text-gray-400">
                    Security is our top priority. We implement multiple layers of protection, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 ml-4">
                    <li>Multi-signature wallets for fund management</li>
                    <li>Regular security audits by leading firms</li>
                    <li>Real-time monitoring and automated threat detection</li>
                    <li>Insurance coverage for user funds</li>
                  </ul>
                </div>
              </WhitepaperSection>

              <WhitepaperSection title="Tokenomics" id="tokenomics" delay={0.2}>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    The CNEX token is the native utility token of the CryptoNexus ecosystem. It serves multiple purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 ml-4">
                    <li>Governance rights in the CryptoNexus DAO</li>
                    <li>Fee reductions on platform transactions</li>
                    <li>Staking rewards and yield farming opportunities</li>
                    <li>Access to premium features and services</li>
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Token Distribution</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="card">
                        <h5 className="font-semibold mb-2">Initial Supply</h5>
                        <p className="text-gray-400">100,000,000 CNEX</p>
                      </div>
                      <div className="card">
                        <h5 className="font-semibold mb-2">Max Supply</h5>
                        <p className="text-gray-400">250,000,000 CNEX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </WhitepaperSection>

              <WhitepaperSection title="Roadmap" id="roadmap" delay={0.3}>
                <div className="space-y-6">
                  <div className="card">
                    <h4 className="font-semibold mb-2">Phase 1: Foundation (Q2 2024)</h4>
                    <ul className="list-disc list-inside text-gray-400 ml-4">
                      <li>Platform launch and initial feature rollout</li>
                      <li>Security audits and stress testing</li>
                      <li>Community building and marketing initiatives</li>
                    </ul>
                  </div>
                  
                  <div className="card">
                    <h4 className="font-semibold mb-2">Phase 2: Expansion (Q3-Q4 2024)</h4>
                    <ul className="list-disc list-inside text-gray-400 ml-4">
                      <li>Advanced trading features implementation</li>
                      <li>Cross-chain integration expansion</li>
                      <li>Mobile app development</li>
                    </ul>
                  </div>
                  
                  <div className="card">
                    <h4 className="font-semibold mb-2">Phase 3: Innovation (2025)</h4>
                    <ul className="list-disc list-inside text-gray-400 ml-4">
                      <li>AI-powered trading strategies</li>
                      <li>Institutional partnerships</li>
                      <li>Global expansion and localization</li>
                    </ul>
                  </div>
                </div>
              </WhitepaperSection>

              <WhitepaperSection title="Team" id="team" delay={0.4}>
                <p className="text-gray-400 mb-6">
                  Our team consists of industry veterans from both traditional finance and blockchain technology sectors. With decades of combined experience, we're committed to building the future of decentralized finance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Team member cards would go here */}
                </div>
              </WhitepaperSection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Whitepaper; 