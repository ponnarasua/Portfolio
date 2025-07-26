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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
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
          >
            <Card className="glass glow-hover border-theme-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="glass border-theme-primary/20 focus:border-theme-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="glass border-theme-primary/20 focus:border-theme-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass border-theme-primary/20 focus:border-theme-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="glass border-theme-primary/20 focus:border-theme-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white py-3 glow-hover group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
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
            {/* 3D Globe */}
            <div className="relative">
              <div className="w-full h-80 glass rounded-xl overflow-hidden glow-hover">
                <Globe />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center space-y-2">
                  <div className="text-theme-primary font-bold text-lg">Available Worldwide</div>
                  <div className="text-muted-foreground">Remote Collaboration</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={info.link}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all glow-hover group"
                  >
                    <div className="w-12 h-12 bg-theme-primary/10 rounded-lg flex items-center justify-center group-hover:bg-theme-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-theme-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-4 glass rounded-lg glow-hover group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="h-6 w-6 text-theme-primary" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-theme-primary transition-colors">
                      {social.label}
                    </span>
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