import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';
import Testimonials from './components/sections/Testimonials';
import Distribution from './components/sections/Distribution';
import PotentialProfits from './components/sections/PotentialProfits';
import SystemExplanation from './components/sections/SystemExplanation';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SystemExplanation />
        <Distribution />
        <PotentialProfits />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;