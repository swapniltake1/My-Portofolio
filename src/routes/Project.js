import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECT'S" text="Some of my recent work samples..." />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
