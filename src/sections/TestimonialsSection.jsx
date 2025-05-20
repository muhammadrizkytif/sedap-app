import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

// --- Data JSON Dummy Testimoni ---
const dummyTestimonials = [
  { id: 1, name: "Sarah Johnson", avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg", review: "Aplikasi Sedap sangat membantu saya yang baru belajar masak. Resepnya jelas dan mudah diikuti. Hasilnya selalu enak!" },
  { id: 2, name: "Andi Pratama", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg", review: "Suka banget sama fitur pencarian resepnya. Mau masak apa aja, tinggal cari bahannya, langsung ketemu resep yang pas. Recommended!" },
  { id: 3, name: "Lina Marlina", avatarUrl: "https://randomuser.me/api/portraits/women/24.jpg", review: "Resep-resep tradisionalnya otentik banget. Ngingetin masakan ibu di kampung halaman. Terima kasih Sedap!" },
  { id: 4, name: "Bagas Saputra", avatarUrl: "https://randomuser.me/api/portraits/men/18.jpg", review: "Fitur meal plan sangat berguna untuk saya yang sibuk. Jadi nggak bingung lagi mau masak apa setiap hari. Hemat waktu dan pikiran." },
  { id: 5, name: "Dewi Anjani", avatarUrl: "https://randomuser.me/api/portraits/women/42.jpg", review: "Komunitasnya aktif dan ramah. Senang bisa berbagi tips dan hasil masakan dengan pengguna lain. Jadi makin semangat masak!" },
];


const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka Tentang Sedap<span className="text-hijau">.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman memasak yang menyenangkan dari para pengguna setia kami.
          </p>
        </div>

        {/* Layout bisa diubah (misal: slider/carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;