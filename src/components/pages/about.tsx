import { useEffect, useState } from "react";
import type { Profile } from "./type";
import { motion } from "framer-motion";
import Counter from "../counter";
import SkillsCard from "./skill-card";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaServer,
  FaGithub,
  FaMicrosoft,
  FaCloud,
  FaProjectDiagram,
  FaLayerGroup,
  FaUsersCog,
  FaCreditCard,
  FaMobileAlt,
  FaLaptopCode,
  FaAward,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { MdBugReport } from "react-icons/md";
import { SiJest } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import WorkCard from "./work-card";
import ExperienceCard from "./experiecnce";
import AchievementCard from "./achivements";

const About = () => {
  const [data, setData] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/profile.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-[#f8f9ff]">

      {/* 🌈 Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 rounded-3xl opacity-30 blur-xl"
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-200 rounded-2xl opacity-20 blur-lg"
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* 🔥 TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-500 font-medium tracking-[4px] uppercase text-sm">
            Get To Know Me
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-800">
            About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* 🧑 IMAGE + INTRO */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          {/* IMAGE */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Glow Background */}
            <motion.div
              className="absolute w-72 h-72 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-[40px] opacity-30 blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Floating Glass Card */}
            <motion.div
              className="absolute top-5 -left-2 w-24 h-24 bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Floating Shape */}
            <motion.div
              className="absolute bottom-5 right-2 w-16 h-16 bg-pink-300 rounded-2xl opacity-50"
              animate={{ y: [0, 15, 0], rotate: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* IMAGE */}
            <motion.img
              src={`${import.meta.env.BASE_URL}${data.myImage}`}
              alt="profile"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-[30px] shadow-2xl border-4 border-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-lg text-indigo-600 text-sm font-medium border border-indigo-100 shadow-sm">

                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                Passionate Full Stack Developer
              </span>
            </motion.div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
              Building scalable and modern web applications.
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">
              {data.about.intro}
              <br /><br />
              {data.about.details}
            </p>

            {/* QUICK STATS */}
            <div className="grid grid-cols-3 gap-4 mt-8">

              {/* YEARS */}
              <motion.div
                className="bg-white rounded-2xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-3xl font-extrabold text-indigo-600">
                  <Counter end={3} duration={3000} suffix="+" />
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Years
                </p>
              </motion.div>

              {/* PROJECTS */}
              <motion.div
                className="bg-white rounded-2xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-3xl font-extrabold text-indigo-600">
                  <Counter end={4} duration={3500} suffix="+" />
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Projects
                </p>
              </motion.div>

              {/* TECHNOLOGIES */}
              <motion.div
                className="bg-white rounded-2xl p-4 shadow-md text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-3xl font-extrabold text-indigo-600">
                  <Counter end={10} duration={4500} suffix="+" />
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Technologies
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* 💼 WORK */}
        <div className="mb-24">

          <motion.h3
            className="text-4xl font-extrabold text-center mb-14 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Work On
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-10">

            <WorkCard
              title="Frontend Development"
              description="Building responsive and scalable user interfaces using React, TypeScript, Redux, Tailwind, and modern frontend architecture."
              icon={<FaLaptopCode />}
              color="from-sky-500 to-indigo-500"
              tag="UI Engineering"
            />

            <WorkCard
              title="Backend Development"
              description="Developing secure REST APIs and scalable backend systems using .NET, C#, Node.js, SQL, and microservices architecture."
              icon={<FaServer />}
              color="from-purple-500 to-pink-500"
              tag="API & Services"
            />

            <WorkCard
              title="Cloud"
              description="Working with Azure Repositories, Azure Boards, Git workflows, task tracking, and collaborative development practices in agile environments." icon={<FaCloud />}
              color="from-cyan-500 to-blue-500"
              tag="Cloud Solutions"
            />

            <WorkCard
              title="Responsive Applications"
              description="Creating fully responsive and performance-optimized applications that work seamlessly across desktop and mobile devices."
              icon={<FaMobileAlt />}
              color="from-orange-400 to-red-500"
              tag="Cross Platform"
            />

          </div>
        </div>

        {/* 🛠 SKILLS */}
        <div className="mb-24">

          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Tools
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">

            {/* FRONTEND */}
            <SkillsCard
              title="Frontend"
              icon={<FaReact className="text-sky-500" />}
              skills={[
                {
                  name: "React",
                  icon: <FaReact className="text-sky-500" />,
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript className="text-blue-600" />,
                },
                {
                  name: "JavaScript",
                  icon: <FaJs className="text-yellow-400" />,
                },
                {
                  name: "Redux",
                  icon: <SiRedux className="text-purple-500" />,
                },
                {
                  name: "MUI",
                  icon: <SiMui className="text-blue-500" />,
                },
                {
                  name: "Tailwind",
                  icon: <SiTailwindcss className="text-cyan-400" />,
                },
                {
                  name: "HTML",
                  icon: <FaHtml5 className="text-orange-500" />,
                },
                {
                  name: "CSS",
                  icon: <FaCss3Alt className="text-blue-500" />,
                },
              ]}
            />

            {/* BACKEND */}
            <SkillsCard
              title="Backend"
              icon={<FaServer className="text-indigo-500" />}
              skills={[
                {
                  name: ".NET",
                  icon: <FaServer className="text-violet-600" />,
                },
                {
                  name: "C#",
                  icon: <TbBrandCSharp className="text-green-600" />,
                },
                {
                  name: "Node.js",
                  icon: <FaNodeJs className="text-green-500" />,
                },
                {
                  name: "SQL",
                  icon: <FaDatabase className="text-gray-600" />,
                },
              ]}
            />

            {/* TOOLS */}
            <SkillsCard
              title="Tools"
              icon={<FaMicrosoft className="text-blue-500" />}
              skills={[
                {
                  name: "VS Code",
                  icon: <VscCode className="text-blue-500" />,
                },
                {
                  name: "Visual Studio",
                  icon: <VscCode className="text-purple-600" />,
                },
                {
                  name: "Azure",
                  icon: <FaCloud className="text-blue-600" />,
                },
                {
                  name: "Git",
                  icon: <FaGitAlt className="text-orange-500" />,
                },
                {
                  name: "GitHub",
                  icon: <FaGithub className="text-gray-800" />,
                },
                {
                  name: "Postman",
                  icon: <SiPostman className="text-orange-400" />,
                },
              ]}
            />

            {/* OTHER */}
            <SkillsCard
              title="Other"
              icon={<MdDeveloperMode className="text-indigo-500" />}
              skills={[
                {
                  name: "REST APIs",
                  icon: <MdDeveloperMode className="text-indigo-500" />,
                },
                {
                  name: "Microservices",
                  icon: <FaProjectDiagram className="text-pink-500" />,
                },
                {
                  name: "SDLC",
                  icon: <FaLayerGroup className="text-green-500" />,
                },
                {
                  name: "Agile",
                  icon: <FaUsersCog className="text-orange-500" />,
                },
                {
                  name: "Payment Gateway",
                  icon: <FaCreditCard className="text-blue-500" />,
                },
                {
                  name: "Jest",
                  icon: <SiJest className="text-red-500" />,
                },
                {
                  name: "RTL",
                  icon: <MdBugReport className="text-purple-500" />,
                },
                {
                  name: "Responsive Design",
                  icon: <FaMobileAlt className="text-cyan-500" />,
                },
              ]}
            />

          </div>
        </div>
        {/* ===================================== */
/* 🚀 EXPERIENCE | ACHIEVEMENTS | EDUCATION TIMELINE */
/* ===================================== */}

        <div className="relative max-w-6xl mx-auto py-10">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* ===================================== */}
          {/* 💼 EXPERIENCE */}
          {/* ===================================== */}

          <motion.div
            className="relative mb-20 md:w-1/2 md:pr-14"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* TIMELINE DOT */}
            <div className="hidden md:flex absolute top-16 -right-5 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 items-center justify-center text-white text-xl shadow-xl z-20">
              💼
            </div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[35px] p-[1px]"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80 blur-xl"></div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-white/50">

                <div className="inline-flex px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
                  💼 Professional Experience
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-3">
                  Software Engineer
                </h3>

                <p className="text-indigo-600 font-semibold mb-2">
                  eCTD Global Solutions
                </p>

                <p className="text-sm text-gray-500 mb-6">
                  2022 - Present
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Working on enterprise-level applications using React, TypeScript, .NET, and SQL. Contributed to scalable frontend development, REST API integration, reusable component architecture, and agile-based team collaboration.
                </p>

              </div>
            </motion.div>
          </motion.div>

          {/* ===================================== */}
          {/* 🏆 ACHIEVEMENTS */}
          {/* ===================================== */}

          <motion.div
            className="relative mb-20 md:w-1/2 md:ml-auto md:pl-14"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* TIMELINE DOT */}
            <div className="hidden md:flex absolute top-16 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 items-center justify-center text-white text-xl shadow-xl z-20">
              🏆
            </div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[35px] p-[1px]"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-80 blur-xl"></div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-white/50 overflow-hidden">

                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                />

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6">
                  ⭐ Employee Recognition
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 leading-snug">
                  Recognized for Performance & Quality Work
                </h4>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.achievements}
                </p>

              </div>
            </motion.div>
          </motion.div>

          {/* ===================================== */}
          {/* 🎓 EDUCATION */}
          {/* ===================================== */}

          <motion.div
            className="relative md:w-1/2 md:pr-14"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            {/* TIMELINE DOT */}
            <div className="hidden md:flex absolute top-16 -right-5 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 items-center justify-center text-white text-xl shadow-xl z-20">
              🎓
            </div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[35px] p-[1px]"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-xl"></div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl border border-white/50 overflow-hidden">

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-8">
                  🎓 Academic Background
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Educational Journey
                </h4>

                <div className="relative pl-6 border-l-4 border-indigo-500">

                  <p className="text-gray-600 whitespace-pre-line text-lg leading-relaxed">
                    {data.education}
                  </p>

                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;