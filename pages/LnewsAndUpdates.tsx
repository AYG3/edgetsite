import React from 'react'
import './style.css'
import Image from 'next/image'
import IMGL1 from './assets/blog-1.jpg'
import IMGL2 from './assets/blog-3.jpg'
import IMGL3 from './assets/blog-5.jpg'
import { BsDot } from 'react-icons/bs'


function LnewsAndUpdates() {
  return (
    <div>
        <div className='flex flex-col items-center mt-8 p-4'>
            <div className=' flex justify-center relative w-40'>
                <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
                <p className='text-orange-500 font-bold '> BLOGS</p>
                <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            </div>
            <p className='font-bold text-3xl'>Latest News An Updates</p>
        </div>

        <div className='flex flex-col items-center md:grid mg:grid-cols-2 lg:grid-cols-3 xl:px-16'>

            
            {/* CARD */}
            <div className='flex flex-col items-center group mt-6 sm:w-[32rem] md:w-auto  '>
                <div className='flex flex-col items-center relative px-4'>
                    <Image src={IMGL1} alt="" className="rounded-2xl object-cover object-center" />
                    <div className='absolute top-6 left-9 flex justify-center py-2 rounded-3xl text-gray-200 bg-purple-900 w-40 ' >
                        <BsDot /><p>06 Febuary, 2021</p>
                    </div>
                </div>
                <div className='p-4 '>
                    <p className='font-bold text-2xl group-hover:text-orange-500 duration-300'>24 of Our Favorite Things To Do In Cape Town And Around</p>
                    <div className='flex relative my-2 w-56 text-gray-400'>By Admin <BsDot className="absolute bottom-0 right-[8.5rem] text-2xl text-orange-500" /> <span className='pl-4'> 4 Comments </span></div>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                </div>
            </div>
            {/* CARD */}
            <div className='flex flex-col items-center group mt-6 sm:w-[32rem] md:w-auto'>
                <div className='flex flex-col items-center relative px-4'>
                    <Image src={IMGL2} alt="" className="rounded-2xl object-cover object-center" />
                    <div className='absolute top-6 left-9 flex justify-center py-2 rounded-3xl text-gray-200 bg-purple-900 w-40 ' >
                        <BsDot /><p>06 Febuary, 2021</p>
                    </div>
                </div>
                    <div className='p-4 '>
                        <p className='font-bold text-2xl group-hover:text-orange-500 duration-300'>Mexico Road Trip — Impressions Of A Challenging Journey</p>
                        <div className='flex relative my-2 w-56 text-gray-400'>By Admin <BsDot className="absolute bottom-0 right-[8.5rem] text-2xl text-orange-500" /> <span className='pl-4'> 4 Comments </span></div>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                    </div>
            </div>
            {/* CARD */}
            <div className='flex flex-col items-center group mt-6 sm:w-[32rem] md:w-auto md:col-span-2 lg:col-span-1' >
                <div className='flex flex-col items-center relative px-4'>
                    <Image src={IMGL3} alt="" className="rounded-2xl object-cover object-center" />
                    <div className='absolute top-6 left-9 flex justify-center py-2 rounded-3xl text-gray-200 bg-purple-900 w-40 ' >
                        <BsDot /><p>06 Febuary, 2021</p>
                    </div>
                </div>
                <div className='p-4 '>
                    <p className='font-bold text-2xl group-hover:text-orange-500 duration-300'>Our Favorite Things To Do In The Fascinating City Of Cordoba</p>
                    <div className='flex relative my-2 w-56 text-gray-400'>By Admin <BsDot className="absolute bottom-0 right-[8.5rem] text-2xl text-orange-500" /> <span className='pl-4'> 4 Comments </span></div>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                </div>
            </div>


        </div>




    </div>


  )
}

export default LnewsAndUpdates
