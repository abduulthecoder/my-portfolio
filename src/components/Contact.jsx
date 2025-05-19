import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    localStorage.setItem('contactFormSubmission', JSON.stringify(formData));

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default", 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-start p-4 bg-card rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground break-all">abdulrahman.saleh@example.com</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-card rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 234 567 8900</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-card rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-muted-foreground">123 Creative Street, Web City, WC 54321</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-card p-8 rounded-lg shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-1 block">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1 block">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="mb-1 block">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Regarding..." 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="bg-background"
                />
              </div>
              <div>
                <Label htmlFor="message" className="mb-1 block">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message..." 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="bg-background"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;