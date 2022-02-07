import React from 'react';
import heroBanner from '../../assets/img/Frame_71.png'
import './Hero.css'
import '../../App.css'

function Hero() {
  return (
    <div className="Hero">
        <div className="container">
            <img src={ heroBanner } alt='Book store'/>
            <h1>this is hero</h1>
        </div>
    </div>
    )
}

export default Hero;
