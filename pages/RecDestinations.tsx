import React from 'react'
import './style.css'
import Image from 'next/image'
import AUS from './assets/australia.jpg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function RecDestinations() {
  return (
    <div>
      <div className='flex flex-col items-center mt-8 p-4'>
            <div className=' flex justify-center relative w-36'>
            <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
                <p className='text-orange-500 font-bold '> OUR ALL</p>
                <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px]'></div>
            </div>
            <p className='font-bold text-3xl'>Recommended Destinations</p>
        </div>

        {/* <div className=""> */}

          <div className=' sm:grid sm:grid-flow-col sm:grid-rows-3 lg:grid-rows-2 sm:mx-12 sm:justify-center sm:gap-8'>

            {/* CARD */}
            <div className='relative mt-8 sm:h-64 sm:w-72 lg:w-72 xl:w-96 xl:h-80 group'>
              <Image src={AUS} alt="Australia" className='rounded-2xl object-cover object-center w-full h-full'/>
              <div className='absolute lg:hidden flex flex-col justify-center items-start bg-white bg-opacity-90 space-y-4 top-0 px-4 h-full w-full py-4 rounded-2xl group-hover:flex'>
                <p className=''>27+ Place</p>
                <p className='font-bold text-2xl hover:text-orange-500 duration-200 cursor-pointer'>Australia</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe vel ea.</p>
                <button className='relative font-bold text-orange-500 pr-6 hover:translate-x-1 duration-150'>Explore <BsFillArrowRightCircleFill className="absolute top-[5.5px] right-0"/> </button>
              </div>
            </div>

            {/* CARD */}
            <div className=' relative mt-8 sm:h-64 sm:w-72 lg:w-72 xl:w-96 xl:h-80 group'>
              <Image src={AUS} alt="Australia" className='rounded-2xl object-cover object-center w-full h-full'/>
              <div className='absolute flex flex-col justify-center items-start bg-white bg-opacity-90 space-y-4 top-0 px-4 h-full w-full py-4 rounded-2xl lg:hidden group-hover:flex duration-200 transition '>
                <p className=''>27+ Place</p>
                <p className='font-bold text-2xl hover:text-orange-500 duration-200 cursor-pointer'>Australia</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe vel ea.</p>
                <button className=' relative font-bold text-orange-500 pr-6 hover:translate-x-1 duration-150'>Explore <BsFillArrowRightCircleFill  className="absolute top-[5.5px] right-0"/> </button>
              </div>
            </div>
            {/* CARD */}
            <div className=' relative mt-8 sm:h-64 sm:w-72 lg:w-72 xl:w-96 xl:h-80 group '>
              <Image src={AUS} alt="Australia" className='rounded-2xl object-cover object-center w-full h-full'/>
              <div className='absolute flex flex-col justify-center items-start bg-white bg-opacity-90 space-y-4 top-0 px-4 h-full w-full py-4 rounded-2xl lg:hidden group-hover:flex transtion duration-200 '>
                <p className=''>27+ Place</p>
                <p className='font-bold text-2xl hover:text-orange-500 duration-200 cursor-pointer'>Australia</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe vel ea.</p>
                <button className=' relative font-bold text-orange-500 pr-6 hover:translate-x-1 duration-150'>Explore <BsFillArrowRightCircleFill  className="absolute top-[5.5px] right-0"/> </button>
              </div>
            </div>
            {/* CARD */}
            <div className=' relative mt-8 sm:h-64 sm:w-72 lg:w-72 xl:w-96 xl:h-80 group '>
              <Image src={AUS} alt="Australia" className='rounded-2xl object-cover object-center w-full h-full'/>
              <div className='absolute flex flex-col justify-center items-start bg-white bg-opacity-90 space-y-4 top-0 px-4 h-full w-full py-4 rounded-2xl lg:hidden group-hover:flex transtion duration-200 '>
                <p className=''>27+ Place</p>
                <p className='font-bold text-2xl hover:text-orange-500 duration-200 cursor-pointer'>Australia</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe vel ea.</p>
                <button className=' relative font-bold text-orange-500 pr-6 hover:translate-x-1 duration-150'>Explore <BsFillArrowRightCircleFill  className="absolute top-[5.5px] right-0"/> </button>
              </div>
            </div>
            {/* CARD */}
            <div className=' relative mt-8 sm:h-64 sm:w-72 lg:w-72 xl:w-96 xl:h-80 group '>
              <Image src={AUS} alt="Australia" className='rounded-2xl object-cover object-center w-full h-full'/>
              <div className='absolute flex flex-col justify-center items-start bg-white bg-opacity-90 space-y-4 top-0 px-4 h-full w-full py-4 rounded-2xl lg:hidden group-hover:flex transtion duration-200 '>
                <p className=''>27+ Place</p>
                <p className='font-bold text-2xl hover:text-orange-500 duration-200 cursor-pointer'>Australia</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe vel ea.</p>
                <button className=' relative font-bold text-orange-500 pr-6 hover:translate-x-1 duration-150'>Explore <BsFillArrowRightCircleFill  className="absolute top-[5.5px] right-0"/> </button>
              </div>
            </div>
            {/* CARD */}
            <div className=' relative mt-8 sm:h-64 sm:w-72 lg:w-72 xl:w-96 xl:h-80 group '>
              <Image src={AUS} alt="Australia" className='rounded-2xl object-cover object-center w-full h-full'/>
              <div className='absolute flex flex-col justify-center items-start bg-white bg-opacity-90 space-y-4 top-0 px-4 h-full w-full py-4 rounded-2xl lg:hidden group-hover:flex transtion duration-200 '>
                <p className=''>27+ Place</p>
                <p className='font-bold text-2xl hover:text-orange-500 duration-200 cursor-pointer'>Australia</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi saepe vel ea.</p>
                <button className=' relative font-bold text-orange-500 pr-6 hover:translate-x-1 duration-150'>Explore <BsFillArrowRightCircleFill  className="absolute top-[5.5px] right-0"/> </button>
              </div>
            </div>


          </div>






        {/* </div> */}
    </div>
  )
}

export default RecDestinations
