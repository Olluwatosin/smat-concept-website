"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";

export default function ClientLogos() {
  // Placeholder client data - replace with actual logos when available
  const clients = [
    { name: "AgriTech Farms", sector: "Agriculture" },
    { name: "DataCore Solutions", sector: "Technology" },
    { name: "SecureBank Nigeria", sector: "Finance" },
    { name: "Lagos Corporate Center", sector: "Real Estate" },
    { name: "Manufacturing Hub Ltd", sector: "Manufacturing" },
    { name: "GreenField Agriculture", sector: "Agriculture" },
    { name: "TechVision Systems", sector: "Technology" },
    { name: "EnergyPlus Nigeria", sector: "Energy" },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium">
            <Award className="w-5 h-5" />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Across Africa
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with forward-thinking companies that trust us to deliver innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-3 group-hover:scale-110 transition-transform">
                {client.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-gray-900 text-center mb-1 text-sm">
                {client.name}
              </h3>
              <p className="text-xs text-gray-500">{client.sector}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-700 font-medium">Happy Clients</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
            <p className="text-gray-700 font-medium">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <p className="text-gray-700 font-medium">Client Satisfaction</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            From startups to established enterprises, we help organizations across Africa achieve their digital transformation goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Become a Client
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
