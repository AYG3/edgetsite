import Image from 'next/image'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import React from 'react'
import Main from './Main'
import Dum from './Dum'

const First = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Dum />
      <Footer />
    </div>
  )
}

export default First
