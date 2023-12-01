import './WorkCardStyle.css';

import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='img' />
    <h2 className='project-title'> {props.title}</h2>
    <div className='pro-details'>
        <p> {props.text1} </p>
    </div>
    <div className='pro-details'>
        <p> {props.text2} </p>
    </div>
    <div className='pro-btn'>
            <NavLink to="{props.view}" className='btn'> View Project </NavLink>
        
            <NavLink to="{props.source}" className='btn'> Project Source </NavLink>
        </div>
</div>
  )
}

export default WorkCard