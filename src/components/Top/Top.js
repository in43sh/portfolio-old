import React, { Component } from 'react';
import './Top.css';

import Scroll from 'react-scroll-to-element';

export default class Top extends Component {
  render() {
    return (
      <div id="top" className="top-main-container">
        <div className="top-content-container">
          <div className="intro-1">Welcome to my portfolio!</div>
          <div className="intro-2">IT'S NICE TO MEET YOU</div>

          <Scroll className="tell-me-more" type="id" element="_about">
            <button className="tell-me-more-btn">TELL ME MORE</button>
          </Scroll>
          
        </div>
        <div className="top-empty-container"></div>
      </div>
    );
  }
}