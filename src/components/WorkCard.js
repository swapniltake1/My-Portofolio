import './WorkCardStyle.css';
import React from 'react';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='img' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text1}</p>
      </div>
      <div className='pro-details'>
        <p>{props.text2}</p>
      </div>
      <div className='pro-btn'>
        <a href={props.view} className='btn' target="_blank" rel="noopener noreferrer">
          View Project
        </a>

        <a href={props.source} className='btn' target="_blank" rel="noopener noreferrer">
          Project Source
        </a>
      </div>
    </div>
  );
}

export default WorkCard;
