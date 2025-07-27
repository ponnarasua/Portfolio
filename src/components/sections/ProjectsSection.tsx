import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  web: string;
  link: string;
  featured: boolean;
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_PROJECT)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-theme-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass hover:scale-105 transition-all duration-300 glow-hover border-theme-primary/20">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <div className="w-full h-48 bg-theme-gradient overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="glow-hover"
                        onClick={() => window.open(project.web, '_blank')}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="glow-hover"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-theme-primary transition-colors">
                    {project.title}
                    {project.featured && (
                      <span className="ml-2 text-xs bg-theme-primary text-white px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-theme-primary/10 text-theme-primary rounded-full border border-theme-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-theme-primary hover:bg-theme-primary/90 text-white flex-1"
                      onClick={() => window.open(project.web, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
