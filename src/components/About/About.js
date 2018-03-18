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
            <p>I am a skilled JavaScript developer with experience in ReactJs and Redux with Webpack/Babel and NodeJs. I am well rounded and have worked in various industries. My background has helped mold me into an excellent developer. Having past experience in Customer Service, Technical Support, and also having worked with managed teams impacts my code on a daily basis. I take pride in writing clean, readable, semantic markup and pixel perfect CSS. I am accustomed to the rigors of fast-paced environments requiring sharp attention to detail, and outstanding communication skills.</p>
            <p>I work hard to keep my skills sharp and love to work with many of the cutting edge technologies such as React, Redux, Sass, and others.</p>
            <p>I am open to all new opportunities and am looking to join a company where I can continue to learn and grow my skills and abilities.</p>

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