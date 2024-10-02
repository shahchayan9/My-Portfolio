import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="bg-light p-5">
    <div className="container">
      <motion.h2
        className="mb-4 custom-heading"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.h2>
      <motion.p
        className="lead"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Feel free to reach out to me!
      </motion.p>
      <motion.ul
        className="list-unstyled"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li className="mb-2"><strong>Phone:</strong> (669) 340-6795</li>
        <li className="mb-2"><strong>Email:</strong> <a href="mailto:shahchayan9@gmail.com">shahchayan9@gmail.com</a></li>
        <li className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chayanshah7/">Chayan Shah</a></li>
        <li className="mb-2"><strong>GitHub:</strong> <a href="https://github.com/shahchayan9">Chayan Shah</a></li>
        <li className="mb-2"><strong>Location:</strong> San Jose, CA</li>
      </motion.ul>
    </div>
  </section>
);

export default Contact;