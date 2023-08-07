import React from 'react';
import './style.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Fourth = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 items-center justify-center grid h-60'>
        <span className='font-bold text-4xl text-center'>Our Team</span>
        <span className='text-2xl'>
          <a href="#">Home </a>{'\u00BB'}<span> Our Team</span>
        </span>
      </div>
      <div className='grid items-center justify-center mt-16'>
        <span className='text-xl text-[#f4834a]'>Team</span>
      <span className='font-bold text-3xl text-center'>Meet Our Team</span>
      </div>
      <Footer />
    </div>
  )
}

export default Fourth