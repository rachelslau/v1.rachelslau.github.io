import React, { Component } from 'react';
import './Coffee.css';

class Coffee extends Component {
  render() {
    return (
      <body id="coffee-section">
      <div className="coffee-background">
        <p>
          Before coming to college, I never thought I would be a coffee person. I couldn’t even walk into Starbucks without getting nausea from the smell of coffee. But now that I’m in college and actually need a caffeine kick every once in a while, I decided to make a blog where I review drinks from some of the coffee shops I’ve visited during early mornings and late nights. Check it out&nbsp;
          <a
            className="link-animation"
            href="https://anticoffeecoffeeclub.tumblr.com/"
            >here</a>
            !
        </p>
      </div>
      </body>
    );
  }
}

export default Coffee;
