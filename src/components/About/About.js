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
          <div className="about-myself">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
          </div>
          
          <div>
            <ul className="about-social-links">
              <li><i className="fab fa-linkedin"></i></li>
              <li><i className="fab fa-github-square"></i></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}