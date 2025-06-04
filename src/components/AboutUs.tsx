
import React from 'react';
import { Code, Heart, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section id="aboutus" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('aboutus.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t('aboutus.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">{t('aboutus.names')}</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 italic">
                {t('aboutus.intro')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('aboutus.description')}
              </p>
              
              <div className="flex items-start space-x-3 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  {t('aboutus.mission')}
                </p>
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <Code className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Programozók</p>
                <p className="text-xs text-gray-600">Nap közben</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <Smile className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Szórakoztatók</p>
                <p className="text-xs text-gray-600">Hétvégén</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Barátok</p>
                <p className="text-xs text-gray-600">Mindig</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/bubble-brothers/lovable-uploads/c41a70c5-d952-44da-be8d-f4fdc60cf3a8.png"
                alt="Bubble Brothers - Márk & Ádám"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <p className="text-sm font-bold text-gray-900">Bubble Brothers</p>
              </div>
              
              {/* Bottom Badge */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 shadow-lg">
                <p className="text-sm font-bold">Márk & Ádám</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>

        {/* Action Photos Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Akció Közben!</h3>
            <p className="text-lg text-gray-600">Néhány pillanat a bubble football pályáról</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/bubble-brothers/lovable-uploads/c74f7fab-2692-47d2-b05f-62b727143562.png"
                alt="Bubble football játék"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/bubble-brothers/lovable-uploads/26880bd0-fafc-49f8-9a9a-c017df05bbf0.png"
                alt="Bubble football ütközés"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/bubble-brothers/lovable-uploads/43aa560b-3a8e-4f76-98c4-9dbabf7c50c8.png"
                alt="Csapat játék"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/bubble-brothers/lovable-uploads/21315e67-c795-4758-a524-2651c81a4989.png"
                alt="Foci akció"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/bubble-brothers/lovable-uploads/83892447-41d5-4770-a30b-c939bc035dac.png"
                alt="Góró a földön"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/bubble-brothers/lovable-uploads/8813d28a-b2c2-4c5c-b390-4c159d8eebc2.png"
                alt="Bubble brothers csapat"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
