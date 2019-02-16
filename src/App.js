import React, { Component } from 'react';
import './App.css';
import './slideshow.js';
import Home from './Home.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <div>
      <Home/>
      <About/>
      </div>
    );
  }
}

export default App;
