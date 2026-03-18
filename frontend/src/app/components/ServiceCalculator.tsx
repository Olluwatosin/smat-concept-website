"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Zap, ArrowRight } from "lucide-react";

const services = {
  "task-management":         { name: "Task Management",          base: 150000 },
  "web-development":         { name: "Web Development",           base: 200000 },
  "smart-farming":           { name: "Smart Farming",             base: 300000 },
  "home-automation":         { name: "Home Automation",           base: 250000 },
  "document-digitalization": { name: "Document Digitalization",   base: 100000 },
  "networking":              { name: "Networking & Security",      base: 200000 },
  "iot":                     { name: "IoT Solutions",             base: 350000 },
  "energy":                  { name: "Energy Solutions",          base: 180000 },
};

const sizeMultipliers = {
  small:    { label: "Small (1–10 users)",  value: 1 },
  medium:   { label: "Medium (11–50 users)", value: 3 },
  large:    { label: "Large (50+ users)",    value: 6 },
};

const inputClass =
  "w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-200 text-sm " +
  "bg-[#0F1629] border border-[rgba(212,175,55,0.2)] " +
  "focus:border-[rgba(212,175,55,0.6)] focus:ring-1 focus:ring-[rgba(212,175,55,0.2)]";

export default function ServiceCalculator() {
  const [selectedService, setSelectedService] = useState("");
  const [projectSize, setProjectSize] = useState("small");
  const [estimate, setEstimate] = useState(0);

  const calculateEstimate = () => {
    if (!selectedService) return;
    const base = services[selectedService as keyof typeof services].base;
    const multiplier = sizeMultipliers[projectSize as keyof typeof sizeMultipliers].value;
    setEstimate(base * multiplier);
  };

  return (
    <section id="calculator" className="py-24 section-divider">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", color: "#D4AF37" }}
          >
            <Calculator className="w-3.5 h-3.5" />
            Instant Estimate
          </div>
          <h2 className="text-4xl font-black text-white mb-3">
            How Much Will Your<br />
            <span className="text-gold-gradient">Project Cost?</span>
          </h2>
          <p className="text-gray-400 text-base">
            Get a ballpark estimate in seconds — no strings attached.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8"
          style={{ boxShadow: "0 0 60px rgba(212,175,55,0.06)" }}
        >
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service <span style={{ color: "#D4AF37" }}>*</span>
              </label>
              <select
                value={selectedService}
                onChange={(e) => { setSelectedService(e.target.value); setEstimate(0); }}
                className={inputClass}
                style={{ colorScheme: "dark" }}
              >
                <option value="" className="bg-[#0F1629]">Choose a service…</option>
                {Object.entries(services).map(([key, s]) => (
                  <option key={key} value={key} className="bg-[#0F1629]">{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Scale</label>
              <select
                value={projectSize}
                onChange={(e) => { setProjectSize(e.target.value); setEstimate(0); }}
                className={inputClass}
                style={{ colorScheme: "dark" }}
              >
                {Object.entries(sizeMultipliers).map(([key, s]) => (
                  <option key={key} value={key} className="bg-[#0F1629]">{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={calculateEstimate}
            disabled={!selectedService}
            className="btn-gold w-full py-3.5 rounded-xl font-bold text-base mb-6 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Calculate Estimate
          </motion.button>

          <AnimatePresence>
            {estimate > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}
              >
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Estimated starting from</p>
                <div className="text-4xl font-black text-gold-gradient mb-1">
                  ₦{estimate.toLocaleString()}
                </div>
                <p className="text-gray-500 text-xs mb-5">
                  Final price varies based on specific requirements & scope
                </p>
                <a
                  href="/contact"
                  className="btn-gold-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm"
                >
                  Get an Exact Quote <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {!estimate && (
            <p className="text-center text-xs text-gray-600">
              Select a service above and we&apos;ll estimate your investment range instantly.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
