import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About Me" text="Learning new stuff about technology excites me, and I'm always up for working on exciting projects together." />
      <AboutContent />
     <Footer />
    </div>
  )
};

export default About;
