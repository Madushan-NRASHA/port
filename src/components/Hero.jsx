import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import profilePic from "../assets/userpic.png"; // Import your profile picture

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "FullStack Web & App Developer and IoT Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 50);
    } else {
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [currentText, fullText, isTyping]);

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", color: "text-blue-500" },
    { icon: Github, href: "https://github.com", color: "text-gray-300" },
    { icon: Twitter, href: "https://twitter.com", color: "text-sky-400" },
    { icon: Facebook, href: "https://facebook.com", color: "text-blue-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Profile Picture */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile Picture Container */}
              <div className="relative">
                {/* Animated Background Circle */}
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Profile Picture */}
                <div className="relative bg-accent rounded-full p-8 shadow-2xl">
                  <div className="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden relative">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="text-gray-400 text-lg mb-2">Hello, I'm</div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="text-red-600">App Developer</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="text-white">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="flex items-center text-gray-400 text-lg"
            >
              <MapPin className="w-5 h-5 mr-2 text-accent" />
              <span>Based in Sri Lanka</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              As an undergraduate at{" "}
              <span className="text-accent font-semibold">
                Cardiff Metropolitan University
              </span>
              , I am deeply passionate about technology, IoT development, and
              innovation. I'm always eager to explore fresh ideas and bring them
              to life through connected devices and smart solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="px-8 py-3 bg-accent text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </motion.button>
              <motion.button
                className="px-8 py-3 glass border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-gray-900 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
