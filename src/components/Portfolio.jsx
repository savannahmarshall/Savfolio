import React from 'react';
import '../app.css';

const projects = [
  {
    title: 'Trip-Planner',
    image: '/assets/search-screenshot.png',
    deployedLink: 'https://trip-planner-1cxc.onrender.com',
    githubLink: 'https://github.com/savannahmarshall/Trip-Planner'
  },
  {
    title: 'whats-for-dinner',
    image: '/assets/whats-for-dinner.png',
    deployedLink: 'https://lindsay-terry.github.io/whats-for-dinner/',
    githubLink: 'https://github.com/savannahmarshall/whats-for-dinner'
  },
  {
    title: 'Employee-Tracker',
    image: '/assets/employee-tracker-screenshot.png',
    deployedLink: 'https://drive.google.com/file/d/1H_jd5EEwlcLJe0dAYkGeopUe7c8gWTjW/view',
    githubLink: 'https://github.com/savannahmarshall/Employee-Tracker'
  },
  {
    title: 'Weather-Dashboard',
    image: '/assets/weather-dashboard.png',
    deployedLink: 'https://savannahmarshall.github.io/Weather-Dashboard/',
    githubLink: 'https://github.com/savannahmarshall/Weather-Dashboard'
  },
  {
    title: 'Project-Task-Board',
    image: '/assets/task-board.png',
    deployedLink: 'https://savannahmarshall.github.io/Project-Task-Board/',
    githubLink: 'https://github.com/savannahmarshall/Project-Task-Board'
  },
  {
    title: 'Bestieverse',
    image: '/assets/bestieverse.png',
    deployedLink: 'https://www.loom.com/share/bf2bab7f3bd243e59789b29e81c40638?sid=06ae940f-1177-4c53-84c0-f50cb16c25f7',
    githubLink: 'https://github.com/savannahmarshall/Bestieverse'
  },
  {
    title: 'SVG-Logo-Maker',
    image: '/assets/logo-maker.png',
    deployedLink: 'https://drive.google.com/file/d/1xtWSBOwlBfczxfX7gSEPx5Z4ar7HzEIV/view',
    githubLink: 'https://github.com/savannahmarshall/Logo-Builder'
  },
  {
    title: 'The-Infinite-Loop',
    image: '/assets/coming-soon.png',
    deployedLink: 'https://deployed-link6.com',
    githubLink: 'https://github.com/savannahmarshall/Project-3'
  }
];
function Portfolio() {
    return (
      <section className="portfolio">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <h3>{project.title}</h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="portfolio-image-link">
                <img src={project.image} alt={project.title} className="portfolio-image" />
              </a>
              <div className="portfolio-links">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
  
  export default Portfolio;