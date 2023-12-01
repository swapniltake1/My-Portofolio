import './FooterStyle.css';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
     <div className='footer-container'>
     <div className='right'>
        
        <div className='location'>
        <FaHome size={20} style={ { color:"#fff", marginRight:"2rem"}} />
        <div> 
         <p> Newasa </p>
        <p> Ahmednagar, Maharashtra</p>
        <p> India 414603</p>
        </div>
         </div>
        
        
        <div className='location'>
        <FaPhone size={20} style={ { color:"#fff", marginRight:"2rem"}} />
        <div>
        <p>+91 8600789879</p>
        </div>
        </div>
    
        <div className='location'>
        <FaMailBulk size={20} style={ { color:"#fff", marginRight:"2rem"}} />
        <div>
        <p>takeswapnil8@gmail.com</p>
        </div>
        </div>
    
        </div>

    <div className='left'> 
    <h4>About me</h4>
    <p> Hi, I'm Swapnil, I like making things that people find easy to use and fun to explore. </p>
    <br />
    <p>Java helps me create the parts that make everything work, and React helps me design the things you see and click on.</p>
    <br />
    <p>Let's collaborate and transform ideas into exceptional digital experiences together!</p>
    </div>
    </div>
    <div className='social'>
    <FaLinkedin size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaTwitter size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaYoutube size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaWhatsapp size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaInstagram size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    </div>
    <footer className='social'>
      <p>© Swapnil Take, {currentYear}. All Rights Reserved.</p>
    </footer>
    </div>
    
  )
}

export default Footer