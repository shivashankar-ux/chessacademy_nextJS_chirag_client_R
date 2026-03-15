import Link from "next/link";

const ageGroups = [
  {
    icon: "👶",
    title: "Under 6 Years",
    desc: "Fun, game-based introduction to chess. Build focus and basic piece movements in an engaging environment.",
  },
  {
    icon: "🧒",
    title: "Under 10 Years",
    desc: "Foundational tactics, opening principles, and competitive mindset. Preparation for school-level tournaments.",
  },
  {
    icon: "🧑",
    title: "Under 14 Years",
    desc: "Intermediate strategy, endgames, and structured tournament preparation. District and state-level focus.",
  },
  {
    icon: "🎓",
    title: "Above 14 Years",
    desc: "Advanced positional play, deep calculation, and competitive coaching for serious aspirants.",
  },
];

const formats = [
  {
    icon: "🏫",
    title: "Group Classes",
    desc: "Interactive sessions at our Gurugram academy. Learn alongside peers and build a competitive spirit.",
  },
  {
    icon: "💻",
    title: "Online Sessions",
    desc: "Live, interactive coaching sessions from the comfort of home. Available nationwide with flexible timings.",
  },
  {
    icon: "🏠",
    title: "Home Visit Coaching",
    desc: "Personalized one-on-one lessons at your doorstep. Tailored to your child's pace and learning style.",
  },
  {
    icon: "🏆",
    title: "Tournament Preparation",
    desc: "Specialized competitive training including opening repertoire, clock management, and match psychology.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-20 md:py-28 bg-white"
      aria-label="Our Chess Training Programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#8B0000]" />
            <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
              Our Programs
            </span>
            <div className="h-px w-12 bg-[#8B0000]" />
          </div>
          <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl mb-4">
            Chess Training for{" "}
            <span className="text-[#8B0000]">All Age Groups</span>
          </h2>
          <p className="text-[#1A0A0A]/60 font-body max-w-xl mx-auto">
            Fresh batches starting soon — Under 6 · Under 10 · Under 14 · Above
            14
          </p>
        </div>

        {/* Age Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {ageGroups.map((group) => (
            <div
              key={group.title}
              className="group p-6 bg-[#F5F0E8] rounded-lg border border-[#8B0000]/10 hover:border-[#8B0000]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{group.icon}</div>
              <h3 className="font-display font-bold text-[#8B0000] text-lg mb-2">
                {group.title}
              </h3>
              <p className="text-[#1A0A0A]/65 font-body text-sm leading-relaxed">
                {group.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-[#8B0000]/10" />
          <span className="text-[#8B0000] font-display font-semibold text-sm uppercase tracking-widest">
            Training Formats
          </span>
          <div className="h-px flex-1 bg-[#8B0000]/10" />
        </div>

        {/* Formats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {formats.map((fmt) => (
            <div
              key={fmt.title}
              className="group p-6 bg-[#8B0000] rounded-lg hover:bg-[#6B0000] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{fmt.icon}</div>
              <h3 className="font-display font-bold text-[#C9A84C] text-lg mb-2">
                {fmt.title}
              </h3>
              <p className="text-white/75 font-body text-sm leading-relaxed">
                {fmt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] transition-colors shadow-lg"
          >
            👦 Enrol Your Child — 100+ Kids Trained
          </Link>
        </div>
      </div>
    </section>
  );
}
