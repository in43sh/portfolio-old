import React, { Component } from 'react';
import './Top.css';

export default class Top extends Component {
  render() {
    return (
      <div id="top" className="top-main-container">
        <div className="top-content-container">
          <div className="intro-1">Welcome to my portfolio!</div>
          <div className="intro-2">IT'S NICE TO MEET YOU</div>
          <a className="tell-me-more" href="#skills">
            <button className="tell-me-more-btn">TELL ME MORE</button>
          </a>
        </div>
        <div className="top-empty-container"></div>
      </div>
    );
  }
}