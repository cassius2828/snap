import React from 'react';
import heroImg from '../../images/image-hero-mobile.png';
import './Main.css';

export const Main = () => {
  return (
    <div className="main-container">
      <div className="img-container mb3">
        <img src={heroImg} alt="" />
      </div>

      <div className="left-content">
        <h1>Make Remote Work</h1>
        <p className="ma4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto,
          quaerat nulla cum cupiditate sunt dolor adipisci! Deserunt,
          consequatur perspiciatis. Rerum est aut quia.
        </p>
        <button className="pa3 br-pill" id="learn-more">
          Learn More
        </button>
      </div>
    </div>
  );
}
