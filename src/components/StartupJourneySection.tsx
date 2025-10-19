"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { HeartPulse, MapPin, Car, FileText, Home } from "lucide-react";

interface Startup {
  name: string;
  description: string;
  status: string;
  icon: string;
}

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  MapPin,
  Car,
  FileText,
  Home
};

// Define variants type explicitly
const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.7 } }
};

const StartupJourneySection: React.FC = () => {
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    fetch("/startups.json")
      .then(res => res.json())
      .then(data => setStartups(data.startups))
      .catch(err => console.error("Error loading startups:", err));
  }, []);

  const statusColors: Record<string, string> = {
    "Failed": "bg-red-600 text-white",
    "In Progress": "bg-yellow-500 text-black",
    "On Hold": "bg-gray-500 text-white",
    "Yet to Start": "bg-blue-500 text-white"
  };

  return (
    <section id="startup-journey" className="relative bg-black text-white min-h-screen px-6 py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold tracking-tighter select-none" style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
            STARTUP
          </h2>
          <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-white">Journey</h3>
        </motion.div>

        {/* Startup Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.isArray(startups) &&
            startups.map((startup, idx) => {
              const Icon = iconMap[startup.icon] || FileText;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255,255,255,0.15)",
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group transition-all duration-500"
                >
                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${statusColors[startup.status]}`}>
                    {startup.status}
                  </span>

                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Name */}
                  <h4 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">{startup.name}</h4>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">{startup.description}</p>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default StartupJourneySection;
