import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, Database, Smartphone, Settings, 
  Code2, Server, GitBranch, Container, Smartphone as Android, Monitor as Apple,
  FlaskConical, FileType, FileCode, File,
  Palette, Paintbrush, Boxes, Layers,
  Flame, Cloud, Frame, Cpu, Radio, Zap
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: Code2, level: 90 },
        { name: 'JavaScript', icon: FileType, level: 90 },
        { name: 'TypeScript', icon: FileCode, level: 85 },
        { name: 'HTML5', icon: File, level: 95 },
        { name: 'CSS3', icon: Palette, level: 90 },
        { name: 'Tailwind CSS', icon: Paintbrush, level: 88 },
        { name: 'Bootstrap', icon: Boxes, level: 85 },
        { name: 'Material-UI', icon: Layers, level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', icon: Server, level: 85 },
        { name: 'Python', icon: FlaskConical, level: 80 },
        { name: 'Firebase', icon: Flame, level: 88 },
        { name: 'AWS', icon: Cloud, level: 75 },
        { name: 'RESTful API', icon: Database, level: 90 },
        { name: 'GraphQL', icon: Database, level: 75 },
      ],
    },
    {
      title: 'IoT Development',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Arduino', icon: Cpu, level: 85 },
        { name: 'ESP32/ESP8266', icon: Radio, level: 90 },
        { name: 'MQTT', icon: Radio, level: 88 },
        { name: 'AWS IoT', icon: Cloud, level: 80 },
        { name: 'Raspberry Pi', icon: Cpu, level: 85 },
        { name: 'Sensor Integration', icon: Zap, level: 90 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: GitBranch, level: 90 },
        { name: 'Docker', icon: Container, level: 75 },
        { name: 'Figma', icon: Frame, level: 85 },
        { name: 'VS Code', icon: Code, level: 95 },
        { name: 'Postman', icon: Settings, level: 88 },
        { name: 'Agile/Scrum', icon: Settings, level: 85 },
      ],
    },
  ]

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
    <section className="py-20 px-8">
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
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="skill-card relative group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-5 h-5 text-accent" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-accent text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${category.color.split(' ')[1]} 0%, ${category.color.split(' ')[3]} 100%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-accent font-bold">Bonus:</span> I'm also passionate about learning new
              technologies and staying up-to-date with industry trends. Continuous learning is the key to
              staying relevant in the ever-evolving world of software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

