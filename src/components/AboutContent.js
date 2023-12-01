import { Link } from 'react-router-dom';
import './AboutContentStyle.css';
import Skill1 from '../assets/Java backgroud.png';
import Skill2 from '../assets/reactjs.png';
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>

   <div className='left'>
     <h1> Who am i ?</h1>
     <p> Hey, I'm Swapnil. I really enjoy working with computers and making cool things with them.</p>
      <p>  Let's team up and create awesome stuff! </p>
     <Link to='/swapniltake/contact' className='btn'>Contact</Link>
   </div>

   <div className='right'>
     <div className='img-container'>
        <div className='img-stack top'>
            <img src={Skill1} alt='img' className='img' />
        </div>
        <div className='img-stack bottom'>
            <img src={Skill2} alt='img' className='img' />
        </div>
     </div>

   </div>
    </div>
  )
}

export default AboutContent