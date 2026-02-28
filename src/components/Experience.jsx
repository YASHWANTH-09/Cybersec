import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <p className="section-description">
          My career journey in cybersecurity and team leadership
        </p>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.role}</h3>
              <p className="experience-company">
                {exp.company} • {exp.location}
              </p>
              <p className="experience-period">
                {exp.startDate} – {exp.endDate}
              </p>

              <ul className="experience-highlights">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
