import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
  const timelineData = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Cardiff Metropolitan University',
      subtitle: 'Bachelor of Science in Computer Science with IoT Focus',
      period: '2020 - 2024',
      location: 'Cardiff, United Kingdom',
      description: 'Pursuing a degree in Computer Science with a focus on software engineering, IoT development, web development, and mobile application development. Gaining expertise in embedded systems, sensor integration, and IoT cloud platforms.',
      achievements: [
        'Maintained a First Class Honours equivalent',
        'Active in coding competitions and IoT hackathons',
        'Collaborated on multiple IoT research projects',
        'Completed 5+ IoT projects during studies',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'IoT Developer & Full-Stack Developer',
      subtitle: 'Self-Employed',
      period: '2021 - Present',
      location: 'Remote / Sri Lanka',
      description: 'Building custom IoT solutions and full-stack applications. Specializing in IoT hardware integration (ESP32, Arduino), sensor networks, cloud IoT platforms, React, Node.js, and mobile development.',
      achievements: [
        'Developed 10+ IoT projects (smart home, agriculture, health)',
        'Delivered 20+ web/mobile applications',
        'Achieved 100% client satisfaction rate',
        'Built scalable applications serving 10k+ users',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'IoT Developer Intern',
      subtitle: 'Smart Solutions Ltd',
      period: 'Summer 2022',
      location: 'Colombo, Sri Lanka',
      description: 'Developed IoT solutions including smart sensor networks and data collection systems. Worked on ESP32-based projects and integrated hardware with cloud platforms.',
      achievements: [
        'Developed 3 IoT proof-of-concept projects',
        'Improved system efficiency by 35%',
        'Integrated sensors with AWS IoT Core',
        'Collaborated with cross-functional teams',
      ],
    },
  ]

  const skills = [
    'IoT Development',
    'Embedded Systems',
    'Sensor Integration',
    'Cloud IoT Platforms',
    'Data Analytics',
    'Hardware Prototyping',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Education and professional experience
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center border-2 border-accent">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <motion.div
                    className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {/* Type Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent mb-4">
                      {item.type === 'education' ? 'Education' : 'Experience'}
                    </span>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-accent font-medium mb-4">
                      {item.subtitle}
                    </p>

                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-accent" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-accent" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-accent mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start text-gray-400 text-sm"
                            >
                              <span className="text-accent mr-2">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-20 glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <span className="gradient-text">Core Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 glass rounded-full text-gray-300 font-medium"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(252, 211, 77, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

