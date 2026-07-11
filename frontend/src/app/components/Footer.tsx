"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, TrendingUp, ArrowRight } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="footer-ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path fill="url(#footer-ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="https://www.instagram.com/smatconcept?igsh=MTBvcTJ0Nzg3eGpocw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(220,39,67,0.1)", border: "1px solid rgba(220,39,67,0.25)" }}
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1DCRm9Hzvw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(24,119,242,0.1)", border: "1px solid rgba(24,119,242,0.25)" }}
              >
                <FacebookIcon className="w-4 h-4" />
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

        {/* Bottom bar — right padding keeps the WhatsApp widget from covering text */}
        <div className="pt-8 pb-2 section-divider flex flex-col md:flex-row justify-between items-center gap-4 lg:pr-44">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} SMAT Concept & Innovative Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
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
