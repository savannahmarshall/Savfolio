import React from 'react';
import '../app.css'; 

const AboutMe = () => {
    return (
      <div className="about-me-container">
        <div className="about-me-photo">
          <img src="\assets\profile-photo.png" alt="profile photo" />
        </div>
        <div className="about-me-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm Savannah. I'm a passionate junior web developer with a strong interest in building dynamic and user-friendly web applications.
            I have experience working with various technologies including React, Node.js, and PostgreSQL. My goal is to create impactful and 
            engaging digital experiences. My interests include outdoor exploration, gardening, crafts and music.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>CSS/SCSS</li>
            <li>HTML</li>
            <li>MongoDB</li>
            <li>Insomnia</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
