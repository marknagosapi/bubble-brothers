import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Heart, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/e484f06f-ba77-4a09-8123-d4d7f24f7ddd.png" 
                  alt="Bubble Brothers Logo" 
                  className="h-12 w-auto"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Bubble Brothers
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('footer.text')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">{t('footer.contact')}</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+40 745 460 874</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>bubblebrothers.ms@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>Târgu Mureș & surrounding areas</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Building className="h-5 w-5" />
                  <span>CUI: 51233434</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">{t('footer.quicklinks')}</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.gallery')}
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Bubble Brothers. {t('footer.copyright')}
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>{t('footer.madewith')}</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>{t('footer.madewith.for')}</span>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-full text-sm hover:from-blue-700 hover:to-green-600 transition-all duration-300 hover:scale-105"
              >
                {t('footer.backtotop')}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* SAL and SOL Images - Below Footer */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <a 
              href="https://reclamatiisal.anpc.ro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://cdn.shopify.com/s/files/1/0859/3673/4535/files/anpc-sal.webp?v=1732730923" 
                alt="SAL" 
                className="h-16 w-auto object-contain"
              />
            </a>
            <a 
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://cdn.shopify.com/s/files/1/0859/3673/4535/files/anpc-sol.webp?v=1732730923" 
                alt="SOL" 
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
