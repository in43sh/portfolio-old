import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-main-container-parent">
        <h1>Contact me</h1>
        <div className="contact-main-container-child">
          <div className="contact-info-container">     
            <div className="contact-input-container">
              <input placeholder="Your name"/>
            </div>
            <div className="contact-input-container">
              <input placeholder="Your email"/>
            </div> 
            <div className="contact-input-container">
              <input placeholder="Your phone"/>
            </div> 
          </div>
          <div className="contact-message-container">
            <textarea rows="12" placeholder="Your message"></textarea>
          </div>
        </div>

        <div className="send-message-btn">
          <button> SEND MESSAGE</button>
        </div>
      </div>
    );
  }
}