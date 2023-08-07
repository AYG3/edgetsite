import React from 'react'
import './style.css'
<<<<<<< HEAD
=======
import Navbar from './Navbar'
import Footer from './Footer'
>>>>>>> 88df78c7470d62a8a6b55b073ae0ccb1b10f4f70

const Sixth = () => {
  return (
    <div>
    <Navbar />
  <div className='bg-gray-100 items-center justify-center grid h-60'>
    <span className='font-bold text-4xl text-center'>Get Connected</span>
    <span className='text-2xl text-center'>
      <a href="#">Home </a>{'\u00BB'}<span> Login</span>
    </span>
  </div>
  <div className='grid items-center justify-center mt-16'>
    <div className='border rounded-tl-3xl'>
    <div className='bg-blue-900 text-white grid items-center justify-center p-4 rounded-tl-3xl'>
    <p className='text-2xl font-bold text-center'>Login</p>
    <p className='text-center text-sm'>Keep connected with us</p>
    </div>
    <form action="POST" className='p-6 wee'>
      <div className='grid'>
      <input type="email" placeholder='Email Address*' required className='border w-full mb-2 mt-2 p-2' />
      <input type="password" placeholder='Password*' className='border w-full mt-2 mb-2 p-2' required />
      <span className='text-gray-500 flex justify-between items-center p-2'>
        <p className='flex items-center'><input type="checkbox" name="" id="" className='bg-blue-600'/>Remember Me</p>
        <p className='text-gray-800'><a href="/Nine">Forgot Password?</a></p>
      </span>
      <button type="submit" className='bg-[#f4834a] p-2 text-white'>Login</button>
      <p className='text-center text-gray-500 m-4'>Or Login With</p>
      <p className='text-center text-gray-500 m-4'>Social Icons</p>
      <p className='text-center text-gray-500 m-4'>Don't have an account? <a className='text-gray-900' href="/Sixth">Create One</a></p>
      </div>
    </form>
    </div>
  </div>    
  <Footer />
    </div>
    // bro i wanted to kill myself last night for this thing 
  )
}

export default Sixth