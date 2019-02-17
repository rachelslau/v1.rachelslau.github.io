import React, { Component } from 'react';
import './About.css';
import ProfilePicture from "./pics/about/profpic.jpg";

class About extends Component {
  render() {
    return (
      <body id="about-section">
      <div className="about-background">
      <div className="boxed">
        <p>
          <div className="profile-box">
            <img src={ProfilePicture} alt="profile picture" width="100%"></img>
            </div>
          <div className="about-title">about me</div>
          <div className="title-shadow"></div>
          <br /><br />
          Hey you! I hope you’re having a great day today.
          <br /><br />
          I’m Rachel, a second year studying Data Science at UC Berkeley. My career interests currently include data analysis, UI/UX design, and software development.
          <br /><br />
          In addition to dedicating countless hours debugging my spelling errors and listening to advice podcasts, I enjoy thrift shopping, bullet journaling, and binge watching Friends (at 1.3x speed).
          <br /><br /><br /><br /><br /><br /><br />
          2019 New Year Resolutions:
          <ul>
            <li>try to meditate for 60 minutes each week</li>
            <li>graduate from ‘flexitarian’ to full vegetarian</li>
            <li>write down one thing that made me happy every day</li>
            <li>reduce my phone screen time to &lt;2 hours a day</li>
          </ul>
        </p>
      </div></div>
      </body>
    );
  }
}

export default About;
