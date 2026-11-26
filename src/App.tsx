import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Education, Languages, Certifications, Contact, Footer } from './components/Panels';

export default function App() {
  return (
    <>
      <svg width="0" height="0" aria-hidden style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="iconGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b79cff" /><stop offset="1" stopColor="#6a3dff" /></linearGradient>
        </defs>
      </svg>
      <a href="#about" className="skip">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Languages />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
