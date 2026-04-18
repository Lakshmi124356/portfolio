import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to reach out for collaborations or job opportunities 🚀
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 text-left">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10-digit number",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;