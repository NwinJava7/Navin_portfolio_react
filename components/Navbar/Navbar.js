// import React, { useRef, useState } from 'react'
// import './Navbar.css'
// import logo from '../../Assests/logo.svg'
// import underline from '../../Assests/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../Assests/menu_open.svg'
// import menu_close from '../../Assests/menu_close.svg'

// const Navbar = () => {
//   const [menu,setMenu] =useState("home");
//   const menuRef=useRef();

//   const openMenu =() =>{
//     menuRef.current.style.right="0";
//   }

//   const CloseMenu =() =>{
//     menuRef.current.style.right="350";
//   }





//   return (
//     <div id='services' className='navbar'>
//     <img src={logo} alt='' />    
//     <img src={menu_open} onClick={openMenu} className='nav-mob-open'></img>
//     <ul ref={menuRef} className='nav-menu'>
//     <img src={menu_close} onClick={CloseMenu} className='nav-mob-close'></img>
//       <li><AnchorLink className='anchor-link'  href='home'><p onClick={() =>setMenu("home")}>Home</p></AnchorLink>{menu==="home" ? <img src={underline}/>:<></>}</li>
//       <li><AnchorLink className='anchor-link' offset={50} href='about'><p onClick={() =>setMenu("about")}>About Me</p></AnchorLink>{menu==="about" ? <img src={underline}/>:<></>}</li>
//       <li><AnchorLink className='anchor-link' offset={50} href='services'><p onClick={() =>setMenu("services")}>Service</p></AnchorLink>{menu==="services" ? <img src={underline}/>:<></>}</li>
//       <li><AnchorLink className='anchor-link' offset={50} href='work'><p onClick={() =>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work" ? <img src={underline}/>:<></>}</li>
//       <li><AnchorLink className='anchor-link' offset={50} href='contact'><p onClick={() =>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ? <img src={underline}/>:<></>}</li>
    

//     </ul>
//     <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'></AnchorLink>Contact With Me</div>
//     </div>
//   )
// }

// export default Navbar
import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../Assests/logo.svg';
import underline from '../../Assests/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../Assests/menu_open.svg';
import menu_close from '../../Assests/menu_close.svg';
import candy from '../../Assests/Navincandy.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"; // Correcting the close menu action
  }

  return (
    <div id='service' className='navbar'>
      {/* <img src={logo} alt='Logo' /> */}
      <img className='candynavin' src={candy}></img>
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt='Open Menu' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt='Close Menu' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Projects</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt='Underline' />}
        </li>
        {/* <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt='Underline' />}
        </li> */}
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='Underline' />}
        </li>
      </ul>
      <div onClick={() =>{
        window.open('https://www.linkedin.com/in/kumar-navin-singh-8628b9210/')
      }} className='nav-connect'>
        <p className='anchor-link' offset={50} >
          Connect with Me on LinkedIn
        </p>
      </div>
    </div>
  );
}

export default Navbar;
