import React from 'react';

const Education = () => (
  <section id="education">
    <h2>Education</h2>
    <div className="education-grid">
      <div className="education-item">
        <h3>Master of Science in Computer Software Engineering</h3>
        <p>San Jose State University, San Jose, CA, USA</p>
        <p>May 2026</p>
        <ul>
          <li>Course Work: Enterprise Distributed Systems, Enterprise Software Platforms, Data Mining, Enterprise Application Development, Software Systems Engineering, Cybersecurity Technology.</li>
        </ul>
      </div>
      <div className="education-item">
        <h3>Bachelor of Technology in Computer Science and Engineering</h3>
        <p>Indian Institute of Technology (ISM), Dhanbad, India</p>
        <p>May 2022</p>
        <p>CGPA: 3.73/4.00</p>
        <ul>
          <li>Course Work: Data Structures and Algorithms, Operating System, Cloud Computing, Database Management Systems, Object Oriented Programming, Artificial Intelligence, Machine Learning, Information Retrieval.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;