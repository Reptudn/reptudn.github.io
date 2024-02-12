import React from 'react';
import MainImage from '../../assets/images/tudn.jpg';
import './AboutMe.css';

class AboutMe extends React.Component {

  render() {
    return (
      <div className="front-header">
        <img src={MainImage} alt="Jonas Kauker" />
        <div className="content">
          <h1>Jonas Kauker</h1>
          <h2>Disco Time!</h2> {/* Replace this line with "I love <whatever i love>  This is supposed to change and has multiple options and it will animted in as if its being typed" */}
        </div>
      </div>
    );
  }

}

export default AboutMe;