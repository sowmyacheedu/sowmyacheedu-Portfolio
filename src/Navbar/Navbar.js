import React from 'react';
import './Navbar.css';
import resumePDF from '../Images/Resume.pdf'; // Import the PDF file
import moon from '../Images/moon2.avif';
import sun from '../Images/sun3.jpeg'

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav>
        <ul>
          <li><a href={resumePDF} download>Resume</a></li>
          <li><a href="#Footer">Get in touch</a></li>
          <li>
            <button onClick={toggleDarkMode}>
              {darkMode ? <img className='nav-image' src={sun} alt="moon" /> : <img className='nav-image' src={moon} alt="moon" />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
