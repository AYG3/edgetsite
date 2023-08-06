import React from 'react'
import './style.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Tenth = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-100 mt-16 items-center justify-center grid h-60 m-4'>
        <span className='font-bold text-4xl text-center'>404 Error</span>
        <span className='text-2xl'>
          <a href="#">Home </a>{'\u00BB'}<span> 404 Error</span>
        </span>
      </div>
      <div className='grid items-center justify-center'>
        <div className='text-6xl font-bold text-[#f4834a] m-4 items-center justify-center text-center'>
          <span>Oops!</span>
        </div>
        <div className='text-4xl font-semi-bold text-slate-700 m-4 items-center justify-center text-center'>
          <span>404 Error</span>
        </div>
        <div className='text-2xl text-slate-900 m-4 items-center justify-center text-center'>
          <span>The page you are looking for is not available</span>
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-[#f4834a] w-32 p-2 text-white rounded items-center'>Back to Home</button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Tenth