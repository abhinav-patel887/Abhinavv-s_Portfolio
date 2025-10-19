"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, BookOpen, FileText } from "lucide-react";

interface Resume {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  experience: Array<{
    title: string;
    organization: string;
    location: string;
    duration: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
    grade?: string;
    board?: string;
    score?: string;
  }>;
  projects: Array<{
    title: string;
    description: string[];
    technologies?: string[];
  }>;
  certifications: string[];
  links: {
    github?: string;
    [key: string]: string | undefined;
  };
}

const ResumeSection: React.FC = () => {
  const [resume, setResume] = useState<Resume | null>(null);

  useEffect(() => {
    fetch("/resume.json")
      .then((res) => res.json())
      .then((data) => setResume(data))
      .catch((err) => console.error("Error loading resume:", err));
  }, []);

  if (!resume) return null;

  return (
    <section id="resume" className="relative bg-black text-white min-h-screen px-6 py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold tracking-tighter select-none" style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>
            RESUME
          </h2>
          <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-white mt-2">{resume.name}</h3>
          <p className="text-gray-300 mt-1">{resume.role}</p>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 opacity-70 font-semibold text-lg md:text-xl mb-12"
        >
          {resume.summary}
        </motion.p>

        {/* Experience & Education in 2 columns */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 border-b border-white/20 pb-10">
          {/* Experience */}
          <div className="pr-5 border-r border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" /> Experience
            </h3>
            <div className="relative">
              {resume.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="mb-10 relative pl-10"
                >
                  <span className="absolute -left-5 top-2 w-8 h-8 bg-white rounded-full border border-black flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-black" />
                  </span>
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-gray-400 text-sm">
                    {exp.organization} – {exp.location} | {exp.duration}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6" /> Education
            </h3>
            <div className="relative">
              {resume.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="mb-10 relative pl-10"
                >
                  <span className="absolute -left-5 top-2 w-8 h-8 bg-white rounded-full border border-black flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-black" />
                  </span>
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm">
                    {edu.institution} | {edu.duration}
                  </p>
                  {edu.grade && <p className="text-gray-300 text-sm mt-1">Grade: {edu.grade}</p>}
                  {edu.board && <p className="text-gray-300 text-sm mt-1">Board: {edu.board}</p>}
                  {edu.score && <p className="text-gray-300 text-sm mt-1">Score: {edu.score}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" /> Projects
          </h3>
          <div className="space-y-8">
            {resume.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <h4 className="text-xl font-semibold">{proj.title}</h4>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {proj.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {proj.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" /> Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {resume.certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {cert}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
