"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, Phone, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { name: "Data Analysis & Insights", href: "/services/data-analysis" },
  { name: "AI Workspace Apps", href: "/services/ai-workspace" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Task Management", href: "/services/task-management" },
  { name: "Smart Farming", href: "/services/smart-farming" },
  { name: "Home Automation & CCTV", href: "/services/home-automation" },
  { name: "Document Digitalization", href: "/services/document-digitalization" },
  { name: "Digital Training", href: "/services/digital-training" },
  { name: "Networking & Security", href: "/services/networking" },
  { name: "Energy Solutions", href: "/services/energy" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Goodwill", href: "/goodwill" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="section-divider pt-16 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #D4AF37, #F5D56A)" }}
              >
                <Image src="/mainlogo.png" alt="SMAT Concept" fill className="object-contain p-1.5" />
              </div>
              <div>
                <p className="font-black text-white group-hover:text-gold transition-colors" style={{ color: "inherit" }}>SMAT Concept</p>
                <p className="text-xs" style={{ color: "rgba(212,175,55,0.65)" }}>Innovative Solutions Ltd.</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your fastest route to the digital world. Transforming Africa through technology that drives real business growth.
            </p>

            <div className="flex gap-2 mb-6">
              <a
                href="https://wa.me/2348101235007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: "#D4AF37" }} />
              </a>
              <a
                href="mailto:smatconceptsolutions@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <Mail className="w-4 h-4" style={{ color: "#D4AF37" }} />
              </a>
              <a
                href="tel:+2348101235007"
                aria-label="Phone"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#D4AF37" }} />
              </a>
            </div>

            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            >
              Start a Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Services col 1 */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>Services</p>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-0 select-none">-</p>
            <ul className="space-y-2">
              {services.slice(5).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#D4AF37" }}>Company</p>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 section-divider flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2025 SMAT Concept & Innovative Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {l.label}
              </Link>
            ))}
            <span className="text-gray-700">·</span>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <TrendingUp className="w-3.5 h-3.5" style={{ color: "#D4AF37" }} />
              <span>Built for Africa&apos;s digital future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
