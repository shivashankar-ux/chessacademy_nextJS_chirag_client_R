import Image from "next/image";

const coaches = [
  {
    name: "Puneet Manchanda",
    role: "Founder",
    since: "Est. 2013",
    exp: "12+ years of full-time coaching",
    desc: "Founder of Check vs Mate Chess Academy (est. 2013), with 12+ years of full-time coaching experience, having mentored hundreds of students across age groups and competitive levels.",
    // TODO: Replace with actual founder photo
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    imgAlt: "Puneet Manchanda — Founder, Check vs Mate Chess Academy",
    accent: "#8B0000",
    badge: "♟ Founder",
  },
  {
    name: "Chirag Atreja",
    role: "Co-Founder",
    since: "Since 2020",
    exp: "Passionate & structured coach",
    desc: "Actively involved in training students since 2020, with a strong focus on concept clarity, structured preparation, and competitive mindset development.",
    // TODO: Replace with actual co-founder photo
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    imgAlt: "Chirag Atreja — Co-Founder, Check vs Mate Chess Academy",
    accent: "#C9A84C",
    badge: "♞ Co-Founder",
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="py-20 md:py-28 bg-[#1A0A0A]"
      aria-label="Meet Our Coaches"
      style={{
        backgroundImage:
          "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%)",
        backgroundSize: "50px 50px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-body font-bold uppercase tracking-widest">
              About the Coaches
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-3">
            Puneet Manchanda &{" "}
            <span className="text-[#C9A84C]">Chirag Atreja</span>
          </h2>
          <p className="text-white/50 font-body max-w-lg mx-auto">
            Experienced and passionate chess coaches committed to developing
            chess excellence in children.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/40 hover:bg-white/10 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={coach.img}
                  alt={coach.imgAlt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A] via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#8B0000] text-[#C9A84C] text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                  {coach.badge}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-white text-xl">
                      {coach.name}
                    </h3>
                    <p className="text-[#C9A84C] font-body text-sm font-semibold">
                      {coach.role} · {coach.since}
                    </p>
                  </div>
                </div>
                <p className="text-[#C9A84C]/60 text-xs font-body uppercase tracking-wider mb-3">
                  {coach.exp}
                </p>
                <p className="text-white/65 font-body text-sm leading-relaxed">
                  {coach.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
