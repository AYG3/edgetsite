import React from 'react'
import './style.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Seventh = () => {
  return (
    <div>
      <Navbar />
    <div className='bg-gray-100 items-center justify-center grid h-60'>
      <span className='font-bold text-4xl text-center'>Get Start With Us</span>
      <span className='text-2xl text-center'>
        <a href="#">Home </a>{'\u00BB'}<span> Register</span>
      </span>
    </div>
    <div className='grid items-center justify-center mt-16'>
      <div className='border rounded-tl-3xl'>
      <div className='bg-blue-900 text-white grid items-center justify-center p-4 rounded-tl-3xl'>
      <p className='text-2xl font-bold text-center'>Register</p>
      <p className='text-center text-sm'>Get start with us</p>
      </div>
      <form action="POST" className='p-6 wee'>
        <div className='grid'>
        <input type="text" placeholder='Full Name*' required className='border w-full mb-2 mt-2 p-2' />
        <input type="email" placeholder='Email Address*' required className='border w-full mb-2 mt-2 p-2' />
        <input type="password" placeholder='Password*' className='border w-full mt-2 mb-2 p-2' required />
        <input type="password" placeholder='Confirm Password*' className='border w-full mt-2 mb-2 p-2' required />
        <button type="submit" className='bg-[#f4834a] p-2 text-white'>Register</button>
        <p className='text-center text-gray-500 m-4'>Or Register With</p>
        <p className='text-center text-gray-500 m-4'>Social Icons</p>
        <p className='text-center text-gray-500 m-4'>Already have an account? <a className='text-gray-900' href="/Sixth">Login</a></p>
        </div>
      </form>

      </div>
    </div>    
    <Footer />
    </div>
  )
}

export default Seventh