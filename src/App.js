import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css'; // Customize your CSS as per your design

// Import your components here
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills/HRMS Tools
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500}>
              Education/Internship
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Work Experience
            </Link>
          </li>
          <li>
            <Link to="certifications" smooth={true} duration={500}>
              Certifications
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Personal Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="aboutme">
        <AboutMe />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="education">
        <Education />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="certifications">
        <Certifications />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
