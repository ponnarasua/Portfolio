import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Globe from '../Globe';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success animation
    const submitButton = document.querySelector('#submit-button');
    submitButton?.classList.add('animate-pulse');
    
    setTimeout(() => {
      alert('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      submitButton?.classList.remove('animate-pulse');
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      link: 'mailto:alex@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: '#333',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077b5',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com',
      color: '#e4405f',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/15551234567',
      color: '#25d366',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-theme-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Card className="glass glow-hover border-theme-primary/20 hover:border-theme-primary/40 transition-all duration-300">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      💬
                    </motion.div>
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div 
                    className="grid md:grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="space-y-2 relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium text-foreground transition-colors group-hover:text-theme-primary">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your amazing name"
                        required
                        className="glass border-theme-primary/20 focus:border-theme-primary hover:border-theme-primary/40 transition-all duration-300 focus:scale-105"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2 relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium text-foreground transition-colors group-hover:text-theme-primary">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@awesome-email.com"
                        required
                        className="glass border-theme-primary/20 focus:border-theme-primary hover:border-theme-primary/40 transition-all duration-300 focus:scale-105"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="space-y-2 relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium text-foreground transition-colors group-hover:text-theme-primary">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What amazing project are we discussing?"
                      required
                      className="glass border-theme-primary/20 focus:border-theme-primary hover:border-theme-primary/40 transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2 relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium text-foreground transition-colors group-hover:text-theme-primary">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your brilliant ideas, project requirements, or just say hello! I'm excited to hear from you... ✨"
                      rows={6}
                      required
                      className="glass border-theme-primary/20 focus:border-theme-primary hover:border-theme-primary/40 resize-none transition-all duration-300 focus:scale-[1.02]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      id="submit-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white py-4 glow-hover group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending Your Message...
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                          Send Message 🚀
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Globe and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Interactive 3D Globe */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-80 glass rounded-xl overflow-hidden glow-hover group-hover:shadow-2xl group-hover:shadow-theme-primary/20 transition-all duration-500">
                <Globe />
              </div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-center space-y-2 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-theme-primary/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-theme-primary font-bold text-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    🌍 Available Worldwide
                  </motion.div>
                  <div className="text-muted-foreground text-sm">Remote Collaboration Ready</div>
                  <motion.div
                    className="text-xs text-theme-primary/70"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Let's work together!
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Interactive Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={info.link}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 glow-hover group border border-transparent hover:border-theme-primary/30"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-theme-primary/10 rounded-lg flex items-center justify-center group-hover:bg-theme-primary/20 transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <info.icon className="h-6 w-6 text-theme-primary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.div 
                        className="font-medium text-foreground group-hover:text-theme-primary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {info.label}
                      </motion.div>
                      <motion.div 
                        className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {info.value}
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-theme-primary"
                    >
                      →
                    </motion.div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="space-y-4">
              <motion.h3 
                className="text-xl font-bold text-foreground flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  🤝
                </motion.span>
                Connect With Me
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(var(--theme-primary-rgb), 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 glass rounded-lg glow-hover group relative overflow-hidden border border-transparent hover:border-theme-primary/30 transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-theme-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative z-10"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        backgroundColor: "rgba(var(--theme-primary-rgb), 0.1)"
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <social.icon className="h-6 w-6 text-theme-primary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <motion.span 
                      className="font-medium text-foreground group-hover:text-theme-primary transition-colors duration-300 relative z-10"
                      whileHover={{ x: 2 }}
                    >
                      {social.label}
                    </motion.span>
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                    >
                      <svg className="w-4 h-4 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;