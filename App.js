
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Nservices from './components/Nservices/Nservices'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Nservices/>
    {/* <Mywork/> */}
    <Contact/>
    <Footer/>

 
  
    
      
    </div>
  )
}

export default App
