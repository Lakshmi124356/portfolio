import { useEffect, useState } from "react";
import type { Project } from "./type";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
} from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#f8f9ff]">

      {/* 🌈 Animated Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 opacity-20 blur-3xl rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-52 h-52 bg-purple-300 opacity-10 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* 🔥 TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="text-indigo-500 uppercase tracking-[4px] text-sm font-semibold">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-3">
            Featured Projects
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-8">

          {projects.map((project, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >

                {/* CARD CONTAINER */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative rounded-[30px] overflow-hidden p-[1px]"
                >

                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-xl"></div>

                  {/* CARD */}
                  <div
                    className={`relative rounded-[30px] backdrop-blur-xl border border-white/40 transition-all duration-500 overflow-hidden
                    ${isOpen
                        ? "bg-white shadow-2xl"
                        : "bg-white/70 hover:bg-white/90 shadow-lg"
                      }`}
                  >

                    {/* HEADER */}
                    <div
                      onClick={() => toggleAccordion(index)}
                      className="cursor-pointer p-6 md:p-8 flex justify-between items-center"
                    >

                      <div className="flex items-start gap-5">

                        {/* ICON */}
                        <motion.div
                          className="min-w-[60px] h-[60px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl shadow-lg"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          <FaCode />
                        </motion.div>

                        {/* TITLE */}
                        <div>

                          <div className="flex items-center gap-3 flex-wrap">

                            <h3 className="text-2xl font-bold text-gray-800">
                              {project.title}
                            </h3>

                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-600">
                              Project {index + 1}
                            </span>

                          </div>

                          <p className="text-gray-500 mt-2 text-sm md:text-base">
                            {project.domain} • {project.role}
                          </p>

                        </div>
                      </div>

                      {/* ICON */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-indigo-600 text-xl"
                      >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </motion.div>

                    </div>

                    {/* CONTENT */}
                    <AnimatePresence>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden"
                        >

                          <div className="px-6 md:px-8 pb-8">

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                              {project.content}
                            </p>

                            {/* DETAILS */}
                            <div className="bg-indigo-50/60 rounded-2xl p-5 mb-6 border border-indigo-100">

                              <div className="flex items-center gap-2 mb-4 text-indigo-600 font-semibold">
                                <FaLayerGroup />
                                Project Highlights
                              </div>

                              <ul className="space-y-3">
                                {project.details.map((item, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 text-gray-600"
                                  >
                                    <span className="mt-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
                                    {item}
                                  </motion.li>
                                ))}
                              </ul>

                            </div>

                            {/* SCALE + LIFECYCLE */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">

                              {project.scale && (
                                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                                  <p className="text-sm font-semibold text-indigo-600 mb-2">
                                    Scale
                                  </p>

                                  <p className="text-gray-600">
                                    {project.scale}
                                  </p>
                                </div>
                              )}

                              {project.lifecycle && (
                                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                                  <p className="text-sm font-semibold text-pink-500 mb-2">
                                    Lifecycle
                                  </p>

                                  <p className="text-gray-600">
                                    {project.lifecycle}
                                  </p>
                                </div>
                              )}

                            </div>

                            {/* TECH STACK */}
                            <div className="mb-6">

                              <p className="font-semibold text-gray-800 mb-4">
                                Tech Stack
                              </p>

                              <div className="flex flex-wrap gap-3">

                                {project.tech.split(",").map((tech, i) => (
                                  <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.08 }}
                                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                                  >
                                    {tech.trim()}
                                  </motion.span>
                                ))}

                              </div>
                            </div>

                            {/* CONTRIBUTIONS */}
                            <div>

                              <p className="font-semibold text-gray-800 mb-4">
                                Key Contributions
                              </p>

                              <div className="space-y-3">

                                {project.contributions.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                                  >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center text-sm font-bold">
                                      ✓
                                    </div>

                                    <p className="text-gray-600">
                                      {item}
                                    </p>

                                  </motion.div>
                                ))}

                              </div>

                            </div>

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>

                  </div>
                </motion.div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;