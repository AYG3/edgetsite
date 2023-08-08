import Image from 'next/image'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import React from 'react'
import Main from './Main'
import Dum from './Dum'
import Tours from './Tours'
import Services from './Services'

const First = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Dum />
      <Footer />
      <Tours />
      <Services />
      
    </div>
  )
}

export default First
