import React from 'react';


const projects = [
  {
    title: 'Lost-Lands',
    image: '/assets/project-images/lost-lands.png',
    deployedLink: 'https://project-3-bf5p.onrender.com/',
    githubLink: 'https://github.com/savannahmarshall/Lost-Lands',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Starry-Tech',
    image: '/assets/project-images/starry-tech.png',
    deployedLink: 'https://starry-tech.onrender.com/',
    githubLink: 'https://github.com/savannahmarshall/Starry-Tech',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Trip-Planner',
    image: '/assets/project-images/search-screenshot.png',
    deployedLink: 'https://trip-planner-1cxc.onrender.com',
    githubLink: 'https://github.com/savannahmarshall/Trip-Planner',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Whats-For-Dinner',
    image: '/assets/project-images/whats-for-dinner.png',
    deployedLink: 'https://lindsay-terry.github.io/whats-for-dinner/',
    githubLink: 'https://github.com/savannahmarshall/whats-for-dinner',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Employee-Tracker',
    image: '/assets/project-images/employee-tracker-screenshot.png',
    deployedLink: 'https://drive.google.com/file/d/1H_jd5EEwlcLJe0dAYkGeopUe7c8gWTjW/view',
    githubLink: 'https://github.com/savannahmarshall/Employee-Tracker',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Weather-Dashboard',
    image: '/assets/project-images/weather-dashboard.png',
    deployedLink: 'https://savannahmarshall.github.io/Weather-Dashboard/',
    githubLink: 'https://github.com/savannahmarshall/Weather-Dashboard',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Project-Task-Board',
    image: '/assets/project-images/task-board.png',
    deployedLink: 'https://savannahmarshall.github.io/Project-Task-Board/',
    githubLink: 'https://github.com/savannahmarshall/Project-Task-Board',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },
  {
    title: 'Bestieverse',
    image: '/assets/project-images/bestieverse.png',
    deployedLink: 'https://www.loom.com/share/bf2bab7f3bd243e59789b29e81c40638?sid=06ae940f-1177-4c53-84c0-f50cb16c25f7',
    githubLink: 'https://github.com/savannahmarshall/Bestieverse',
    buttonIcon: '/assets/icons/deploy-icon.png',
  },

];
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-title-container">
        <h2 className="portfolio-title">My Projects</h2>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <h3>{project.title}</h3>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="portfolio-image-link">
              <img src={project.image} alt={project.title} className="portfolio-image" />
            </a>
            <div className="portfolio-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                <img src={project.buttonIcon} alt="Deployed Application Icon" className="button-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
  