import React, { useRef, useState } from 'react';
import './FormStyle.css'
import emailjs from 'emailjs-com';

const Form = () => {
  emailjs.init('cpBRKppTPpKINIr0C');
  const formRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r177tvk', 'template_n2vvz1q', formRef.current)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setSubmitStatus('submitted');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error);
        setSubmitStatus('notSubmitted');
      });
  };

  return (
    <div className='form'>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label> Your Name </label>
        <input type='text' name='name' id='name' required />
        <label> Email </label>
        <input type='email' name='email' id='email' required />
        <label> Subject </label>
        <input type='text' name='subject' id='subject' required />
        <label> Your Message </label>
        <textarea rows='6' placeholder='Type your message' id='message' name='message' required />
        {submitStatus === 'submitted' && <p className='submitted notify' style={{color:'Green'}}>Form submitted successfully, I'll get back to you!</p>}
      {submitStatus === 'notSubmitted' && <p className='not-submitted notify'style={{color:'red'}}>Form not submitted. Please try again later.</p>}
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
