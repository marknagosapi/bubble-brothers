
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const handleCall = () => {
    window.open('tel:+40745460874', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:bubblebrothers.ms@gmail.com', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/40745460874', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl opacity-90 mb-6">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-8">{t('contact.title')}</h3>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{t('contact.phone')}</h4>
                    <button
                      onClick={handleCall}
                      className="text-white/90 hover:text-white transition-colors text-lg"
                    >
                      +40 745 460 874
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{t('contact.email')}</h4>
                    <button
                      onClick={handleEmail}
                      className="text-white/90 hover:text-white transition-colors break-all"
                    >
                      bubblebrothers.ms@gmail.com
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{t('contact.coverage')}</h4>
                    <p className="text-white/90">
                      {t('contact.coverage.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-8">{t('contact.quick')}</h3>
            </div>

            {/* Call Now Button */}
            <button
              onClick={handleCall}
              className="w-full bg-white text-blue-600 py-4 px-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>{t('contact.call')}</span>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>{t('contact.whatsapp')}</span>
            </button>

            {/* Email Button */}
            <button
              onClick={handleEmail}
              className="w-full bg-white/20 backdrop-blur-md text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 border border-white/30"
            >
              <Mail className="h-6 w-6" />
              <span>{t('contact.send_email')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
