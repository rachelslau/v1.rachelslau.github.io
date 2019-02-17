import React, { Component } from 'react';
import './Coffee.css';
import CoffeeCat from './pics/coffee/cat-coffee.gif'

class Coffee extends Component {
  render() {
    return (
      <body id="coffee-section">
      <div className="coffee-background">
        <p>
          <div className="coffee-pictures">
            <img src={CoffeeCat} alt="cat coffee gif" width="100%"/>
          </div>
          <div className="title">coffee</div>
          <div className="coffee-shadow"></div>
          <br /><br />
          Before coming to college, I never thought I would be a coffee person. I couldn’t even walk into Starbucks without getting nausea from the smell of coffee. But now that I’m in college and actually need a caffeine kick every once in a while, I decided to make a blog where I review drinks from some of the coffee shops I’ve visited during early mornings and late nights. Check it out&nbsp;
          <a
            className="coffee-link-animation"
            href="https://anticoffeecoffeeclub.tumblr.com/"
            >here</a>
            !
          <br /><br /><br /><br />
        </p>
        <form action="recs.php" method="post">
          <p>i'm always looking for new places and drinks to try. if you have any suggestions, don't hesitate to enter them below!</p>
          <div>
            <label for="name">shop name</label>
            <br />
            <input type="text" id="name" name="name"/>
          </div>
          <div>
            <label for="recs">recommendations</label>
            <br />
            <textarea id="recs" name="recs"></textarea>
          </div>
          <div class="button">
            <button type="submit">submit!</button>
          </div>
        </form>
      </div>
      </body>
    );
  }
}

export default Coffee;
