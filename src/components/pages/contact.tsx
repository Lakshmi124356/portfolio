import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbx4lVvrhElzZ-N0HZe7MjFCrNkOQrU8XFPC5qHXersJmGDHAPogQff4sGYIGHpwWXxI/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setSuccess(true);
      reset();

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#f8f9ff]"
    >

      {/* ========================================= */}
      {/* 🌈 ANIMATED BACKGROUND */}
      {/* ========================================= */}

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

      {/* Floating Glow 1 */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Floating Glow 2 */}
      <motion.div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Floating Box Left */}
      <motion.div
        className="absolute top-32 left-20 w-24 h-24 rounded-3xl bg-indigo-200/40 backdrop-blur-xl border border-white/40"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* Floating Box Left 2 */}
      <motion.div
        className="absolute bottom-40 left-10 w-16 h-16 rounded-2xl bg-purple-200/40 backdrop-blur-xl border border-white/40"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Floating Box Right */}
      <motion.div
        className="absolute top-1/3 right-20 w-28 h-28 rounded-[30px] bg-pink-200/40 backdrop-blur-xl border border-white/40"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="relative max-w-6xl mx-auto z-10">

        {/* TITLE */}

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="text-indigo-500 font-semibold tracking-[4px] uppercase text-sm">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-800">
            Contact Me
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Feel free to reach out for collaborations, freelance work,
            or job opportunities 🚀
          </p>

        </motion.div>

        {/* ========================================= */}
        {/* GRID */}
        {/* ========================================= */}

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ========================================= */}
          {/* LEFT CARD */}
          {/* ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[35px] p-[1px]"
          >

            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-xl"></div>

            {/* Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[35px] p-10 border border-white/50 shadow-2xl overflow-hidden h-full">

              {/* Floating Glow */}
              <motion.div
                className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-r from-indigo-300 to-pink-300 opacity-20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-8">
                  ✨ Let’s Connect
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-bold text-gray-800 mb-5">
                  Have an Idea or Opportunity?
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                  I’m always open to discussing new projects, creative ideas,
                  and opportunities to be part of your vision.
                </p>

                {/* Contact Info */}
                <div className="space-y-5">

                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 bg-white/70 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg">
                      <FaEnvelope />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Email</p>

                      <p className="font-semibold text-gray-800">
                        lakshmibondada06@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 bg-white/70 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-lg">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Phone</p>

                      <p className="font-semibold text-gray-800">
                        +91 98765 43210
                      </p>
                    </div>
                  </motion.div>

                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-10">

                  <motion.a
                    whileHover={{ y: -6, scale: 1.08 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shadow-md hover:shadow-xl transition-all"
                  >
                    <FaLinkedin />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -6, scale: 1.08 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-200 text-gray-800 flex items-center justify-center text-xl shadow-md hover:shadow-xl transition-all"
                  >
                    <FaGithub />
                  </motion.a>

                </div>

              </div>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* FORM CARD */}
          {/* ========================================= */}

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[35px] p-[1px]"
          >

            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-xl"></div>

            {/* Form Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[35px] p-8 md:p-10 border border-white/50 shadow-2xl overflow-hidden">

              {/* Animated Glow */}
              <motion.div
                className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-indigo-300 opacity-20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10 space-y-6">

                {/* Name */}
                <div className="relative">
                  <FaUser className="absolute left-4 top-5 text-indigo-500" />

                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/80 border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-5 text-pink-500" />

                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/80 border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-5 text-purple-500" />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/80 border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>

                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message:
                          "Message must be at least 10 characters",
                      },
                    })}
                    className="w-full p-4 rounded-2xl bg-white/80 border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all resize-none"
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />

                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {/* Success */}
                {success && (
                  <motion.div
                    className="bg-green-100 text-green-700 rounded-2xl py-4 text-center font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}

              </div>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;