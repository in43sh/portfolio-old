import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      sent: false
    }
  }

  handleChange(property, event) {
    event.preventDefault();
    this.setState({[property]: event.target.value})
  }

  submit(event) {
    event.preventDefault();
    this.setState({sent: true});
    const { name, email, phone, message } = this.state;
    axios.post('/send-email', {name, email, phone, message})
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  render() {
    const { name, email, phone, message } = this.state;
    const isEnabled =
      name.length > 0 && email.length > 0 && phone.length > 0 && message.length > 0;
    return (
      <div className="contact-main-container-parent">
        <h1>Contact me</h1>
        <div className="contact-main-container-child">
          <form>
          <div className="contact-info-container">
            
            <div className="contact-input-container">
              <input placeholder="Your name" onChange={ (event) => this.handleChange("name", event)}/>
            </div>
            <div className="contact-input-container">
              <input placeholder="Your email" onChange={ (event) => this.handleChange("email", event)}/>
            </div> 
            <div className="contact-input-container">
              <input placeholder="Your phone" onChange={ (event) => this.handleChange("phone", event)}/>
            </div> 
          </div>
          <div className="contact-message-container">
            <textarea rows="11" placeholder="Your message" onChange={ (event) => this.handleChange("message", event)}></textarea>
          </div> 
          </form>
        </div>
        <div className="send-message-btn">
          {!this.state.sent ?
            <button disabled={!isEnabled} onClick={(event) => this.submit(event)}>SEND MESSAGE</button>
            : <button>SENT!</button>
          }
          
        </div>
      </div>
    );
  }
}