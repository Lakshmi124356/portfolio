import { motion } from "framer-motion";

type AchievementCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const AchievementCard = ({
  title,
  description,
  icon,
  color,
}: AchievementCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[30px] p-[1px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >

      {/* Gradient Border */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-70 blur-xl group-hover:opacity-100 transition duration-500`}
      ></div>

      {/* Card */}
      <div
        className="relative bg-white/80 backdrop-blur-xl rounded-[30px] 
        p-8 border border-white/50 shadow-lg h-full"
      >

        {/* Floating Glow */}
        <motion.div
          className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r ${color} opacity-10`}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        />

        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} text-white flex items-center justify-center text-3xl shadow-lg mb-6`}
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

      </div>
    </motion.div>
  );
};

export default AchievementCard;