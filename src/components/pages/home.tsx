const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Developer
      </h1>
      <p className="text-gray-400 text-lg md:text-xl mb-6">
        Building modern web applications
      </p>
      <button className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-500 transition">
        View Projects
      </button>
    </div>
  );
};

export default Home;