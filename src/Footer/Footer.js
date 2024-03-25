import React from 'react';
import linkedin from '../Images/linkedin.png';
import github from '../Images/gitub.png';
import gm from '../Images/gmail.jpeg';
import './Footer.css';


function Footer() {
  return (
    <footer>
      <div id="Footer" className="footer-images">
        <p>Please use the links below to 'GET IN TOUCH'</p>
        <a href="https://www.linkedin.com/in/cheedu-sowmya-b486b11b9/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/sowmyacheedu" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" />
        </a>
        <a href="mailto:sowmyacheedu59@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gm} alt="gm" />
        </a>
        <p className='thank-you'>Thankyou for visiting my Profile</p>
      </div>
    </footer>
  );
}

export default Footer;
