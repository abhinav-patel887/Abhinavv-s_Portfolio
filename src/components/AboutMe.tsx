"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Home, User, Mail, Menu, X, FileText } from "lucide-react";
import { GiSprout } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import Image from "next/image";


const AboutSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const strokeStyle: React.CSSProperties = {
    color: "transparent",
    WebkitTextStroke: "1.5px white",
  };

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: FileText, label: "Resume", href: "#resume" },
    { icon: FaCode, label: "Technical Skills", href: "#technical-skills" },
    // { icon:  GiSprout, label: "Startup Journey", href: "#startup-journey" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  // Variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const roleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.3 + i * 0.1 },
    }),
  };

  return (
    <section id="about" className="relative min-h-screen bg-black text-white">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 bg-black/90 backdrop-blur-md border-r border-white/20 flex-col items-center justify-center gap-8 z-50">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, color: "#fff" }}
            className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-white/20 transition-all duration-300 border border-white/10"
          >
            <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            <span className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 w-12 h-12 bg-black/90 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-black/95 backdrop-blur-xl border-r border-white/20 flex flex-col items-start justify-center gap-6 z-40 p-8"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-lg font-medium">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Main Content */}
      <div className="lg:ml-20 min-h-screen flex items-center justify-center px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-end gap-6 ">
              <h2
                className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] font-extrabold leading-none tracking-tighter select-none"
                style={strokeStyle}
              >
                ABOUT
              </h2>
              <h3 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] font-extrabold text-white leading-none tracking-tighter">
                Me
              </h3>
            </div>
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {/* Paragraphs */}
              {[...Array(3)].map((_, i) => (
                <motion.div key={i} variants={paragraphVariants} className="relative pl-6 border-l border-white/20">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                    {i === 0
                      ? (
                        <>
                          A <span className="font-semibold text-white">startup enthusiast</span> with an{" "}
                          <span className="font-semibold text-white">innovative mindset</span> who landed the role of an{" "}
                          <span className="font-semibold text-white">Associate Software Engineer (AIML)</span> at Pennant Technologies, 
                          where I build and deploy <span className="font-semibold text-white">Data Intelligence Platforms (DIP)</span> 
                          integrating data ingestion, transformation, and ML-driven analytics.
                        </>
                      )
                      : i === 1
                      ? (
                        <>
                          I&apos;m an <span className="font-semibold text-white">entrepreneur-minded</span> individual who has 
                          experimented with multiple ideas — some didn&apos;t work out, but each one shaped my perspective and resilience. 
                          I take every failure as a <span className="font-semibold text-white">lesson and an opportunity to grow</span>. 
                          Currently, I&apos;m focused on improving my social, soft, and technical skills as I continue progressing in my 
                          journey of learning and building.
                        </>
                      )
                      : (
                        <>
                          Passionate about creating{" "}
                          <span className="font-semibold text-white">scalable, intelligent, and production-grade</span> systems 
                          that power predictive insights and decision intelligence.
                        </>
                      )}
                  </p>
                </motion.div>
              ))}

              {/* Role Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Associate Software Engineer",
                  "Data Engineer",
                  "AIML Engineer",
                  "Full-stack Developer",
                ].map((role, index) => (
                  <motion.span
                    key={role}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={roleVariants}
                    className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right Image - FIXED: Using Next.js Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="relative order-1 lg:order-2 -translate-y-10"
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-white rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/20">
                  <Image
                    src="/pose.png"
                    alt="Abhinav Patel - Professional"
                    width={600}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;