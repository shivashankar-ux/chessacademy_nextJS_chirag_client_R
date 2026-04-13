import Image from "next/image";

export default function AboutSummary() {
  return (
    <section
      id="about-summary"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      aria-label="About Check vs Mate Chess Academy"
    >
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1920&hq=1)' }}
      />
      {/* Overlay to preserve text legibility and original color scheme */}
      <div className="absolute inset-0 bg-[#F5F0E8]/90 backdrop-blur-[1px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:p-6">
            {/* Decorative Offset Border - Responsive */}
            <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 w-full h-full border-2 border-[#8B0000] rounded-xl opacity-20 md:opacity-100" />
            
            {/* Main Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto">
              <Image
                src="/images/photo1.jpg"
                alt="Expert Chess Coaching at Check vs Mate Academy"
                width={800}
                height={1000}
                className="object-cover object-top w-full h-full md:h-[500px] lg:h-[600px]"
                priority
              />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 bg-[#8B0000] text-white rounded-xl px-6 py-5 shadow-2xl transform hover:scale-105 transition-transform duration-300 z-20">
              <div className="flex flex-col items-center">
                <p className="font-display font-black text-3xl md:text-4xl text-[#C9A84C] leading-none">2013</p>
                <div className="h-px w-8 bg-[#C9A84C]/30 my-2" />
                <p className="text-[10px] md:text-xs text-white/80 uppercase tracking-[0.2em] font-body font-bold text-center">Established</p>
              </div>
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