import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
};

const SkillsCard = ({
  title,
  icon,
  skills,
}: SkillCardProps) => {
  return (
    <motion.div
      className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl 
      border border-white/40 shadow-md hover:shadow-2xl 
      transition-all duration-500 overflow-hidden"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl group-hover:scale-110 transition">
            {icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-800">
            {title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl 
              bg-gray-50 border border-gray-100 text-gray-700 
              hover:bg-indigo-50 hover:border-indigo-200 
              hover:text-indigo-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >

              <span className="text-lg">
                {skill.icon}
              </span>

              <span className="text-sm font-medium">
                {skill.name}
              </span>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.div>
  );
};

export default SkillsCard;