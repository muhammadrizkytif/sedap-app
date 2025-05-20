import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Tentang Sedap<span className="text-hijau"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sedap adalah platform digital Anda untuk menemukan inspirasi memasak tanpa batas. Kami percaya bahwa setiap orang bisa memasak hidangan lezat dengan panduan yang tepat. Kami menyajikan ribuan resep teruji, tips memasak dari para ahli, dan komunitas pecinta kuliner yang suportif. Bergabunglah dengan Sedap dan mulailah petualangan rasa Anda!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;