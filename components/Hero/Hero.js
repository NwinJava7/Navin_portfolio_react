import React from 'react'
import './Hero.css'
import profile_img from '../../Assests/profile_img.svg'
import pic from '../../Assests/navinfullpic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import NavinSinghCv from '../../Assests/NavinSinghCv.pdf'


const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href =NavinSinghCv; // Path to your resume file in the public folder
    link.download = 'NavinSinghCv.pdf'; // The name of the file after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div id='home' className='hero'>
    <img src={pic} />
    <h1> <span>I'm Kumar Navin Singh,</span>Frontend Developer</h1>
    <p>I am Professional Software Developer With 3+ Years Experience in React Application Development and Microservices and
    skilled in building dynamic, high-performance web
    applications using modern JavaScript frameworks.I focus on creating reusable components, efficient state management,
    and responsive design. I am effective in Agile environments and passionate about designing and developing applications</p>
    <div className='hero-action'>
    <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
    <div className='hero-resume'>
      <button onClick={downloadResume}>My Resume</button>
    </div>
   
  
    </div>
     </div>
  )
}

export default Hero

