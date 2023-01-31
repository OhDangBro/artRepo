import React from 'react';
import './Hero.css';
import HeroFern from "../../assets/img/fernBorder.svg"


const Hero = () => {
  return (
    <div className="hero">
      <img className="topImageHero" src={HeroFern}/>
      <div className="heroTextContainer">
      <div className="hero-header">
        <h1 className="heroCursive">Header Text</h1>
      </div>
      <div className="hero-text">
        <p>Some words under the header</p>
      </div>
      </div>
      <img className="bottomImageHero" src={HeroFern}/>
    </div>
  );
};

export default Hero;