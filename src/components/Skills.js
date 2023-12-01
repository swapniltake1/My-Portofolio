import './SkillsStyles.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='card-container'>
        <div className='card'>
          <p className='btc'> - Java - </p>
          <span className='bar'> </span>
          <p> Core Java </p>
          <p>Advanced Java</p>
          <p>J2EE/Jsp-Servlet/Thymeleaf</p>
          <p>JDBC/Hibernate/JPA</p>
          <p>Spring & Spring Boot</p>
        </div>

        <div className='card'>
          <p className='btc'> - React - </p>
          <span className='bar'> </span>
          <p> Html </p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Bootstrap/ReactStrap</p>
          <p>Responsive Designs </p>
        </div>

        <div className='card'>
          <p className='btc'> - Other - </p>
          <span className='bar'> </span>
          <p> MySQL/MongoDB</p>
          <p>Git/GitHub/Bitbucket/SourceTree</p>
          <p>Redis/ApacheMQ</p>
          <p>Open Source Integrations </p>
          <p>Postman/Swagger/Mockito</p>
        </div>

      </div>
      <div className="button-container">
          <Link to="/swapniltake/contact" className='btn'> Contact me </Link>
        </div>
    </div>
  );
}

export default Skills;
