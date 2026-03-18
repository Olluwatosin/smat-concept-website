"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database, Leaf, Shield, Cpu, Zap, Home, Globe, CheckSquare,
  Menu, X, ChevronDown, ArrowRight, Phone, Mail, Users, BookOpen,
  DollarSign, Star, Heart, Briefcase
} from "lucide-react";

const services = [
  { id: "task-management", name: "Task Management", icon: CheckSquare, description: "Productivity systems & workflow tools", color: "from-amber-500 to-yellow-400", href: "/services/task-management" },
  { id: "web-development", name: "Web Development", icon: Globe, description: "Full-stack web apps & platforms", color: "from-blue-500 to-cyan-400", href: "/services/web-development" },
  { id: "smart-farming", name: "Smart Farming", icon: Leaf, description: "IoT-powered agriculture revolution", color: "from-green-500 to-emerald-400", href: "/services/smart-farming" },
  { id: "home-automation", name: "Home Automation", icon: Home, description: "Intelligent smart home systems", color: "from-purple-500 to-violet-400", href: "/services/home-automation" },
  { id: "document-digitalization", name: "Document Digitalization", icon: Database, description: "Paper to digital intelligence", color: "from-rose-500 to-pink-400", href: "/services/document-digitalization" },
  { id: "networking", name: "Networking & Security", icon: Shield, description: "Enterprise-grade protection", color: "from-indigo-500 to-blue-400", href: "/services/networking" },
  { id: "iot", name: "IoT Solutions", icon: Cpu, description: "Connected device ecosystems", color: "from-teal-500 to-cyan-400", href: "/services/iot" },
  { id: "energy", name: "Energy Solutions", icon: Zap, description: "Sustainable power systems", color: "from-orange-500 to-amber-400", href: "/services/energy" },
];

const companyLinks = [
  { name: "About Us", icon: Users, href: "/about", description: "Our story, team & mission" },
  { name: "Goodwill", icon: Heart, href: "/goodwill", description: "Our commitment to Africa" },
];

const mainLinks = [
  { name: "Portfolio", icon: Briefcase, href: "/portfolio" },
  { name: "Pricing", icon: DollarSign, href: "/pricing" },
  { name: "Blog", icon: BookOpen, href: "/blog" },
  { name: "Testimonials", icon: Star, href: "/testimonials" },
];

export default function TechHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dot grid background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 dot-grid opacity-30" />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080B16]/95 backdrop-blur-xl border-b border-[rgba(212,175,55,0.2)] shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent backdrop-blur-sm'
      }`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F5D56A 50%, #A08A1E 100%)' }}
                  animate={{ boxShadow: ['0 0 20px rgba(212,175,55,0.3)', '0 0 40px rgba(212,175,55,0.6)', '0 0 20px rgba(212,175,55,0.3)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img src="/mainlogo.png" alt="SMAT Concept Logo" className="w-8 h-8 lg:w-10 lg:h-10 object-contain relative z-10" />
                </motion.div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-black text-gold-gradient">SMAT Concept</h1>
                <p className="text-xs lg:text-sm font-medium" style={{ color: 'rgba(212,175,55,0.7)' }}>Innovative Solutions Ltd.</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <motion.button
                  className="flex items-center gap-1.5 text-gray-300 hover:text-[#D4AF37] font-medium transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl overflow-hidden"
                      style={{ background: 'rgba(8,11,22,0.97)', backdropFilter: 'blur(24px)', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,175,55,0.08)' }}
                    >
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(212,175,55,0.6)' }}>What We Build</p>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <motion.a
                                key={service.id}
                                href={service.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.04 }}
                                className="group flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer"
                                style={{ background: 'rgba(255,255,255,0.02)' }}
                                whileHover={{ background: 'rgba(212,175,55,0.08)', x: 3 }}
                              >
                                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                  <Icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors truncate">{service.name}</p>
                                  <p className="text-xs text-gray-500 truncate">{service.description}</p>
                                </div>
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                      <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)', background: 'rgba(212,175,55,0.03)' }} className="px-5 py-3 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Need something custom?</span>
                        <a href="/contact" className="text-xs font-semibold flex items-center gap-1" style={{ color: '#D4AF37' }}>
                          Get a quote <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <motion.button
                  className="flex items-center gap-1.5 text-gray-300 hover:text-[#D4AF37] font-medium transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Company
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-3 w-56 rounded-2xl overflow-hidden"
                      style={{ background: 'rgba(8,11,22,0.97)', backdropFilter: 'blur(24px)', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}
                    >
                      <div className="p-3">
                        {companyLinks.map((link) => {
                          const Icon = link.icon;
                          return (
                            <motion.a
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-3 p-3 rounded-xl transition-all"
                              style={{ background: 'transparent' }}
                              whileHover={{ background: 'rgba(212,175,55,0.08)', x: 3 }}
                            >
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.1)' }}>
                                <Icon className="w-4 h-4" style={{ color: '#D4AF37' }} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">{link.name}</p>
                                <p className="text-xs text-gray-500">{link.description}</p>
                              </div>
                            </motion.a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Main links */}
              {mainLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#D4AF37] font-medium transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href="/contact"
                className="btn-gold px-5 py-2.5 rounded-full text-sm font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 transition-colors"
              style={{ color: '#D4AF37' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              style={{ background: 'rgba(8,11,22,0.98)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(212,175,55,0.15)' }}
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

                {/* Services */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(212,175,55,0.6)' }}>Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={service.id}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2 p-3 rounded-xl"
                          style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}
                        >
                          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-white leading-tight">{service.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Pages */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(212,175,55,0.6)' }}>Pages</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[...companyLinks.map(l => ({ name: l.name, href: l.href })), ...mainLinks].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="p-3 rounded-xl text-sm font-medium text-gray-300"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <a
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center btn-gold py-3 rounded-xl font-bold"
                  >
                    Get a Quote
                  </a>
                  <div className="flex justify-center gap-6 text-sm">
                    <a href="tel:+2348101235007" className="flex items-center gap-2 text-gray-400">
                      <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                      <span>Call Us</span>
                    </a>
                    <a href="mailto:smatconceptsolutions@gmail.com" className="flex items-center gap-2 text-gray-400">
                      <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
