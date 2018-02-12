import React, { Component } from 'react';
import './App.css';

import Top from './Top/Top';
import Skills from './Skills/Skills';
import Porfolio from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navigation">
        <a className="links" href="#top">My portfolio</a>
          <div className="link-wrap">
            <a className="links" href="#skills">Skills</a>
            <a className="links" href="#portfolio">Portfolio</a>
            <a className="links" href="#about">About</a>
            <a className="links" href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top"><Top/></div>
        <div id="skills"><Skills/></div>
        <div id="portfolio"><Porfolio /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact/></div>
      </div>
    );
  }
}

export default App;
