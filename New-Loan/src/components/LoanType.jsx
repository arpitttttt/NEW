import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Jitendra G.",
    date: "09 Apr 2025",
    rating: 5,
    text: "Very good rates and good service,",
  },
  {
    name: "Kevin W.",
    date: "08 Apr 2025",
    rating: 5,
    text: "Friendly staff with a highly professional approach to the finance industry...",
  },
  {
    name: "Aman P.",
    date: "01 Apr 2025",
    rating: 5,
    text: "Sharon and Team at loans.com were amazing...",
  },
  {
    name: "Kevin W.",
    date: "08 Apr 2025",
    rating: 5,
    text: "Friendly staff with a highly professional approach to the finance industry...",
  },
  {
    name: "Aman P.",
    date: "01 Apr 2025",
    rating: 5,
    text: "Sharon and Team at loans.com were amazing...",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-pink-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Join our other customers
      </h2>
      
      <Swiper
        modules={[Pagination]} 
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000, // The delay between slides in milliseconds (3000ms = 3s)
          disableOnInteraction: false, // Ensures autoplay doesn't stop after user interaction
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Star icon component
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
