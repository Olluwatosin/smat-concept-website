"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Adebayo Ogunlesi",
      position: "Operations Manager",
      company: "AgriTech Farms Ltd",
      content:
        "SMAT Concept transformed our farm operations with their smart agriculture solutions. The IoT sensors and automated irrigation system increased our yield by 45% while reducing water consumption. Their team was professional, knowledgeable, and provided excellent training.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Chioma Nwankwo",
      position: "CEO",
      company: "DataCore Solutions",
      content:
        "We needed to digitalize over 50,000 paper documents and SMAT Concept delivered beyond our expectations. Their OCR system is incredibly accurate, and the document management platform is intuitive. We've saved countless hours and improved our data accessibility tremendously.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      name: "Ibrahim Hassan",
      position: "IT Director",
      company: "SecureBank Nigeria",
      content:
        "Security is paramount in banking, and SMAT Concept understood this perfectly. They implemented a comprehensive networking and security solution including CCTV, access control, and cybersecurity measures. We've had zero security incidents since installation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Fatima Abdullahi",
      position: "Facilities Manager",
      company: "Lagos Corporate Center",
      content:
        "The solar energy solution from SMAT Concept has been a game-changer for our building. We've reduced our electricity costs by 60% and haven't experienced any power interruptions. The smart inverter system seamlessly switches between solar and grid power.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Michael Eze",
      position: "Production Manager",
      company: "Manufacturing Hub Ltd",
      content:
        "The IoT automation system has revolutionized our production line. Real-time monitoring, predictive maintenance alerts, and automated controls have improved our efficiency by 35%. SMAT Concept's support team is always responsive when we need assistance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    },
    {
      name: "Amina Bello",
      position: "Executive Director",
      company: "GreenField Agriculture",
      content:
        "From consultation to installation and training, SMAT Concept exceeded our expectations. Their smart greenhouse solution with climate control and automated feeding systems has made our operations more efficient and profitable. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent block">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with SMAT Concept.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <Quote className="w-10 h-10 text-blue-300 mb-4 opacity-50" />

              <p className="text-gray-200 leading-relaxed mb-6 line-clamp-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-blue-300">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 inline-block">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((t, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-3xl font-bold text-white ml-2">50+</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-white mb-1">
                  Happy Clients Across Africa
                </p>
                <div className="flex items-center gap-1 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-300 ml-2">
                    5.0 Average Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
