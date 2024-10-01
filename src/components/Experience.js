import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => (
  <section id="experience" className="bg-light p-5">
    <div className="container">
      <h2 className="mb-4">Experience</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Software Engineer | Micro1</h3>
              <p className="card-text">Feb. 2024 – June 2024</p>
              <ul>
                <li>Evaluated and selected best responses from over 500 AI-generated outputs from Large Language Models (LLMs), enhancing model accuracy by 30% through targeted feedback.</li>
                <li>Conducted qualitative assessments of AI-generated content to ensure high relevance and usability, contributing to the overall improvement of the AI’s performance and user experience.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Associate Software Engineer | Cogoport</h3>
              <p className="card-text">July 2022 – Aug. 2023</p>
              <ul>
                <li>Developed from scratch an in-house data aggregation and visualization application suite, leading to a 30% improvement in data insights and usability for over 500 employees.</li>
                <li>Implemented API encryption using OAuth 2.0 and designed a secure user token system for backend, overseeing entire development process from initial setup to deployment.</li>
                <li>Utilized Python FastAPI, Celery, Ruby on Rails, PostgreSQL, SQLAlchemy ORM, and ReactJS to engineer scalable backend systems and dynamic frontend applications, supporting 500+ transactions daily.</li>
                <li>Created and optimized query-heavy and visualization APIs in Ruby for an admin-facing Ruby on Rails backend, improving efficiency by 75%.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Software Development Intern | Rebhu Computing</h3>
              <p className="card-text">May 2021 – July 2021</p>
              <ul>
                <li>Initiated refactoring of legacy code to Node.js 14 and incorporated modern REST APIs.</li>
                <li>Crafted and maintained a Chromium browser extension to enhance user functionality and performance.</li>
                <li>Built the UI for a browser extension with VueJS to deliver a responsive and intuitive user experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;