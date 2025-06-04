
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - you can replace these with actual bubble football photos
  const galleryImages = [
    {
      src: "/bubble-brothers/lovable-uploads/c74f7fab-2692-47d2-b05f-62b727143562.png",
      alt: 'Bubble Football Action 1'
    },
    {
      src: "/bubble-brothers/lovable-uploads/26880bd0-fafc-49f8-9a9a-c017df05bbf0.png",
      alt: 'Bubble Football Action 2'
    },
    {
      src: "/bubble-brothers/lovable-uploads/43aa560b-3a8e-4f76-98c4-9dbabf7c50c8.png",
      alt: 'Bubble Football Action 3'
    },
    {
      src: "/bubble-brothers/lovable-uploads/21315e67-c795-4758-a524-2651c81a4989.png",
      alt: 'Bubble Football Action 4'
    },
    {
      src: "/bubble-brothers/lovable-uploads/83892447-41d5-4770-a30b-c939bc035dac.png",
      alt: 'Bubble Football Action 5'
    },
    {
      src : "/bubble-brothers/lovable-uploads/8813d28a-b2c2-4c5c-b390-4c159d8eebc2.png",
      alt: 'Bubble Football Action 6'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t('gallery.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for more photos */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-dashed border-blue-200">
            <h3 className="text-xl font-bold text-gray-700 mb-2">More Photos Coming Soon!</h3>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
