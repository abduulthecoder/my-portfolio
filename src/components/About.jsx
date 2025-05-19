import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img alt="Abdulrahman Saleh working on a project" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1607615896122-6c919f897e55" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional websites and applications. I combine technical expertise with an eye for design to deliver exceptional digital experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              My approach focuses on clean code, intuitive user interfaces, and performance optimization. I believe in creating solutions that not only look great but also provide real value to users and businesses.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Education</h4>
                  <p className="text-muted-foreground">Bachelor's in Computer Science, University of Technology</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Experience</h4>
                  <p className="text-muted-foreground">5+ years in web development and design</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Achievements</h4>
                  <p className="text-muted-foreground">Multiple awards for design excellence and innovation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;