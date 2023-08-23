import React from 'react';
import possibilityImg from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-container">
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className="gpt3__possibility-text">
        <p id="access">Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p id="description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p id="learnmore">Learn More</p>
      </div>
    </div>
  );
};

export default Possibility;
