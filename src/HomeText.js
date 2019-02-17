import React, { Component } from 'react';
import './HomeText.css';

class HomeText extends Component {
  render() {
    return (
      <body>
      <div className="header-name">
      <p>
        RACHEL LAU
        <br />
        <div className="header-subtitle">
            <a href="#about-section" className="link-animation">about me</a>
            &nbsp;•&nbsp;
            <a href="#project-section" className="link-animation">projects</a>
            &nbsp;•&nbsp;
            <a href="#coffee-section" className="link-animation">coffee</a>
            &nbsp;•&nbsp;
            <a href="#" className="link-animation">contact</a>
        </div>
      </p>
      </div>
      </body>
    );
  }
}

export default HomeText;
