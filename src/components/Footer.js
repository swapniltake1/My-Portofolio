import './FooterStyle.css';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/swapniltake1', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/swapniltake01', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/@thecodebreaker', '_blank');
  };

  const handleWhatsappClick = () => {
    const message = encodeURIComponent("Hi, let's connect!"); 
    window.open(`https://wa.me/8600789879/?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/swapniltake_patil', '_blank');
  };

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
      <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleLinkedInClick} />
      <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleTwitterClick} />
      <FaYoutube size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleYoutubeClick} />
      <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleWhatsappClick} />
      <FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleInstagramClick} />
    </div>
    <footer className='social'>
      <p>© Swapnil Take, {currentYear}. All Rights Reserved.</p>
    </footer>
    </div>
    
  )
}

export default Footer