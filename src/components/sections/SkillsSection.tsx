import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface Category {
  id: string;
  name: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://68849a5b745306380a38c43a.mockapi.io/Skills')
      .then((res) => res.json())
      .then((data) => {
        setSkillsData(data);
        if (data.length > 0) {
          setActiveCategory(data[0].id);
        }
      })
      .catch((err) => console.error('Error fetching skills:', err));
  }, []);

  if (!skillsData.length || !activeCategory) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        Loading Skills...
      </div>
    );
  }

  const activeSkills =
    skillsData.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Category Tabs - NO ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillsData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 glass glow-hover ${
                activeCategory === category.id
                  ? 'bg-theme-primary text-white border-theme-primary'
                  : 'text-foreground hover:text-theme-primary border-theme-primary/20'
              }`}
            >
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
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass rounded-lg p-6 hover:scale-105 transition-transform glow-hover"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
                  }}
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Message */}
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
              Technology is constantly evolving, and so am I. I'm always exploring new frameworks,
              tools, and best practices to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
