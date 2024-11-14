import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const CollectionCarousel = () => {
  // Obtener traducciones de testimonios
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true });

  let slidesPerView = 1;
  if (window.innerWidth >= 1024) {
    slidesPerView = 4;
  }

  return (
    <Swiper
      grabCursor={true}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      slidesPerView={slidesPerView}
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-96 h-[500px] md:w-screen"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="flex flex-col justify-between items-center w-full">
          <div className="testimonialsCard p-5 bg-gray-800 rounded-lg text-white">
            <p className="mb-4">{testimonial.message}</p>
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full object-cover object-center mr-4"
                src={testimonial.image}
                alt={`${testimonial.name} profile`}
              />
              <div className="flex flex-col text-left">
                <h5 className="text-lg font-semibold">{testimonial.name}</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

