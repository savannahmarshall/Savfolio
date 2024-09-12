import React from 'react';
import '../app.css'; 

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Savannah. I'm a passionate junior web developer with a strong interest in building dynamic and user-friendly web applications.
                    I have experience working with various technologies including React, Node.js, and PostgreSQL. My goal is to create impactful and 
                    engaging digital experiences. My interests include outdoor exploration, gardening, crafts, and music.
                </p>
                <h2>Skills</h2>
          <ul className="skills-list">
            <li><a href="https://www.javascript.com/" title="JavaScript"><img src="/assets/icons/javascript-programming-language-icon.png" alt="JavaScript" /></a></li>
            <li><a href="https://react.dev/" title="React"><img src="/assets/icons/react-js-icon.png" alt="React" /></a></li>
            <li><a href="https://nodejs.org/en" title="Node.js"><img src="/assets/icons/node-js-icon.png" alt="Node.js" /></a></li>
            <li><a href="https://expressjs.com/" title="Express.js"><img src="/assets/icons/express.png" alt="Express.js" /></a></li>
            <li><a href="https://www.postgresql.org/" title="PostgreSQL"><img src="/assets/icons/postgresql-icon.png" alt="PostgreSQL" /></a></li>
            <li><a href="" title="CSS/SCSS"><img src="/assets/icons/css-icon.png" alt="CSS/SCSS" /></a></li>
            <li><a href="https://html.com/" title="HTML"><img src="/assets/icons/file-html-color-red-icon.png" alt="HTML" /></a></li>
            <li><a href="https://www.mongodb.com/" title="MongoDB"><img src="/assets/icons/mongodb-icon.png" alt="MongoDB" /></a></li>
            <li><a href="https://insomnia.rest/" title="Insomnia"><img src="/assets/icons/insomnia-icon.png" alt="Insomnia" /></a></li>
            <li><a href="https://graphql.org/" title="GraphQL"><img src="/assets/icons/graphql-icon.png" alt="GraphQL" /></a></li>
          </ul>
            </div>
            <div className="about-me-photo">
                <img src="/assets/layout/profile-pic.jpg" alt="Profile photo" />
            </div>
        </div>
    );
};

export default AboutMe;

