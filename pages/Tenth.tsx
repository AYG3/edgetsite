import React from 'react'
import './style.css'
import Navbar from './Navbar'

const Tenth = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-100 mt-16 items-center justify-center grid'>
        <span>404 Error</span>
        <span>
          <a href="#">Home</a><span>404 Error</span>
        </span>
      </div>
      <div className='grid items-center justify-center'>
        <div>
        <span className='text-6xl font-bold text-[#f4834a] m-4'>Oops!</span>
        </div>
        <div className='text-4xl font-semi-bold text-slate-800 m-4'>
        <span>404 Error</span>
        </div>
        <div>
        <span>The page you are looking for is not available</span>
        </div>
        <button className='bg-[#f4834a] w-32 p-2 text-white rounded'>Back to Home</button>
      </div>
    </>
  )
}

export default Tenth