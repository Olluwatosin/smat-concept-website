"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Tag, ExternalLink, Layers, Star } from "lucide-react";
import TechHeader from "../components/TechHeader";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Category = "All" | "Task Management" | "Web Dev" | "Smart Farming" | "Home Automation" | "Document Digitalization" | "IoT & Energy";

const CATEGORIES: Category[] = ["All", "Task Management", "Web Dev", "Smart Farming", "Home Automation", "Document Digitalization", "IoT & Energy"];

const projects = [
  {
    id: 1,
    name: "SMAT Task Flow",
    category: "Task Management" as Category,
    description: "A full-featured task and project management platform for a Lagos-based NGO, replacing spreadsheets with custom Kanban workflows and automated reporting.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "OpsDesk Pro",
    category: "Task Management" as Category,
    description: "Internal operations management tool for an Abuja logistics company — ticket system, SLA tracking, and team performance dashboards.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    name: "Kolade Realty Platform",
    category: "Web Dev" as Category,
    description: "Full-stack real estate listing and enquiry platform for a fast-growing Lagos property agency, with agent dashboards and payment integration.",
    tech: ["Next.js", "Prisma", "Paystack", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    name: "Afrik Eats Marketplace",
    category: "Web Dev" as Category,
    description: "Multi-vendor food ordering marketplace for restaurants across Ibadan and Ogbomoso, built with real-time order tracking and rider dispatch.",
    tech: ["React", "Django", "Stripe", "WebSockets"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    name: "MedLink Patient Portal",
    category: "Web Dev" as Category,
    description: "Healthcare appointment and records portal for a private clinic in Port Harcourt, including teleconsultation and NHIS billing support.",
    tech: ["Next.js", "Supabase", "Twilio", "PDF generation"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    name: "FarmPulse Ogun",
    category: "Smart Farming" as Category,
    description: "Precision agriculture monitoring system for a 200-hectare cassava farm in Ogun State — soil sensors, automated irrigation, and yield forecasting dashboard.",
    tech: ["Raspberry Pi", "MQTT", "InfluxDB", "React"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    name: "GreenHouse IQ Kaduna",
    category: "Smart Farming" as Category,
    description: "Climate-controlled greenhouse management system for a tomato cooperative in Kaduna — humidity, temperature, and CO₂ automation with SMS alerts.",
    tech: ["Arduino", "ESP32", "Node.js", "Twilio"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    name: "SmartHome Lagos VI",
    category: "Home Automation" as Category,
    description: "Whole-home automation for a luxury apartment in Victoria Island — voice control, smart lighting scenes, security cameras and biometric access.",
    tech: ["KNX", "Home Assistant", "Google Home", "CCTV"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 9,
    name: "CampusGuard Ibadan",
    category: "Home Automation" as Category,
    description: "Smart access and surveillance system for a student hostel complex in Ibadan — RFID gates, emergency alert panels, and live monitoring app.",
    tech: ["RFID", "RTSP", "Flutter", "Firebase"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 10,
    name: "PaperlessCourt NG",
    category: "Document Digitalization" as Category,
    description: "Court document scanning, indexing, and retrieval system for a state judiciary — 40,000 paper files converted to searchable digital records.",
    tech: ["OCR", "Elasticsearch", "Python", "AWS S3"],
    image: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 11,
    name: "HR Vault — Sterling Finance",
    category: "Document Digitalization" as Category,
    description: "Secure employee records digitalization and HR document management system for a Lagos microfinance institution, with role-based access control.",
    tech: ["Django", "Tesseract OCR", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 12,
    name: "SolarGrid Monitor — Kano",
    category: "IoT & Energy" as Category,
    description: "Remote IoT monitoring and load management system for a 50kW solar microgrid serving a rural community in Kano — real-time energy analytics and fault alerting.",
    tech: ["ESP32", "Modbus", "Grafana", "LoRaWAN"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

const featuredProject = projects[0];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered = activeFilter === "All"
    ? projects.filter((p) => !p.featured)
    : projects.filter((p) => p.category === activeFilter && !p.featured);

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
              Selected Work
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6">
              Our Work <span className="text-gold-gradient">Speaks</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              From enterprise platforms to IoT hardware — real solutions, real impact, real businesses transformed.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6">
              {[["150+", "Projects Delivered"], ["8", "Service Areas"], ["50+", "Clients Served"], ["5+", "Years Building"]].map(([val, lab]) => (
                <div key={lab} className="glass-card rounded-xl px-6 py-4 text-center"
                  style={{ border: "1px solid rgba(212,175,55,0.2)" }}>
                  <div className="text-2xl font-extrabold text-gold-gradient">{val}</div>
                  <div className="text-xs text-gray-400 mt-1">{lab}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Featured Project ── */}
        <section className="section-divider py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-8">
              <Star size={18} style={{ color: "#D4AF37" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#D4AF37" }}>Featured Project</span>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0"
              style={{ border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 0 60px rgba(212,175,55,0.08)" }}>
              <div className="relative h-72 md:h-auto overflow-hidden">
                <img src={featuredProject.image} alt={featuredProject.name} loading="lazy"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(8,11,22,0.6))" }} />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}>
                  {featuredProject.category}
                </span>
                <h2 className="text-3xl font-extrabold text-white mb-3">{featuredProject.name}</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{featuredProject.description}</p>
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

        {/* ── Filter Tabs ── */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={activeFilter === cat
                    ? { background: "#D4AF37", color: "#080B16" }
                    : { background: "rgba(212,175,55,0.08)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}>
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Project Grid ── */}
        <section className="section-divider py-12 px-4 dot-grid">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => (
                  <motion.div key={project.id}
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={project.image} alt={project.name} loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{ background: "rgba(8,11,22,0.85)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white">{project.name}</h3>
                        <Layers size={15} style={{ color: "#D4AF37", flexShrink: 0 }} className="mt-1" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded text-gray-400"
                            style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.15)" }}>{t}</span>
                        ))}
                      </div>
                      <Link href="/contact"
                        className="btn-gold-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold w-fit">
                        View Details <ExternalLink size={13} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-16">No projects in this category yet.</p>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-divider py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Have a project <span className="text-gold-gradient">in mind?</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400 mb-8">
              Let's build something exceptional together. Every great product starts with a conversation.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
                Let's Talk <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="section-divider py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SMAT Concept. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              {[["Home", "/"], ["About", "/about"], ["Pricing", "/pricing"], ["Contact", "/contact"]].map(([label, href]) => (
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
