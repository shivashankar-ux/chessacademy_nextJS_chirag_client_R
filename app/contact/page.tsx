import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Check vs Mate Chess Academy to book a free demo class or enquire about our chess coaching programs. Call +91 98104 36745 or visit us in Gurugram.",
  openGraph: {
    title: "Contact | Check vs Mate Chess Academy",
    description:
      "Book a free demo class or enquire about our programs. Located in Sector-7, Gurugram.",
  },
};

const contactDetails = [
  {
    icon: MapPin,
    title: "Academy Address",
    lines: ["139/E, Shivpuri, Sector-7,", "Gurugram, Haryana 122001"],
    action: null,
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    lines: ["+91 98104 36745", "+91 88008 40353"],
    action: "tel:+919810436745",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["checkvsmate@gmail.com"],
    action: "mailto:checkvsmate@gmail.com",
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Academy: 4:00 PM – 8:00 PM", "Online: Flexible Timings"],
    action: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-[#8B0000] overflow-hidden"
        aria-label="Contact Page Hero"
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
          ♞
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-body font-bold uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h1 className="font-display font-black text-white text-4xl md:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 font-body text-lg max-w-xl mx-auto">
            Book a free demo class, ask about batches, or simply say hello — we
            would love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 40L1440 40L1440 20C1200 40 960 0 720 20C480 40 240 0 0 20L0 40Z" fill="#F5F0E8" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-form"
        className="py-20 md:py-28 bg-[#F5F0E8]"
        aria-label="Contact Form and Information"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-display font-black text-[#1A0A0A] text-2xl md:text-3xl mb-2">
                  Reach Out to Us
                </h2>
                <p className="text-[#1A0A0A]/60 font-body text-sm leading-relaxed">
                  Fresh batches are starting soon. Get in touch to enquire about
                  availability, pricing, and to book your child&apos;s free demo
                  class.
                </p>
              </div>

              {/* Contact detail cards */}
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-[#8B0000]/10 shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-[#1A0A0A] text-sm mb-1">
                      {item.title}
                    </p>
                    {item.lines.map((line, i) =>
                      item.action && i === 0 ? (
                        <a
                          key={i}
                          href={item.action}
                          className="block text-[#8B0000] font-body text-sm hover:underline"
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={i}
                          className="text-[#1A0A0A]/60 font-body text-sm"
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp quick link */}
              <a
                href="https://wa.me/919810436745?text=Hi%21%20I%20am%20interested%20in%20chess%20classes%20at%20Check%20vs%20Mate%20Chess%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-5 py-4 bg-[#25D366] text-white font-body font-bold text-sm rounded-xl hover:bg-[#1eb855] transition-colors shadow-md"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-7 md:p-10 shadow-sm border border-[#8B0000]/10">
                <h3 className="font-display font-black text-[#1A0A0A] text-xl mb-1">
                  Book Your Free Demo Class
                </h3>
                <p className="text-[#1A0A0A]/50 font-body text-sm mb-7">
                  Fill in the form and we will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section
        id="map"
        className="bg-[#F5F0E8] pb-20"
        aria-label="Academy Location Map"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border-4 border-[#8B0000] shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.35961564016!2d77.0169999!3d28.468714700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d3704d0743%3A0xe0dd9ebbe7eb9d03!2s139E%2C%20Shivpuri%2C%20Sector%207%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1773579896481!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Check vs Mate Chess Academy location on Google Maps"
            />
          </div>
          {/* Address below map */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-5 border border-[#8B0000]/10 shadow-sm">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-[#8B0000] flex-shrink-0" />
              <p className="font-body text-[#1A0A0A] text-sm font-semibold">
                139/E, Shivpuri, Sector-7, Gurugram, Haryana 122001
              </p>
            </div>
            <a
              href="https://maps.google.com/maps?q=139E,+Shivpuri,+Sector+7,+Gurugram,+Haryana+122001"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#8B0000] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#6B0000] transition-colors whitespace-nowrap"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section
        id="social-links"
        className="py-16 bg-[#1A0A0A]"
        aria-label="Follow Us on Social Media"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white text-2xl mb-2">
            Follow Our Journey
          </h2>
          <p className="text-white/50 font-body text-sm mb-8">
            Stay updated with tournament results, student achievements, and new
            batch announcements.
          </p>
          <div className="flex justify-center gap-5">
            {[
              {
                label: "Instagram",
                href: "#",
                icon: "📸",
                color: "hover:bg-pink-600",
              },
              {
                label: "Facebook",
                href: "#",
                icon: "👍",
                color: "hover:bg-blue-600",
              },
              {
                label: "YouTube",
                href: "#",
                icon: "▶",
                color: "hover:bg-red-600",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Check vs Mate on ${s.label}`}
                className={`flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-body font-semibold text-sm rounded-xl ${s.color} transition-colors border border-white/10`}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
          {/* TODO: Replace # hrefs above with actual social media profile URLs */}
        </div>
      </section>
    </>
  );
}
