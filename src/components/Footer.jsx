import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 glass w-14 h-14 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-gray-900 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>

        {/* Footer Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Madushan Nirasha</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            FullStack Web & App Developer passionate about creating amazing digital experiences.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 flex items-center justify-center">
              Made with{' '}
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />{' '}
              by Madushan Nirasha
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

