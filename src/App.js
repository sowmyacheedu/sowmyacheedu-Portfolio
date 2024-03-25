import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import IntroSection from './Intro/Intro';
import Academic from './Academic/Academic';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    // Toggle dark mode class on document.body
    document.body.classList.toggle('dark-mode');
    
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <IntroSection/>
      <Academic />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
