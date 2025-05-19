
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with a sleek UI, shopping cart functionality, and secure payment processing.',
      image: 'ecommerce-project',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'A secure and intuitive mobile banking application with real-time transaction tracking and budget management.',
      image: 'banking-app',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work with smooth animations and intuitive navigation.',
      image: 'portfolio-website',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management system with drag-and-drop functionality, team collaboration, and analytics.',
      image: 'task-dashboard',
      category: 'web',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
      image: 'fitness-app',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'TensorFlow'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'An AI-powered tool that generates high-quality content for blogs, social media, and marketing materials.',
      image: 'ai-generator',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'React'],
      link: '#',
      github: '#'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise in development and design.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {['all', 'web', 'mobile', 'ai'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`capitalize ${activeFilter === filter ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''}`}
            >
              {filter === 'ai' ? 'AI' : filter}
            </Button>
          ))}
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="project-card bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-56">
                <img  alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a href={project.link} className="text-white hover:text-blue-300 transition-colors" aria-label="View live project">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.github} className="text-white hover:text-blue-300 transition-colors" aria-label="View GitHub repository">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View All Projects <ChevronRight size={16} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
