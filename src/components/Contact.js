import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => (
  <section id="contact" className="bg-light p-5">
    <div className="container">
      <p className="lead">Feel free to reach out to me!</p>
      <ul className="list-unstyled">
        <li className="mb-2"><strong>Phone:</strong> (669) 340-6795</li>
        <li className="mb-2"><strong>Email:</strong> <a href="mailto:shahchayan9@gmail.com">shahchayan9@gmail.com</a></li>
        <li className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chayanshah7/">Chayan Shah</a></li>
        <li className="mb-2"><strong>GitHub:</strong> <a href="https://github.com/shahchayan9">Chayan Shah</a></li>
        <li className="mb-2"><strong>Location:</strong> San Jose, CA</li>
      </ul>
    </div>
  </section>
);

export default Contact;