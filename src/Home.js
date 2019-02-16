import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <header>
        <div className="slideshow">
          <div className="header-name">
            <p>
              RACHEL LAU
              <br />
              <div className="header-subtitle">
                <a href="#about-me" className="link-animation">about me</a>
                &nbsp;•&nbsp;
                <a className="link-animation" href="#">projects</a>
                &nbsp;•&nbsp;
                <a className="link-animation" href="#">coffee</a>
              </div>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
