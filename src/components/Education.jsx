import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <p className="section-description">
          Academic foundation in computer science and specialized cybersecurity expertise
        </p>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-details">
                {edu.location} • {edu.startDate} – {edu.endDate}
                {edu.gpa && ` • GPA: ${edu.gpa}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
