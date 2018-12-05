import React, { Component } from 'react';
import './Projects.css';
import woofwalks from '../images/woofwalks.png';
import nearballard from '../images/nearballard.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-main-container-parent">
        <div className="projects-main-container-child">
          <h1>Projects</h1>
          <div className="projects-content-container">
            {/*
            <div className="projects-item-container">
              <div className="projects-item-image-container">
                <img src={aivazovsky} alt="aivazovsky.us" />
              </div>
              <div className="projects-item-description">Art-gallery of Ivan Aizakovsky</div>
              <div className="projects-item-name">
                <a href="http://aivazovsky.us/" target="_blank" rel="noopener noreferrer">Aizakovsky.us</a>
              </div>
            </div>
            */}
            <div className="projects-item-container">
              <div className="projects-item-image-container">
                <img src={woofwalks} alt="woofwalks.us" />
              </div>
              <div className="projects-item-description">Dogwalking app</div>
              <div className="projects-item-name">
                <a href="https://build-48tghetxf.now.sh/#/" target="_blank" rel="noopener noreferrer">build-48tghetxf.now.sh</a>
              </div>
              {/* <div className="btn-modal" onClick="">See more</div>
              <div>

              </div> */}
            </div>
            <div className="projects-item-container">
              <div className="projects-item-image-container">
                <img src={nearballard} alt="woofwalks.us" />
              </div>
              <div className="projects-item-description">N.E.A.R. Ballard</div>
              <div className="projects-item-name">
                <a href="http://nearballard.us/" target="_blank" rel="noopener noreferrer">nearballard.us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}