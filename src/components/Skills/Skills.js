import React, { Component } from 'react';
import './Skills.css';


export default class Skills extends Component {
  render() {
    return (
      <div className="skills-main-container-parent">
        <div className="skills-content-container">
          <h1>Skills</h1>
          <ul className="skills-list">
            {/* <li><i className="fab fa-node"></i>Node.js</li> */}
            <li>
              <i className="fab fa-js fa-2x skill-icon"></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className="fab fa-react fa-2x skill-icon"></i>
              <p>React</p>
            </li>
            {/*<li><i className="fab fa-react fa-2x skill-icon"></i><p>Redux</p></li>*/}
            <li>
              <i className="devicon-nodejs-plain fa-2x skill-icon"></i>
              <p>Node.js</p>
            </li>
            <li>
              <i className="devicon-express-original fa-2x skill-icon"></i>
              <p>Express</p>
            </li>
            <li>
              <i className="fab fa-html5 fa-2x skill-icon"></i>
              <p>HTML</p>
            </li>
            <li>
              <i className="fab fa-css3-alt fa-2x skill-icon"></i>
              <p>CSS</p>
            </li>
            <li>
              <i className="devicon-postgresql-plain fa-2x skill-icon"></i>
              <p>PostgreSQL</p>
            </li>
            <li>
              <i className="fab fa-git fa-2x skill-icon"></i>
              <p>Git</p>
            </li>
            <li>
              <i className="fab fa-npm fa-2x skill-icon"></i>
              <p>npm</p>
             </li> {/*heroku */}
          </ul>
        </div>
      </div>
    );
  }
}