import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // ou outro pacote de ícones que preferir

const imagens = [
  'public/images/screen1.jpeg',
  'public/images/screen2.jpeg',
  'public/images/screen3.jpeg',
  'public/images/screen4.jpeg',
  'public/images/screen5.jpeg',
  'public/images/screen6.jpeg',
  'public/images/screen7.jpeg',
  'public/images/screen8.jpeg',
  'public/images/screen9.jpeg',
];

export default function ScreenshotsSection() {
  const [slideAtivo, setSlideAtivo] = useState(0);

  // refs para os botões customizados
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // para garantir que a ref esteja disponível antes de iniciar o swiper
  const [navReady, setNavReady] = useState(false);
  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Telas do Aplicativo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como é simples gerenciar suas finanças com o Spendo
          </p>
        </div>

        <div className="overflow-x-hidden relative">
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={1.4}
            spaceBetween={8}
            onSlideChange={(swiper) => setSlideAtivo(swiper.realIndex)}
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 20,
              },
            }}
            navigation={
              navReady
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : false
            }
            modules={[Navigation]}
            className="pb-8 swiper-custom"
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

          {/* Botões customizados - bolinha com seta */}
          <button
            ref={prevRef}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition"
            style={{background: '#4678c0'}}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} color='white'/>
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition"
            style={{background: '#4678c0'}}
            aria-label="Próximo"
          >
            <ChevronRight size={24} color='white'/>
          </button>
        </div>
      </div>
    </section>
  );
}
