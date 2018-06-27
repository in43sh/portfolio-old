import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false
    }
  }

  handleChange(property, event) {
    event.preventDefault();
    this.setState({[property]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({sent: true});
    const { name, email, message } = this.state;
    axios.post('/send-email', {name, email, message})
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="contact-main-container">
        <h1>Contact me</h1>
        <form className="contact-form" onSubmit={ (event) => this.handleSubmit(event) }>
          <div className="contact-outer-container">
            <div className="contact-inner-container">
              <div className="contact-top-content-container">
                <input className="contact-input contact-name" placeholder="name" onChange={ (event) => this.handleChange("name", event)}/>
                <input className="contact-input" placeholder="email" onChange={ (event) => this.handleChange("email", event)}/>
              </div>
              <textarea className="contact-textarea" rows="10" placeholder="message" onChange={ (event) => this.handleChange("message", event)}></textarea>
              <input className="contact-btn" value="Send" type="button"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}