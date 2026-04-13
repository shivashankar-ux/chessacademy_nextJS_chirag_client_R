import type { Metadata } from "next";
import AboutSummary from "@/components/AboutSummary";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import WhyChess from "@/components/WhyChess";
import GalleryCarousel from "@/components/GalleryCarousel";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Check vs Mate Chess Academy | Expert Chess Coaching in Gurugram",
  description:
    "Check vs Mate Chess Academy — expert chess coaching for kids in Gurugram. Group classes, online sessions, home visits. 1000+ kids trained since 2013. 4.9 ⭐ Google rating.",
  openGraph: {
    title: "Check vs Mate Chess Academy | Gurugram",
    description:
      "Expert chess coaching for kids — group, online & home visit sessions. 1000+ kids trained since 2013.",
  },
};

export default function HomePage() {
  return (
    <>
      <AboutSummary />
      <Programs />
      <Coaches />
      <WhyChess />
      <GalleryCarousel />
      <Testimonials />
      <CTABanner />
    </>
  );
}
