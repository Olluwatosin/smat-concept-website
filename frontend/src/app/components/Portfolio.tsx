"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, TrendingUp } from "lucide-react";

interface Project {
  title: string;
  client: string;
  location: string;
  date: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  color: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "Smart Farm Automation System",
      client: "AgriTech Farms Ltd",
      location: "Ogun State, Nigeria",
      date: "Q3 2024",
      category: "Smart Agriculture",
      description:
        "Implemented comprehensive IoT-based farm automation including soil sensors, automated irrigation, climate control, and crop monitoring systems across 50 hectares.",
      results: [
        "45% increase in crop yield",
        "60% reduction in water usage",
        "Real-time monitoring capabilities",
        "Automated pest detection",
      ],
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Enterprise Document Digitalization",
      client: "Lagos State Government",
      location: "Lagos, Nigeria",
      date: "Q2 2024",
      category: "Data Digitalization",
      description:
        "Digitalized over 100,000 legacy documents using advanced OCR technology, implemented cloud-based document management system with AI-powered search.",
      results: [
        "100,000+ documents digitalized",
        "99.5% OCR accuracy achieved",
        "80% faster document retrieval",
        "Improved interdepartmental collaboration",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Banking Security Infrastructure",
      client: "SecureBank Nigeria",
      location: "Abuja, Nigeria",
      date: "Q1 2024",
      category: "Networking & Security",
      description:
        "Deployed comprehensive security solution including network infrastructure upgrade, CCTV surveillance, biometric access control, and cybersecurity measures across 15 branches.",
      results: [
        "Zero security breaches",
        "99.9% network uptime",
        "Integrated access control",
        "24/7 monitoring system",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Solar Energy Installation",
      client: "Lagos Corporate Center",
      location: "Lagos, Nigeria",
      date: "Q4 2023",
      category: "Energy Solutions",
      description:
        "Installed 500kW solar system with battery backup, smart inverters, and energy monitoring dashboard for a 20-story commercial building.",
      results: [
        "60% reduction in energy costs",
        "Zero power interruptions",
        "ROI expected in 2.5 years",
        "Reduced carbon footprint by 40%",
      ],
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Manufacturing IoT Integration",
      client: "Manufacturing Hub Ltd",
      location: "Port Harcourt, Nigeria",
      date: "Q3 2023",
      category: "IoT Solutions",
      description:
        "Integrated IoT sensors and automation systems into production line, enabling real-time monitoring, predictive maintenance, and automated quality control.",
      results: [
        "35% efficiency improvement",
        "Reduced downtime by 50%",
        "Predictive maintenance alerts",
        "Quality control automation",
      ],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Smart Greenhouse Solutions",
      client: "GreenField Agriculture",
      location: "Kaduna, Nigeria",
      date: "Q2 2023",
      category: "Smart Agriculture",
      description:
        "Designed and installed smart greenhouse with automated climate control, irrigation, nutrient dosing, and remote monitoring capabilities.",
      results: [
        "Year-round production",
        "40% water savings",
        "Premium quality produce",
        "Remote management via mobile app",
      ],
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
      color: "from-teal-500 to-green-600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium">
            <TrendingUp className="w-5 h-5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Successful Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects and see how we've helped organizations across Africa achieve their technology goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Key Results:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Client:</p>
                  <p className="font-semibold text-gray-900">{project.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help you achieve similar results for your organization.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
