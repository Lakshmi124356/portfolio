import profileImage from "../../assets/Profile-image.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center pt-24 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Saam Sheron
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600 mb-4">
            Software Developer. UI Designer
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            I believe great things can be achieved through the use of technology and research.
            But those are merely the tools. Behind the tools are the people. Teamwork and
            passion, those are what matter the most.
          </p>

          <button className="bg-[#c58b5c] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
            Download Resume
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          {/* <div className="bg-white rounded-xl shadow-lg p-4"> */}
            <img
              src={profileImage} // 👉 replace later
              alt="profile"
              className="w-[250px] md:w-[350px] object-cover rounded-lg"
            />
          {/* </div> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;