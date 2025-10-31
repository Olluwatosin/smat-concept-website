"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap } from "lucide-react";

export default function ServiceCalculator() {
  const [selectedService, setSelectedService] = useState("");
  const [projectSize, setProjectSize] = useState("small");
  const [estimate, setEstimate] = useState(0);

  const services = {
    "data-digitalization": { name: "Data Digitalization", base: 500000 },
    "smart-agriculture": { name: "Smart Agriculture", base: 2000000 },
    "networking": { name: "Networking & Security", base: 1500000 },
    "iot": { name: "IoT Solutions", base: 800000 },
    "energy": { name: "Energy Solutions", base: 3000000 }
  };

  const sizeMultipliers = {
    small: 1,
    medium: 2.5,
    large: 5
  };

  const calculateEstimate = () => {
    if (!selectedService) return;
    const basePrice = services[selectedService as keyof typeof services].base;
    const multiplier = sizeMultipliers[projectSize as keyof typeof sizeMultipliers];
    setEstimate(basePrice * multiplier);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Calculator className="mx-auto mb-4 text-indigo-600" size={48} />
          <h2 className="text-3xl font-bold mb-4">Project Cost Calculator</h2>
          <p className="text-gray-600">Get an instant estimate for your project</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Choose a service...</option>
                {Object.entries(services).map(([key, service]) => (
                  <option key={key} value={key}>{service.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Size</label>
              <select
                value={projectSize}
                onChange={(e) => setProjectSize(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="small">Small (1-10 users)</option>
                <option value="medium">Medium (11-50 users)</option>
                <option value="large">Large (50+ users)</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateEstimate}
            disabled={!selectedService}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-3 rounded-lg font-medium mb-6"
          >
            Calculate Estimate
          </motion.button>

          {estimate > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200"
            >
              <Zap className="mx-auto mb-2 text-green-600" size={32} />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                ₦{estimate.toLocaleString()}
              </h3>
              <p className="text-green-600 text-sm">Estimated project cost (starting from)</p>
              <p className="text-xs text-gray-500 mt-2">
                *Final pricing may vary based on specific requirements
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}