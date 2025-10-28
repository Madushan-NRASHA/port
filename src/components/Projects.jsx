import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code, Filter } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Smart Home Automation System',
      description: 'An IoT-based home automation system using ESP32 sensors to control lights, temperature, and security. Data is streamed to cloud platform for real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      tech: ['ESP32', 'Arduino', 'AWS IoT', 'React', 'MQTT'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
    },
    {
      title: 'IoT Air Quality Monitor',
      description: 'A smart air quality monitoring system using multiple sensors to track PM2.5, CO2, temperature, and humidity. Includes a web dashboard for data visualization.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      tech: ['Raspberry Pi', 'Python', 'Node.js', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
    },
    {
      title: 'Smart Irrigation System',
      description: 'An intelligent irrigation system with soil moisture sensors that automatically waters crops based on real-time data, reducing water waste by 40%.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      tech: ['Arduino', 'Sensors', 'ThingSpeak', 'React Native'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
    },
    {
      title: 'IoT Health Monitoring Device',
      description: 'A wearable IoT device that monitors vital signs (heart rate, body temperature, activity) and sends data to a cloud dashboard for health tracking.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800',
      tech: ['ESP32', 'BLE', 'Firebase', 'React', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
    },
    {
      title: 'Smart Parking Solution',
      description: 'An IoT-based parking management system using ultrasonic sensors to detect available spots and guide drivers through a mobile app.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      tech: ['Arduino', 'MQTT', 'React Native', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
    },
  ]

  const categories = ['All', 'IoT', 'Full Stack', 'Frontend', 'Mobile', 'Backend']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent text-gray-900'
                  : 'glass text-gray-300 hover:text-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass w-12 h-12 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass w-12 h-12 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-accent font-semibold">{project.category}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 glass rounded-lg text-center text-sm font-medium text-gray-300 hover:text-accent transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 glass rounded-lg text-accent hover:bg-accent hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects

