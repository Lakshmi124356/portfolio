import { useEffect, useState } from "react";
import type { Profile } from "./type";
import { motion } from "framer-motion";

const About = () => {
  const [data, setData] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/profile.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="relative py-16 px-6 md:px-16 overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 blur-2xl opacity-70"></div>

      <div className="relative max-w-6xl mx-auto z-10">

        {/* TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* IMAGE + INTRO */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">

          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}${data.myImage}`}
              alt="profile"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-xl border-4 border-white"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </motion.div>

          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.about.intro}
              <br /><br />
              {data.about.details}
            </p>
          </motion.div>

        </div>

        {/* WORK */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            What I Work On
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {data.work.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Skills & Tools
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {data.skills.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-semibold mb-2">{skill.category}</h4>
                <p className="text-gray-600 text-sm">{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Experience
          </h3>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-700 leading-relaxed">
              {data.experienceDetails}
            </p>
          </div>
        </motion.div>

        {/* ACHIEVEMENTS */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-6">
            Achievements
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.achievements}
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-6">
            Education
          </h3>

          <p className="text-gray-600 whitespace-pre-line">
            {data.education}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;