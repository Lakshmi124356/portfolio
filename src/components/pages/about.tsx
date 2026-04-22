import { useEffect, useState } from "react";
import type { Profile } from "./type";

const About = () => {
  const [data, setData] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/profile.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        {/* Image + Intro */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">

          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}${data.myImage}`}
              alt="profile"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-gray-200"
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-gray-600 text-lg leading-relaxed">
              {data.about.intro}
              <br /><br />
              {data.about.details}
            </p>
          </div>

        </div>

        {/* Work */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            What I Work On
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {data.work.map((item, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Skills & Tools
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {data.skills.map((skill, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">{skill.category}</h4>
                <p className="text-gray-600 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Experience
          </h3>

          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              {data.experienceDetails}
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Achievements
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {data.achievements}
          </p>
        </div>

        {/* Education */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Education
          </h3>

          <p className="text-gray-600 whitespace-pre-line">
            {data.education}
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;