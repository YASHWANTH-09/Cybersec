# Yashwanth Ravula - Cybersecurity Portfolio

A modern, responsive React-based portfolio showcasing cybersecurity expertise, projects, experience, and certifications.

## Features

- ✨ Modern, dark-themed design optimized for cybersecurity professionals
- 📱 Fully responsive on desktop, tablet, and mobile devices
- 🎯 Smooth scrolling navigation between sections
- 🎨 Custom CSS with gradient effects and smooth transitions
- 📊 Showcase of projects, skills, experience, and certifications
- 🚀 Built with React and Vite for optimal performance

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS variables
- **Deployment**: Ready for Vercel, Netlify, GitHub Pages, or any static host

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the portfolio directory:
```bash
cd "d:\Cursor Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── resumeData.js
│   ├── styles/
│   │   └── styles.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Customization

### Update Portfolio Content

Edit `src/data/resumeData.js` to update your personal information, projects, experience, skills, and certifications.

### Update Styles

The color scheme is defined in `src/styles/styles.css` using CSS variables. Easy to customize the theme by modifying:

```css
:root {
  --primary: #0f172a;
  --secondary: #1e293b;
  --accent: #3b82f6;
  --accent-light: #60a5fa;
  // ... other colors
}
```

### Update Social Links

Edit the `Footer.jsx` component to add your actual GitHub, LinkedIn, and other social media links.

## Sections

- **Hero**: Eye-catching introduction section
- **About**: Professional summary and key achievements
- **Experience**: Professional work experience timeline
- **Projects**: Showcase of security projects and research
- **Skills**: Comprehensive skill categories
- **Education**: Academic background
- **Certifications**: Professional certifications
- **Footer**: Contact information and links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Choose Vite as the framework
4. Deploy

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### GitHub Pages

1. Update `vite.config.js` base path:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Run: `npm run build`
3. Push the `dist` folder to your `gh-pages` branch

## Performance Optimizations

- Responsive design with mobile-first approach
- CSS variables for efficient theming
- Smooth scroll behavior
- Optimized animations and transitions
- Fast load times with Vite

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section for security articles
- [ ] Contact form with email integration
- [ ] Animation library integration
- [ ] Mobile menu optimization
- [ ] PDF resume download

## Contact

- Email: XG48055@umbc.edu
- Phone: (667) 369-5452
- Location: Baltimore, Maryland

## License

This portfolio is open source and available under the MIT License.

---

**Built with ❤️ for Cybersecurity Excellence**
