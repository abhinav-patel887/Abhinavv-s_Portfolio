"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

const TechnicalSkillsSection: React.FC = () => {
  const skillsData: Record<string, Skill[]> = {
    "Programming & Scripting": [
      { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" },
      { name: "Bash", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg" },
    ],
    "AI/ML Engineering": [
      { name: "Langchain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "LLM Models", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
      { name: "AI Agents", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" },
      { name: "RAG Systems", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elastic.svg" },
      { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg" },
      { name: "NLP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg" },
      { name: "Predictive Analytics", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg" },
    ],
    "Data Engineering & Platforms": [
      { name: "Databricks", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg" },
      { name: "Airbyte", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airbyte.svg" },
      { name: "Meltano", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" },
      { name: "Fivetran", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" },
      { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachespark.svg" },
      { name: "PySpark", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachespark.svg" },
      { name: "Airflow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apacheairflow.svg" },
      { name: "Snowflake", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/snowflake.svg" },
      { name: "Apache Iceberg", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apache.svg" },
      { name: "HDFS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachehadoop.svg" },
    ],
    "Databases & Storage": [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" },
      { name: "Oracle", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sqlite.svg" },
      { name: "Amazon S3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazons3.svg" },
      { name: "Snowflake", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/snowflake.svg" },
    ],
    "DevOps & Tools": [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gitlab.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg" },
      { name: "Cursor", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg" },
      { name: "n8n", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" },
      { name: "REST APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" },
    ],
    "Core Competencies": [
      { name: "Data Intelligence", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg" },
      { name: "MLOps", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mlflow.svg" },
      { name: "DataOps", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/datadog.svg" },
      { name: "Data Pipelines", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apacheairflow.svg" },
      { name: "Model Deployment", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" },
      { name: "Cloud Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Analytics Automation", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg" },
      { name: "RAG Architecture", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="technical-skills" className="relative bg-black text-white min-h-screen px-6 py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter select-none"
            style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}
          >
            TECHNICAL
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Skills
          </h3>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h4 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b border-white/20 pb-3">
                {category}
              </h4>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Icon - FIXED: Using Next.js Image */}
                    <div className="w-16 h-16 relative z-10 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        onError={(e) => {
                          // Fallback to a generic icon if the specific one fails
                          const target = e.target as HTMLImageElement;
                          target.src = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/circle.svg";
                        }}
                      />
                    </div>

                    {/* Skill Name */}
                    <p className="text-sm md:text-base font-semibold text-white/70 group-hover:text-white text-center transition-colors duration-300 relative z-10">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;