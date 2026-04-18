import profileImage from "../../assets/Profile-image.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center pt-24 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hi, I'm Lakshmi Bondada 👋
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-indigo-500 mb-4">
            Software Engineer (.NET & React)
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            I build scalable and user-friendly web applications using modern technologies
            like React and .NET, focusing on performance and clean design.
            <br /><br />
            With 3.10 years of experience, I have worked on enterprise-level applications
            delivering reliable and efficient solutions.
          </p>

          <div className="flex gap-4">
            <a
              href="/Lakshmi_Bondada_Resume.pdf"
              target="_blank"
              className="border border-indigo-500 text-indigo-500 px-6 py-3 rounded-lg"
            >
              View Resume
            </a>

            <a
              href="/Lakshmi_Bondada_Resume.pdf"
              download
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="profile"
            className="w-[200px] md:w-[280px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;