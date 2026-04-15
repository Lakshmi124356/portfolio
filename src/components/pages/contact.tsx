const Contact = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to reach out for collaborations or job opportunities 🚀
        </p>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

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