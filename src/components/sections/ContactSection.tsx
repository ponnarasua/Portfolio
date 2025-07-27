import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { toast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  try {
    const response = await fetch('https://66f3a95477b5e88970964664.mockapi.io/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const submitButton = document.querySelector('#submit-button');
    submitButton?.classList.add('animate-pulse');

    setTimeout(() => {
      toast({
        title: 'Message Sent ✅',
        description: 'Thanks for reaching out! I’ll get back to you soon.',
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      submitButton?.classList.remove('animate-pulse');
    }, 500);

  } catch (error) {
    console.error('Submission error:', error);
    toast({
      variant: 'destructive',
      title: 'Message Failed ❌',
      description: 'Something went wrong. Please try again.',
    });
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ponnarasua410@gmail.com',
      link: 'mailto:ponnarasua410@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 73395 19364',
      link: 'tel:+917339519364',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      link: '#',
    },
  ];

  const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/ponnarasua',
    color: '#333',
    hoverColor: '#6B7280'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/ponnarasua/',
    color: '#0077B5',
    hoverColor: '#0A66C2'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:ponnarasua410@gmail.com',
    color: '#EA4335',
    hoverColor: '#D93025'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/+917339519364',
    color: '#25D366',
    hoverColor: '#128C7E'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/itz_.ponnarasu_.04/',
    color: '#E4405F',
    hoverColor: '#C13584'
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, inquiries, or just a friendly chat!
            </p>
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
            <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's{' '} Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow me on social media and let's build something amazing together
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.1
                }}
                whileTap={{ scale: 0.95 }}
                className="glass-card p-6 rounded-xl group relative overflow-hidden flex flex-col items-center justify-center aspect-square"
              >
                {/* Background glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl blur-xl"
                  style={{ backgroundColor: social.color }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon 
                    className="w-8 h-8 mb-3 transition-colors duration-300 group-hover:text-primary"
                    style={{ color: social.color }}
                  />
                </motion.div>

                {/* Name */}
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {social.name}
                </span>

                {/* Animated border */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl border-2 border-primary"
                />

                {/* Pulse effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity
                  }}
                  className="absolute inset-0 rounded-xl border border-primary"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Additional Connect Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm always excited to connect with fellow developers, potential clients, and 
            anyone passionate about technology. Don't hesitate to reach out!
          </p>
        </motion.div>
      </div>
    </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;