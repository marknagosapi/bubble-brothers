
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';
import FloatingButtons from '@/components/FloatingButtons';
import Gallery from '@/components/Gallery';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

        <Hero />
        <Header />
        <AboutUs />
        <About />
        <Services />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
};

export default Index;
