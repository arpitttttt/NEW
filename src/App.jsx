import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RatesAndFees from './components/LoanDetails';
import InterestRates from './components/Application';
import LoanSection from './components/Testimonials';
import TestimonialSlider from './components/LoanType';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <RatesAndFees />
    <InterestRates />
    <LoanSection />
    <TestimonialSlider />
    <Footer />
  </div>
);

export default App;
