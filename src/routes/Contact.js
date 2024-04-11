import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';


export const Contact = () => {


  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact Me" text="Contact Form Inactive Due to Spam: Reach Out at swapniltake1@outlook.com Instead" />
      <Form />
     <Footer />
    </div>
  )
};

export default Contact;
