import Link from "next/link";
import { Users, Laptop, Home, Trophy, User, Target, Zap, GraduationCap } from "lucide-react";

const ageGroups = [
  {
    icon: <User size={24} className="text-[#8B0000]" />,
    title: "Under 7 Years",
    desc: "Fun, game-based introduction to chess. Build focus and basic piece movements in an engaging environment.",
  },
  {
    icon: <Target size={24} className="text-[#8B0000]" />,
    title: "Under 9 Years",
    desc: "Foundational tactics, opening principles, and competitive mindset. Preparation for school-level tournaments.",
  },
  {
    icon: <Zap size={24} className="text-[#8B0000]" />,
    title: "Under 11 Years",
    desc: "Intermediate strategy, endgames, and structured tournament preparation. District and state-level focus.",
  },
  {
    icon: <GraduationCap size={24} className="text-[#8B0000]" />,
    title: "Under 13 Years",
    desc: "Advanced positional play, deep calculation, and competitive coaching for serious aspirants.",
  },
];

const formats = [
  {
    icon: <Users size={28} className="text-[#C9A84C]" />,
    title: "Group Classes",
    desc: "Interactive sessions at our Gurugram academy. Learn alongside peers and build a competitive spirit.",
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80",
  },
  {
    icon: <Laptop size={28} className="text-[#C9A84C]" />,
    title: "Online Sessions",
    desc: "Live, interactive coaching sessions from the comfort of home. Available nationwide with flexible timings.",
    img: "https://images.unsplash.com/photo-1610664972580-87a32ea07122?w=600&q=80",
  },
  {
    icon: <Home size={28} className="text-[#C9A84C]" />,
    title: "Home Visit",
    desc: "Personalized one-on-one lessons at your doorstep. Tailored to your child's pace and learning style.",
    img: "https://images.unsplash.com/photo-1586523999496-ce5bc4a923ec?w=600&q=80",
  },
  {
    icon: <Trophy size={28} className="text-[#C9A84C]" />,
    title: "Tournaments",
    desc: "Specialized competitive training including opening repertoire, clock management, and match psychology.",
    img: "https://images.unsplash.com/photo-1580541832626-2a7156f7efec?w=600&q=80",
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
            Fresh batches starting soon — Under 7 · Under 9 · Under 11 · Under 13
          </p>
        </div>

        {/* Formats - Interactive Accordion */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[450px] gap-4 mb-24 w-full">
          {formats.map((fmt) => (
            <div
              key={fmt.title}
              className="relative flex-1 hover:flex-[1.5] lg:hover:flex-[2.5] transition-all duration-700 ease-in-out rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl border border-white/10 min-h-[250px] lg:min-h-full"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${fmt.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000] via-[#8B0000]/80 to-black/30 group-hover:via-[#8B0000]/60 transition-all duration-700" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-5 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {fmt.icon}
                </div>
                <h3 className="font-display font-bold text-white text-2xl lg:text-3xl mb-3 tracking-wide">
                  {fmt.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <p className="text-white/90 font-body text-sm leading-relaxed overflow-hidden">
                    {fmt.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#8B0000]/30" />
          <span className="text-[#8B0000] font-display font-semibold text-sm uppercase tracking-widest px-4 py-2 border border-[#8B0000]/20 rounded-full bg-[#FFF8E7]">
            Age Groups
          </span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#8B0000]/30" />
        </div>

        {/* Age Groups - 3D Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20 relative px-4 sm:px-0">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B0000]/20 to-transparent hidden lg:block -translate-y-1/2" />
          
          {ageGroups.map((group, i) => (
            <div
              key={group.title}
              className={`bg-[#F5F0E8] rounded-[2rem] p-8 relative group hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#8B0000]/15 transition-all duration-500 border border-[#8B0000]/5 z-10 ${i % 2 === 1 ? 'lg:translate-y-6' : ''}`}
            >
              {/* Floating Icon Badge */}
              <div className="absolute -top-6 left-8 w-14 h-14 bg-white rounded-2xl shadow-lg border border-[#8B0000]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                {group.icon}
              </div>
              
              <div className="pt-6">
                <h3 className="font-display font-black text-[#1A0A0A] text-xl mb-3 group-hover:text-[#8B0000] transition-colors">
                  {group.title}
                </h3>
                <p className="text-[#1A0A0A]/65 font-body text-sm leading-relaxed">
                  {group.desc}
                </p>
              </div>
              
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#8B0000]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-500">
                <span className="text-[#8B0000] transform rotate-45 text-lg">↑</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/918800840353?text=Hi!%20I%20would%20like%20to%20enroll%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] transition-colors shadow-lg"
          >
            👦 Enrol Your Child — 100+ Kids Trained
          </a>
        </div>
      </div>
    </section>
  );
}
