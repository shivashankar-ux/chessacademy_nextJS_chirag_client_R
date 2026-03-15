import Image from "next/image";
import Link from "next/link";

export default function AboutSummary() {
  return (
    <section
      id="about-summary"
      className="py-20 md:py-28 bg-[#F5F0E8]"
      aria-label="About Check vs Mate Chess Academy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#8B0000] rounded-lg" />
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* TODO: Replace with actual academy photo */}
              <Image
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80"
                alt="Students learning chess at Check vs Mate Chess Academy"
                width={800}
                height={600}
                className="object-cover w-full h-80 md:h-96"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#8B0000] text-white rounded-lg px-5 py-4 shadow-xl">
              <p className="font-display font-black text-3xl text-[#C9A84C]">
                2013
              </p>
              <p className="text-xs text-white/80 uppercase tracking-widest font-body mt-0.5">
                Est. Year
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8B0000]" />
              <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
                About Us
              </span>
            </div>

            <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl leading-tight mb-5">
              Check vs Mate{" "}
              <span className="text-[#8B0000]">Chess Academy</span>
            </h2>

            <p className="text-[#1A0A0A]/70 font-body leading-relaxed mb-4">
              Check vs Mate Chess Academy is a dedicated chess training
              institute focused on nurturing young minds through the royal game
              of chess. With a proven training methodology and experienced
              coaching, we help children develop critical thinking, patience,
              and competitive skills.
            </p>
            <p className="text-[#1A0A0A]/70 font-body leading-relaxed mb-6">
              Our students have consistently delivered outstanding performances
              in district, state, and national-level tournaments across Under 7,
              9, 11, and 13 age categories.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8 p-4 bg-white rounded-lg border border-[#8B0000]/10 shadow-sm inline-flex w-fit">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-[#C9A84C] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[#1A0A0A] font-body font-bold text-sm">
                4.9
              </span>
              <span className="text-[#1A0A0A]/50 text-sm font-body">
                on Google (97+ Reviews)
              </span>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#8B0000] text-white font-body font-bold rounded tracking-wide hover:bg-[#6B0000] transition-colors shadow-md"
            >
              Our Full Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
