"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // TODO: Replace with your Formspree endpoint from .env
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
        "https://formspree.io/f/YOUR_FORM_ID";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", phone: "", childAge: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">♟</div>
        <h3 className="font-display font-bold text-green-800 text-xl mb-2">
          Message Received!
        </h3>
        <p className="text-green-700 font-body text-sm">
          Thank you for reaching out. We will contact you shortly to discuss
          batch details and schedule your free demo class.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-5 px-5 py-2 bg-[#8B0000] text-white font-body font-semibold text-sm rounded hover:bg-[#6B0000] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-body font-semibold text-[#1A0A0A] mb-1.5"
          >
            Your Name <span className="text-[#8B0000]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-[#8B0000]/20 rounded-lg bg-white font-body text-sm text-[#1A0A0A] placeholder-[#1A0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-body font-semibold text-[#1A0A0A] mb-1.5"
          >
            Phone Number <span className="text-[#8B0000]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className="w-full px-4 py-3 border border-[#8B0000]/20 rounded-lg bg-white font-body text-sm text-[#1A0A0A] placeholder-[#1A0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-body font-semibold text-[#1A0A0A] mb-1.5"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-[#8B0000]/20 rounded-lg bg-white font-body text-sm text-[#1A0A0A] placeholder-[#1A0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] transition-colors"
        />
      </div>

      {/* Child Age Group */}
      <div className="mb-4">
        <label
          htmlFor="childAge"
          className="block text-sm font-body font-semibold text-[#1A0A0A] mb-1.5"
        >
          Age Group Interested In
        </label>
        <select
          id="childAge"
          name="childAge"
          value={formData.childAge}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[#8B0000]/20 rounded-lg bg-white font-body text-sm text-[#1A0A0A] focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] transition-colors"
        >
          <option value="">Select age group</option>
          <option value="Under 6">Under 6 Years</option>
          <option value="Under 10">Under 10 Years</option>
          <option value="Under 14">Under 14 Years</option>
          <option value="Above 14">Above 14 Years</option>
          <option value="Not sure">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-body font-semibold text-[#1A0A0A] mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your child, preferred batch timing, online or offline preference..."
          className="w-full px-4 py-3 border border-[#8B0000]/20 rounded-lg bg-white font-body text-sm text-[#1A0A0A] placeholder-[#1A0A0A]/30 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] transition-colors resize-none"
        />
      </div>

      {/* Error */}
      {formState === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-body">
          Something went wrong. Please try again or call us directly at +91
          98104 36745.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full py-4 bg-[#8B0000] text-white font-body font-bold text-base rounded-lg tracking-wide hover:bg-[#6B0000] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-md flex items-center justify-center gap-2"
      >
        {formState === "loading" ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message & Book Free Demo"
        )}
      </button>
    </form>
  );
}
