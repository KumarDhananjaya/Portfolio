// src/pages/HomePage.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Kumar Dhananjaya | Portfolio';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;