import React from 'react';
import MainImage from '../../assets/images/tudn.jpg';
import './FrontHeader.css';

class FrontHeader extends React.Component {

  render() {
    return (
      <div className="front-header">
        <img src={MainImage} alt="Jonas Kauker" />
        <div className="front-header-content">
          <h1>Jonas Kauker</h1>
          <p>lorem ipsum dolor sit amongus</p>
        </div>
      </div>
    );
  }

}

export default FrontHeader;