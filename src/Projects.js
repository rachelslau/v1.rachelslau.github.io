import React, { Component } from 'react';
import './Projects.css';
import P5 from './pics/projects/24-game.jpg'
import CalHacks from './pics/projects/codebase.jpg'

class Projects extends Component {
  render() {
    return (
      <body id="project-section">
      <div className="project-background">
        <p>
          <div className="project-box">
            <div className="title">projects</div>
            <div className="project-shadow"></div>
            <div className="project-text">
              <div className="project-pictures">
                <a href="https://rachelslau.github.io/p5/Documents/codebase/p5/empty-example/index.html">
                  <img src={P5} alt="p5 project" width="125%" />
                </a>
              </div>
              <div className="project-titles">24 Points Game</div>
              p5.js | Photoshop
              <br /><br />
              designed an online version of the 24 Points arithmetical card game
              <br /><br />
              objective is to use only parentheses, multiplication, division, addition, and subtraction to make the number 24 out of 4 cards
              <br /><br /><br /><br />
              <div className="project-pictures">
                  <img src={CalHacks} alt="codebase logo" width="100%" />
              </div>
              <div className="project-titles">Cal Hacks 6.0 Judging Portal</div>
              Node.js | PostgreSQL
              <br /><br />
              building a full-stack web application to streamline the judging system for collegiate hackathons
              <br /><br />
              spring 2019 codebase mentored project
              <br /><br /><br /><br />
              ...and more to come!
            </div>
          </div>
        </p>
      </div>
      </body>
    );
  }
}

export default Projects;
