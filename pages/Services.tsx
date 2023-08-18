import React from 'react'
import './style.css'
import Image from 'next/image'
import IMGS1 from './assets/service-5.png'
import IMGS2 from './assets/service-6.png'
import IMGS3 from './assets/service-7.png'
import IMGS4 from './assets/service-8.png'


function Services() {
  return (
    <div>
      <div className='flex flex-col items-center mt-8 p-4'>
        <div className=' flex justify-center relative w-36'>
          <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
          <p className='text-orange-500 font-bold '> OUR ALL</p>
          <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
        </div>
        <p className='font-bold text-3xl'>Provided Services</p>
      </div>
      <div className=' grid justify-center mt-2 sm:grid sm:grid-flow-col sm:grid-rows-2 lg:grid-rows-1 gap-20 items-center'>
        {/* CARD */}
        <div className='flex flex-col items-center mt-4 w-max group'>
          <div className=''>
            <Image src={IMGS1} alt="service" className='cursor-pointer' />
          </div>
          <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Car Rental Services</p>
          <p className='text-md text-orange-500'>100+ Listing</p>
        </div>
        {/* CARD */}
        <div className='flex flex-col items-center mt-4 w-max group'>
          <div className=''>
            <Image src={IMGS2} alt="service" className='cursor-pointer' />
          </div>
          <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Hotel Booking</p>
          <p className='text-md text-orange-500'>65+ Listing</p>
        </div>
        {/* CARD */}
        <div className='flex flex-col items-center mt-4 w-max group'>
          <div className=''>
            <Image src={IMGS3} alt="service" className='cursor-pointer' />
          </div>
          <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Restaurant</p>
          <p className='text-md text-orange-500'>100+ Listing</p>
        </div>
        {/* CARD */}
        <div className='flex flex-col items-center mt-4 w-max group'>
          <div className=''>
            <Image src={IMGS4} alt="service" className='cursor-pointer' />
          </div>
          <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Club & Bar</p>
          <p className='text-md text-orange-500'>45+ Listing</p>
        </div>
      </div>
    </div>
  )
}

export default Services
