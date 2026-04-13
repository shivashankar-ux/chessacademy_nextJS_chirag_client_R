"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/photo1.jpg",
    alt: "Chess Academy students in action",
    caption: "Dynamic learning and strategic engagement"
  },
  {
    src: "/images/photo2.jpg",
    alt: "Focus and concentration at the academy",
    caption: "Fostering deep focus through the game"
  },
  {
    src: "/images/photo3.jpg",
    alt: "Chess tournament success",
    caption: "Preparing for competitive excellence"
  },
  {
    src: "/images/photo1.jpg",
    alt: "Academy classroom session",
    caption: "Interactive group training sessions"
  }
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-5xl mb-4">
            Academy <span className="text-[#8B0000]">Moments</span>
          </h2>
          <div className="w-24 h-1 bg-[#8B0000] mx-auto rounded-full" />
        </div>

        <div className="relative group max-w-5xl mx-auto h-[350px] md:h-[550px] w-full m-auto py-4 px-4 relative">
          <div className="w-full h-full rounded-3xl bg-center bg-cover duration-500 overflow-hidden relative shadow-2xl border-4 border-white">
             {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <p className="font-display font-bold text-xl md:text-2xl drop-shadow-lg">{img.caption}</p>
                    </div>
                </div>
             ))}
          </div>

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all z-20 backdrop-blur-sm border border-white/20">
            <ChevronLeft onClick={prevSlide} size={30} />
          </div>
          
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all z-20 backdrop-blur-sm border border-white/20">
            <ChevronRight onClick={nextSlide} size={30} />
          </div>

          {/* Dots */}
          <div className="flex top-4 justify-center py-6 gap-3">
            {images.map((_slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${slideIndex === currentIndex ? 'bg-[#8B0000] w-8 h-2' : 'bg-[#1A0A0A]/20 w-2 h-2 hover:bg-[#8B0000]/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
