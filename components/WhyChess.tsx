const reasons = [
  {
    icon: "🧠",
    title: "Critical Thinking",
    desc: "Chess teaches children to evaluate situations, plan ahead, and make decisive choices under pressure.",
  },
  {
    icon: "🎯",
    title: "Focus & Patience",
    desc: "Every game demands sustained attention and composure — life skills that transfer far beyond the board.",
  },
  {
    icon: "📈",
    title: "Memory & Cognition",
    desc: "Memorising openings and patterns strengthens memory and boosts overall cognitive development.",
  },
  {
    icon: "🏆",
    title: "Competitive Spirit",
    desc: "Regular tournaments build resilience, sportsman spirit, and the drive to improve continuously.",
  },
  {
    icon: "🤝",
    title: "Strategic Planning",
    desc: "Long-term thinking and anticipating an opponent's moves hones strategic planning abilities.",
  },
  {
    icon: "💡",
    title: "Problem Solving",
    desc: "Each chess position is a unique puzzle — solving them daily sharpens creative problem-solving skills.",
  },
];

export default function WhyChess() {
  return (
    <section
      id="why-chess"
      className="py-20 md:py-28 bg-white"
      aria-label="Why Chess for Your Child"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#8B0000]" />
            <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
              Why Chess?
            </span>
            <div className="h-px w-12 bg-[#8B0000]" />
          </div>
          <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl mb-4">
            The Game That{" "}
            <span className="text-[#8B0000]">Shapes Young Minds</span>
          </h2>
          <p className="text-[#1A0A0A]/60 font-body max-w-xl mx-auto">
            Chess is far more than a game — it is one of the most powerful
            developmental tools you can give your child.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group flex gap-5 p-6 rounded-xl border border-[#8B0000]/10 bg-[#F5F0E8] hover:border-[#8B0000]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-[#1A0A0A] text-base mb-1.5">
                  {r.title}
                </h3>
                <p className="text-[#1A0A0A]/65 font-body text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
