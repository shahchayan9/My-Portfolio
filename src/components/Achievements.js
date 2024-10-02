import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Achievements = () => (
  <section id="achievements" className="bg-light p-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">Google Kickstart 2022 Round A</h5>
              <p className="card-text">Achieved Global Rank 538.</p>
              <a href="https://drive.google.com/file/d/1DYbJj4owVXjI06POVc6_9czIFEWRg1r_/view" target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-btn">Certificate Link</a>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">Google Hash Code 2020</h5>
              <p className="card-text">Achieved All India Rank 214 and Global Rank 1840 (Team Name: Innovators_958).</p>
              <a href="https://drive.google.com/file/d/14-ewuOPXpVYHPNimd_bPO4kbH9zN3l4B/view" target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-btn">Certificate Link</a>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">Inter IIT Tech Meet 9.0</h5>
              <p className="card-text">Won Bronze Medal.</p>
              <a href="https://drive.google.com/file/d/1g3l5A2w3SiZjb0vMsDkuyr-CBXbphgym/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-btn">Certificate Link</a>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">Concetto, IIT(ISM) Dhanbad</h5>
              <p className="card-text">Secured 1st Position in Obstacle Course Racing (OCR).</p>
              <a href="https://drive.google.com/file/d/16kzotj6vYT9dR0b0lItJIj-C2qhamRax/view" target="_blank" rel="noopener noreferrer" className="btn btn-primary custom-btn">Certificate Link</a>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">Codeforces Round #657 (Div. 2)</h5>
              <p className="card-text">Achieved Rank 1726 out of 20,326 coders.</p>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">Codeforces Round #702 (Div. 3)</h5>
              <p className="card-text">Achieved Rank 1174 out of 23,355 coders.</p>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 mb-4">
          <motion.div
            className="card h-100 custom-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body">
              <h5 className="card-title">JEE Advanced 2018</h5>
              <p className="card-text">Achieved All India Rank 2636 out of 200,000 aspiring students.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;