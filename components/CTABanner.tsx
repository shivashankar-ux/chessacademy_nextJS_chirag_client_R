import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="py-16 bg-[#8B0000] relative overflow-hidden"
      aria-label="Book a Free Demo Class"
    >
      {/* Chess pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Decorative large pieces */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/5 font-display text-[150px] leading-none select-none pointer-events-none">
        ♛
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/5 font-display text-[150px] leading-none select-none pointer-events-none">
        ♚
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-black text-white text-3xl md:text-5xl mb-4">
          Ready to Make Your First Move?
        </h2>
        <p className="text-white/75 font-body text-lg mb-8 max-w-xl mx-auto">
          Book a free demo class today — available at our Gurugram academy,
          online nationwide, or at your home.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            Book Free Demo Class
          </Link>
          <a
            href="tel:+919810436745"
            className="px-8 py-4 bg-white/10 text-white font-body font-semibold text-base rounded tracking-wide border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
