import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

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
    <section className="relative py-16 px-6 md:px-16 overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 blur-2xl opacity-70"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Feel free to reach out for collaborations or job opportunities 🚀
        </motion.p>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 text-left bg-white p-6 md:p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          {/* INPUT STYLE WRAPPER */}
          {[
            { name: "name", type: "text", placeholder: "Your Name" },
            { name: "email", type: "email", placeholder: "Your Email" },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
          ].map((field, i) => (
            <div key={i} className="relative">
              <input
                type={field.type}
                placeholder=" "
                {...register(field.name as keyof FormData, {
                  required: `${field.placeholder} is required`,
                })}
                className="peer w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />

              {/* Floating Label */}
              <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-500 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm bg-white px-1">
                {field.placeholder}
              </label>

              {errors[field.name as keyof FormData] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              rows={5}
              placeholder=" "
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className="peer w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />

            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-500 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm bg-white px-1">
              Your Message
            </label>

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={loading}
            className="bg-indigo-500 text-white py-3 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-[1.02] shadow-md hover:shadow-xl disabled:opacity-60"
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <motion.p
              className="text-green-600 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

        </motion.form>
      </div>
    </section>
  );
};

export default Contact;