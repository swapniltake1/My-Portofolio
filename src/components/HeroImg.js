import './HeroImgStyle.css';
import '../index.css';
import React from 'react';
import intro from '../assets/background-img.jpg';
import { Link } from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className='hero'>

    <div className='mask'>
        <img className='into-img' src={intro} alt='intro img' />
    </div>

    <div className='content'>
        <p> Hi, Am Swapnil  </p>
        <h1>Java Developer</h1>

    <Link to='/project' className='btn'>My Projects </Link>
    <Link to='/contact' className='btn btn-light'> Contact Me </Link>

    </div>

    </div>
  )
}

export default HeroImg