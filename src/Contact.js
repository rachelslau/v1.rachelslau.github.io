import React, { Component } from 'react';
import './Contact.css';
import EImage from './pics/contact/emaillogo.png';
import GHImage from './pics/contact/githublogo.png';
import LIImage from './pics/contact/linkedinlogo.png';

class Contact extends Component {
  render() {
    return (
      <body id="contact-section" className="contact-background">
        <div className="contact-text">
          thanks for stopping by!
          <a href="mailto:rachellau@berkeley.edu">
            <img src={EImage} width="50px" align="right"/>
          </a>
          <a href="https://linkedin.com/in/rachel-s-lau">
            <img src={LIImage} width="50px" align="right"/>
          </a>
          <a href="https://github.com/rachelslau">
            <img src={GHImage} width="50px" align="right"/>
          </a>
        </div>
      </body>
    );
  }
}

export default Contact;
