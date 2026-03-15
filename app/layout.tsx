import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Check vs Mate Chess Academy | Gurugram",
    template: "%s | Check vs Mate Chess Academy",
  },
  description:
    "Check vs Mate Chess Academy in Gurugram — expert chess coaching for kids of all ages. Group classes, online sessions, home visits. 100+ students trained. 4.9 ⭐ on Google.",
  keywords: [
    "chess academy Gurugram",
    "chess classes for kids",
    "chess coaching Gurgaon",
    "Puneet Manchanda chess",
    "check vs mate chess",
    "chess training children",
    "tournament chess preparation",
  ],
  authors: [{ name: "Check vs Mate Chess Academy" }],
  robots: "index, follow",
  openGraph: {
    title: "Check vs Mate Chess Academy | Gurugram",
    description:
      "Expert chess coaching for kids in Gurugram. Group, online & home visit sessions. 100+ students trained.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
