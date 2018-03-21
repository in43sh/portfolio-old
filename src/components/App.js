import React, { Component } from 'react';
import './App.css';
import logo from './images/person.png';

import Scroll from 'react-scroll-to-element';

import Top from './Top/Top';
import Skills from './Skills/Skills';
import Porfolio from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navigation">
          <div className="logo-container">
            <Scroll className="links" type="id" element="_top">
              <img className="logo" src={logo} alt="my logo"/>
            </Scroll>
          </div>

          <div className="link-wrap">
            <Scroll className="links" type="id" element="_about">About</Scroll>
            <Scroll className="links" type="id" element="_skills">Skills</Scroll>
            <Scroll className="links" type="id" element="_portfolio">Portfolio</Scroll>
            <Scroll className="links" type="id" element="_contact">Contact</Scroll>
            <div className="empty-container-25px"></div>
          </div>
        </nav>

        <div id="_top"><Top /></div>
        <div id="_about"><About /></div>
        <div id="_skills"><Skills /></div>
        <div id="_portfolio"><Porfolio /></div>
        <div id="_contact"><Contact /></div>
        <Footer />
      </div>
    );
  }
}

export default App;