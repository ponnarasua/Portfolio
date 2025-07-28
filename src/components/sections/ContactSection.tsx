import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '../ui/card';
import { toast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_API_CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

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

  const socialLinks = [
    { name: 'Phone', icon: Phone, url: 'tel:+917339519364', color: '#25D366' },
    { name: 'Location', icon: MapPin, url: 'https://maps.app.goo.gl/smdntDhe7Gu9yd4F8', color: '#FBBF24' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ponnarasua', color: '#333' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/ponnarasua/', color: '#0077B5' },
    { name: 'Email', icon: Mail, url: 'mailto:ponnarasua410@gmail.com', color: '#EA4335' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/+917339519364', color: '#25D366' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/itz_.ponnarasu_.04/', color: '#E4405F' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
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

        {/* Form & Social Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass glow-hover border-theme-primary/20 hover:border-theme-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    💬
                  </motion.div>
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
                      <label htmlFor="name" className="text-sm font-medium">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your amazing name"
                        required
                        className="glass"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="glass"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="glass resize-none"
                    />
                  </div>

                  <Button
                    id="submit-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white py-4 group relative"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Your Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                        Send Message 🚀
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow me on social media and let's build something amazing together
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 flex flex-col items-center justify-center rounded-xl relative bg-white/5 border border-transparent hover:border-theme-primary transition-all duration-300 group"
                >
                  {/* Glow Background */}
                  <span
                    className="absolute inset-0 rounded-xl bg-[color:var(--tw-shadow-color)] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"
                    style={{ '--tw-shadow-color': social.color } as React.CSSProperties}
                  />

                  {/* Icon */}
                  <social.icon
                    className="w-8 h-8 text-white mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)] group-hover:scale-110"
                    style={{ color: social.color, '--tw-shadow-color': social.color } as React.CSSProperties}
                  />

                  {/* Label */}
                  <span className="text-sm font-medium text-white text-center">
                    {social.name}
                  </span>

                  {/* Border Glow */}
                  <span className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-2 group-hover:ring-theme-primary group-hover:blur-sm transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
