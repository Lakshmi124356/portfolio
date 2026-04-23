import { useEffect, useState } from "react";
import type { Profile } from "./type";
import { motion } from "framer-motion";

const Hero = () => {
  const [data, setData] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/profile.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 px-6 md:px-16 overflow-hidden">

      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 animate-gradient blur-2xl opacity-70"></div>

      <div className="relative grid md:grid-cols-2 gap-10 items-center w-full z-10">

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* 🔷 Floating Shape (Top Left) */}
          <motion.div
            className="absolute w-16 h-16 bg-indigo-300 rounded-xl opacity-30 blur-sm"
            animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ top: "-20px", left: "-20px" }}
          />

          {/* 🔷 Floating Shape (Bottom Left) */}
          <motion.div
            className="absolute w-12 h-12 bg-pink-300 rounded-lg opacity-30 blur-sm"
            animate={{ y: [0, 20, 0], rotate: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ bottom: "-10px", left: "30px" }}
          />

          {/* 🟣 SMALL BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
    bg-indigo-50 text-indigo-600 text-xs md:text-sm font-medium 
    border border-indigo-200 shadow-sm">

              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open to Opportunities
            </span>
          </motion.div>

          {/* 👋 HEADING */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              {data.name}
            </span>{" "}
            👋
          </h1>

          {/* ROLE */}
          <h2 className="text-lg md:text-xl font-semibold text-indigo-500 mb-4 tracking-wide">
            {data.role}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px] md:text-base">
            {data.description}
            <br /><br />
            <span className="font-medium text-gray-700">
              With {data.experience} of experience...
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={`${import.meta.env.BASE_URL}${data.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-500 text-indigo-500 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:scale-105"
            >
              View Resume
            </a>

            <a
              href={`${import.meta.env.BASE_URL}${data.resume}`}
              download
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-105 shadow-md hover:shadow-xl"
            >
              Download Resume
            </a>
          </div>

        </motion.div>

        <motion.div
          className="relative flex justify-center items-center w-full h-[350px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* 🟩 BACK CARDS */}

          {/* Big Glass Card */}
          <motion.div
            className="absolute w-64 h-40 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl"
            style={{ top: "20%", left: "10%" }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Colored Card */}
          <motion.div
            className="absolute w-40 h-40 rounded-2xl bg-indigo-300 shadow-lg"
            style={{ top: "10%", right: "10%" }}
            animate={{ y: [0, 25, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Pink Card */}
          <motion.div
            className="absolute w-32 h-32 rounded-xl bg-pink-400 shadow-lg"
            style={{ bottom: "20%", left: "15%" }}
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Yellow Card */}
          <motion.div
            className="absolute w-36 h-36 rounded-xl bg-yellow-300 shadow-lg"
            style={{ bottom: "10%", right: "20%" }}
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Transparent Overlay Card */}
          <motion.div
            className="absolute w-52 h-32 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40"
            style={{ top: "45%", right: "5%" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* 👤 CENTER IMAGE (MAIN CARD) */}
          <motion.img
            src={`${import.meta.env.BASE_URL}${data.image}`}
            alt="profile"
            className="relative z-10 w-[200px] md:w-[300px] object-cover rounded-2xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
