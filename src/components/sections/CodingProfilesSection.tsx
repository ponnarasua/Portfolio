import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CodingProfilesSection: React.FC = () => {
  const profiles = [
    {
      name: 'LeetCode',
      username: '@alexdev',
      problems: '500+',
      rating: '1850',
      icon: '💻',
      color: '#ffa116',
      url: 'https://leetcode.com',
      stats: 'Problems Solved',
    },
    {
      name: 'Codeforces',
      username: '@alexcoder',
      problems: '300+',
      rating: 'Expert',
      icon: '🏆',
      color: '#1f8dd6',
      url: 'https://codeforces.com',
      stats: 'Contest Rating',
    },
    {
      name: 'HackerRank',
      username: '@alex_dev',
      problems: '200+',
      rating: '5★',
      icon: '⭐',
      color: '#00b4a6',
      url: 'https://hackerrank.com',
      stats: 'Star Rating',
    },
    {
      name: 'GeeksforGeeks',
      username: '@alexgeek',
      problems: '150+',
      rating: '2000+',
      icon: '🧠',
      color: '#2f8d46',
      url: 'https://geeksforgeeks.org',
      stats: 'Practice Score',
    },
  ];

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
            Coding <span className="text-theme-primary">Profiles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My competitive programming and problem-solving journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => window.open(profile.url, '_blank')}
            >
              <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 glow-hover h-full">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="text-6xl mx-auto w-20 h-20 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: `${profile.color}20` }}
                  >
                    {profile.icon}
                  </motion.div>

                  {/* Platform Name */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-theme-primary transition-colors">
                    {profile.name}
                  </h3>

                  {/* Username */}
                  <p className="text-sm text-muted-foreground font-mono">
                    {profile.username}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{profile.stats}:</span>
                      <span className="font-semibold text-theme-primary">{profile.problems}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Rating:</span>
                      <span className="font-semibold text-foreground">{profile.rating}</span>
                    </div>
                  </div>

                  {/* Visit Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pt-4 border-t border-theme-primary/20"
                  >
                    <div className="flex items-center justify-center text-theme-primary group-hover:text-theme-primary-dark transition-colors">
                      <span className="text-sm font-medium mr-2">Visit Profile</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: profile.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Problem Solving Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-theme-primary">1150+</div>
                <div className="text-muted-foreground">Total Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-theme-primary">50+</div>
                <div className="text-muted-foreground">Contests Participated</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-theme-primary">Top 15%</div>
                <div className="text-muted-foreground">Global Ranking</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;