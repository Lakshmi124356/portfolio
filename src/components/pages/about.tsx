const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          I am a passionate Software Engineer with 3+ years of experience in building
          scalable web applications. I specialize in React, TypeScript, and .NET technologies.
          I enjoy creating user-friendly and high-performance applications.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Frontend</h3>
            <p className="text-gray-600">React, TypeScript, Redux</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Backend</h3>
            <p className="text-gray-600">.NET Core, Web API, SQL</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Tools</h3>
            <p className="text-gray-600">Git, Azure, Jest</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;