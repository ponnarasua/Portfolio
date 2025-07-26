import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-theme-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-theme-gradient rounded-full blur-xl opacity-30 animate-glow-pulse" />
              <div className="relative w-full h-full bg-gray-300 rounded-full overflow-hidden glass border-4 border-theme-primary">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                  <span className="text-6xl text-gray-600">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Creating Digital Excellence
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                in building modern web applications. I specialize in React, Node.js, 
                and cloud technologies, with a keen eye for user experience and 
                performance optimization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Code, title: 'Clean Code', desc: 'Maintainable & Scalable' },
                { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful Interfaces' },
                { icon: Rocket, title: 'Performance', desc: 'Optimized Solutions' },
                { icon: Users, title: 'Collaboration', desc: 'Team Player' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-4 hover:scale-105 transition-transform glow-hover"
                >
                  <item.icon className="h-8 w-8 text-theme-primary mb-2" />
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;