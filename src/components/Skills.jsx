import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Security Frameworks & Standards', items: skills.frameworks },
    { title: 'Assessment & Analysis', items: skills.assessment },
    { title: 'Security Tools', items: skills.tools },
    { title: 'Technical Domains', items: skills.domains },
    { title: 'Programming & Scripting', items: skills.programming },
    { title: 'Professional Skills', items: skills.professional },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <p className="section-description">
          Comprehensive skillset across security frameworks, tools, and domains
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="skill-tag">
                    {item}
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
