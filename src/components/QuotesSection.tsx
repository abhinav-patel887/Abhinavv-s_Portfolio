"use client";

import React from "react";
import { motion } from "framer-motion";

const quotes = [
  "The harder thing to do and the right thing to do are usually the same.",
  "There is no such thing as a good time or a bad time, So just do it.",
  "Focusing on multiple tasks reduces the quality of results.",
  "Put your heart and soul into your work, let your efforts make the results shine.",
  "Start with positive thinking, and the process will radiate positive energy.",
  "Understanding the cause of failure helps you overcome its impact."
];

const QuotesSection: React.FC = () => {
  // Duplicate quotes for seamless loop
  const duplicatedQuotes = [...quotes, ...quotes];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">

      {/* Scrolling Container */}
      <div className="relative">
        <motion.div
          className="flex gap-20"
          animate={{
            x: [0, -50 * duplicatedQuotes.length + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          }}
        >
          {duplicatedQuotes.map((quote, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[30rem] h-[18rem] bg-white/5 backdrop-blur-md border-8 border-white/30 rounded-lg p-8 relative overflow-hidden group hover:bg-white/10 hover:border-white/50 transition-all duration-500 flex items-center justify-center shadow-2xl"
              style={{
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)"
              }}
            >
              {/* Frame Inner Border */}
              <div className="absolute inset-4 border-2 border-white/20 rounded pointer-events-none"></div>

              {/* Decorative Quote Mark - FIXED: Using HTML entity */}
              <div className="absolute top-6 left-6 text-white/10 text-[120px] font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Quote Text */}
              <p className="relative z-10 text-xl md:text-2xl font-medium text-white/90 italic leading-relaxed text-center px-4">
                {quote}
              </p>

              {/* Decorative Corner Accents */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/40"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-white/40"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-white/40"></div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for Edge Fade Effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default QuotesSection;