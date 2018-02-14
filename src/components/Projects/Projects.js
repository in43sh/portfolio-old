import React, { Component } from 'react';
import './Projects.css';
import aivazovsky from '../images/aivazovsky.jpg';
// import group from '../images/group.jpg';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-main-container-parent">
        <div className="projects-main-container-child">
          <h1>Projects</h1>
          <div className="projects-content-container">

            <div className="projects-item-container">
              <div className="projects-item-image-container">
                <img src={aivazovsky} alt="aivazovsky.us" />
              </div>
              <div className="projects-item-description">Art-gallery of Ivan Aizakovsky</div>
              <div className="projects-item-name">
                <a href="http://aivazovsky.us/" target="_blank" rel="noopener noreferrer">Aizakovsky.us</a>
              </div>
            </div>

            <div className="projects-item-container">
              <div className="projects-item-image-container">
                <img src={aivazovsky} alt="aivazovsky.us" />
              </div>
              <div className="projects-item-description">Dogwalking tinder</div>
              <div className="projects-item-name">
                <a href="http://aivazovsky.us/" target="_blank" rel="noopener noreferrer">groupproject.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}