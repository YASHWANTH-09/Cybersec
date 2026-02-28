import React from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">YR</div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                onClick={(e) => handleScroll(e, item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
