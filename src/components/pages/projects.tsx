type Project = {
  title: string;
  description: string;
  tech: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind.",
    tech: "React, TypeScript, Tailwind",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce application with payment integration.",
    tech: "React, Redux, Node.js",
  },
  {
    title: "Task Manager",
    description: "Task management app with CRUD operations.",
    tech: "React, .NET Core, SQL",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-500">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <span className="text-sm text-gray-500">
                {project.tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;