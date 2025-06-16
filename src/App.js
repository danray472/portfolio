import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './app.css'; // Make sure to import the CSS file

function App() {
  return (
    <div>
      <Navbar className="transparent-bg" />
      <About className="transparent-bg" />
      <Skills className="transparent-bg " />
      <Projects className="transparent-bg" />
      <Contact className="transparent-bg" />
      <Footer className="transparent-bg" />
    </div>
  );
}

export default App;