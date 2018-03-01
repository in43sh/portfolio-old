import React, { Component } from 'react';
import './About.css';
import photo from '../images/photo.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="about-main-container-parent">
        <div className="about-main-container-child">
          <h1>About</h1>
          <div className="about-my-photo-container">
            <img src={ photo } alt="my-profile"/>
          </div>
          <div className="about-my-name">Sergey Sherstobitov</div>
          <div className="about-myself">
            <p>JavaScript developer with strong understanding of back-end.</p>
          </div>
          
          <div>
            <ul className="about-social-links">
              <li>
                <a className="stuff" href="https://www.linkedin.com/in/sergey-sherstobitov/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                
              </li>
              <li>
                <a href="https://github.com/in43sh" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}