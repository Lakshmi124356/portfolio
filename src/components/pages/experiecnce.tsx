import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

const ExperienceCard = ({
  company,
  role,
  duration,
  description,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      {/* Timeline Line */}
      <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 top-6 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <FaBriefcase />
      </motion.div>

      {/* Card */}
      <motion.div
        className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -8 }}
      >

        {/* Duration */}
        <div className="inline-flex px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
          {duration}
        </div>

        {/* Role */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {role}
        </h3>

        {/* Company */}
        <p className="text-indigo-600 font-semibold mb-5">
          {company}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>

      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;