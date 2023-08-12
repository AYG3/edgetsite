import React from 'react'
import './style.css';
import Navbar from './Navbar'
import Footer from './Footer'

const Nine = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 items-center justify-center grid h-60'>
        <span className='font-bold text-4xl text-center'>Forgot Password</span>
        <span className='text-2xl'>
          <a href="#">Home </a>{'\u00BB'}<span> forgot password</span>
        </span>
      </div>
      <div className='grid items-center justify-center mt-16'>
        <div className='border rounded-tl-3xl'>
          <div className='bg-blue-900 text-white grid items-center justify-center p-4 rounded-tl-3xl'>
            <p className='text-2xl font-bold text-center'>Password Reset</p>
            <p className='text-center text-sm'>Get your Password Back</p>
          </div>
          <form action="POST" className='p-6 wee'>
            <div className='grid'>
              <p className='text-gray-600 text-sm'>We will send a verification code to your mail to reset your password.</p>
              <input type="email" placeholder='Email Address*' required className='border w-full mb-2 mt-2 p-2' />
              <input type="password" placeholder='Old Password' className='border w-full mt-2 mb-2 p-2' />
              <button type="submit" className='bg-[#f4834a] p-2 text-white'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Nine