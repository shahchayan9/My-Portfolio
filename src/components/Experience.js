import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Experience = () => (
  <section id="experience" className="bg-light p-5">
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
                Software Engineer | Micro1
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Feb. 2024 – June 2024
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>Evaluated and selected best responses from over 500 AI-generated outputs from Large Language Models (LLMs), enhancing model accuracy by 30% through targeted feedback.</li>
                <li>Conducted qualitative assessments of AI-generated content to ensure high relevance and usability, contributing to the overall improvement of the AI’s performance and user experience.</li>
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
                Associate Software Engineer | Cogoport
              </motion.h3>
              <motion.p
                className="card-text"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                July 2022 – Dec. 2023
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>Developed from scratch an in-house data aggregation and visualization application suite, leading to a 30% improvement in data insights and usability for over 500 employees.</li>
                <li>Implemented API encryption using OAuth 2.0 and designed a secure user token system for backend, overseeing entire development process from initial setup to deployment.</li>
                <li>Utilized Python FastAPI, Celery, Ruby on Rails, PostgreSQL, SQLAlchemy ORM, and ReactJS to engineer scalable backend systems and dynamic frontend applications, supporting 500+ transactions daily.</li>
                <li>Created and optimized query-heavy and visualization APIs in Ruby for an admin-facing Ruby on Rails backend, improving efficiency by 75%.</li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;