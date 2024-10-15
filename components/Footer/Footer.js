 import React from 'react'
import './Footer.css'
import footer_logo from '../../Assests/footer_logo.svg'
import user_icon from '../../Assests/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
   
    <hr/>
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>
        © Copyright 2024. Kumar Navin Singh. All rights reserved.
            
        </p>
        <div className='footer-bottom-right'> </div>
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with Me</p>
    </div>
      
    </div>
  )
}

export default Footer
