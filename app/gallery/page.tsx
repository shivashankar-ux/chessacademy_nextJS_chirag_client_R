import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Check vs Mate Chess Academy � classes, tournaments, and student achievements.",
};

const galleryItems = [
  { src: "/images/photo1.jpg", alt: "Chess Academy class photo 1" },
  { src: "/images/photo2.jpg", alt: "Chess Academy class photo 2" },
  { src: "/images/photo3.jpg", alt: "Chess Academy class photo 3" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#8B0000] overflow-hidden" aria-label="Gallery Hero">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-body font-bold uppercase tracking-widest">Photo Gallery</span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h1 className="font-display font-black text-white text-4xl md:text-6xl mb-4">Our Gallery</h1>
          <p className="text-white/75 font-body text-lg max-w-xl mx-auto">Moments from our classes, tournaments, and student achievements.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 40L1440 40L1440 20C1200 40 960 0 720 20C480 40 240 0 0 20L0 40Z" fill="#F5F0E8" />
          </svg>
        </div>
      </section>

      <section id="gallery-grid" className="py-20 md:py-28 bg-[#F5F0E8]" aria-label="Photo Gallery Grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#1A0A0A]/40 font-body text-sm mt-10">Follow us on social media for more updates.</p>
        </div>
      </section>

      <section className="py-16 bg-[#8B0000] relative overflow-hidden" aria-label="Gallery CTA">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)", backgroundSize: "50px 50px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-4">Your Child&apos;s Winning Moment Awaits</h2>
          <p className="text-white/75 font-body text-base mb-8">Book a free demo and start your chess journey today.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] transition-colors shadow-lg">
            Book Free Demo ?
          </a>
        </div>
      </section>
    </>
  );
}
