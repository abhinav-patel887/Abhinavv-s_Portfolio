"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function SectionBreakerQuote() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="h-[120px] flex flex-col items-center justify-center text-center text-2xl text-white tracking-wide px-4"
    >
      <p className="flex flex-wrap items-center justify-center leading-relaxed">
        <span className="font-bold text-white">
          “Life is like a prompt
        </span>
        <span className="font-normal text-white ml-2">
          clarity in structure leads to excellence in outcomes”
        </span>
      </p>
      <span className="mt-3 text-lg text-gray-400">- Abhinav</span>
    </motion.div>
  );
}
