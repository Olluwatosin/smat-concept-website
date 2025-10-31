"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in SMAT Concept's services. Can we discuss?");
    window.open(`https://wa.me/2348101235007?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={24} />
        <span className="hidden md:block font-medium">Chat with us</span>
      </motion.button>
    </motion.div>
  );
}