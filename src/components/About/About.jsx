import AddProjectForm from '../AddProject/AddProjectForm'
import './About.css'

import React from 'react'

const About = () => {
  return (
    <>
    <div id='about' className='home-bg'>
        <div className='intro-section'>
           <p className='post'> MERN STACK DEVELOPER</p>
           <h2 className='profile-intro-heading'>
            Hello, my name 
            is Roshan Patil
           </h2>
           <p className='profile-summary'>
            An aspiring Full-Stack Developer with a strong foundation in JavaScript |
            React | Node.js | Express.js | MongoDB | SQL | Python | HTML | CSS | Bootstrap.
            Over the past 9 months, I've dedicated myself to mastering these technologies for a career in web development.</p>
             <div className='buttons-section'>
              <a href='#projects'>
                <button className='visit-buttons project-button' type='button'>Projects</button>
              </a>
                <a href='https://www.linkedin.com/in/roshanpatil05/' target='_blank'>
                <button className='visit-buttons project-linkedln-button' type='button'>LinkedIn
                </button>
                </a>
             </div>
        </div>
        <div className='image-section'>
            <img className='profile-img' 
            src='https://res.cloudinary.com/dx8csuvrh/image/upload/v1706089171/Portfolio/hero_oqpvog.png' 
            alt='profile'
            />
        </div>
    </div>
        <AddProjectForm/>
         <div className='footer'>
      <img className='footer-vector'
       src='https://res.cloudinary.com/dx8csuvrh/image/upload/v1706111652/Portfolio/Vector_hhgty3.png'
      alt='vector'/>
    </div>
    </>
  )
}

export default About