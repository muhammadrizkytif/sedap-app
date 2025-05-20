import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center transition duration-300 ease-in-out hover:-translate-y-2">
       <img
        src={testimonial.avatarUrl || `https://avatar-placeholder.iran.liara.run/username?username=${testimonial.name.split(' ').join('+')}`}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full mx-auto mb-5 border-4 border-gray-200"
        />
      <blockquote className="text-gray-600 italic leading-relaxed mb-5">
        "{testimonial.review}"
      </blockquote>
      <p className="font-semibold text-gray-800 text-lg">
        {testimonial.name}
      </p>
    </div>
  );
};

export default TestimonialCard;