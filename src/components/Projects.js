import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => (
  <section id="projects" className="bg-light p-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Binary Star Visualization</h3>
              <p className="card-text">Feb 2021 - Mar 2021</p>
              <ul>
                <li>Led a team of 4 and won a Bronze medal in Inter IIT Tech Meet 9.0.</li>
                <li>Developed an application to visualize high-mass and low-mass X-ray binary star positions in a 3-D galactic sphere.</li>
                <li>Processed star data and integrated dynamic visualizations into an interactive table with search, sort, and filter features.</li>
                <li>Leveraged ReactJS and React-Plotly to build interactive and data-driven user interfaces.</li>
              </ul>
              <p><strong>Skills:</strong> React.js, Leadership, Teamwork</p>
              <a href="https://github.com/shahchayan9/isro-web-visualization-1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Tourist Guide</h3>
              <p className="card-text">Sept. 2023 - Oct. 2023</p>
              <ul>
                <li>Engineered a platform for listing tourist attractions, overseeing the project from concept to completion.</li>
                <li>Empowered users to log in, add attractions to a wishlist, comment on, and favourite tourist attractions.</li>
              </ul>
              <p><strong>Skills:</strong> ReactJS, Ruby on Rails</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Weather App</h3>
              <p className="card-text">May 2021 - Jun 2021</p>
              <ul>
                <li>Developed a weather forecasting application using React.js and OpenWeatherMap API.</li>
                <li>Implemented features to display current weather, 5-day forecast, and weather conditions for different cities.</li>
                <li>Ensured responsive design and cross-browser compatibility.</li>
              </ul>
              <p><strong>Skills:</strong> React.js, API Integration, Responsive Design</p>
              <a href="https://github.com/shahchayan9/IIT-ISM-WEBSITE" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">College Website</h3>
              <p className="card-text">Dec 2018</p>
              <ul>
                <li>Led a team of 5 for Website Designing Competition.</li>
                <li>Co-developed a responsive website, to be deployed as the official website of IIT(ISM) Dhanbad.</li>
                <li>Tech Stack Used - HTML, CSS, JavaScript, Bootstrap.</li>
              </ul>
              <a href="https://github.com/shahchayan9/IIT-ISM-WEBSITE" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;