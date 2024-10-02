import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-dark text-white text-center p-3 mt-4">
    <div className="container">
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        &copy; 2024 My Portfolio
      </motion.p>
    </div>
  </footer>
);

export default Footer;