import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-main-container-parent">
        <div className="skills-main-container-child">
          <div className="skills-content-container">
            <h1>Skills</h1>
            <ul className="skills-list">
              <li><i className="fab fa-js"></i>JavaScript</li>
              <li><i className="fab fa-react"></i>React</li>
              <li>Redux</li>
              <li><i className="devicon-nodejs-plain"></i> Node.js</li>
              {/* <li><i className="fab fa-node"></i>Node.js</li> */}
              <li><i className="devicon-express-original"></i> Express</li>
              <li><i className="fab fa-html5"></i>HTML</li>
              <li><i className="fab fa-css3-alt"></i>CSS</li>
              <li><i className="devicon-postgresql-plain">PostgreSQL</i></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}