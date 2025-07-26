import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'tools', name: 'Tools & Others', icon: '🛠️' },
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Next.js', level: 85, icon: '🔺' },
      { name: 'Vue.js', level: 80, icon: '💚' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Framer Motion', level: 85, icon: '🎭' },
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Express.js', level: 90, icon: '🚀' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'Redis', level: 75, icon: '📊' },
    ],
    tools: [
      { name: 'Git', level: 95, icon: '📁' },
      { name: 'Docker', level: 80, icon: '🐳' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Firebase', level: 85, icon: '🔥' },
      { name: 'Figma', level: 80, icon: '🎨' },
      { name: 'Jest', level: 85, icon: '🧪' },
    ],
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-theme-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 glass glow-hover ${
                activeCategory === category.id
                  ? 'bg-theme-primary text-white border-theme-primary'
                  : 'text-foreground hover:text-theme-primary border-theme-primary/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-lg p-6 hover:scale-105 transition-transform glow-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <span className="text-theme-primary font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-theme-gradient rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technology is constantly evolving, and so am I. I'm always exploring new 
              frameworks, tools, and best practices to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;