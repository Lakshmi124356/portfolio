import { useEffect, useState } from "react";
import type { Profile } from "./type";

const Hero = () => {
  const [data, setData] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/profile.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center pt-24 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hi, I'm {data.name} 👋
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-indigo-500 mb-4">
            {data.role}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {data.description}
            <br /><br />
            With {data.experience} of experience...
          </p>

          <div className="flex gap-4">
            <a
              href={`${import.meta.env.BASE_URL}${data.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-500 text-indigo-500 px-6 py-3 rounded-lg"
            >
              View Resume
            </a>

            <a
              href={`${import.meta.env.BASE_URL}${data.resume}`}
              download
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}${data.image}`}
            alt="profile"
            className="w-[200px] md:w-[280px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;