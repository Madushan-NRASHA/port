# Madushan Nirasha - Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## ✨ Features

- 🌙 Dark theme with yellow accent colors
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Glassmorphism effects
- 🎯 Smooth scrolling navigation
- 💫 Interactive hover effects
- ⚡ Fast loading performance
- 📊 Skills section with progress bars
- 🎯 Projects showcase with filtering
- 📅 Experience timeline
- 📧 Contact form with validation

## 🎨 Design Highlights

- **Color Scheme**: Dark background (#111827) with yellow accents (#FCD34D)
- **Animations**: Floating animations, typewriter effect, stagger animations
- **Effects**: Glassmorphism, gradient text, glow effects
- **Typography**: Modern, clean fonts with proper hierarchy

## 📁 Project Structure

```
src/
  components/
    Hero.jsx          # Hero section with animated avatar
    Skills.jsx        # Technical skills with progress bars
    Projects.jsx      # Projects showcase with filters
    Experience.jsx    # Education & work experience timeline
    Contact.jsx       # Contact form and information
    Navbar.jsx        # Navigation bar
    Footer.jsx        # Footer with links
  App.jsx             # Main app component
  main.jsx            # Entry point
  index.css           # Global styles
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 📝 Configuration

### Update Personal Information

Edit the following components to customize:

- **Hero.jsx**: Update name, title, bio, and social links
- **Skills.jsx**: Modify skill sets and proficiency levels
- **Projects.jsx**: Add your actual projects
- **Experience.jsx**: Update education and work history
- **Contact.jsx**: Change contact information and social links

### Customizing Colors

Edit `tailwind.config.js` to change the accent color:

```js
colors: {
  accent: '#YOUR_COLOR_CODE',
}
```

### Adding Projects

Update the `projects` array in `Projects.jsx`:

```js
const projects = [
  {
    title: 'Your Project',
    description: 'Description...',
    image: 'your-image-url',
    tech: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
    category: 'Full Stack',
  },
]
```

## 🎯 Sections

1. **Hero**: Introduction with animated avatar
2. **Skills**: Technical skills with progress visualization
3. **Projects**: Project showcase with category filtering
4. **Experience**: Education and work timeline
5. **Contact**: Contact form and social links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Madushan Nirasha**
- Portfolio: [https://madushan.com]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ by Madushan Nirasha

