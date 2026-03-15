import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSummary from "@/components/AboutSummary";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import WhyChess from "@/components/WhyChess";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Check vs Mate Chess Academy | Expert Chess Coaching in Gurugram",
  description:
    "Check vs Mate Chess Academy — expert chess coaching for kids in Gurugram. Group classes, online sessions, home visits. 100+ students trained since 2013. 4.9 ⭐ Google rating.",
  openGraph: {
    title: "Check vs Mate Chess Academy | Gurugram",
    description:
      "Expert chess coaching for kids — group, online & home visit sessions. 100+ students trained since 2013.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Summary */}
      <AboutSummary />

      {/* 3. Programs / Services Overview */}
      <Programs />

      {/* 4. Coaches */}
      <Coaches />

      {/* 5. Why Chess */}
      <WhyChess />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. CTA Banner */}
      <CTABanner />
    </>
  );
}
