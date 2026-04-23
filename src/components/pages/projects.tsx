import { useEffect, useState } from "react";
import type { Project } from "./type";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-6 md:px-16 overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 blur-2xl opacity-70"></div>

      <div className="relative max-w-5xl mx-auto z-10">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-4">

          {projects.map((project, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                className={`rounded-xl border transition-all duration-300 cursor-pointer 
                  ${isOpen ? "bg-white shadow-xl" : "bg-white/70 hover:bg-white hover:shadow-md"}`}
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.01 }}
              >

                {/* HEADER */}
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-indigo-600">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {project.domain} • {project.role}
                    </p>
                  </div>

                  <span className="text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {/* CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-5 pb-5 overflow-hidden"
                    >
                      <p className="text-gray-700 mb-4">
                        {project.content}
                      </p>

                      <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                        {project.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      {project.scale && (
                        <p className="text-sm text-gray-600 mb-2">
                          <b>Scale:</b> {project.scale}
                        </p>
                      )}

                      {project.lifecycle && (
                        <p className="text-sm text-gray-600 mb-2">
                          <b>Lifecycle:</b> {project.lifecycle}
                        </p>
                      )}

                      {/* TECH STACK */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.split(",").map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CONTRIBUTIONS */}
                      <div>
                        <p className="text-sm font-semibold mb-2">
                          Key Contributions
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {project.contributions.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;