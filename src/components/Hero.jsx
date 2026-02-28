import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hey, I'm {personal.name}</h1>
            <p className="subtitle">Cybersecurity Professional & Graduate Student</p>
            <p>{personal.summary}</p>
            <div className="hero-buttons">
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://github.com/YASHWANTH-09.png" alt="Yashwanth Ravula" className="avatar-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
