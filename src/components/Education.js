import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Education = () => (
  <section id="education" className="bg-light p-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 custom-card">
            <div className="card-body">
              <motion.h3
                className="card-title"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Master of Science in Computer Software Engineering
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                San Jose State University, San Jose, CA, USA
              </motion.p>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                May 2026
              </motion.p>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                CGPA: 4.00/4.00
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <li>Course Work: Enterprise Distributed Systems, Enterprise Software Platforms, Data Mining, Enterprise Application Development, Software Systems Engineering, Cybersecurity Technology.</li>
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 custom-card">
            <div className="card-body">
              <motion.h3
                className="card-title"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Bachelor of Technology in Computer Science and Engineering
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Indian Institute of Technology (ISM), Dhanbad, India
              </motion.p>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                May 2022
              </motion.p>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                CGPA: 3.73/4.00
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <li>Course Work: Data Structures and Algorithms, Operating System, Cloud Computing, Database Management Systems, Object Oriented Programming, Artificial Intelligence, Machine Learning, Information Retrieval.</li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;