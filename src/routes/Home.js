import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Skills from '../components/Skills';


export const home = () => {
  return (
    <div>

     <Navbar/>   
     
     <HeroImg />
     
     <Skills/>

     <Footer />

    </div>
  )
};
export default home;
