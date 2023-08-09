import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import React from 'react'
import Main from './Main'
import Dum from './Dum'
import Tours from './Tours'
import Services from './Services'
import Utour from './Utour'
import { TbDirectionSign } from 'react-icons/tb'
import RecDestinations from './RecDestinations'

const First = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Dum />
      <Tours />
      <div className='flex flex-col items-center mt-28 p-4'>
            <div className=' flex justify-center relative w-40'>
            <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
              <p className='text-orange-500 font-bold uppercase'> Our All</p>
              <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            </div>
            <p className='font-bold text-3xl'>Provided Services</p>
          </div>
      <Services />
      <div className='flex items-center justify-center mt-6'>
            <button className='flex border justify-center items-center p-2 rounded-lg text-gray-700 hover:bg-orange-500 hover:text-white pr-6 pl-6 ease-in duration-200'>
              <p className=''>All Services</p>
              <TbDirectionSign className="ml-2" />
            </button>
      </div>
      
      <RecDestinations />




          
      <div className='flex flex-col items-center mt-28 p-4'>
            <div className=' flex justify-center relative w-40'>
            <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
              <p className='text-orange-500 font-bold uppercase'>Upcoming</p>
              <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            </div>
            <p className='font-bold text-3xl'>Feature Tours</p>
          </div>
      <Utour />
      <div className='flex items-center justify-center mt-6'>
            <button className='flex border justify-center items-center p-2 rounded-lg text-gray-700 hover:bg-orange-500 hover:text-white pr-6 pl-6 ease-in duration-200'>
              <p className=''>All Services</p>
              <TbDirectionSign className="ml-2" />
            </button>
      </div>
      <Footer />
      
    </div>
  )
}

export default First
