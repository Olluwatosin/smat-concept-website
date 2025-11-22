"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, Leaf, Shield, Cpu, Zap, 
  Menu, X, ChevronDown, ArrowRight,
  Phone, Mail, ExternalLink
} from "lucide-react";

const services = [
  {
    id: "data",
    name: "Data Digitalization",
    icon: Database,
    description: "Transform paper to digital intelligence",
    color: "from-blue-500 to-cyan-400",
    href: "#services"
  },
  {
    id: "agriculture", 
    name: "Smart Agriculture",
    icon: Leaf,
    description: "IoT-powered farming revolution",
    color: "from-green-500 to-emerald-400",
    href: "#services"
  },
  {
    id: "security",
    name: "Networking & Security", 
    icon: Shield,
    description: "Enterprise-grade protection",
    color: "from-purple-500 to-violet-400",
    href: "#services"
  },
  {
    id: "iot",
    name: "IoT Solutions",
    icon: Cpu,
    description: "Connected device ecosystem", 
    color: "from-indigo-500 to-blue-400",
    href: "#services"
  },
  {
    id: "energy",
    name: "Energy Solutions",
    icon: Zap,
    description: "Sustainable power systems",
    color: "from-orange-500 to-yellow-400", 
    href: "#services"
  }
];

export default function TechHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Tech Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}>
        
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 50%, #8B5CF6 100%)',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(0, 212, 255, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.4)', 
                      '0 0 30px rgba(0, 212, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img 
                    src="/mainlogo.png" 
                    alt="SMAT Concept Logo" 
                    className="w-8 h-8 lg:w-10 lg:h-10 object-contain relative z-10"
                  />
                  <motion.div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `
                        radial-gradient(circle at 20% 20%, rgba(0, 255, 136, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)
                      `
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
              <div>
                <motion.h1 
                  className="text-xl lg:text-2xl font-black bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  SMAT Concept
                </motion.h1>
                <p className="text-xs lg:text-sm text-cyan-400 font-medium">Innovative Solutions Ltd.</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <motion.button 
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="grid gap-3">
                          {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                              <motion.a
                                key={service.id}
                                href={service.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/50 transition-all cursor-pointer"
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </h3>
                                  <p className="text-sm text-gray-400">{service.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a 
                href="#about" 
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                About
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>

              <motion.a
                href="/contact"
                className="relative px-6 py-2.5 font-semibold text-white rounded-full overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 50%, #8B5CF6 100%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Quote</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="button-bg"
                />
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
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
              className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                
                {/* Mobile Services */}
                <div className="mb-6">
                  <h3 className="text-cyan-400 font-semibold mb-4 text-lg">Our Services</h3>
                  <div className="grid gap-3">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.a
                          key={service.id}
                          href={service.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{service.name}</h4>
                            <p className="text-sm text-gray-400">{service.description}</p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="space-y-4 mb-6">
                  {[
                    { name: 'About', href: '#about' },
                    { name: 'Contact', href: '#contact' }
                  ].map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="block w-full text-center px-6 py-3 font-semibold text-white rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 50%, #8B5CF6 100%)',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </motion.a>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 pt-6 border-t border-slate-700"
                >
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <a href="tel:+2348101235007" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>Call Us</span>
                    </a>
                    <a href="mailto:smatconceptsolutions@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}