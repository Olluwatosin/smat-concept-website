"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const handleClick = () => {
    const msg = encodeURIComponent("Hi! I'm interested in SMAT Concept's services. Can we discuss?");
    window.open(`https://wa.me/2348101235007?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#fff",
          boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
        }}
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="hidden md:inline">Chat with us</span>
      </motion.button>
    </motion.div>
  );
}
