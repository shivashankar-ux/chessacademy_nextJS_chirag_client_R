import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Check vs Mate Chess Academy — classes, tournaments, award ceremonies, and student achievements.",
  openGraph: {
    title: "Gallery | Check vs Mate Chess Academy",
    description:
      "Photos from our classes, tournaments, and student achievements.",
  },
};

// TODO: Replace Unsplash URLs with actual academy photos
const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80",
    alt: "Students competing in a chess tournament",
    category: "Tournament",
    caption: "District-Level Tournament",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    alt: "Chess coaching session at the academy",
    category: "Classes",
    caption: "Group Training Session",
  },
  {
    src: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=800&q=80",
    alt: "Young chess players in concentration",
    category: "Classes",
    caption: "Under-10 Batch in Action",
  },
  {
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
    alt: "Chess trophy and award ceremony",
    category: "Awards",
    caption: "State-Level Award Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    alt: "Online chess training session",
    category: "Online",
    caption: "Online Training — Nationwide",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    alt: "Chess board with pieces during a lesson",
    category: "Classes",
    caption: "Strategy & Tactics Session",
  },
  {
    src: "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=800&q=80",
    alt: "Students celebrating a chess victory",
    category: "Awards",
    caption: "National-Level Achievement",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    alt: "Chess pieces on a wooden board",
    category: "Classes",
    caption: "Opening Principles Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80",
    alt: "Kids playing chess at the academy",
    category: "Classes",
    caption: "Under-6 Beginners Batch",
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    alt: "Student focused on chess game",
    category: "Tournament",
    caption: "Interschool Chess Championship",
  },
  {
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    alt: "Chess coaching with kids",
    category: "Classes",
    caption: "Home Visit Coaching Session",
  },
  {
    src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    alt: "Trophy presentation at chess event",
    category: "Awards",
    caption: "Trophy Presentation Ceremony",
  },
];

const categories = ["All", "Classes", "Tournament", "Awards", "Online"];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-[#8B0000] overflow-hidden"
        aria-label="Gallery Hero"
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/5 font-display text-[300px] leading-none select-none pointer-events-none">
          ♜
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-body font-bold uppercase tracking-widest">
              Photo Gallery
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h1 className="font-display font-black text-white text-4xl md:text-6xl mb-4">
            Our Gallery
          </h1>
          <p className="text-white/75 font-body text-lg max-w-xl mx-auto">
            Moments from our classes, tournaments, and student achievements.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 40L1440 40L1440 20C1200 40 960 0 720 20C480 40 240 0 0 20L0 40Z" fill="#F5F0E8" />
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        id="gallery-grid"
        className="py-20 md:py-28 bg-[#F5F0E8]"
        aria-label="Photo Gallery Grid"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category badges (visual only — full filter would need client-side JS) */}
          <div className="flex flex-wrap gap-3 justify-center mb-12" role="list" aria-label="Gallery categories">
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className={`px-4 py-2 rounded-full text-sm font-body font-semibold border transition-colors ${
                  cat === "All"
                    ? "bg-[#8B0000] text-white border-[#8B0000]"
                    : "bg-white text-[#8B0000] border-[#8B0000]/20 hover:border-[#8B0000] cursor-pointer"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 || index === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white/90 text-[#8B0000] text-xs font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {item.category}
                  </div>
                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-body font-semibold text-sm">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-[#1A0A0A]/40 font-body text-sm mt-8">
            {/* TODO: Update with actual photo count when real photos are added */}
            Showing highlights from our academy. Follow us on social media for
            more updates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B0000] relative overflow-hidden" aria-label="Gallery page CTA">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-4">
            Your Child&apos;s Winning Moment Awaits
          </h2>
          <p className="text-white/75 font-body text-base mb-8">
            Book a free demo and start your chess journey today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] transition-colors shadow-lg"
          >
            Book Free Demo →
          </Link>
        </div>
      </section>
    </>
  );
}
