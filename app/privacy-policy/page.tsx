import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Check vs Mate Chess Academy. Learn how we protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#8B0000] overflow-hidden" aria-label="Privacy Policy Hero">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-white text-4xl md:text-6xl mb-4">Privacy Policy</h1>
          <p className="text-white/75 font-body text-lg max-w-xl mx-auto">Your privacy is important to us.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 40L1440 40L1440 20C1200 40 960 0 720 20C480 40 240 0 0 20L0 40Z" fill="#F5F0E8" />
          </svg>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#8B0000]/5 prose prose-stone max-w-none">
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              At <strong>Check vs Mate Chess Academy</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Information We Collect</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              When you visit our website, we may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide through our contact forms or email communications.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-3 font-body text-[#1A0A0A]/80 mb-6">
              <li>To respond to your inquiries and provide technical or educational services requested by you.</li>
              <li>To improve our website’s content and functionality.</li>
              <li>For administrative and communication purposes, such as sending updates, newsletters, or promotional materials if you have opted to receive them.</li>
            </ul>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Data Security</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Disclosure of Information</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website or conducting our business, provided that they agree to keep your information confidential.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Cookies</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              Our website may use cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain parts of our website.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Third-Party Links</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Children’s Privacy</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              Our services are directed to children, but we do not knowingly collect personal information from children under the age of 13 without parental consent. If you believe that we have inadvertently collected information from a child without such consent, please contact us immediately.
            </p>

            <h2 className="font-display font-bold text-[#8B0000] text-2xl mt-10 mb-4">Changes to Privacy Policy</h2>
            <p className="font-body text-[#1A0A0A]/80 leading-relaxed mb-6">
              We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on this page.
            </p>

            <div className="mt-12 p-6 bg-[#8B0000]/5 border-l-4 border-[#8B0000] rounded-r-xl">
              <p className="font-body text-[#1A0A0A]/80 leading-relaxed italic">
                By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:checkvsmate@gmail.com" className="text-[#8B0000] font-bold underline">checkvsmate@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
