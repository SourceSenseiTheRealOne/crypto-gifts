import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Tokenomics from './components/sections/Tokenomics';
import FAQ from './components/sections/FAQ';
import Team from './components/sections/Team';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';
import Whitepaper from './components/pages/Whitepaper';

const HomePage = () => {
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
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Router>
  );
}

export default App;