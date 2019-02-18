import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import './Home.css';
import Backyard from './pics/slideshow-pictures/backyardsun.JPG';
import BlueBottle from './pics/slideshow-pictures/bluebottle.jpg';
import ChanningSunrise from './pics/slideshow-pictures/channingsunrise.JPG';
import ChanningSunset from './pics/slideshow-pictures/channingsunset.jpg';
import FallUnit2 from './pics/slideshow-pictures/fallunit2.JPG';
import GadaniWall from './pics/slideshow-pictures/gadaniwall.jpg';
import GreatWall from './pics/slideshow-pictures/greatwall.JPG';
import HomeCafe from './pics/slideshow-pictures/homecafe.JPG';
import KoreaPalace from './pics/slideshow-pictures/koreapalace.JPG';
import PaintedLadies from './pics/slideshow-pictures/paintedladies.jpg';
import SeaBrightRock from './pics/slideshow-pictures/seabrightrock.JPG';
import SFCar from './pics/slideshow-pictures/sfcar.JPG';
import StickHut from './pics/slideshow-pictures/stickhut.JPG';
import SuesMatcha from './pics/slideshow-pictures/suesmatcha.JPG';
import TahoeRocks from './pics/slideshow-pictures/tahoerocks.JPG';
import VoyagerMatcha from './pics/slideshow-pictures/voyagermatcha.jpg';
import YalisWall from './pics/slideshow-pictures/yaliswall.jpg';


class Home extends Component {
  render() {
    const slideImages = [
      Backyard, BlueBottle, ChanningSunrise, ChanningSunset, FallUnit2, GadaniWall, GreatWall, HomeCafe, KoreaPalace, PaintedLadies, SeaBrightRock, SFCar, StickHut, SuesMatcha, TahoeRocks, VoyagerMatcha, YalisWall
    ];

    const properties = {
      duration: 3500,
      transitionDuration: 1500,
      infinite: true,
      indicators: false,
      arrows: false
    }

    const Slideshow = () => {
      return (
      <Fade {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

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
                <a href="#contact-section" className="link-animation">contact</a>
            </div>
          </p>
          </div>
          </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[6]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[7]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[8]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[9]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[10]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[11]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[12]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[13]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[14]})`}}>

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
                 <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[15]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[16]})`}}>

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
                  <a href="#contact-section" className="link-animation">contact</a>
              </div>
            </p>
            </div>
            </body>

          </div>
        </div>
      </Fade>
    );
  }

  return (
    Slideshow())
}
}

export default Home;
