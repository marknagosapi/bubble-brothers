import React, { useCallback, useMemo } from 'react';
import { Users, UserCheck, UsersRound, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const packages = useMemo(() => [
    {
      icon: Users,
      title: t('services.small.title'),
      description: t('services.small.desc'),
      color: 'from-green-400 to-emerald-500',
      size: '10-12',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: UserCheck,
      title: t('services.medium.title'),
      description: t('services.medium.desc'),
      color: 'from-blue-400 to-blue-600',
      size: '20+',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: UsersRound,
      title: t('services.large.title'),
      description: t('services.large.desc'),
      color: 'from-purple-400 to-pink-500',
      size: '50+',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
    }
  ], [t]);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <pkg.icon className="h-6 w-6 text-white" />
                </div>

                {/* Size Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${pkg.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {pkg.size} fő
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1"
                >
                  <span>{t('contact.title')}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('services.cta.desc')}
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300 flex items-center space-x-2 mx-auto hover:scale-105"
            >
              <span>{t('services.cta.button')}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
