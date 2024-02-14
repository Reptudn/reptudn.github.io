import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {

  handleClick = () => {
    if (window.startExperience) window.startExperience();
    else console.log("startScene not found");
  }

  render() {
    return (
      <div className="front-header">
        <div className="content">
          <h1 class="noselect">Jonas Kauker</h1>
          <button class="space-button" onClick={this.handleClick}>
            <span>ABOUT ME</span>
        </button>
        </div>
      </div>
    );
  }

}

export default AboutMe;