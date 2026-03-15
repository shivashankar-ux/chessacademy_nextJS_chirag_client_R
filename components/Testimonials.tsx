const testimonials = [
  {
    name: "Riya K.",
    text: "My son's confidence and skills have soared since joining Check vs Mate Academy. The coaches are truly dedicated to each child's progress.",
    rating: 5,
    detail: "Parent of Under-10 student",
  },
  {
    name: "Amit S.",
    text: "The coaches are patient and really know how to bring out the best in kids. My daughter won her first district-level trophy within 6 months!",
    rating: 5,
    detail: "Parent of Under-14 student",
  },
  {
    name: "Priya M.",
    text: "Excellent coaching methodology. Puneet sir explains complex strategies in a way kids can easily understand. Highly recommended!",
    rating: 5,
    detail: "Parent of Under-7 student",
  },
  {
    name: "Rahul V.",
    text: "The online sessions are just as effective as in-person classes. My child loves the interactive format and has improved tremendously.",
    rating: 5,
    detail: "Online session parent",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#F5F0E8]"
      aria-label="What Parents Say"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#8B0000]" />
            <span className="text-[#8B0000] text-sm font-body font-bold uppercase tracking-widest">
              Testimonials
            </span>
            <div className="h-px w-12 bg-[#8B0000]" />
          </div>
          <h2 className="font-display font-black text-[#1A0A0A] text-3xl md:text-4xl mb-3">
            What{" "}
            <span className="text-[#8B0000]">Parents Say</span>
          </h2>
          <p className="text-[#1A0A0A]/60 font-body">
            4.9 stars across 97+ reviews on Google
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#8B0000]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-[#C9A84C] text-lg">
                    ★
                  </span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-[#1A0A0A]/75 font-body text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#8B0000]/10">
                <div className="w-9 h-9 rounded-full bg-[#8B0000] flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-bold text-[#1A0A0A] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#1A0A0A]/45 text-xs font-body">
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
