import React from 'react';
import { Twitter, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-400 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              Crypto Gifts
            </h3>
            <p className="text-gray-400 max-w-xs">
              The world's first fully decentralized gift system based on USDT on the BSC network.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/CryptoGifts(en).pdf" className="text-gray-400 hover:text-white transition-colors duration-300">Whitepaper</a></li>
              <li><a href="https://metamask.io/download" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Get MetaMask</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Smart Contract</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Subscribe to Updates</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and announcements.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-dark-300 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md flex items-center justify-center transition-colors duration-300"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Crypto Gifts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;