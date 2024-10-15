import React from 'react'
import './About.css'
import theme_pattern from '../../Assests/theme_pattern.svg'
import fullpic from '../../Assests/Navinpic.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern}></img>
    </div>
    <div className='about-section'>
        <div className='about-left'>
        <img  className='myprofileimg' src={fullpic}/>

        </div>
        <div className='about-right'>
        <div className='about-para'>
            <p> I am working at Infosys as a Senior System Engineer with overall 3+ years of experience.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
        </div>
        <div className='aboutSkill'>
          <div className='about-skill'><p>JavaScript</p> <hr style={{width:"80%"}}></hr></div>
          <div className='about-skill'><p>React & Redux</p> <hr style={{width:"70%"}}></hr></div>
          <div className='about-skill'><p>Html & Css</p> <hr style={{width:"100%"}}></hr></div>
          <div className='about-skill'><p>Angular</p> <hr style={{width:"65%"}}></hr></div>
          <div className='about-skill'><p>MongoDB</p> <hr style={{width:"70%"}}></hr></div>
        </div>
        </div>
        
    </div>
    <div className='about-achievemnets'>
          <div className='about-achievement'>
            <h1>3+</h1>
            <p>YEAR OF EXPRIENCE</p>
          </div>
          <hr />
          <div className='about-achievement'>
            <h1>3+</h1>
            <p>LIVE PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className='about-achievement'>
            <h1>5+</h1>
            <p>CLONED PROJECT COMPLETED</p>
          </div>

        </div>
        

      
    </div>
  )
}

export default About
