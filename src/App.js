import React, { Component } from 'react';
import './App.css';
import './slideshow.js';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Coffee from './Coffee.js';

class App extends Component {
  render() {
    return (
      <div>
      <section>
        <Home/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <Coffee/>
      </section>
      </div>
    );
  }
}

export default App;
