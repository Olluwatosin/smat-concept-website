"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, Clock, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";

const inputClass =
  "w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none transition-all duration-200 " +
  "bg-[#0F1629] border border-[rgba(212,175,55,0.2)] " +
  "focus:border-[rgba(212,175,55,0.6)] focus:ring-1 focus:ring-[rgba(212,175,55,0.3)]";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Enquiry from ${formData.name} — SMAT Concept`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Error sending message. Please try again or contact us directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg, #080B16 0%, #0C0F1E 60%, #080B16 100%)" }}
    >
      <TechHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Dot grid background */}
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

        {/* Gold glow orb */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(212,175,55,0.07)",
            }}
          >
            Contact Us
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-white">Get </span>
            <span className="text-gold-gradient">In Touch</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Ready to transform your business with cutting-edge technology?
            <br className="hidden md:block" />
            Let&apos;s discuss your project and craft the perfect solution.
          </p>
        </motion.div>
      </section>

      {/* Section divider */}
      <div className="section-divider mx-6 mb-16" />

      {/* Two-column layout */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── LEFT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the form and our team will respond within 24 hours.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "2px solid rgba(212,175,55,0.4)",
                  }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: "#D4AF37" }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-8 max-w-xs">
                  Thank you for reaching out to SMAT Concept. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-gold-outline px-6 py-2 rounded-lg text-sm font-semibold"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Full Name <span style={{ color: "#D4AF37" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email Address <span style={{ color: "#D4AF37" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={inputClass}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" className="bg-[#0F1629] text-gray-400">
                        Select a service
                      </option>
                      <option value="Data Digitalization" className="bg-[#0F1629]">
                        Data Digitalization
                      </option>
                      <option value="Smart Agriculture" className="bg-[#0F1629]">
                        Smart Agriculture
                      </option>
                      <option value="Networking & Security" className="bg-[#0F1629]">
                        Networking &amp; Security
                      </option>
                      <option value="IoT Solutions" className="bg-[#0F1629]">
                        IoT Solutions
                      </option>
                      <option value="Energy Solutions" className="bg-[#0F1629]">
                        Energy Solutions
                      </option>
                      <option value="Custom Solution" className="bg-[#0F1629]">
                        Custom Solution
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Project Details <span style={{ color: "#D4AF37" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputClass}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: Info + Benefits ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info Card */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.25)",
                    }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Email</p>
                    <a
                      href="mailto:smatconceptsolutions@gmail.com"
                      className="text-gray-200 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      smatconceptsolutions@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.25)",
                    }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Phone</p>
                    <a
                      href="tel:+2348101235007"
                      className="text-gray-200 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      +234 810 123 5007
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.25)",
                    }}
                  >
                    <MessageCircle className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">WhatsApp</p>
                    <a
                      href="https://wa.me/2348101235007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      +234 810 123 5007
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.25)",
                    }}
                  >
                    <Clock className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Office Hours</p>
                    <p className="text-gray-200 text-sm">Mon – Sat, 8 am – 6 pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why SMAT Concept Card */}
            <div
              className="glass-card p-8 rounded-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(8,11,22,0.6) 100%)",
              }}
            >
              {/* Subtle gold corner glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
                }}
              />

              <h3 className="text-xl font-bold text-white mb-6 relative">
                Why{" "}
                <span className="text-gold-gradient">SMAT Concept</span>?
              </h3>

              <ul className="space-y-4 relative">
                {[
                  { label: "Verified Excellence", sub: "Proven industry expertise" },
                  { label: "High-Performance Solutions", sub: "Delivered across sectors" },
...
                  { label: "24/7 Support", sub: "Always here when you need us" },
                  { label: "Expert Local Team", sub: "Deep knowledge, real results" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Star
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#D4AF37" }}
                      fill="rgba(212,175,55,0.25)"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-gray-500 text-xs">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}
