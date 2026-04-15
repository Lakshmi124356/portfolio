import Navbar from "./components/nav-bar/nav-bar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Footer from "./components/pages/footer";
import Hero from "./components/pages/home";
import Projects from "./components/pages/projects";
//import AppRoutes from "./components/routes/app-routes";


function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      {/* <AppRoutes /> */}
      <Footer/>
    </>
  );
}

export default App;