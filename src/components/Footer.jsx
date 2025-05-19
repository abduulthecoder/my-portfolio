import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Abdulrahman Saleh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 text-center md:text-left mt-1">
              Designed & Developed with <span className="text-red-500">&hearts;</span> by Abdulrahman Saleh.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter Profile">
              <Twitter size={20} />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <span className="text-xs text-muted-foreground/50">
            This portfolio is a demonstration of frontend skills. Contact functionality is simulated using local storage.
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;