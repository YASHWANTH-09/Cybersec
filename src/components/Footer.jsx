import React from 'react';
import { portfolioData } from '../data/resumeData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href={`mailto:${personal.email}`}>📧 Email</a>
          <a href={`tel:${personal.phone}`}>📱 Phone</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 {personal.name}. All rights reserved. | Based in {personal.location}
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Designed & Built with React • Showcasing Cybersecurity Expertise
          </p>
        </div>
      </div>
    </footer>
  );
}
