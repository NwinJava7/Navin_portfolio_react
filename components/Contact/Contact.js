import React from 'react'
import './Contact.css'
import theme_pattern from '../../Assests/theme_pattern.svg'
import mail_icon from '../../Assests/mail_icon.svg'
import location_icon from '../../Assests/location_icon.svg'
import call_icon from '../../Assests/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9a7d8dc4-3417-4599-a538-c4ff24fb92cf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert (res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
    <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern}></img>
    </div>

    <div className='contact-section'>
    <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>Actively looking for Frontend Developer Role</p>

        <div className='contact-details'>
            <div className='contact-deatil'>
            <img src={mail_icon}></img>
            <p>navinsinghv7@gmail.com</p>

            {/* </div>
            <div className='contact-deatils'>
             <a href='https://www.linkedin.com/in/kumar-navin-singh-8628b9210/'></a>
            <p>Linkldin</p> */}

                
            </div>

            <div className='contact-deatil'>
            <img src={call_icon}></img>
            <p> +91 7739179544</p>

                
            </div>

            <div className='contact-deatil'>
            <img src={location_icon}></img>
            <p>Bangalore,Karnataka</p>

                
            </div>
        </div>
    </div>

    <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter Your Name' name='name'></input>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter Your Email' name='email'></input>
        <label htmlFor=''>Write your message here</label>
        <textarea name='message' rows={8} placeholder='Enter your Message'></textarea>
        <button type='submit' className='contact-submit'> Submit now</button>

    </form>


    </div>
      
    </div>
  )
}

export default Contact
