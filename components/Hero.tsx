export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-[#8B0000]" />
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)", backgroundSize: "60px 60px" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F0E8] to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 text-white/5 font-display select-none pointer-events-none">
        <span style={{ fontSize: "clamp(200px, 30vw, 400px)", lineHeight: 1 }}>♞</span>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-8">
            <span className="text-[#C9A84C]">★</span>
            <span className="text-white/90 text-sm font-body font-semibold tracking-wide">4.9 Rating · 97+ Google Reviews</span>
          </div>
          <h1 className="font-display font-black text-white leading-tight mb-6">
            <span className="block text-4xl sm:text-5xl lg:text-7xl">Where Young Minds</span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl" style={{ WebkitTextStroke: "2px #C9A84C", color: "transparent" }}>Master Chess</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl font-body leading-relaxed mb-10 max-w-xl">
            Expert coaching for children of all ages — group classes, online sessions and home visits. 100+ students trained since 2013.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              Book a Free Demo
            </a>
          </div>
          <div className="flex flex-wrap gap-8 mt-14 justify-center md:justify-start">
            {[
              { num: "100+", label: "Kids Trained" },
              { num: "12+", label: "Years Experience" },
              { num: "4.9★", label: "Google Rating" },
              { num: "4", label: "Age Groups" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display font-black text-[#C9A84C] text-3xl">{stat.num}</p>
                <p className="text-white/60 text-xs font-body uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="#F5F0E8" />
        </svg>
      </div>
    </section>
  );
}