"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Clock, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Footer from "../components/Footer";

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
          // Web3Forms access keys are public by design (always shipped to the
          // browser); env var takes precedence, hardcoded key is the fallback.
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "3e2f17ad-db7c-48ca-940b-74da6359fde0",
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
                      background: "rgba(37,211,102,0.1)",
                      border: "1px solid rgba(37,211,102,0.3)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">WhatsApp</p>
                    <a
                      href="https://wa.me/2348101235007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-[#25D366] transition-colors text-sm"
                    >
                      +234 810 123 5007
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="flex gap-2 mt-1">
                    <a
                      href="https://www.instagram.com/smatconcept?igsh=MTBvcTJ0Nzg3eGpocw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-11 h-11 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: "rgba(220,39,67,0.1)", border: "1px solid rgba(220,39,67,0.25)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                        <defs>
                          <linearGradient id="contact-ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f09433" />
                            <stop offset="25%" stopColor="#e6683c" />
                            <stop offset="50%" stopColor="#dc2743" />
                            <stop offset="75%" stopColor="#cc2366" />
                            <stop offset="100%" stopColor="#bc1888" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#contact-ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1DCRm9Hzvw/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-11 h-11 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: "rgba(24,119,242,0.1)", border: "1px solid rgba(24,119,242,0.25)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Social Media</p>
                    <p className="text-gray-400 text-sm">Follow us on Instagram & Facebook</p>
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

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
