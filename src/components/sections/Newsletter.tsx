import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import SuccessModal from '../ui/SuccessModal';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!supabase) {
      setError('Newsletter service is not available. Please try again later.');
      setIsLoading(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('subscribers')
        .insert([{ 
          email,
          subscribed_at: new Date().toISOString(),
          created_at: new Date().toISOString()
        }]);

      if (insertError) {
        console.error('Insert error:', insertError);
        
        if (insertError.code === '23505') {
          throw new Error('This email is already subscribed.');
        }
        
        if (insertError.code === '42501') {
          throw new Error('Subscription service is temporarily unavailable. Please try again later.');
        }

        throw new Error('Failed to subscribe. Please try again later.');
      }

      setShowSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="section bg-dark-200">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, news, and exclusive offers directly in your inbox.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="px-4 py-2 bg-dark-300 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 flex-grow"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md flex items-center justify-center transition-colors duration-300 ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you for subscribing! You'll receive our latest updates directly in your inbox."
      />
    </section>
  );
};

export default Newsletter;