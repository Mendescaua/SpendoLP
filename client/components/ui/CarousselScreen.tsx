import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const imagens = [
  'client/images/Screen1.jpeg',
  'client/images/Screen2.jpeg',
  'client/images/Screen3.jpeg',
  'client/images/Screen4.jpeg',
  'client/images/Screen5.jpeg',
  'client/images/Screen6.jpeg',
  'client/images/Screen7.jpeg',
  'client/images/Screen8.jpeg',
  'client/images/Screen9.jpeg',
];

export default function ScreenshotsSection() {
  const [slideAtivo, setSlideAtivo] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Telas do Aplicativo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como é simples gerenciar suas finanças com o Spendo
          </p>
        </div>

        <div className="overflow-x-hidden">
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={1.4}
            spaceBetween={8}
            onSlideChange={(swiper) => setSlideAtivo(swiper.realIndex)}
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true, // <- Corrigido aqui
                spaceBetween: 20,
              },
            }}
            className="pb-16"
            style={{ overflow: 'visible' }}
          >
            {imagens.map((src, index) => (
              <SwiperSlide key={index} className="w-full mx-auto">
                <div
                  className={`transition-all duration-300 ${
                    index === slideAtivo ? 'scale-100' : 'scale-90 opacity-70'
                  } bg-black rounded-[2.5rem] p-2 w-full h-full flex items-center justify-center`}
                >
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex items-center justify-center">
                    <img
                      src={src}
                      alt={`Tela ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
