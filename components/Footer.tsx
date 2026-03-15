import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A0A0A] text-white" role="contentinfo">
      <div
        className="h-2"
        style={{
          background:
            "repeating-linear-gradient(90deg, #8B0000 0px, #8B0000 20px, #C9A84C 20px, #C9A84C 40px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8B0000] border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-white text-xl">♞</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-none">Check vs Mate</p>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mt-0.5">Chess Academy</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Nurturing young minds through the royal game of chess since 2013.
            </p>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <span className="text-white/70 text-sm">4.9 · 97+ Reviews</span>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[#C9A84C] uppercase tracking-widest text-sm mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#8B0000] group-hover:translate-x-1 transition-transform">♟</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[#C9A84C] uppercase tracking-widest text-sm mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>139/E, Shivpuri, Sector-7,<br />Gurugram, Haryana 122001</span>
              </li>
              <li>
                <a href="tel:+919810436745" className="flex items-center gap-3 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone size={16} className="text-[#C9A84C] flex-shrink-0" />
                  +91 98104 36745
                </a>
              </li>
              <li>
                <a href="tel:+918800840353" className="flex items-center gap-3 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone size={16} className="text-[#C9A84C] flex-shrink-0" />
                  +91 88008 40353
                </a>
              </li>
              <li>
                <a href="mailto:checkvsmate@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Mail size={16} className="text-[#C9A84C] flex-shrink-0" />
                  checkvsmate@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock size={16} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>Academy: 4pm – 8pm daily<br />Online: Flexible timings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {year} Check vs Mate Chess Academy. All rights reserved.
          </p>
          <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}