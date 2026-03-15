"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#8B0000] shadow-lg shadow-black/20"
          : "bg-[#8B0000]/95 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Check vs Mate Chess Academy — Home"
          >
            {/* TODO: Replace with actual logo file in public/images/logo.png */}
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-2 border-[#C9A84C]">
                <span className="text-[#8B0000] font-display font-black text-lg leading-none">
                  ♞
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-display font-bold text-lg leading-none tracking-wide">
                Check vs Mate
              </p>
              <p className="text-[#C9A84C] text-xs font-body tracking-widest uppercase mt-0.5">
                Chess Academy
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded font-body font-semibold text-sm tracking-wide transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#C9A84C] bg-white/10"
                    : "text-white/90 hover:text-[#C9A84C] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-sm rounded tracking-wide hover:bg-[#e8c96a] transition-all duration-200 shadow-md"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded font-body font-semibold text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[#C9A84C] bg-white/10"
                    : "text-white/90 hover:text-[#C9A84C] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 bg-[#C9A84C] text-[#8B0000] font-body font-bold text-sm rounded tracking-wide text-center hover:bg-[#e8c96a] transition-colors"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
