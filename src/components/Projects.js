import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Projects = () => (
  <section id="projects" className="bg-light p-5">
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
                Binary Star Visualization
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Feb. 2021 - March 2021
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>Led a team of 4 and won a Bronze medal in Inter IIT Tech Meet 9.0.</li>
                <li>Developed an application to visualize high-mass and low-mass X-ray binary star positions in a 3-D galactic sphere.</li>
                <li>Processed star data and integrated dynamic visualizations into an interactive table with search, sort, and filter features.</li>
                <li>Leveraged ReactJS and React-Plotly to build interactive and data-driven user interfaces.</li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <strong>Skills:</strong> React.js, Leadership, Teamwork
              </motion.p>
              <motion.a
                href="https://github.com/shahchayan9/isro-web-visualization-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary custom-btn"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                GitHub Link
              </motion.a>
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
                Tourist Guide
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Sept. 2023 - Oct. 2023
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>Engineered a platform for listing tourist attractions, overseeing the project from concept to completion.</li>
                <li>Empowered users to log in, add attractions to a wishlist, comment on, and favourite tourist attractions.</li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <strong>Skills:</strong> ReactJS, Ruby on Rails
              </motion.p>
              <motion.a
                href="https://github.com/shahchayan9/tourist-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary custom-btn"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                GitHub Link
              </motion.a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 custom-card">
            <div className="card-body">
              <motion.h3
                className="card-title"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Weather App
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                May 2021 - June 2021
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>Developed a weather forecasting application using React.js and OpenWeatherMap API.</li>
                <li>Implemented features to display current weather, 5-day forecast, and weather conditions for different cities.</li>
                <li>Ensured responsive design and cross-browser compatibility.</li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <strong>Skills:</strong> React.js, API Integration, Responsive Design
              </motion.p>
              <motion.a
                href="https://github.com/shahchayan9/IIT-ISM-WEBSITE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary custom-btn"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                GitHub Link
              </motion.a>
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
                College Website
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Nov. 2018 - Dec. 2018
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>Led a team of 5 for Website Designing Competition.</li>
                <li>Co-developed a responsive website, to be deployed as the official website of IIT(ISM) Dhanbad.</li>
                <li>Tech Stack Used - HTML, CSS, JavaScript, Bootstrap.</li>
              </motion.ul>
              <motion.a
                href="https://github.com/shahchayan9/IIT-ISM-WEBSITE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary custom-btn"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                GitHub Link
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;