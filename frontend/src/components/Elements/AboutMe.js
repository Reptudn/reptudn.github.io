import React from 'react';
import MainImage from '../../assets/images/tudn.jpg';
import './AboutMe.css';

class AboutMe extends React.Component {

  render() {
    return (
      <div className="front-header">
        <img src={MainImage} alt="Jonas Kauker" />
        <div className="front-header-content">
          <h1>Jonas Kauker</h1>
          <p>Hello Fellas, i'm Jonas Kauker, 20 years old and i'm coding since 2020. I'm a professional Sea of Thieves Player. I'm coding as a hobby and want to work as a developer in the future.</p>
        </div>
      </div>
    );
  }

}

export default AboutMe;