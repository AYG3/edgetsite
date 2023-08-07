import React from 'react'
import './style.css'
import { BsPersonCircle } from 'react-icons/bs'

const Fifth = () => {
  return (
    <div>
      <header className='flex flex-col items-center bg-gray-100 py-11'>
        <h1 className=' font-extrabold text-3xl pt-16 '> About Us </h1>
        <p className='pt-4'> Home {'>>'} About Us</p>
      </header>


      <div className='bg-gray-100' >
      {/*OVERALL DIV ^ */}



        <div className='flex flex-col items-center mt-8 p-4'>
          <div className='flex relative w-32'>
            <p className='font-bold text-orange-500'>ABOUT US </p>
            <div className='absolute right-1 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
          </div>
          <p className='font-bold text-3xl'>We Provide Best Deals</p>
          <p className='text-gray-500 p-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        </div>

        <div className='flex mt-4 p-4 justify-between bg-white shadow mx-4 rounded-xl'>
          <div className='flex items-center p-4'>
            <BsPersonCircle className="text-5xl text-orange-500 " />
          </div>
          <div className=''>
            <p className='font-bold text-2xl'>Quality Services Ensure</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='flex mt-4 p-4 justify-between bg-white shadow mx-4 rounded-xl'>
          <div className='flex items-center p-4 '>
            <BsPersonCircle className="text-5xl text-orange-500 " />
          </div>
          <div className=''>
            <p className='font-bold text-2xl'>Customer Care</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='flex mt-4 p-4 justify-between bg-white shadow mx-4 rounded-xl'>
          <div className='flex items-center p-4'>
            <BsPersonCircle className="text-5xl text-orange-500 " />
          </div>
          <div className=''>
            <p className='font-bold text-2xl'>Experience Guides</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>

        {/* TESTIMONIALS */}


      </div>


    </div>
  )
}
export default Fifth;