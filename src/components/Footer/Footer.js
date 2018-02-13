import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-left-empty"></div>
        <div className="footer-content">2018 Sergey Sherstobitov</div>
        <div className="footer-right-empty"></div>
      </div>
    );
  }
}