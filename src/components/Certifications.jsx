import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Certifications() {
  const { certifications } = portfolioData;

  const certIcons = ['🎓', '🔐', '🛡️', '📚'];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <p className="section-description">
          Professional certifications and continuous learning achievements
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">{certIcons[index % certIcons.length]}</div>
              <h3>{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.details && (
                <p className="cert-details">{cert.details}</p>
              )}
              {cert.status && (
                <p className="cert-details">{cert.status}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
