import React from 'react';

const Projects = () => (
  <section id="projects">
    <div className="project-grid">
      <div className="project-item">
        <h3>Binary Star Visualization</h3>
        <p>Mar 2021 - Present</p>
        <ul>
          <li>Led a team of 4 and won a Bronze medal in Inter IIT Tech Meet 9.0.</li>
          <li>Developed an application to visualize high-mass and low-mass X-ray binary star positions in a 3-D galactic sphere.</li>
          <li>Processed star data and integrated dynamic visualizations into an interactive table with search, sort, and filter features.</li>
          <li>Leveraged ReactJS and React-Plotly to build interactive and data-driven user interfaces.</li>
        </ul>
        <p><strong>Skills:</strong> React.js, Leadership, Teamwork</p>
        <a href="https://github.com/shahchayan9/isro-web-visualization-1" target="_blank" rel="noopener noreferrer">GitHub Link</a>
      </div>
      <div className="project-item">
        <h3>Tourist Guide</h3>
        <p>Oct 2023</p>
        <ul>
          <li>Engineered a platform for listing tourist attractions, overseeing the project from concept to completion.</li>
          <li>Empowered users to log in, add attractions to a wishlist, comment on, and favourite tourist attractions.</li>
          <li>Constructed applications leveraging ReactJS and Ruby on Rails to generate dynamic, scalable solutions.</li>
        </ul>
        <p><strong>Skills:</strong> Ruby on Rails, React.js, Firebase</p>
      </div>
      <div className="project-item">
        <h3>Weather App</h3>
        <p>May 2021</p>
        <ul>
          <li>Created a Single Page Weather Application.</li>
          <li>Integrated the Open Weather Map API using the Quasar Framework and VueJS to retrieve and display current weather data.</li>
        </ul>
        <p><strong>Skills:</strong> Vue.js, Quasar Framework</p>
        <a href="https://github.com/shahchayan9/Weather-Application-Using-Quasar-Framework" target="_blank" rel="noopener noreferrer">GitHub Link</a>
      </div>
      <div className="project-item">
        <h3>College Website</h3>
        <p>GitHub Link</p>
        <ul>
          <li>Led a team of 5 for a Website design competition.</li>
          <li>Co-developed a responsive website, to be deployed as the Official website of IIT(ISM) Dhanbad.</li>
          <li>Tech Stack Used - HTML, CSS, Javascript and Bootstrap.</li>
        </ul>
        <p><strong>Skills:</strong> HTML5, CSS, JavaScript, Bootstrap</p>
        <a href="https://github.com/shahchayan9/IIT-ISM-WEBSITE" target="_blank" rel="noopener noreferrer">GitHub Link</a>
      </div>
    </div>
  </section>
);

export default Projects;