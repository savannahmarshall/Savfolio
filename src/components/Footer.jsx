import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/savannahmarshall" target="_blank" rel="noopener noreferrer">
            <div className="icon-wrapper">
              <img src="/assets/github-icon.png" alt="GitHub" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/savannah-marshall-62b470200/" target="_blank" rel="noopener noreferrer">
            <div className="icon-wrapper">
              <img src="/assets/linkedin-square-icon.png" alt="LinkedIn" />
            </div>
          </a>
          <a href="#contact" className="hire-me-button">Hire Me</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;









