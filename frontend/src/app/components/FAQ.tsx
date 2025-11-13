"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What services does SMAT Concept offer?",
      answer:
        "We offer comprehensive technology solutions including Data Digitalization (OCR, document management), Smart Agriculture (IoT sensors, automated irrigation), Networking & Security (infrastructure, cybersecurity, CCTV), IoT Solutions (smart devices, automation), and Energy Solutions (solar installations, battery systems, smart inverters).",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve businesses across Nigeria and West Africa, with a focus on Lagos, Abuja, and Port Harcourt. However, we can accommodate projects across the African continent depending on scope and requirements.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Small projects (like basic IoT installations) may take 2-4 weeks, while larger implementations (like complete data digitalization systems or smart agriculture setups) can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer:
        "Yes! We offer comprehensive maintenance and support packages for all our solutions. This includes 24/7 technical support, regular system updates, preventive maintenance, and emergency response services. Support plans are customized based on your needs and can be discussed during project planning.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically work with flexible payment structures: 30% upfront deposit, 40% at project midpoint, and 30% upon completion. For larger enterprise projects, we can arrange milestone-based payments. We accept bank transfers, checks, and can work with procurement departments for institutional clients.",
    },
    {
      question: "Do you provide training for the systems you install?",
      answer:
        "Absolutely! Comprehensive training is included with all our installations. We provide hands-on training for your team, detailed documentation, video tutorials, and ongoing support to ensure your staff can effectively use and maintain the systems.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes, we specialize in seamless integration with existing infrastructure. Our solutions are designed to work with popular business systems, databases, and software. We conduct a thorough assessment of your current setup during the planning phase to ensure compatibility.",
    },
    {
      question: "What is the ROI timeline for your solutions?",
      answer:
        "ROI varies by solution: Data Digitalization typically shows ROI within 6-12 months through increased efficiency. Smart Agriculture can deliver 40% yield increases in the first season. Energy Solutions often achieve ROI within 2-3 years through reduced power costs. We provide detailed ROI projections during consultation.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer free initial consultations where we assess your needs, discuss potential solutions, and provide preliminary cost estimates. This helps you make informed decisions before committing to a project.",
    },
    {
      question: "What makes SMAT Concept different from other technology providers?",
      answer:
        "We combine deep African market knowledge with cutting-edge technology, offering solutions specifically designed for African business environments. Our team has 5+ years of experience, we use quality components from trusted manufacturers, provide comprehensive after-sales support, and maintain competitive pricing without compromising quality.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.3) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-medium">
            <HelpCircle className="w-5 h-5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span
                    className={`text-lg font-semibold pr-8 ${
                      openIndex === index ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${
                        openIndex === index ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
