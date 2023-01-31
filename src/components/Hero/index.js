import React from 'react';
import './Hero.css';
import HeroFern from "../../assets/img/fernBorder.svg"


const Hero = () => {
  return (
    <div className="hero">
    <div className="heroTextContainer">
      <div className="hero-header">
        <h1 className="heroCursive">Deborah Stair</h1>
        <p className="heroSecondText">Artistic Inovations</p>
        <p className="heroThirdText">Specializing in creating stunning faux finishes, murals, window art, and custom illustrations that are both visually appealing and tailored to your needs.</p>
      </div>
    </div>
    <img className="topImageHero" src={HeroFern} />
    <img className="bottomImageHero" src={HeroFern} />
  </div>
  );
};

export default Hero;