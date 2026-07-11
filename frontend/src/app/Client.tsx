"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  CheckSquare, Globe, Leaf, Home as HomeIcon, Database, Shield, Cpu, Zap,
  ArrowRight, Star, Users, Award, TrendingUp,
  CheckCircle, MessageCircle, Phone, Mail, BarChart3, Binary,
  Sparkles, Rocket, Brain
} from "lucide-react";
import TechHeader from "./components/TechHeader";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Footer from "./components/Footer";
import AfricaMap from "./components/AfricaMap";
import DashboardMock, { DashboardMockCompact } from "./components/DashboardMock";

/* Cursor-follow spotlight for .spot-card elements */
function spot(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

/* Platforms built by SMAT — hero social-proof strip (all real products) */
const builtPlatforms = ["Veriflow", "EduTracker360", "CivicDesk", "SchoolPro Elite", "EasyServe", "ShopSight", "DealerOS", "RentInDex"];

/* ─── Animation variants ────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── Animated Counter ──────────────────────────────────── */
function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black font-display text-gold-gradient">
        {display}{suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1.5 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ─── Tech stack marquee items ──────────────────────────── */
const techItems = [
  "Next.js", "React", "TypeScript", "FastAPI", "Python", "TensorFlow",
  "PostgreSQL", "Node.js", "IoT Sensors", "OpenAI", "Tailwind CSS",
  "AWS", "Vercel", "Docker", "Raspberry Pi", "Arduino", "PowerBI",
];

/* ─── Process steps ─────────────────────────────────────── */
const processSteps = [
  { num: "01", title: "Discovery Call", desc: "We learn your business deeply — goals, challenges, constraints, and what success looks like." },
  { num: "02", title: "Strategy & Scope", desc: "We map the solution architecture, define deliverables, and agree on timeline and budget." },
  { num: "03", title: "Build & Iterate", desc: "Our engineers ship in sprints. You see progress weekly — not months from now." },
  { num: "04", title: "Launch & Support", desc: "We deploy, train your team, and stay available for 30 days post-launch at no extra cost." },
];

/* ─── Home Page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#080B16] overflow-x-hidden">
      <TechHeader />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Layered backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 mesh-grid opacity-50" />
          {/* Africa network map — hero focal art */}
          <AfricaMap className="absolute right-[-8%] md:right-[2%] lg:right-[6%] top-1/2 -translate-y-1/2 h-[85%] w-auto opacity-[0.55] md:opacity-70 pointer-events-none" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,11,22,0.55) 0%, rgba(8,11,22,0.25) 40%, rgba(8,11,22,0.9) 100%)" }} />
        </div>

        {/* Ambient gold orbs */}
        <motion.div
          animate={{ y: [-40, 40, -40], x: [-15, 15, -15], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="orb w-[500px] h-[500px] top-0 -left-40"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ y: [40, -40, 40], x: [15, -15, 15], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="orb w-[600px] h-[600px] bottom-0 -right-40"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex-1 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="section-badge mx-auto mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Leading Africa in AI & Data-Driven Solutions
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-display text-[2.6rem] sm:text-7xl md:text-[88px] font-black mb-6 leading-[0.98] sm:leading-[0.95] text-white tracking-tight text-balance"
          >
            Your Fastest Route
            <span className="block text-gold-gradient mt-2">to the Digital World</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build high-performance technology — AI workspace apps, smart automation,
            data intelligence — that scales African businesses to world-class standards.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-gold px-9 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-gold-outline px-9 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Start a Project
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 section-divider"
          >
            <AnimatedStat value={50} suffix="+" label="Projects Delivered" />
            <AnimatedStat value={10} suffix="+" label="Industries Served" />
            <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
            <AnimatedStat value={24} suffix="/7" label="Expert Support" />
          </motion.div>

          {/* Platforms strip — social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 font-semibold mb-4">
              The team behind platforms like
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {builtPlatforms.map((p) => (
                <span
                  key={p}
                  className="font-display text-sm sm:text-base font-bold text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border flex justify-center pt-1.5" style={{ borderColor: "rgba(212,175,55,0.3)" }}>
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: "#D4AF37" }}
              animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── TECH STACK MARQUEE ────────────────────────────── */}
      <div className="py-6 section-divider overflow-hidden" style={{ background: "rgba(12,15,30,0.5)" }}>
        <div className="marquee-track">
          {[...techItems, ...techItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-gray-500 whitespace-nowrap flex-shrink-0">
              <span className="w-1 h-1 rounded-full bg-gold-DEFAULT" style={{ background: "#D4AF37", flexShrink: 0, width: 4, height: 4, borderRadius: "50%" }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES BENTO GRID ───────────────────────────── */}
      <section id="services" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <div className="section-badge mb-5">Our Core Business Divisions</div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-[1.05]">
              Transforming Africa Through<br />
              <span className="text-gold-gradient">Integrated Excellence</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              Ten specialist divisions. One integrated team. Proven real-world results.
            </p>
          </motion.div>

          {/* ── Row 1: Featured cards ──────────────────────── */}
          <div className="grid lg:grid-cols-3 gap-4 mb-4">

            {/* DATA ANALYSIS — large featured card with real dashboards */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer min-h-[340px]"
              style={{ background: "rgba(15,22,41,0.7)", border: "1px solid rgba(212,175,55,0.12)" }}
            >
              <Link href="/services/data-analysis" className="absolute inset-0 z-20" aria-label="Data Analysis" />

              {/* Native dashboard mock — fills right half */}
              <div className="absolute inset-y-0 right-0 w-[58%] hidden md:flex items-center justify-end pr-[-2rem] opacity-80 group-hover:opacity-100 transition-all duration-700">
                <DashboardMockCompact className="w-[130%] translate-x-[12%] group-hover:translate-x-[9%] transition-transform duration-700" />
              </div>

              {/* Gradient fade from left */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B16] via-[#080B16]/85 to-transparent z-10 pointer-events-none" />

              {/* Gold top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent z-10" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)" }}>
                    <BarChart3 className="w-6 h-6" style={{ color: "#D4AF37" }} />
                  </div>
                  <div className="section-badge mb-3" style={{ fontSize: "10px" }}>Flagship Division</div>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                    Data Analysis<br />&amp; Insights
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
                    Turn raw business data into strategic intelligence — predictive models, live dashboards, and AI-driven forecasting built for real operations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Predictive business modeling", "Real-time dashboards", "Customer behavior analysis", "AI trend forecasting"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#D4AF37" }}>
                  Explore Division <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* AI WORKSPACE — tall companion card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onMouseMove={spot}
              className="spot-card relative rounded-2xl overflow-hidden group cursor-pointer min-h-[340px] flex flex-col"
              style={{ background: "rgba(15,22,41,0.7)", border: "1px solid rgba(212,175,55,0.12)" }}
            >
              <Link href="/services/ai-workspace" className="absolute inset-0 z-10" aria-label="AI Workspace" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" />

              {/* Animated grid background */}
              <div className="absolute inset-0 mesh-grid opacity-30" />

              {/* Glow orb */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full blur-2xl" style={{ background: "rgba(212,175,55,0.12)" }} />

              <div className="relative z-10 p-7 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)" }}>
                  <Binary className="w-6 h-6" style={{ color: "#D4AF37" }} />
                </div>
                <h3 className="font-display text-xl font-black text-white mb-2">AI Workspace Apps</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">Custom internal tools supercharged with AI — automate repetitive work so your team focuses on high-value output.</p>
                <ul className="space-y-2 flex-1">
                  {["Custom LLM integration", "Automated document AI", "Intelligent knowledge bases", "AI team assistants"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#D4AF37" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "#D4AF37" }}>
                  Explore Division <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Rows 2–3: eight divisions, one accent system ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "web-development", name: "Web Development", tagline: "Fast, beautiful, revenue-generating apps",
                icon: Globe,
                features: ["Custom frontend & backend", "E-commerce integration", "PWA & mobile-ready"],
                href: "/services/web-development",
              },
              {
                id: "task-management", name: "Task Management", tagline: "Veriflow, CivicDesk & more",
                icon: CheckSquare,
                features: ["Custom Kanban boards", "Team real-time sync", "Automated reporting"],
                href: "/services/task-management",
              },
              {
                id: "smart-farming", name: "Smart Farming", tagline: "IoT-powered agriculture",
                icon: Leaf,
                features: ["Soil & climate sensors", "Auto-irrigation control", "AI crop monitoring"],
                href: "/services/smart-farming",
              },
              {
                id: "home-automation", name: "Home Automation & CCTV", tagline: "Smart home. Total control.",
                icon: HomeIcon,
                features: ["CCTV installation", "Remote phone control", "Smart gate & lighting"],
                href: "/services/home-automation",
              },
              {
                id: "document-digitalization", name: "Document Digitalization", tagline: "Paper to searchable intelligence",
                icon: Database,
                features: ["High-volume OCR scanning", "Auto-classification", "Full-text search"],
                href: "/services/document-digitalization",
              },
              {
                id: "digital-training", name: "Digital Training", tagline: "Empowering Africa's tech talent",
                icon: Users,
                features: ["Full-stack development", "Data science classes", "1-on-1 mentorship"],
                href: "/services/digital-training",
              },
              {
                id: "networking", name: "Networking & Security", tagline: "Enterprise-grade protection",
                icon: Shield,
                features: ["Network design & install", "Firewall & VPN", "24/7 monitoring"],
                href: "/services/networking",
              },
              {
                id: "energy", name: "Energy Solutions", tagline: "Reliable power for Africa",
                icon: Zap,
                features: ["Solar panel installation", "Battery storage", "Energy dashboards"],
                href: "/services/energy",
              },
            ].map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                  onMouseMove={spot}
                  className="spot-card relative rounded-2xl overflow-hidden group cursor-pointer p-6 flex flex-col transition-all duration-300 hover:border-[rgba(212,175,55,0.35)]"
                  style={{ background: "rgba(15,22,41,0.55)", border: "1px solid rgba(212,175,55,0.1)", backdropFilter: "blur(12px)" }}
                >
                  <Link href={svc.href} className="absolute inset-0 z-10" aria-label={svc.name} />
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
                  />

                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.18)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="font-display text-base font-black text-white mb-1 leading-tight">{svc.name}</h3>
                  <p className="text-xs mb-4 font-medium text-gray-500">{svc.tagline}</p>
                  <ul className="space-y-1.5 flex-1">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "rgba(212,175,55,0.6)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all" style={{ color: "#D4AF37" }}>
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────── */}
      <section className="py-24 section-divider relative" style={{ background: "rgba(10,13,29,0.8)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="section-badge mx-auto mb-5">Our Process</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
              From Idea to Live Product —
              <span className="block text-gold-gradient mt-1">In Weeks, Not Months</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We've refined our delivery process over dozens of projects. You know exactly where things stand at every step.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="card-border-light"
              >
                <div className="font-display text-4xl font-black mb-4 leading-none text-gold-gradient opacity-90">{step.num}</div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SMAT ──────────────────────────────────────── */}
      <section className="py-24 section-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="section-badge mb-6">Why SMAT Concept</div>
              <h2 className="font-display text-4xl font-black text-white mb-6 leading-tight">
                We Don&apos;t Just Build Tech.
                <span className="block text-gold-gradient mt-1">We Build Futures.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Founded on the belief that Africa deserves world-class technology, SMAT Concept
                has been at the forefront of digital transformation across industries. Every project
                is a commitment to excellence, innovation, and real measurable impact.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Brain, title: "Deep local expertise", desc: "We understand the African business landscape and build solutions that actually work here." },
                  { icon: Rocket, title: "End-to-end delivery", desc: "From strategy to deployment and ongoing support — we own the entire journey." },
                  { icon: Sparkles, title: "Cutting-edge technology", desc: "IoT, AI, cloud, automation — we stay ahead so you stay competitive." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(212,175,55,0.1)" }}>
                      <item.icon className="w-4.5 h-4.5" style={{ color: "#D4AF37", width: 18, height: 18 }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 mt-8 font-bold text-sm" style={{ color: "#D4AF37" }}>
                Learn our story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, value: "50+", label: "Projects Delivered", delay: 0 },
                { icon: Users, value: "10+", label: "Industries Served", delay: 0.08 },
                { icon: TrendingUp, value: "100%", label: "Delivery Rate", delay: 0.16 },
                { icon: Star, value: "24/7", label: "Client Support", delay: 0.24 },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay, duration: 0.5 }}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <div className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(212,175,55,0.1)" }}>
                      <Icon className="w-5 h-5" style={{ color: "#D4AF37" }} />
                    </div>
                    <div className="font-display text-2xl font-black text-gold-gradient mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DATA & AI SHOWCASE ────────────────────────────── */}
      <section className="py-24 section-divider relative overflow-hidden" style={{ background: "rgba(10,13,29,0.6)" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="section-badge mb-6">Advanced Intelligence</div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Decisions Driven by<br />
                <span className="text-gold-gradient">Data & AI</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We combine high-performance data analysis with custom AI workspace apps
                to give your business a competitive edge that wasn&apos;t possible before.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Expert Analysis", "Custom AI Models", "Real-time Insights"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm font-medium text-white px-3 py-1.5 rounded-full" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}>
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: "#D4AF37" }} />
                    {tag}
                  </div>
                ))}
              </div>
              <Link href="/services/data-analysis" className="btn-gold inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full font-bold text-sm w-fit">
                See Data Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 col-span-1 sm:col-span-2 relative min-h-[340px] overflow-hidden group"
              >
                <div className="relative z-10 mb-4">
                  <h3 className="text-lg font-bold text-white">Live Operational Dashboards</h3>
                  <p className="text-sm text-gray-400 mt-1">The same real-time analytics we ship to logistics and verification partners</p>
                </div>
                <div className="relative px-2 sm:px-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <DashboardMock />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
              >
                <Binary className="w-7 h-7 mb-4" style={{ color: "#D4AF37" }} />
                <h3 className="font-bold text-white mb-2">AI Workspace</h3>
                <p className="text-xs text-gray-400 leading-relaxed">Custom LLM integration for automated team workflows and intelligent tooling.</p>
                <div className="absolute -bottom-3 -right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu className="w-20 h-20" style={{ color: "#D4AF37" }} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
              >
                <Shield className="w-7 h-7 mb-4" style={{ color: "#D4AF37" }} />
                <h3 className="font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-xs text-gray-400 leading-relaxed">World-class network protection and data infrastructure security.</p>
                <div className="absolute bottom-4 right-4">
                  <div className="w-14 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(212,175,55,0.1)" }}>
                    <motion.div
                      animate={{ x: [-56, 56] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/3 rounded-full"
                      style={{ background: "#D4AF37" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ────────────────────────────────────── */}
      <section className="py-24 section-divider relative">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="section-badge mx-auto mb-5">Our Leadership</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
              Visionary People,
              <span className="block text-gold-gradient mt-1">Bold Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Salami Muhydeen.O",
                role: "CEO & CTO",
                image: "/ceo.webp",
                bio: "Nigerian technology entrepreneur focused on building practical digital solutions like RentInDex and digital verification platforms.",
              },
              {
                name: "Alaketu A Muyideen",
                role: "Data Analyst & COO",
                image: "/coo.webp",
                bio: "Expert in data strategy and operational excellence, ensuring seamless project delivery and measurable client outcomes.",
              },
              {
                name: "Oyebamiji Tolase",
                role: "Client Success Manager",
                image: "/customer_service.webp",
                bio: "Dedicated to client success and providing world-class support to all our partners throughout every engagement.",
              },
            ].map((person, i) => (
              <motion.div
                key={person.role}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="card-border-light overflow-hidden rounded-2xl"
                style={{ padding: 0 }}
              >
                <div className="team-photo aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(8,11,22,0.85) 0%, transparent 55%)" }} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white text-lg mb-0.5">{person.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#D4AF37" }}>{person.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about" className="btn-gold-outline inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold">
              Full About Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-24 section-divider relative overflow-hidden" style={{ background: "rgba(10,13,29,0.6)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="section-badge mx-auto mb-5">Verified Trust</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
              Real Impact for
              <span className="block text-gold-gradient mt-1">Real Businesses</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "SMAT Concept transformed our workflow from a manual process into a centralised digital workspace. The custom dashboard introduced real-time case tracking, operational analytics, and improved accountability across the board.",
                author: "Management Team",
                role: "Operations Division · Veriflow",
                company: "TheRecord Consults",
                initials: "TC",
              },
              {
                text: "Before SMAT, our car records lived in notebooks and WhatsApp chats. Now every vehicle, document, and buyer sits in one place — we can see what is selling, what is sitting too long, and share a clean car profile to any serious buyer in seconds.",
                author: "Management",
                role: "DealerOS",
                company: "Folat Autos",
                initials: "FA",
              },
              {
                text: "The SMAT team handled our camera installation neatly and professionally — tidy cabling, clean mounting, and before they left we were watching every corner of the lounge live from a phone. Real peace of mind.",
                author: "Management",
                role: "CCTV & Surveillance",
                company: "Damzz Beauty Lounge",
                initials: "DB",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/[0.04] card-border-light"
                style={{ background: "rgba(15,22,41,0.55)" }}
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: "#D4AF37" }} />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">&ldquo;{t.text}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.author}</p>
                      <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-500 uppercase flex-shrink-0">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-gold-outline inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold">
              Read All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0.04) 100%)", border: "1px solid rgba(212,175,55,0.28)", boxShadow: "0 0 80px rgba(212,175,55,0.08)" }}
          >
            <div className="absolute inset-0 dot-grid opacity-25" />
            <div className="relative z-10 p-8 sm:p-14 text-center">
              <div className="section-badge mx-auto mb-6">First consultation is free</div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                Ready to Build Something<br />
                <span className="text-gold-gradient">Extraordinary?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Whether you need a task management app, a smart farm system, or a full digital transformation —
                let&apos;s talk. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold px-9 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2">
                  Start a Conversation <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/2348101235007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline px-9 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
                <a href="tel:+2348101235007" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                  <Phone className="w-4 h-4" style={{ color: "#D4AF37" }} />
                  +234 810 123 5007
                </a>
                <a href="mailto:smatconceptsolutions@gmail.com" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                  <Mail className="w-4 h-4" style={{ color: "#D4AF37" }} />
                  smatconceptsolutions@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
