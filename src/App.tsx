import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Tokenomics from './components/sections/Tokenomics';
import FAQ from './components/sections/FAQ';
import Team from './components/sections/Team';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Tokenomics />
        <Team />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;