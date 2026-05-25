"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckSquare, Globe, Leaf, Home as HomeIcon, Database, Shield, Cpu, Zap,
  ArrowRight, ChevronRight, Star, Users, Award, TrendingUp,
  CheckCircle, MessageCircle, Phone, Mail, BarChart3, Binary
} from "lucide-react";
import TechHeader from "./components/TechHeader";
import WhatsAppWidget from "./components/WhatsAppWidget";

/* ─── Service data ─────────────────────────────────────────── */
const services = [
  {
    id: "data-analysis",
    name: "Data Analysis & Insights",
    tagline: "Turn raw data into strategic intelligence",
    icon: BarChart3,
    color: "from-blue-600 to-indigo-500",
    glow: "rgba(37,99,235,0.3)",
    href: "/services/data-analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description: "Our data experts help you unlock the hidden potential in your business data. From predictive modeling to real-time dashboards, we provide the clarity you need to grow.",
    features: ["Predictive business modeling", "Real-time performance dashboards", "Customer behavior analysis", "Advanced statistical reporting", "Data cleaning & architecture", "AI-driven trend forecasting"],
    stat: "Proven",
    statLabel: "revenue growth insights",
  },
  {
    id: "ai-workspace",
    name: "AI Workspace Apps",
    tagline: "The future of productivity is intelligent",
    icon: Binary,
    color: "from-purple-600 to-pink-500",
    glow: "rgba(147,51,234,0.3)",
    href: "/services/ai-workspace",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    description: "We build custom internal tools and workspace applications supercharged with AI. Automate your most repetitive tasks and let your team focus on high-value work.",
    features: ["Custom AI-integrated CRM/ERP", "Automated document processing", "Intelligent search & knowledge bases", "Smart task prioritization", "AI assistants for your team", "Seamless tool integrations"],
    stat: "Verified",
    statLabel: "workflow acceleration",
  },
  {
    id: "task-management",
    name: "Task Management",
    tagline: "Proven systems like Veriflow & CivicDesk",
    icon: CheckSquare,
    color: "from-amber-500 to-yellow-400",
    glow: "rgba(245,158,11,0.3)",
    href: "/services/task-management",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "We design and build custom task management solutions like Veriflow (for verification companies) and CivicDesk. We eliminate chaos and drive team performance with enterprise-grade workflow platforms.",
    features: ["Custom project boards & Kanban views", "Team collaboration & real-time sync", "Automated reminders & deadlines", "Analytics & productivity reports", "Mobile app accessibility", "Seamless team onboarding"],
    stat: "Proven",
    statLabel: "project efficiency",
  },
  {
    id: "web-development",
    name: "Web Development",
    tagline: "Fast, beautiful, revenue-generating apps",
    icon: Globe,
    color: "from-cyan-500 to-blue-400",
    glow: "rgba(6,182,212,0.3)",
    href: "/services/web-development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-performance web development from sleek landing pages to complex SaaS platforms. We build custom architectures that scale with your business goals.",
    features: ["Custom frontend development", "Robust backend API architecture", "E-commerce & payment integration", "Progressive Web Apps (PWA)", "SEO-optimised architecture", "Performance & security audits"],
    stat: "World-Class",
    statLabel: "development standards",
  },
  {
    id: "smart-farming",
    name: "Smart Farming",
    tagline: "IoT-powered agriculture revolution",
    icon: Leaf,
    color: "from-green-500 to-emerald-400",
    glow: "rgba(34,197,94,0.3)",
    href: "/services/smart-farming",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Transform your farm with precision agriculture technology. Our smart farming solutions combine IoT sensors, real-time monitoring, and data analytics to maximise your yield.",
    features: ["Soil moisture & nutrient sensors", "Automated irrigation systems", "Greenhouse climate control", "Crop health monitoring (AI-powered)", "Livestock tracking systems", "Farm management dashboards"],
    stat: "Verified",
    statLabel: "yield optimization",
  },
  {
    id: "home-automation",
    name: "Home Automation & CCTV",
    tagline: "Smart home. Total surveillance. One system.",
    icon: HomeIcon,
    color: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.3)",
    href: "/services/home-automation",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "We install smart home systems AND professional CCTV surveillance — lights, gates, AC, cameras all controllable from your phone, anywhere in the world.",
    features: ["CCTV installation (indoor & outdoor)", "Night vision & motion alert cameras", "Live remote viewing on your phone", "Smart lighting & scene control", "Automated gate & door access", "Energy monitoring & optimisation"],
    stat: "Proven",
    statLabel: "energy efficiency",
  },
  {
    id: "document-digitalization",
    name: "Document Digitalization",
    tagline: "From paper archives to searchable intelligence",
    icon: Database,
    color: "from-rose-500 to-pink-400",
    glow: "rgba(239,68,68,0.3)",
    href: "/services/document-digitalization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Eliminate paper chaos. We scan, classify, extract, and organise your physical documents into searchable digital systems that teams can actually use.",
    features: ["High-volume document scanning", "OCR & intelligent data extraction", "Automated document classification", "Secure cloud storage & backup", "Full-text search across archives", "Compliance & audit trail"],
    stat: "Verified",
    statLabel: "accuracy rate",
  },
  {
    id: "digital-training",
    name: "Digital Training & Classes",
    tagline: "Empowering the next generation of tech talent",
    icon: Users,
    color: "from-indigo-600 to-violet-500",
    glow: "rgba(79,70,229,0.3)",
    href: "/services/digital-training",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    description: "We provide intensive, practical training in programming, digital literacy, and emerging technologies. Our classes are designed to bridge the skill gap and prepare talent for the global stage.",
    features: ["Full-stack Web Development", "Data Science & Analysis", "IoT & Hardware Programming", "Digital Literacy for Business", "One-on-one Mentorship", "Certification & Projects"],
    stat: "Proven",
    statLabel: "talent empowerment",
  },
  {
    id: "networking",
    name: "Networking & Security",
    tagline: "Enterprise-grade protection",
    icon: Shield,
    color: "from-indigo-500 to-blue-400",
    glow: "rgba(99,102,241,0.3)",
    href: "/services/networking",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive network infrastructure design, installation, and security solutions. We protect your business from threats while keeping your team connected.",
    features: ["Network design & installation", "Firewall & endpoint security", "CCTV & surveillance systems", "VPN & remote access solutions", "Penetration testing", "24/7 network monitoring"],
    stat: "World-Class",
    statLabel: "uptime standards",
  },
  {
    id: "energy",
    name: "Energy Solutions",
    tagline: "Reliable, sustainable power for Africa",
    icon: Zap,
    color: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.3)",
    href: "/services/energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Solar installations, battery storage, smart inverters, and energy management systems. End grid dependency with clean, reliable power for homes and businesses.",
    features: ["Solar panel installation", "Battery storage systems", "Smart inverter setup", "Energy monitoring dashboards", "Generator integration & ATS", "Maintenance & warranties"],
    stat: "Proven",
    statLabel: "cost reduction",
  },
];

const stats = [
  { value: "Verified", label: "Project Excellence", icon: Award },
  { value: "Premium", label: "Business Partners", icon: Users },
  { value: "Proven", label: "Technical Insight", icon: TrendingUp },
  { value: "24/7", label: "Expert Support", icon: Star },
];

/* ─── Home Page ─────────────────────────────────────────────── */
export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="min-h-screen bg-[#080B16]">
      <TechHeader />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,11,22,0.95) 0%, rgba(12,15,30,0.85) 50%, rgba(8,11,22,0.95) 100%)' }} />
          <div className="absolute inset-0 dot-grid opacity-40" />
        </div>

        {/* Gold orbs */}
        <motion.div
          animate={{ y: [-30, 30, -30], x: [-10, 10, -10] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ y: [30, -30, 30], x: [10, -10, 10] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}
          >
            <Binary className="w-4 h-4" />
            Leading Africa in AI & Data-Driven Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-[1] text-white tracking-tight"
          >
            Your Fastest Route to
            <span className="block text-gold-gradient mt-2">the Digital World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            We build high-performance technology — from AI-powered workspace apps 
            to smart automation — that scales African businesses to world-class standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
              onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold-outline px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Start a Project
            </motion.a>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20 pt-8 md:pt-10 section-divider"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gold-gradient">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'rgba(212,175,55,0.3)' }}>
            <motion.div className="w-1 h-3 rounded-full" style={{ background: '#D4AF37' }} animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* ── INTERACTIVE SERVICES SLIDESHOW ────────────────────── */}
      <section id="services" className="py-24 relative overflow-hidden bg-[#0a0d1d]">
        <div className="absolute inset-0 dot-grid opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                Our Core Business Divisions
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Transforming Africa Through<br />
                <span className="text-gold-gradient">Integrated Excellence</span>
              </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-2">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden ${activeIdx === idx ? 'bg-white/5 border-l-4 border-gold' : 'hover:bg-white/[0.02] border-l-4 border-transparent'}`}
                  style={{ borderColor: activeIdx === idx ? '#D4AF37' : 'transparent' }}
                >
                  <h3 className={`text-xl font-bold transition-colors ${activeIdx === idx ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm mt-1 transition-colors ${activeIdx === idx ? 'text-gold italic' : 'text-gray-600'}`} style={{ color: activeIdx === idx ? '#D4AF37' : undefined }}>
                    {service.tagline}
                  </p>
                </button>
              ))}
            </div>

            {/* Content Display Area */}
            <div className="lg:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeIdx].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Words by the side */}
                  <div className="order-2 md:order-1">
                    <h4 className="text-2xl font-black text-white mb-4 leading-tight">
                      {services[activeIdx].tagline}
                    </h4>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      {services[activeIdx].description}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {services[activeIdx].features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" style={{ color: '#D4AF37' }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={services[activeIdx].href}
                      className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(212,175,55,0.2)]"
                    >
                      Enter Division <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Dashboard Image (Visible a bit, then Bold on click) */}
                  <div className="order-1 md:order-2 group">
                    <Link href={services[activeIdx].href}>
                      <div className="relative aspect-video rounded-3xl overflow-hidden glass-card cursor-pointer transform transition-all duration-700 hover:scale-105 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.2)]">
                        <Image 
                          src={services[activeIdx].image}
                          alt={services[activeIdx].name}
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B16] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                        
                        {/* Status tag */}
                        <div className="absolute top-6 right-6">
                           <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-gold text-xs font-bold uppercase tracking-widest" style={{ color: '#D4AF37' }}>
                             {services[activeIdx].statLabel}
                           </div>
                        </div>
                      </div>
                    </Link>
                    <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-600 mt-4 font-bold group-hover:text-gold transition-colors">
                      Click image to explore full intelligence
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="py-24 section-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                Why SMAT Concept
              </div>
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                We Don&apos;t Just Build Tech.<br />
                <span className="text-gold-gradient">We Build Futures.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Founded on the belief that Africa deserves world-class technology solutions,
                SMAT Concept has been at the forefront of digital transformation across industries.
                Every project we take on is a commitment to excellence, innovation, and real impact.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Deep local expertise", desc: "We understand the African business landscape and build solutions that work here." },
                  { title: "End-to-end delivery", desc: "From strategy to deployment and ongoing support — we own the entire journey." },
                  { title: "Cutting-edge technology", desc: "IoT, AI, cloud, automation — we stay ahead so you stay competitive." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(212,175,55,0.15)' }}>
                      <CheckCircle className="w-4 h-4" style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/about" className="inline-flex items-center gap-2 mt-8 font-bold" style={{ color: '#D4AF37' }}>
                Learn our story <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-2xl p-6 text-center"
                    style={{ boxShadow: '0 0 30px rgba(212,175,55,0.05)' }}
                  >
                    <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)' }}>
                      <Icon className="w-6 h-6" style={{ color: '#D4AF37' }} />
                    </div>
                    <div className="text-3xl font-black text-gold-gradient mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DATA & AI EXPERTISE ───────────────────────────────── */}
      <section className="py-24 relative section-divider overflow-hidden">
        <div className="absolute inset-0 bg-navy-light/30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Header Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                Advanced Intelligence
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Decisions Driven by<br />
                <span className="text-gold-gradient">Data & AI</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our experts don't just build software; they build searchable intelligence. 
                We combine high-performance data analysis with custom AI workspace apps 
                to give you a competitive edge that simply wasn't possible before.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle className="w-5 h-5 text-gold" /> Expert Analysis
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle className="w-5 h-5 text-gold" /> Custom AI Models
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle className="w-5 h-5 text-gold" /> Real-time Insights
                </div>
              </div>
            </motion.div>

            {/* Bento Grid Area */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Analytics Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-6 md:col-span-2 relative min-h-[400px] overflow-hidden group"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Operational Analytics</h3>
                  <p className="text-sm text-gray-400 max-w-sm mb-6">Real-world dashboards built for logistics and verification partners, featuring real-time tracking.</p>
                </div>
                <div className="absolute bottom-0 right-0 w-full h-2/3 flex gap-4 translate-y-4 translate-x-4">
                  {[1, 2].map((num) => (
                    <div key={num} className="relative w-full h-full group-hover:-translate-y-4 transition-transform duration-700" style={{ transitionDelay: `${num * 100}ms` }}>
                      <Image 
                        src={`/real_analytics${num}.JPG`} 
                        alt={`Dashboard ${num}`} 
                        fill 
                        className="object-cover rounded-tl-2xl border-t border-l border-white/10 shadow-2xl"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AI Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-3xl p-6 relative min-h-[250px] overflow-hidden group"
              >
                <div className="relative z-10">
                  <Binary className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">AI Workspace</h3>
                  <p className="text-xs text-gray-400">Custom LLM integration for automated team workflows.</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                   <Cpu className="w-full h-full text-gold" />
                </div>
              </motion.div>

              {/* Security Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-3xl p-6 relative min-h-[250px] overflow-hidden group"
              >
                <div className="relative z-10">
                  <Shield className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-xs text-gray-400">World-class protection for your data infrastructure.</p>
                </div>
                <div className="absolute bottom-0 right-0 p-4">
                  <div className="w-12 h-1.5 rounded-full bg-gold/20 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: [-50, 50] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/2 bg-gold" 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ────────────────────────────────────────── */}
      <section id="about" className="py-24 relative section-divider">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
              Our Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Visionary People,<br />
              <span className="text-gold-gradient">Bold Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Salami Muhydeen.O", 
                role: "CEO & CTO", 
                image: "/ceo.PNG", 
                bio: "Nigerian technology entrepreneur focused on building practical digital solutions like RentInDex and digital verification platforms." 
              },
              { 
                name: "Alaketu A Muyideen", 
                role: "Data Analyst & COO", 
                image: "/coo.PNG", 
                bio: "Expert in data strategy and operational excellence, ensuring seamless project delivery." 
              },
              { 
                name: "Oyebamiji Tolase", 
                role: "Customer Service Rep", 
                image: "/customer_service.PNG", 
                bio: "Dedicated to client success and providing world-class support to all our partners." 
              },
            ].map((person, i) => (
              <motion.div
                key={person.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden text-center"
              >
                <div className="aspect-square overflow-hidden relative">
                  <Image 
                    src={person.image} 
                    alt={person.role} 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,15,30,0.8) 0%, transparent 50%)' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-0.5">{person.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#D4AF37' }}>{person.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/about" className="btn-gold-outline inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold">
              Full About Page <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── AUTHENTIC TESTIMONIALS ────────────────────────────── */}
      <section className="py-24 relative overflow-hidden section-divider">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
              Verified Trust
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Real Impact for<br />
              <span className="text-gold-gradient">Real Businesses</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "SMAT Concept & Innovative Solutions helped transform our workflow from a manual documentation and spreadsheet-based process into a centralized digital workspace tailored to our operations. The custom dashboard introduced real-time case tracking, operational analytics, and improved visibility, allowing for faster decisions and significantly improved accountability.",
                author: "Management Team",
                role: "Operations Division",
                company: "TheRecord Consults",
                verified: true
              },
              {
                text: "The AI workspace app they built for us has increased our team's productivity tenfold. It's like having an extra 5 employees working 24/7.",
                author: "Sarah J. Boateng",
                role: "CEO & Founder",
                company: "FinTech Solutions West Africa",
                verified: true
              },
              {
                text: "The data analysis insights we received were eye-opening. We identified significant revenue leaks and operational inefficiencies we didn't even know existed.",
                author: "Musa Ibrahim",
                role: "Head of Strategy",
                company: "Northern Logistics Ltd",
                verified: true
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl p-8 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current text-gold" />)}
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed italic mb-8">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div>
                    <p className="font-bold text-white">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role} • {t.company}</p>
                  </div>
                  {t.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-500 uppercase">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 0 80px rgba(212,175,55,0.1)' }}
          >
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="relative z-10 p-6 sm:p-12 text-center">
              <h2 className="text-4xl font-black text-white mb-4">
                Ready to Build Something<br />
                <span className="text-gold-gradient">Extraordinary?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need a task management app, a smart farm system, or a full digital transformation —
                let&apos;s talk. First consultation is free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-gold px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                  Start a Conversation <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://wa.me/2348101235007" target="_blank" rel="noopener noreferrer" className="btn-gold-outline px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="section-divider pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D56A)' }}>
                  <Image src="/mainlogo.png" alt="SMAT Concept" fill className="object-contain p-1.5" />
                </div>
                <div>
                  <p className="font-black text-white">SMAT Concept</p>
                  <p className="text-xs" style={{ color: 'rgba(212,175,55,0.7)' }}>Innovative Solutions Ltd.</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Your fastest route to the digital world. Transforming Africa through cutting-edge technology that drives real growth.
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/2348101235007" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <MessageCircle className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </a>
                <a href="mailto:smatconceptsolutions@gmail.com" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </a>
                <a href="tel:+2348101235007" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#D4AF37' }}>Services</p>
              <ul className="space-y-2">
                {services.slice(0, 5).map((s) => (
                  <li key={s.id}><a href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">{s.name}</a></li>
                ))}
              </ul>
            </div>

            {/* More services */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-0">-</p>
              <ul className="space-y-2 mt-0">
                {services.slice(5).map((s) => (
                  <li key={s.id}><a href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">{s.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#D4AF37' }}>Company</p>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Blog", href: "/blog" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Goodwill", href: "/goodwill" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}><a href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 section-divider flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 SMAT Concept & Innovative Solutions Ltd. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" style={{ color: '#D4AF37' }} />
              <span>Built for Africa&apos;s digital future</span>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  );
}
