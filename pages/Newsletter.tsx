import React from 'react'
import './style.css'
import Image from 'next/image'
import IMGN from './assets/newsletter-img-1.png'


function Newsletter() {
  return (
    <div>
        <div className='mt-4 xl:mx-16 '>
          <div className='flex p-4 items-center justify-center relative sm:mx-12 md:mx-4 md:justify-normal xl:mx-12'>
            <Image src={IMGN} alt="newsletter" className='w-full rounded-2xl h-96 lg:h-[32rem] object-fill' />
            <div className='absolute flex flex-col items-center p-4 w-auto mx-8 bg-white sm:w-[30rem] md:right-5 '>
              <p className='text-orange-500 ' >Get Subscribe</p>
              <p className='font-bold text-3xl mt-2'>Our Newsletter</p>
              <p className='text-gray-500 mt-4 text-md'>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
              <input type='text' placeholder="Enter Your Email Address" className='border w-full text-center py-4 mt-4'/>
              <button className='bg-orange-500 py-4 font-bold text-xl w-full mt-4 text-white'>Subscribe Now</button>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Newsletter
