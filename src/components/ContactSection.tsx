"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMeSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white min-h-screen px-6 py-20 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mb-10 text-center"
>
  <h2 className="flex justify-center items-end gap-4 text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold tracking-tighter select-none leading-none">
    <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>CONTACT</span>
    <span className="text-white">ME</span>
  </h2>
  <p className="text-gray-400/70 text-sm md:text-base mt-6 font-light select-none">
    Please provide accurate details so I can get back to you promptly.
  </p>
</motion.div>


        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/50 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/50 transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/50 transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-white/10 hover:bg-white hover:text-black text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-medium text-center mt-2"
            >
              Your message has been sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMeSection;
