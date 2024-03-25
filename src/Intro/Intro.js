import React from 'react';
import './Intro.css';
import yourphoto from '../Images/photo.jpg';

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="container">
        <h1>Sowmya Cheedu</h1>
        <div className="about-me">
          <p>
          Hey there! Welcome to my portfolio. I'm a Computer Science graduate student with a passion for solving problems and creating innovative solutions. You're currently looking at an example of my work, showcasing my skills in React, a popular technology for building user interfaces on the web. With experience as a Programmer Analyst, I'm well-versed in various programming languages like Python, Java, and JavaScript, along with database management systems such as MySQL and PostgreSQL. Whether it's developing neural networks or crafting websites, I love diving into diverse projects and continuously expanding my knowledge in the ever-evolving field of technology. Thanks for stopping by, and feel free to explore more about my journey and projects!
          </p>
          <img src={yourphoto} alt="yourphoto" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

