
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header />
        <Hero />
        <AboutUs />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
