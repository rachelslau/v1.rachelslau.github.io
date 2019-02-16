import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <body>
      <div class="boxed">
        <p>
          <font size="+2">
          about me
          </font>
          <br />
          <br />
          Hey you! I hope you’re having a great day today.
          <br />
          <br />
          I’m Rachel, a sophomore studying Data Science at UC Berkeley. In addition to dedicating countless hours debugging my spelling errors in projects and binge watching Friends on 1.3x speed, I enjoy dancing, thrift shopping, and bullet journaling.
          <br />
          <br />
          2019 New Year Resolutions:
          <ul>
            <li>try to meditate for 60 minutes each week</li>
            <li>graduate from ‘flegetarian’ to full vegetarian</li>
            <li>write down one thing that made me happy every day</li>
            <li>reduce my phone screen time to &lt;2 hours a day</li>
          </ul>
        </p>
      </div>
      </body>
    );
  }
}

export default About;
