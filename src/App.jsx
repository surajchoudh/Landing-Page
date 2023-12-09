import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import LandingPage from './components/LandingPage';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <LandingPage />
      <Footer />

    </div>
  );
};

export default App;
