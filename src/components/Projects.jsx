import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects & Research</h2>
        <p className="section-description">
          Selected projects showcasing my expertise in cybersecurity and threat analysis
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-year">{project.year}</div>
              <p>{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
