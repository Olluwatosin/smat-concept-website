"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ArrowRight, Star, Zap } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type ServiceKey =
  | "Task Management"
  | "Web Development"
  | "Smart Farming"
  | "Home Automation"
  | "Document Digitalization"
  | "Networking & Security"
  | "IoT Solutions"
  | "Energy Solutions";

const SERVICE_KEYS: ServiceKey[] = [
  "Task Management",
  "Web Development",
  "Smart Farming",
  "Home Automation",
  "Document Digitalization",
  "Networking & Security",
  "IoT Solutions",
  "Energy Solutions",
];

interface Tier {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
  cta: string;
}

interface ServicePricing {
  description: string;
  tiers: [Tier, Tier, Tier];
}

const pricingData: Record<ServiceKey, ServicePricing> = {
  "Task Management": {
    description: "Custom project and task management systems tailored to your team's workflow.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Essential project views",
          "Task assignment & tracking",
          "Team collaboration tools",
          "Basic reporting dashboard",
          "Standard support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Custom workflow automation",
          "Advanced analytics & KPIs",
          "Mobile accessibility",
          "Third-party integrations",
          "Priority expert support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Unlimited scaling",
          "White-label options",
          "API & custom integrations",
          "Dedicated account lead",
          "SLA-backed 24/7 support",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "Web Development": {
    description: "High-performance web applications, platforms, and e-commerce solutions.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Essential page structure",
          "Mobile-responsive design",
          "Standard SEO setup",
          "Contact & social integration",
          "Technical maintenance",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Full CMS integration",
          "Payment gateway setup",
          "Performance optimisation",
          "Advanced technical SEO",
          "Ongoing security audits",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Full SaaS architecture",
          "Custom API development",
          "CI/CD infrastructure",
          "Cloud-native deployment",
          "Premium 24/7 support",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "Smart Farming": {
    description: "IoT-powered precision agriculture solutions for modern African farms.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Core sensor deployment",
          "Real-time monitoring",
          "Digital health dashboard",
          "Automated alerts",
          "Standard support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Automated irrigation control",
          "AI crop monitoring",
          "Weather station integration",
          "Mobile farm management",
          "Priority field support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Multi-farm management",
          "Predictive yield analytics",
          "Drone/Satellite integration",
          "Expert agronomist consult",
          "SLA-backed support",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "Home Automation": {
    description: "Intelligent smart home and building automation for comfort, security, and efficiency.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Smart lighting control",
          "Remote app access",
          "Core device integration",
          "Single-room setup",
          "Standard support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Whole-home automation",
          "Security & CCTV integration",
          "Energy load management",
          "Voice control setup",
          "12 months maintenance",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Commercial building systems",
          "HVAC & industrial control",
          "24/7 monitoring centre",
          "Custom biometric access",
          "On-site SLA response",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "Document Digitalization": {
    description: "Transform paper records into searchable, secure, and accessible digital assets.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Volume batch scanning",
          "High-resolution imaging",
          "Secure PDF conversion",
          "Basic cloud storage",
          "Technical support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "OCR text recognition",
          "Searchable archiving",
          "Custom folder architecture",
          "Digital document portal",
          "Priority management",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Full DMS implementation",
          "Workflow automation",
          "Compliance & audit trails",
          "Bulk legacy migration",
          "Ongoing SLA support",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "Networking & Security": {
    description: "Enterprise-grade network infrastructure and cybersecurity solutions.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Network infrastructure setup",
          "Secure Wi-Fi deployment",
          "Core firewall config",
          "Remote access VPN",
          "Technical support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Structured cabling design",
          "Advanced threat protection",
          "CCTV & NVR integration",
          "VLAN segmentation",
          "Priority maintenance",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Data centre infrastructure",
          "24/7 SOC monitoring",
          "Compliance (NDPR/ISO)",
          "SD-WAN deployment",
          "On-site critical support",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "IoT Solutions": {
    description: "End-to-end connected device ecosystems for industrial and commercial applications.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Device prototyping",
          "Cloud data dashboard",
          "Real-time alerts",
          "Core API access",
          "Technical support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Custom firmware dev",
          "Advanced telemetry",
          "Mobile app control",
          "OTA update system",
          "Priority maintenance",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Industrial edge nodes",
          "AI anomaly detection",
          "Multi-farm management",
          "Digital twin modelling",
          "SLA-backed 24/7 support",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  "Energy Solutions": {
    description: "Sustainable solar and hybrid power systems for homes, businesses, and communities.",
    tiers: [
      {
        name: "Basic",
        price: "Custom Quote",
        popular: false,
        features: [
          "Core solar installation",
          "Battery storage setup",
          "Inverter integration",
          "Monitoring dashboard",
          "Technical support",
        ],
        cta: "Request Quote",
      },
      {
        name: "Professional",
        price: "Custom Quote",
        popular: true,
        features: [
          "Hybrid load management",
          "EV charging setup",
          "Remote performance tracking",
          "Energy audits",
          "Maintenance contract",
        ],
        cta: "Request Quote",
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        popular: false,
        features: [
          "Industrial microgrids",
          "SCADA management",
          "Bulk battery storage",
          "Sustainability reporting",
          "On-site critical SLA",
        ],
        cta: "Contact Sales",
      },
    ],
  },
};

const faqs = [
  {
    q: "Are these prices fixed or can we negotiate?",
    a: "Our published prices are starting-from figures. Every project is scoped individually. Complex requirements, tighter timelines, or additional features will affect the final quote. We always provide a detailed, itemised proposal before any commitment.",
  },
  {
    q: "Do you require a deposit before starting work?",
    a: "Yes. We require a 50% deposit to commence work, with the remaining 50% due upon project delivery. For Enterprise-tier engagements, milestone-based payment schedules can be arranged.",
  },
  {
    q: "What is included in the support period?",
    a: "Support covers bug fixes, minor updates, technical assistance, and priority email/phone response. It does not include new features or scope expansions, which are quoted separately.",
  },
  {
    q: "Can I upgrade my tier after the project is delivered?",
    a: "Absolutely. We build with scalability in mind. Upgrading from Basic to Professional, for example, is possible and we will quote only for the additional work required.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We serve clients across Africa and the diaspora. Payments in USD, GBP, or NGN are all accepted. Remote collaboration is our standard mode for international clients.",
  },
];

export default function PricingPage() {
  const [activeService, setActiveService] = useState<ServiceKey>("Task Management");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricing = pricingData[activeService];

  return (
    <div style={{ background: "#080B16", minHeight: "100vh" }}>
      <TechHeader />

      <main className="pt-20 lg:pt-24">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-24 px-4 dot-grid">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 65%)" }} />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#D4AF37" }}>
              Pricing
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              Transparent Pricing.{" "}
              <span className="text-gold-gradient">Real Value.</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400">
              Every budget. Every scale.
            </motion.p>
          </div>
        </section>

        {/* ── Service Selector ── */}
        <section className="section-divider py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center">
              {SERVICE_KEYS.map((svc) => (
                <button key={svc} onClick={() => setActiveService(svc)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={activeService === svc
                    ? { background: "#D4AF37", color: "#080B16" }
                    : { background: "rgba(212,175,55,0.08)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}>
                  {svc}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Pricing Tiers ── */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeService}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-white mb-2">{activeService}</h2>
                  <p className="text-gray-400">{pricing.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {pricing.tiers.map((tier, i) => (
                    <div key={tier.name}
                      className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col relative transition-all duration-300 ${tier.popular ? "md:scale-[1.03]" : ""}`}
                      style={tier.popular
                        ? { border: "2px solid #D4AF37", boxShadow: "0 0 50px rgba(212,175,55,0.15)" }
                        : { border: "1px solid rgba(212,175,55,0.15)" }}>
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="btn-gold text-xs font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-1">
                            <Star size={11} /> Most Popular
                          </span>
                        </div>
                      )}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                        <div className="text-3xl font-extrabold mb-0.5" style={{ color: "#D4AF37" }}>{tier.price}</div>
                        <p className="text-xs text-gray-500">starting from, excl. VAT</p>
                      </div>
                      <ul className="space-y-3 flex-1 mb-8">
                        {tier.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact"
                        className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-300 ${tier.popular ? "btn-gold" : "btn-gold-outline"}`}>
                        {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"} <ArrowRight size={14} className="inline ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── Note ── */}
        <section className="py-6 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}
              className="glass-card rounded-xl px-6 py-4 flex items-start gap-3"
              style={{ border: "1px solid rgba(212,175,55,0.2)", background: "rgba(212,175,55,0.04)" }}>
              <Zap size={18} style={{ color: "#D4AF37", flexShrink: 0, marginTop: 2 }} />
              <p className="text-sm text-gray-400">
                All prices are <span style={{ color: "#D4AF37" }}>starting-from estimates</span>. A detailed, itemised proposal is provided after your free discovery call. No hidden fees — ever.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-divider py-20 px-4 dot-grid">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">Pricing <span className="text-gold-gradient">FAQs</span></h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass-card rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-semibold text-white text-sm">{faq.q}</span>
                    <ChevronDown size={18} style={{ color: "#D4AF37", flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Custom Quote CTA ── */}
        <section className="section-divider py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Need something <span className="text-gold-gradient">bespoke?</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400 mb-8">
              Let's build a custom plan that fits your exact requirements, timeline, and budget. No templates, no compromises.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
                Request a Custom Quote <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio"
                className="btn-gold-outline inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold">
                See Our Work First
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="section-divider py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SMAT Concept. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              {[["Home", "/"], ["About", "/about"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={label} href={href} className="hover:text-yellow-400 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </footer>
      </main>

      <WhatsAppWidget />
    </div>
  );
}
