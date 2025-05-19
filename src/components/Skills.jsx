import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Cpu, LineChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} className="text-blue-600" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} className="text-purple-600" />,
      skills: ['Figma', 'Responsive Design', 'User Research', 'Prototyping', 'Wireframing']
    },
    {
      title: 'Backend Integration',
      icon: <Database size={24} className="text-green-600" />,
      skills: ['Supabase', 'Firebase', 'REST APIs', 'GraphQL (Basic)', 'Node.js (Basic)']
    },
    {
      title: 'Version Control',
      icon: <Cpu size={24} className="text-yellow-600" />,
      skills: ['Git', 'GitHub', 'Branching Strategies', 'Pull Requests']
    },
    {
      title: 'Project Management',
      icon: <Globe size={24} className="text-red-600" />,
      skills: ['Agile Methodologies', 'Jira', 'Trello', 'Communication', 'Problem Solving']
    },
    {
      title: 'Best Practices',
      icon: <LineChart size={24} className="text-indigo-600" />,
      skills: ['Clean Code', 'Accessibility (WCAG)', 'SEO Optimization', 'Performance Tuning']
    }
  ];
  
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="skill-card bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl border border-border transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-secondary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    className="text-muted-foreground flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + skillIndex * 0.05 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;