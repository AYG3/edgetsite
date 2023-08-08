import Image from 'next/image'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import React from 'react'
import Main from './Main'

const First = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default First
