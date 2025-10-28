import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Brain, Hammer, Briefcase, LayoutGrid, Mail } from 'lucide-react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'home', href: '#home', icon: User, label: 'Home' },
    { name: 'skills', href: '#skills', icon: Brain, label: 'Skills' },
    { name: 'projects', href: '#projects', icon: Hammer, label: 'Projects' },
    { name: 'experience', href: '#experience', icon: Briefcase, label: 'Experience' },
    { name: 'contact', href: '#contact', icon: Mail, label: 'Contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed left-0 top-0 bottom-0 z-50 w-20 flex flex-col items-center py-8 glass border-r border-white/10">
      {/* Logo */}
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mb-8 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('#home')}
      >
        <span className="text-white font-bold text-lg">MN</span>
      </motion.div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-6">
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeSection === item.name
                ? 'bg-accent text-gray-900 glow-effect'
                : 'glass text-gray-400 hover:text-accent hover:bg-white/5'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
          >
            <item.icon className="w-6 h-6" />
            {activeSection === item.name && (
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full"
                layoutId="activeSection"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
