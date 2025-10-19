"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HomeSection = () => {
  const strokeStyle = {
    color: "transparent",
    WebkitTextStroke: "2px white",
  };

  // Replace these with your actual profile links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/abhinav-gunnammagari-974852244/",
    twitter: "https://x.com/AbhinavvPatel25",
    instagram: "https://www.instagram.com/abhinav_gunnammagari/",
  };

  return (
    <section
      id="home"
      className="relative flex items-end justify-start h-screen bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/profile.png')",
        backgroundPosition: "120% 45%",
        backgroundSize: "auto 110%",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Social Icons (top right) */}
      <div className="absolute top-6 right-8 flex gap-5 text-white z-20">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-all duration-300"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-all duration-300"
        >
          <FaXTwitter size={22} />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-all duration-300"
        >
          <FaInstagram size={22} />
        </a>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-white p-6 sm:p-10 md:p-16 lg:p-24 mb-16 ml-4 sm:ml-10 md:ml-16">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter text-left"
          style={strokeStyle}
        >
          ABHINAV
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-3 text-white text-left"
        >
          Gunnammagari
        </motion.h2>
      </div>
    </section>
  );
};

export default HomeSection;
