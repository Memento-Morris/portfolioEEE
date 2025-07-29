import About from './sections/About.jsx';
import WorkExperience from './sections/Experience.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <WorkExperience />
      <About />
      <Projects />
      
      
      
      <Footer />
    </main>
  );
};

export default App;
