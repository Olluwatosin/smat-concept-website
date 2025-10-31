"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DataDigitalizationDemo, SmartAgricultureDemo, NetworkingDemo, EnergyDemo, IoTDemo } from "./components/ServiceDemos";
import AnimatedStats from "./components/AnimatedStats";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ServiceCalculator from "./components/ServiceCalculator";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/cloud-solution.png"
          alt="Hero Background"
          fill
          className="object-cover -z-10"
        />
        <div className="bg-black/60 absolute inset-0 -z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Your Fastest Route to the Digital World
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8"
          >
            We modernize organizations with{" "}
            <span className="font-semibold">Data Digitalization</span>, Smart
            Agriculture, Networking & Security, IoT Devices, and Energy
            Solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
            >
              Talk to Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Data Digitalization */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <Image
                src="/data-digitalization.png"
                alt="Data Digitalization"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Data Digitalization
                </h3>
                <DataDigitalizationDemo />
                <p className="text-sm mb-4 mt-4">
                  Scan, OCR, structure & dashboards for instant access and insights.
                </p>
                <a href="/services/data-digitalization" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>

            {/* Smart Agriculture */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <Image
                src="/innovation.png"
                alt="Smart Agriculture"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Smart Agriculture</h3>
                <SmartAgricultureDemo />
                <p className="text-sm mb-4 mt-4">
                  Greenhouse, smart farm setup, drip irrigation & IoT geofencing.
                </p>
                <a href="/services/smart-agriculture" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>

            {/* Networking & Security */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <Image
                src="/globe.svg"
                alt="Networking & Security"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Networking & Security
                </h3>
                <NetworkingDemo />
                <p className="text-sm mb-4 mt-4">
                  Enterprise networking, surveillance, access control & cyber hygiene.
                </p>
                <a href="/services/networking-security" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>

            {/* IoT Devices & Accessories */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <Image
                src="/teamwork.png"
                alt="IoT Devices & Accessories"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  IoT Devices & Accessories
                </h3>
                <IoTDemo />
                <p className="text-sm mb-4 mt-4">
                  Smart devices & computer accessories to power your workflows.
                </p>
                <a href="/services/iot-accessories" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>

            {/* Energy Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <Image
                src="/logo.png"
                alt="Energy Solutions"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Energy Solutions</h3>
                <EnergyDemo />
                <p className="text-sm mb-4 mt-4">
                  Solar & inverter systems with monitoring for reliable power.
                </p>
                <a href="/services/energy-solutions" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ANIMATED STATS */}
      <AnimatedStats />

      {/* SERVICE CALCULATOR */}
      <ServiceCalculator />

      {/* CEO & LEADERSHIP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10"
          >
            Meet Our CEO
          </motion.h2>
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/ceo-formal.png"
                alt="CEO Formal"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg"
              />
            </motion.div>
            <p className="max-w-2xl text-lg">
              Leading with vision and passion to digitalize Africa’s future.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/ceo-casual.png"
                alt="CEO Casual"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg"
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="italic text-gray-600"
            >
              Approachable & innovative leadership
            </motion.p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <Image src="/company-logo.png" alt="Company Logo" width={120} height={60} />
            <p className="mt-4 text-sm">
              SMAT Concept & Innovative Solutions Ltd.  
              Your fastest route to the digital world.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>📞 +234 810 123 5007</p>
            <p>📧 info@smatconcept.com</p>
            <p>💬 WhatsApp: +234 810 123 5007</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#top" className="hover:underline">Back to Top</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-8">
          © 2025 SMAT Concept. All Rights Reserved.
        </div>
      </footer>
      
      {/* WHATSAPP WIDGET */}
      <WhatsAppWidget />
    </div>
  );
}
