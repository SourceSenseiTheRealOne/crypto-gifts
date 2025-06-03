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
              <span className="text-gray-600 cursor-not-allowed opacity-50">
                <Twitter size={20} />
              </span>
              <span className="text-gray-600 cursor-not-allowed opacity-50">
                <MessageCircle size={20} />
              </span>
              <a 
                href="https://t.me/cryptogiftschat" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 16 16" 
                  fill="currentColor"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
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