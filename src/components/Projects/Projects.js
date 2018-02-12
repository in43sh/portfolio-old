import React, { Component } from 'react';
import './Projects.css';
import pic from '../images/stephan-jola-3332.jpg';
// import { Link } from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-main-container-parent">
        <div className="projects-main-container-child">
          <div className="projects-content-container">
            <h1>Projects</h1>
            <div className="projects-items-container">

              <div className="project-item-container">
                <a href="http://aivazovsky.us/" target="_blank" rel="noopener noreferrer">
                  <div className="projects-item-image-container">
                    <img src={pic} alt="aivazovsky.us" />
                  </div>
                  <div className="projects-item-description">Aizakovsky.us</div>
                </a>
              </div>

              <div className="projects-item-container">
                <a href="http://aivazovsky.us/" target="_blank" rel="noopener noreferrer">
                  <div className="projects-item-image-container">
                    <img src={pic} alt="aivazovsky.us" />
                  </div>
                  <div className="projects-item-description">group project</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}