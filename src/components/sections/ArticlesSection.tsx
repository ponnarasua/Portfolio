import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const ArticlesSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      description: 'Learn best practices for structuring large React applications with TypeScript, including component architecture, state management, and testing strategies.',
      category: 'React',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      thumbnail: '⚛️',
      url: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Better Performance',
      description: 'Explore advanced CSS features like container queries, custom properties, and modern layout techniques that improve both performance and maintainability.',
      category: 'CSS',
      readTime: '6 min read',
      publishDate: '2024-01-10',
      thumbnail: '🎨',
      url: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Node.js Microservices Architecture Guide',
      description: 'A comprehensive guide to building microservices with Node.js, covering service communication, data management, and deployment strategies.',
      category: 'Backend',
      readTime: '12 min read',
      publishDate: '2024-01-05',
      thumbnail: '🟢',
      url: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Web Performance Optimization Checklist',
      description: 'Essential techniques for improving web performance, from image optimization to code splitting and caching strategies.',
      category: 'Performance',
      readTime: '10 min read',
      publishDate: '2023-12-28',
      thumbnail: '⚡',
      url: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Getting Started with Three.js and React',
      description: 'Create stunning 3D web experiences by integrating Three.js with React applications, including basic setup and common patterns.',
      category: '3D',
      readTime: '15 min read',
      publishDate: '2023-12-20',
      thumbnail: '🎮',
      url: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Advanced Git Workflows for Team Collaboration',
      description: 'Master Git workflows for effective team collaboration, including branching strategies, merge vs rebase, and conflict resolution.',
      category: 'DevOps',
      readTime: '7 min read',
      publishDate: '2023-12-15',
      thumbnail: '📁',
      url: '#',
      featured: false,
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-theme-primary">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and tutorials on web development, programming, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className="h-full glass hover:scale-105 transition-all duration-300 glow-hover border-theme-primary/20 group-hover:border-theme-primary/40">
                <CardHeader>
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <div className="w-full h-40 bg-theme-gradient flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                      {article.thumbnail}
                    </div>
                    {article.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-theme-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-theme-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white group/btn"
                    onClick={() => window.open(article.url, '_blank')}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white px-8 py-4 glow-hover group"
          >
            <span>View All Articles</span>
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;