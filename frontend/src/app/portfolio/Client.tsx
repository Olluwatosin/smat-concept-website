"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, ExternalLink, Star, Clock, Camera,
  Landmark, GraduationCap, School, Wine, Store, Car, KeyRound, CheckSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import BrandCover from "../components/BrandCover";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ─── Products — every entry here is a real SMAT Concept build ─── */

type Product = {
  id: number;
  name: string;
  sector: string;
  icon: LucideIcon;
  status: string;
  url?: string;
  description: string;
  features: string[];
  tech: string[];
};

const featuredProject = {
  name: "Veriflow",
  category: "Task Management",
  icon: CheckSquare,
  description:
    "A custom verification and audit platform built for TheRecord Consults — real-time case tracking, SLA monitoring, and operational analytics that replaced a fully manual, spreadsheet-based process.",
  tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
};

const products: Product[] = [
  {
    id: 2,
    name: "EduTracker360",
    sector: "EdTech · GovTech",
    icon: GraduationCap,
    status: "Live — state model",
    url: "https://www.edutracker360.com.ng",
    description:
      "AI-powered education management platform that unifies public school administration state-wide. Modelled on Ekiti State with 8,600+ student records, 500+ teachers, and 50 schools across all 16 LGAs (demonstration dataset) — deployed, operational, and ready for state adoption.",
    features: [
      "AI risk scoring flags at-risk students before they fall behind",
      "Eight role dashboards — Ministry officials to parents & students",
      "QR-verified certificates + USSD result access for rural families",
    ],
    tech: ["FastAPI", "PostgreSQL", "Next.js 15", "Docker"],
  },
  {
    id: 3,
    name: "CivicDesk",
    sector: "GovTech",
    icon: Landmark,
    status: "Production-ready",
    description:
      "Centralised, AI-powered digital operations platform for government agencies, research institutions, and innovation hubs — digitising correspondence, task management, inventory, project incubation, meetings, and institutional knowledge.",
    features: [
      "Digitised correspondence & approval workflows",
      "Task, inventory & project incubation tracking",
      "Searchable institutional knowledge base",
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: 4,
    name: "SchoolPro Elite",
    sector: "EdTech",
    icon: School,
    status: "Production-ready",
    description:
      "A complete operating system for Nigerian schools — academics, welfare, finance, and administration in one platform. Demonstrated end-to-end on a full model school: 78 students, 22 classes, 1,150+ learning activities.",
    features: [
      "NERDC-aligned assessment with report-card approval workflow",
      "Gamified AI learning games generated per subject & level",
      "AI counselling insights + automated scholarship matching",
    ],
    tech: ["FastAPI", "PostgreSQL", "Next.js"],
  },
  {
    id: 5,
    name: "EasyServe",
    sector: "Hospitality",
    icon: Wine,
    status: "Pilot-ready",
    description:
      "Real-time operating system for African lounges, bars, and nightlife venues. Guests order via QR at the table; orders route instantly to bar, kitchen, and attendants; QR exit passes at the door end walkouts and unpaid tabs.",
    features: [
      "QR table ordering — no app download, no waiting",
      "Role dashboards for attendant, bar, kitchen, cashier & security",
      "Live revenue, peak-hour & staff performance analytics",
    ],
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "WebSockets"],
  },
  {
    id: 6,
    name: "ShopSight",
    sector: "Retail Intelligence",
    icon: Store,
    status: "Pilot-ready · from ₦8,000/mo",
    description:
      "Real-time business intelligence for Nigerian shop, bar, and restaurant owners — solving the absentee-owner problem. Staff log sales and stock through WhatsApp; owners watch a live dashboard from anywhere.",
    features: [
      "WhatsApp-based logging — no hardware, no training",
      "Live dashboard with business health score & alerts",
      "Demand forecasting tuned to the Nigerian calendar",
    ],
    tech: ["FastAPI", "Next.js", "PostgreSQL"],
  },
  {
    id: 7,
    name: "DealerOS",
    sector: "Auto Trade",
    icon: Car,
    status: "Production-ready · free–₦10,000/mo",
    description:
      "Mobile-first operating system for independent car dealers — replacing paper files, WhatsApp chats, and memory with organised inventory, secure documents, instant receipts, and real profit visibility.",
    features: [
      "Vehicle inventory with photos & secure title documents",
      "One-tap shareable car profiles for WhatsApp buyers",
      "True profit margins & days-unsold tracking per vehicle",
    ],
    tech: ["FastAPI", "PostgreSQL", "Next.js"],
  },
  {
    id: 8,
    name: "RentInDex",
    sector: "PropTech · Data",
    icon: KeyRound,
    status: "Live — collecting data",
    url: "https://www.rentindex.com.ng",
    description:
      "Nigeria's first rent intelligence platform. Community-sourced, anonymised rent data builds a transparent price index that shows whether a rent is fair, high, or a red flag — protecting renters from exploitation.",
    features: [
      "RentBot — AI assistant for conversational rent checks",
      "Fair-price index by state, area & property type",
      "True move-in cost calculator (agent, legal & caution fees)",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
  },
];

/* ─── CCTV field installation gallery ───────────────────── */
const fieldPhotos = [
  { src: "/cctv-install-1.webp", alt: "SMAT Concept technician running CCTV cabling at ceiling level" },
  { src: "/cctv-install-2.webp", alt: "Mounting a camera unit on interior wall" },
  { src: "/cctv-install-3.webp", alt: "Terminating and testing camera wiring" },
  { src: "/cctv-install-4.webp", alt: "Live multi-camera NVR feed on the client's monitor after installation" },
];

export default function PortfolioPage() {
  return (
    <div style={{ background: "#080B16", minHeight: "100vh" }}>
      <TechHeader />

      <main className="pt-20 lg:pt-24">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-16 md:py-24 px-4 dot-grid">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.09) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#D4AF37" }}>
              Built by SMAT
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6">
              Real Products. <span className="text-gold-gradient">Really Built.</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Every platform on this page was designed, engineered, and shipped by our team —
              software for the problems we see around us every day in Nigeria.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6">
              {[["8", "Products Built"], ["3", "Live Deployments"], ["100%", "Built In-House"], ["NG", "Made for Nigeria"]].map(([val, lab]) => (
                <div key={lab} className="glass-card rounded-xl px-6 py-4 text-center"
                  style={{ border: "1px solid rgba(212,175,55,0.2)" }}>
                  <div className="text-2xl font-extrabold text-gold-gradient">{val}</div>
                  <div className="text-xs text-gray-400 mt-1">{lab}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Featured: Veriflow ── */}
        <section className="section-divider py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-8">
              <Star size={18} style={{ color: "#D4AF37" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#D4AF37" }}>Flagship — Live with a Client</span>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0"
              style={{ border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 0 60px rgba(212,175,55,0.08)" }}>
              <div className="relative h-72 md:h-auto overflow-hidden">
                <BrandCover
                  title={featuredProject.name}
                  icon={featuredProject.icon}
                  seed={1}
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(8,11,22,0.6))" }} />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit"
                  style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}>
                  {featuredProject.category}
                </span>
                <h2 className="text-3xl font-extrabold text-white mb-3">{featuredProject.name}</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{featuredProject.description}</p>

                {/* Client pull-quote */}
                <blockquote
                  className="mb-6 pl-4 py-2"
                  style={{ borderLeft: "3px solid rgba(212,175,55,0.5)" }}
                >
                  <p className="text-sm text-gray-400 italic leading-relaxed mb-2">
                    &ldquo;The custom dashboard introduced real-time case tracking, operational
                    analytics, and improved workflow visibility, allowing management to make
                    faster and more informed decisions.&rdquo;
                  </p>
                  <footer className="text-xs font-semibold" style={{ color: "#D4AF37" }}>
                    — Management Team, TheRecord Consults
                  </footer>
                </blockquote>

                {/* Measured outcome */}
                <div
                  className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl w-fit"
                  style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.28)" }}
                >
                  <Clock size={20} style={{ color: "#D4AF37", flexShrink: 0 }} />
                  <div>
                    <p className="text-sm font-bold text-white">
                      Weekly case reviews: <span className="text-gold-gradient">hours → minutes</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      The CEO now sorts and reviews every weekly case summary from one analytics dashboard
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full text-gray-300"
                      style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>{t}</span>
                  ))}
                </div>
                <Link href="/contact"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold w-fit">
                  Discuss a Similar Project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Product Grid ── */}
        <section className="section-divider py-16 px-4 dot-grid">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
                Our <span className="text-gold-gradient">Products</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Seven more platforms engineered in-house — each one solving a specific, underserved
                problem in African markets. Live links where available; demos on request for the rest.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <motion.div key={p.id}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group">
                  <div className="relative h-44 overflow-hidden">
                    <BrandCover
                      title={p.name}
                      icon={p.icon}
                      seed={p.id}
                      className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide"
                        style={{ background: "rgba(8,11,22,0.85)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}>
                        {p.sector}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full"
                        style={{ background: "rgba(212,175,55,0.92)", color: "#080B16" }}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-gray-400">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "rgba(212,175,55,0.6)" }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded text-gray-400"
                          style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.15)" }}>{t}</span>
                      ))}
                    </div>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="btn-gold inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold w-fit">
                        Visit Live Site <ExternalLink size={13} />
                      </a>
                    ) : (
                      <Link href="/contact"
                        className="btn-gold-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold w-fit">
                        Request a Demo <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Field Work: CCTV Installation ── */}
        <section className="section-divider py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-3">
              <Camera size={18} style={{ color: "#D4AF37" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#D4AF37" }}>Field Work</span>
            </motion.div>
            <motion.h2 {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-3xl md:text-4xl font-black text-white mb-3">
              Beyond Software — <span className="text-gold-gradient">Hands-On Installations</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 max-w-2xl mb-10">
              Our engineers in the field: full CCTV and surveillance installation for a private
              residential client — cabling, camera mounting, NVR configuration, and live remote
              viewing on the client&apos;s monitor and phone.
            </motion.p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {fieldPhotos.map((ph, i) => (
                <motion.div key={ph.src}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative rounded-2xl overflow-hidden group h-72 sm:h-80"
                  style={{ border: "1px solid rgba(212,175,55,0.15)" }}>
                  <Image src={ph.src} alt={ph.alt} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(8,11,22,0.5) 0%, transparent 40%)" }} />
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8">
              <Link href="/services/home-automation"
                className="btn-gold-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold">
                Explore Home Automation & CCTV <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-divider py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
              Want one of these <span className="text-gold-gradient">working for you?</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400 mb-8">
              Pilot a product, request a demo, or commission something custom — every great
              partnership starts with a conversation.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
                Let&apos;s Talk <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
