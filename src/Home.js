import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    // 
    // var slideIndex = 0;
    // carousel();
    //
    // function carousel() {
    //   var i;
    //   var x = document.getElementsByClassName("slides");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";
    //   }
    //   slideIndex++;
    //   if (slideIndex > x.length) {slideIndex = 1}
    //   x[slideIndex-1].style.display = "block";
    //   setTimeout(carousel, 3000);
    // }

    return (
      <body className="home-background">
        <div className="slideshow">
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
        </div>
      </body>
    );
  }
}

export default Home;
