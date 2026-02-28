import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function About() {
  const { personal, interests } = portfolioData;

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="section-description">
          Learn more about my background and what drives my passion for cybersecurity
        </p>

        <div className="about-grid">
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1' }}>
              As a cybersecurity graduate student at UMBC, I'm passionate about protecting organizations from cyber threats through comprehensive risk assessment, threat modeling, and security controls implementation. My journey into cybersecurity began with a strong foundation in computer science, which I've now specialized into creating secure, resilient systems.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginTop: '1rem' }}>
              With hands-on experience at Palo Alto Networks and multiple security certifications, I combine technical depth with policy and governance expertise. I'm particularly interested in public-sector cybersecurity initiatives and critical infrastructure protection.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Security Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">96%</div>
              <div className="stat-label">ML Model Accuracy</div>
            </div>
            <div className="stat">
              <div className="stat-number">40%</div>
              <div className="stat-label">Efficiency Improvement</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Professional Certifications</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: '#60a5fa', marginBottom: '1rem' }}>Areas of Interest</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {interests.map((interest, index) => (
              <span key={index} className="skill-tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
