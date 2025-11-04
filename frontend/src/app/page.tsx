"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Leaf, Database, MessageCircle, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from "lucide-react";
import { DataDigitalizationDemo, SmartAgricultureDemo, NetworkingDemo, EnergyDemo, IoTDemo } from "./components/ServiceDemos";
import AnimatedStats from "./components/AnimatedStats";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ServiceCalculator from "./components/ServiceCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Digital Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
          <motion.div 
            animate={{ x: [-30, 30, -30], y: [10, -10, 10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Africa's Leading Tech Innovation Hub</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Your Fastest Route to the
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent block">
                Digital World
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
            >
              Transforming Africa through cutting-edge technology solutions in 
              <span className="text-blue-400 font-semibold"> Data Digitalization</span>, 
              <span className="text-green-400 font-semibold"> Smart Agriculture</span>, 
              <span className="text-purple-400 font-semibold"> IoT Innovation</span>, and 
              <span className="text-yellow-400 font-semibold"> Energy Solutions</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center gap-2"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="w-5 h-5" />
                Start Your Journey
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Solutions for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Modern Africa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses across Africa with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Data Digitalization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Data Analytics Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Database className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Data Digitalization</h3>
                  <p className="text-blue-100 text-sm">Transform paper to digital intelligence</p>
                </div>
              </div>
              <div className="p-8">
                <DataDigitalizationDemo />
                <p className="text-gray-600 mb-6 mt-4 leading-relaxed">
                  Advanced OCR, document management, and intelligent dashboards for instant data access and powerful business insights.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>99% Accuracy</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-semibold flex items-center gap-2 group-hover:text-blue-700"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Smart Agriculture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Smart Agriculture Technology" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Leaf className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Smart Agriculture</h3>
                  <p className="text-green-100 text-sm">IoT-powered farming revolution</p>
                </div>
              </div>
              <div className="p-8">
                <SmartAgricultureDemo />
                <p className="text-gray-600 mb-6 mt-4 leading-relaxed">
                  Precision farming with IoT sensors, automated irrigation, greenhouse monitoring, and crop optimization systems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>40% Yield Increase</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-green-600 font-semibold flex items-center gap-2 group-hover:text-green-700"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Networking & Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cybersecurity Network" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Shield className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Networking & Security</h3>
                  <p className="text-purple-100 text-sm">Enterprise-grade protection</p>
                </div>
              </div>
              <div className="p-8">
                <NetworkingDemo />
                <p className="text-gray-600 mb-6 mt-4 leading-relaxed">
                  Comprehensive network infrastructure, cybersecurity solutions, surveillance systems, and access control.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>99.9% Uptime</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-purple-600 font-semibold flex items-center gap-2 group-hover:text-purple-700"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* IoT Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="IoT Connected Devices" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Cpu className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">IoT Solutions</h3>
                  <p className="text-indigo-100 text-sm">Connected device ecosystem</p>
                </div>
              </div>
              <div className="p-8">
                <IoTDemo />
                <p className="text-gray-600 mb-6 mt-4 leading-relaxed">
                  Smart devices, sensors, automation systems, and intelligent accessories for seamless business operations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time Monitoring</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:text-indigo-700"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Energy Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 md:col-span-2 lg:col-span-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Solar Energy Solutions" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Zap className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">Energy Solutions</h3>
                  <p className="text-yellow-100 text-sm">Sustainable power systems</p>
                </div>
              </div>
              <div className="p-8">
                <EnergyDemo />
                <p className="text-gray-600 mb-6 mt-4 leading-relaxed">
                  Solar installations, battery systems, smart inverters, and energy monitoring for reliable, sustainable power.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>60% Cost Savings</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-orange-600 font-semibold flex items-center gap-2 group-hover:text-orange-700"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ANIMATED STATS */}
      <AnimatedStats />

      {/* SERVICE CALCULATOR */}
      <ServiceCalculator />

      {/* LEADERSHIP & VISION */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.05) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visionary Leadership for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Africa's Digital Future
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Driving technological transformation across Africa with innovative solutions and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-blue-300">Empowering Africa through technology</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To accelerate Africa's digital transformation by delivering cutting-edge technology solutions that drive economic growth, improve lives, and create sustainable opportunities for future generations.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <p className="text-green-300">Leading Africa's tech revolution</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be Africa's premier technology solutions provider, recognized for innovation, excellence, and transformative impact across industries and communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="CEO - Leading Innovation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </motion.div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  CEO & Founder
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Leading Innovation</h3>
                <p className="text-gray-300 max-w-md mx-auto mb-6">
                  Pioneering technological advancement with passion, expertise, and an unwavering commitment to Africa's digital transformation.
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="CTO" 
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="text-sm font-semibold">Chief Technology Officer</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Head of Operations" 
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="text-sm font-semibold">Head of Operations</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">SMAT Concept</h3>
                      <p className="text-blue-300 text-sm">Innovative Solutions Ltd.</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Your fastest route to the digital world. Transforming Africa through cutting-edge technology solutions that drive growth, innovation, and sustainable development.
                  </p>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                      <span className="text-xl">📧</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center cursor-pointer">
                      <span className="text-xl">📱</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
                      <span className="text-xl">🌐</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-blue-400">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">+234 810 123 5007</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@smatconcept.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-300">+234 810 123 5007</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 text-purple-400">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Our Services', href: '#services' },
                    { name: 'About Us', href: '#about' },
                    { name: 'Contact', href: '#contact' },
                    { name: 'Get Quote', href: '#calculator' },
                  ].map((link, index) => (
                    <li key={index}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                  © 2025 SMAT Concept & Innovative Solutions Ltd. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span>Built with ❤️ for Africa's digital future</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Growing Fast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WHATSAPP WIDGET */}
      <WhatsAppWidget />
    </div>
  );
}