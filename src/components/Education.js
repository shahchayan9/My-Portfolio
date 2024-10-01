import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => (
  <section id="education" className="bg-light p-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Master of Science in Computer Software Engineering</h3>
              <p className="card-text">San Jose State University, San Jose, CA, USA</p>
              <p className="card-text">May 2026</p>
              <ul>
                <li>Course Work: Enterprise Distributed Systems, Enterprise Software Platforms, Data Mining, Enterprise Application Development, Software Systems Engineering, Cybersecurity Technology.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="card-text">Indian Institute of Technology (ISM), Dhanbad, India</p>
              <p className="card-text">May 2022</p>
              <p className="card-text">CGPA: 3.73/4.00</p>
              <ul>
                <li>Course Work: Data Structures and Algorithms, Operating System, Cloud Computing, Database Management Systems, Object Oriented Programming, Artificial Intelligence, Machine Learning, Information Retrieval.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;