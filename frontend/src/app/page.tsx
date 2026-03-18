"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckSquare, Globe, Leaf, Home as HomeIcon, Database, Shield, Cpu, Zap,
  ArrowRight, X, ChevronRight, Star, Users, Award, TrendingUp,
  CheckCircle, MessageCircle, Phone, Mail
} from "lucide-react";
import TechHeader from "./components/TechHeader";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ServiceCalculator from "./components/ServiceCalculator";

/* ─── Service data ─────────────────────────────────────────── */
const services = [
  {
    id: "task-management",
    name: "Task Management",
    tagline: "Productivity systems that actually work",
    icon: CheckSquare,
    color: "from-amber-500 to-yellow-400",
    glow: "rgba(245,158,11,0.3)",
    href: "/services/task-management",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "We design and build custom task management solutions that eliminate chaos and drive team performance. From simple to-do systems to full enterprise workflow platforms.",
    features: ["Custom project boards & Kanban views", "Team collaboration & real-time sync", "Automated reminders & deadlines", "Analytics & productivity reports", "Mobile apps (iOS & Android)", "Integration with existing tools"],
    stat: "3× faster",
    statLabel: "project delivery",
  },
  {
    id: "web-development",
    name: "Web Development",
    tagline: "Fast, beautiful, revenue-generating apps",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.3)",
    href: "/services/web-development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Full-stack web development from sleek landing pages to complex SaaS platforms. We build with modern technologies that scale with your business.",
    features: ["Next.js / React front-ends", "Node.js & Django back-ends", "E-commerce & payment integration", "Progressive Web Apps (PWA)", "SEO-optimised architecture", "Performance & security audits"],
    stat: "98%",
    statLabel: "client satisfaction",
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
    stat: "40%",
    statLabel: "yield increase",
  },
  {
    id: "home-automation",
    name: "Home Automation",
    tagline: "Your home, intelligently controlled",
    icon: HomeIcon,
    color: "from-purple-500 to-violet-400",
    glow: "rgba(139,92,246,0.3)",
    href: "/services/home-automation",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Turn any home or office into a smart environment. Control everything — lights, security, AC, gates — from your phone or voice commands.",
    features: ["Smart lighting control", "Security cameras & access control", "Automated gate & door systems", "Energy monitoring & optimisation", "Voice assistant integration", "Remote control from anywhere"],
    stat: "35%",
    statLabel: "energy savings",
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
    stat: "99%",
    statLabel: "accuracy rate",
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
    stat: "99.9%",
    statLabel: "uptime guaranteed",
  },
  {
    id: "iot",
    name: "IoT Solutions",
    tagline: "Connected ecosystems that think",
    icon: Cpu,
    color: "from-teal-500 to-cyan-400",
    glow: "rgba(20,184,166,0.3)",
    href: "/services/iot",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Custom IoT device development and deployment. From hardware prototyping to full-scale cloud-connected device networks for industrial and commercial applications.",
    features: ["Custom IoT device prototyping", "Sensor network deployment", "Real-time data dashboards", "Predictive maintenance alerts", "Industrial automation", "Cloud IoT platform integration"],
    stat: "500+",
    statLabel: "devices deployed",
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
    stat: "60%",
    statLabel: "cost reduction",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered", icon: Award },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "5+", label: "Years of Excellence", icon: TrendingUp },
  { value: "24/7", label: "Support Available", icon: Star },
];

/* ─── Service Modal ─────────────────────────────────────────── */
function ServiceModal({ service, onClose }: { service: typeof services[0]; onClose: () => void }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,11,22,0.9)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{ background: '#0C0F1E', border: '1px solid rgba(212,175,55,0.2)', boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 60px ${service.glow}` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-48 overflow-hidden">
          <img src={service.image} alt={service.name} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0C0F1E 0%, rgba(12,15,30,0.4) 100%)' }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'rgba(8,11,22,0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(212,175,55,0.2)' }}
          >
            <X className="w-4 h-4 text-gray-300" />
          </button>
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`} style={{ boxShadow: `0 0 20px ${service.glow}` }}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{service.name}</h3>
              <p className="text-sm" style={{ color: '#D4AF37' }}>{service.tagline}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

          {/* Key stat */}
          <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div className="text-3xl font-black text-gold-gradient">{service.stat}</div>
            <div className="text-sm text-gray-400">{service.statLabel}</div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span className="text-sm text-gray-300">{f}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <a href="/contact" className="btn-gold flex-1 text-center py-3 rounded-xl font-bold text-sm">
              Get a Quote
            </a>
            <a href={service.href} className="btn-gold-outline flex-1 text-center py-3 rounded-xl font-bold text-sm">
              Learn More <ArrowRight className="inline w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Service Card ─────────────────────────────────────────── */
function ServiceCard({ service, onClick }: { service: typeof services[0]; onClick: () => void }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer group"
      onClick={onClick}
      style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.3)' }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={service.image} alt={service.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(12,15,30,0.95) 0%, rgba(12,15,30,0.3) 100%)` }} />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`} style={{ boxShadow: `0 0 15px ${service.glow}` }}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">{service.name}</h3>
            <p className="text-xs" style={{ color: 'rgba(212,175,55,0.8)' }}>{service.tagline}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{service.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-black text-gold-gradient">{service.stat}</span>
            <span className="text-xs text-gray-500 ml-2">{service.statLabel}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2" style={{ color: '#D4AF37' }}>
            View Details <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Home Page ─────────────────────────────────────────────── */
export default function Home() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#080B16]">
      <TechHeader />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
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

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}
          >
            <Zap className="w-4 h-4" />
            Africa's Premier Tech Solutions Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white"
          >
            Your Fastest Route to
            <span className="block text-gold-gradient mt-2">the Digital World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We build smart solutions across Task Management, Web Development, Smart Farming,
            Home Automation, Document Digitalization, and more — empowering Africa&apos;s digital future.
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 section-divider"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gold-gradient">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
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

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section id="services" className="py-28 relative">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              8 Ways We Transform<br />
              <span className="text-gold-gradient">Your Business</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Click any service card to see full details, features, and how we can help you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => setActiveService(service)}
              />
            ))}
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

      {/* ── SERVICE CALCULATOR ────────────────────────────────── */}
      <ServiceCalculator />

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
              { name: "Salami Muhydeen", role: "CEO & Founder", image: "/ceo.jpg", bio: "Pioneering Africa's digital transformation with passion and unwavering commitment to excellence." },
              { name: "Chief Technology Officer", role: "CTO", image: "/cto.jpg", bio: "Driving technical innovation and ensuring every solution is built to world-class standards." },
              { name: "Head of Operations", role: "HOO", image: "/Hoo.jpg", bio: "Ensuring seamless project delivery and operational excellence across every engagement." },
            ].map((person, i) => (
              <motion.div
                key={person.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden text-center"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={person.image} alt={person.role} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,15,30,0.9) 0%, transparent 60%)' }} />
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

      {/* ── TESTIMONIAL PREVIEW ───────────────────────────────── */}
      <section className="py-24 section-divider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
              Client Love
            </div>
            <div className="glass-card rounded-3xl p-10" style={{ boxShadow: '0 0 60px rgba(212,175,55,0.06)' }}>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#D4AF37' }} />)}
              </div>
              <p className="text-xl text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;SMAT Concept transformed our entire document workflow. What used to take days now takes minutes.
                Their team is world-class and the result exceeded every expectation we had.&rdquo;
              </p>
              <div>
                <p className="font-bold text-white">Agricultural Business Owner</p>
                <p className="text-sm" style={{ color: '#D4AF37' }}>Lagos, Nigeria</p>
              </div>
            </div>
            <a href="/testimonials" className="inline-flex items-center gap-2 mt-8 font-bold" style={{ color: '#D4AF37' }}>
              Read all testimonials <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
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
            <div className="relative z-10 p-12 text-center">
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5" style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D56A)' }}>
                  <img src="/mainlogo.png" alt="SMAT Concept" className="w-full h-full object-contain" />
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

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>

      <WhatsAppWidget />
    </div>
  );
}
