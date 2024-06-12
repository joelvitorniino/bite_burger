"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  useEffect(() => {
    autoPlayInterval.current = setInterval(scrollNext, 3000);

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [emblaApi]);

  const slides = [
    { src: "/images/burger_1.jpg" },
    { src: "/images/burger_2.jpg" },
    { src: "/images/burger_3.jpg" }
  ];

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className="embla overflow-hidden w-full max-w-[500px] mb-4" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-shrink-0 w-full flex justify-center"
              key={index}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-[402px] h-[365px] mb-[550px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <p className='text-white text-center max-w-[500px] mb-[610px] font-condensed font-medium italic text-lg'>
        Hambúrgueres artesanais feitos com ingredientes frescos e receitas exclusivas, entregues diretamente na sua porta. Sabor que conquista em cada mordida!
      </p>
    </main>
  );
}
