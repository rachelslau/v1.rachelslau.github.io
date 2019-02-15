import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <div className="slideshow">
          <div className="header-name">
            <h1>RACHEL LAU</h1>
            <div className="header-subtitle">
              <p>
                <a className="link-animation" href="#">about me </a>
                •
                <a className="link-animation" href="#"> projects </a>
                •
                <a className="link-animation" href=""> coffee</a>
              </p>
            </div>
          </div>
        </div>
          <p>
          Before coming to college, I never thought I would be a coffee person. I couldn’t even walk into Starbucks without getting nausea from the smell of coffee. But now that I’m in college and actually need a caffeine kick every once in a while, I decided to make a blog where I review drinks from some of the coffee shops I’ve visited during early mornings and late nights.
Check it out&nbsp;
          <a
            className="link-animation"
            href="https://anticoffeecoffeeclub.tumblr.com/"
          >here</a>
          !
          </p>
        </header>
      </div>
    );
  }
}

export default App;
