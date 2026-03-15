import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Check vs Mate Chess Academy — our story, our coaches Puneet Manchanda and Chirag Atreja, our mission, and why we are Gurugram's most trusted chess coaching institute.",
  openGraph: {
    title: "About Us | Check vs Mate Chess Academy",
    description:
      "Our story, our coaches, and our mission — shaping young chess champions since 2013.",
  },
};

const milestones = [
  { year: "2013", event: "Check vs Mate Chess Academy founded by Puneet Manchanda in Gurugram." },
  { year: "2015", event: "First batch of students wins district-level tournaments in Under-9 and Under-13." },
  { year: "2018", event: "Expanded academy with dedicated training halls and tournament simulation facilities." },
  { year: "2020", event: "Chirag Atreja joins as Co-Founder; online coaching launched nationwide." },
  { year: "2022", event: "Students achieve state-level recognition across Under 7, 9, 11, and 13 categories." },
  { year: "2024", event: "100+ students trained milestone reached. 4.9 ⭐ rating on Google with 97+ reviews." },
];

const values = [
  { icon: "♟", title: "Excellence", desc: "We push every student to reach their highest potential on and off the board." },
  { icon: "🤝", title: "Integrity", desc: "Honest, transparent coaching with no shortcuts — only hard work and smart strategy." },
  { icon: "💡", title: "Innovation", desc: "Constantly evolving our methods to stay ahead in modern chess education." },
  { icon: "❤️", title: "Care", desc: "Every child is treated as family. We celebrate their growth at every step." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-[#8B0000] overflow-hidden"
        aria-label="About Page Hero"
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
          ♛
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-body font-bold uppercase tracking-widest">
              Our Story
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h1 className="font-display font-black text-white text-4xl md:text-6xl mb-4">
            About Check vs Mate
          </h1>
          <p className="text-white/75 font-body text-lg max-w-2xl mx-auto">
            A dedicated chess training institute focused on nurturing young minds
            through the royal game — since 2013.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 40L1440 40L1440 20C1200 40 960 0 720 20C480 40 240 0 0 20L0 40Z" fill="#F5F0E8" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="our-story"
        className="py-20 md:py-28 bg-[#F5F0E8]"
        aria-label="Our Story"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#8B0000]" />
                <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl mb-5">
                Built on Passion,{" "}
                <span className="text-[#8B0000]">Driven by Purpose</span>
              </h2>
              <p className="text-[#1A0A0A]/70 font-body leading-relaxed mb-4">
                Check vs Mate Chess Academy was born from a simple but powerful
                belief — that chess is one of the greatest tools for developing
                young minds. Founded in 2013 by Puneet Manchanda, the academy
                started as a small coaching group and has grown into one of
                Gurugram&apos;s most trusted chess institutes.
              </p>
              <p className="text-[#1A0A0A]/70 font-body leading-relaxed mb-4">
                With a proven training methodology and deeply experienced
                coaching staff, we help children develop critical thinking,
                patience, and competitive skills — qualities that serve them
                long after the game is over.
              </p>
              <p className="text-[#1A0A0A]/70 font-body leading-relaxed mb-8">
                Our students have consistently delivered outstanding
                performances at district, state, and national-level tournaments
                across Under 7, 9, 11, and 13 age categories. Today, over 100
                children have trained under our roof — both in-person in Gurugram
                and online across India.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num: "100+", label: "Kids Trained" },
                  { num: "12+", label: "Years Experience" },
                  { num: "4.9★", label: "Google Rating" },
                  { num: "97+", label: "Reviews" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-lg p-4 border border-[#8B0000]/10 shadow-sm"
                  >
                    <p className="font-display font-black text-[#8B0000] text-2xl">
                      {s.num}
                    </p>
                    <p className="text-[#1A0A0A]/55 text-xs font-body uppercase tracking-widest mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C9A84C] rounded-lg" />
              {/* TODO: Replace with actual academy interior photo */}
              <Image
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80"
                alt="Check vs Mate Chess Academy training hall"
                width={800}
                height={600}
                className="relative rounded-lg object-cover w-full h-[400px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team — Coaches */}
      <section
        id="team"
        className="py-20 md:py-28 bg-[#1A0A0A]"
        aria-label="Our Coaching Team"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%)",
          backgroundSize: "50px 50px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-body font-bold uppercase tracking-widest">
                Team Members
              </span>
              <div className="h-px w-12 bg-[#C9A84C]" />
            </div>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl">
              Meet the <span className="text-[#C9A84C]">Coaches</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder — Puneet Manchanda */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-colors">
              <div className="relative h-72">
                {/* TODO: Replace with actual photo of Puneet Manchanda (the person with the chess board in front) */}
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="Puneet Manchanda — Founder, Check vs Mate Chess Academy"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A] via-[#1A0A0A]/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#8B0000] text-[#C9A84C] text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                  ♟ Founder
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-xl mb-1">
                  Puneet Manchanda
                </h3>
                <p className="text-[#C9A84C] font-body text-sm font-semibold mb-1">
                  Founder · Est. 2013
                </p>
                <p className="text-white/50 text-xs font-body uppercase tracking-wider mb-3">
                  12+ years full-time coaching experience
                </p>
                <p className="text-white/65 font-body text-sm leading-relaxed">
                  Founder of Check vs Mate Chess Academy (est. 2013), with 12+
                  years of full-time coaching experience, having mentored
                  hundreds of students across age groups and competitive levels.
                </p>
              </div>
            </div>

            {/* Co-Founder — Chirag Atreja */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-colors">
              <div className="relative h-72">
                {/* TODO: Replace with actual photo of Chirag Atreja (the person in front of the laptop) */}
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
                  alt="Chirag Atreja — Co-Founder, Check vs Mate Chess Academy"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A] via-[#1A0A0A]/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#C9A84C] text-[#8B0000] text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                  ♞ Co-Founder
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-xl mb-1">
                  Chirag Atreja
                </h3>
                <p className="text-[#C9A84C] font-body text-sm font-semibold mb-1">
                  Co-Founder · Since 2020
                </p>
                <p className="text-white/50 text-xs font-body uppercase tracking-wider mb-3">
                  Passionate &amp; structured chess coach
                </p>
                <p className="text-white/65 font-body text-sm leading-relaxed">
                  Actively involved in training students since 2020, with a
                  strong focus on concept clarity, structured preparation, and
                  competitive mindset development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section
        id="mission-values"
        className="py-20 md:py-28 bg-[#F5F0E8]"
        aria-label="Our Mission and Values"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8B0000]" />
              <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
                Mission &amp; Values
              </span>
              <div className="h-px w-12 bg-[#8B0000]" />
            </div>
            <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl mb-4">
              What We <span className="text-[#8B0000]">Stand For</span>
            </h2>
            <p className="text-[#1A0A0A]/60 font-body max-w-2xl mx-auto">
              Our mission is simple: to develop chess excellence in every child
              we coach, and in doing so, build the critical life skills that will
              serve them forever.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center border border-[#8B0000]/10 hover:border-[#8B0000]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-[#8B0000] text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-[#1A0A0A]/65 font-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline"
        className="py-20 md:py-28 bg-white"
        aria-label="Our Journey — Milestones"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8B0000]" />
              <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
                Our Journey
              </span>
              <div className="h-px w-12 bg-[#8B0000]" />
            </div>
            <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl">
              A Decade of{" "}
              <span className="text-[#8B0000]">Chess Excellence</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#8B0000]/20" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#8B0000] flex items-center justify-center relative z-10 shadow-md">
                    <span className="font-display font-black text-[#C9A84C] text-xs text-center leading-none">
                      {m.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-[#1A0A0A]/75 font-body text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B0000] relative overflow-hidden" aria-label="Contact CTA">
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
            Join the Check vs Mate Family
          </h2>
          <p className="text-white/75 font-body text-base mb-8">
            Book a free demo class and see the difference expert coaching makes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-base rounded tracking-wide hover:bg-[#e8c96a] transition-colors shadow-lg"
          >
            Book Free Demo Class →
          </Link>
        </div>
      </section>
    </>
  );
}
