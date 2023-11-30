import './FooterStyle.css';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-container'>

    <div className='left'> 
    <h4>About me</h4>
    <p> This is Swapnil. Am a Computer Engineer and Full Stack Java Developer. To connect with me to build something together</p>
    <div className='social'>
    <FaLinkedin size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaTwitter size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaYoutube size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaWhatsapp size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    <FaInstagram size={20} style={ { color:"#fff", marginRight:"1rem"}} />
    </div>
    </div>

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
    </div>
    </div>
  )
}

export default Footer