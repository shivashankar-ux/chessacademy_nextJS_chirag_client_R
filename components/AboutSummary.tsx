import Image from "next/image";

export default function AboutSummary() {
  return (
    <section
      id="about-summary"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F5F0E8]"
      aria-label="About Check vs Mate Chess Academy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#8B0000] rounded-lg" />
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/placeholder.jpg"
                alt="Placeholder for Chess Academy Image (Please replace with your image)"
                width={800}
                height={600}
                className="object-cover w-full h-80 md:h-96"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#8B0000] text-white rounded-lg px-5 py-4 shadow-xl">
              <p className="font-display font-black text-3xl text-[#C9A84C]">2013</p>
              <p className="text-xs text-white/80 uppercase tracking-widest font-body mt-0.5">Est. Year</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8B0000]" />
              <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">About Us</span>
            </div>
            <h1 className="font-display font-black text-[#1A0A0A] text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Check vs Mate <span className="text-[#8B0000]">Chess Academy</span>
            </h1>
            <p className="text-[#1A0A0A]/70 font-body leading-relaxed mb-4">
              Check vs Mate Chess Academy is a dedicated chess training institute focused on nurturing young minds through the royal game of chess. With a proven training methodology and experienced coaching, we help children develop critical thinking, patience, and competitive skills.
            </p>
            <div className="bg-[#FFF8E7] border-l-4 border-[#8B0000] p-4 mb-6 rounded shadow-sm">
              <p className="text-[#8B0000] font-body font-semibold text-lg leading-relaxed">
                Our students have consistently delivered outstanding performances in district, state, and national-level tournaments across Under 7, 9, 11, and 13 age categories.
              </p>
            </div>
            <div className="flex items-center gap-2 p-4 bg-white rounded-lg border border-[#8B0000]/10 shadow-sm w-fit">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-[#C9A84C] text-lg">★</span>
                ))}
              </div>
              <span className="text-[#1A0A0A] font-body font-bold text-sm">4.9</span>
              <span className="text-[#1A0A0A]/50 text-sm font-body">on Google (97+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}