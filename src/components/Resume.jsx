import React from 'react';

function Resume() {
    return (
        <section className="resume">
            <div className="resume-proficiencies">
                <h2>Qualifications</h2>
                <ul>
                    <li>Professional Online Coding Bootcamp Completion - University of Oregon</li>
                    <li>Two years of engineering experience at Applied Materials</li>
                    <li>Bachelor of Science in Biology - University of Oregon</li>
                </ul>
            </div>
            <a href="/assets/Savannah-Marshall-Resume.pdf" download className="resume-download-link">Download My Resume</a>
        </section>
    );
}

export default Resume;