import React from 'react';
// Ganti dengan path gambar banner Anda
 import bannerImage from '../assets/sedap3.jpg'; // Buat folder assets jika belum ada

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-30 md:py-48 text-white"
      // Gunakan gambar dari assets atau URL
       style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay gelap untuk kontras teks */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-center mx-auto md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
             Temukan Resep Terbaik Pilihan Chef
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Jelajahi ribuan resep masakan nusantara dan mancanegara yang mudah diikuti. Masak lezat setiap hari!
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;