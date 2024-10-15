import React from 'react'
import './Nservices.css'
import theme_patter from '../../Assests/theme_pattern.svg'
import Services_Data from '../../Assests/services_data'
import arrow_icon from '../../Assests/arrow_icon.svg'





const Nservices = () => {
  return (
    <div id='services' className='services'>
    <div className='services-title'>
        <h1>My Projects</h1>
        <img src={theme_patter}></img>
    </div>
    <div className='services-container'>
        {Services_Data.map((services,index) =>{
            return <div key={index} className='services-format'>
            <h3>{services.s_no}</h3>
            <h2>{services.s_name}</h2>
            <p>{services.s_desc}</p>
            <div className='services-readmore'>
            <p>Read More...</p>
            <img src={arrow_icon}></img>

            </div>

            </div>
        })}
    </div>
      
    </div>
  )
}

export default Nservices
