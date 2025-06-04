
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Declare YouTube API types
declare global {
  interface Window {
    YT: any;
  }
}

const Hero = () => {
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Load YouTube iframe API
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/m7iwDxraEb0?autoplay=1&mute=1&loop=1&playlist=m7iwDxraEb0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&start=0&end=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover pointer-events-none"
          style={{
            width: '120vw',
            height: '120vh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Fallback background in case video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-green-400 -z-10">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/e484f06f-ba77-4a09-8123-d4d7f24f7ddd.png" 
              alt="Bubble Brothers Logo" 
              className="h-32 w-auto mx-auto hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-lg"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
