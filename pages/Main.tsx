"use client"


import React, { useState } from 'react';
import './style.css'
import Image from 'next/image'
import bgg from './assets/john-doe.jpg'
import { GoSearch } from 'react-icons/go'
import { TbDirectionSign } from 'react-icons/tb'

const Main = () => {
  
  const [destination, setDestination] = useState(false);
  
  const destinationToggle = () => {
    setDestination(!destination);
  };

  const [destination1, setDestination1] = useState(false);

  const destination1Toggle = () => {
    setDestination1(!destination1);
  };

  const [destination2, setDestination2] = useState(false);

  const destination2Toggle = () => {
    setDestination2(!destination2);
    };


  return (
    <div className="relative">
      <Image src={bgg} alt='background-img' />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4 justify-center text-white">
        <div className='pb-4 p-8'>
          <p className='font-semibold text-4xl mb-1'>Make Tour & Explore</p>
          <p className='font-bold text-4xl mt-1'>Incredible Destinations</p>
        </div>
        <div className='w-3/4 mt-4 md:w-full lg:flex lg:mx-8 xl:mx-28'>
          <div className='rounded-xl lg:rounded-full md:rounded-full border-4 border-blue-800 grid grid-rows-1 items-center lg:flex lg:mx-8 xl:mx-28 md:flex'>
            <div className='flex w-full bg-white rounded-t-lg items-center p-2 lg:rounded-l-full justify-center md:rounded-l-full'>
              <input type="text" className='rounded-t-lg w-full lg:rounded-l-full' placeholder='Keywords' />
              <GoSearch className='text-gray-400 text-lg' />
            </div>
            {/* <div className="relative flex items-center w-full lg:border-r">
              <input type="text" placeholder="Keywords" className="py-2 pl-2 pr-30 rounded-t-lg lg:rounded-l-full md:rounded-l-full md:pr-5 lg:pr-12" />
              <div className="relative right-0 w-full">
                <GoSearch className="h-6 w-6 text-gray-500 absolute lg:right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div> */}
            {/*DESTINATION DROPDOWN */}
            <div className="inline-block relative w-full lg:border-r">
                <button onClick={destinationToggle} className="font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                  <span className="mr-1 w-full">Destinations</span>
                  <svg className={`fill-current h-4 w-4 ${destination ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className={`absolute ${destination ? 'block' : 'hidden'} text-gray-700 pt-1 border border-gray-300 bg-white z-[100] rounded w-full`}>
                  <li><a className="rounded-t py-2 px-4 font-semibold block whitespace-no-wrap" href="#">Destination</a></li>
                  <li><a className="py-2 px-4 block whitespace-no-wrap" href="#">Europe</a></li>
                  <li><a className="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Asia</a></li>
                  <li><a className="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Africa</a></li>
                </ul>
              </div>
              <div className="inline-block relative w-full lg:border-r">
                <button onClick={destination1Toggle} className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                  <span className="mr-1 w-full">Duration</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className={`absolute ${destination1 ? 'block' : 'hidden'} text-gray-700 pt-1 border border-gray-300 bg-white rounded z-[100] w-full`}>
                  <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Duration</a></li>
                  <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">3 Days</a></li>
                  <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">5 Days</a></li>
                  <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">10 Days</a></li>
                </ul>
              </div>
              <div className="inline-block relative w-full">
                <button onClick={destination2Toggle} className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                  <span className="mr-1 w-full">Persons</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className={`absolute ${destination2 ? 'block' : 'hidden'} text-gray-700 pt-1 border border-gray-300 bg-white rounded z-[100] w-full`}>
                  <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Persons</a></li>
                  <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">1-3</a></li>
                  <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">1-5</a></li>
                  <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">5-10</a></li>
                </ul>
              </div>
            <button className='relative flex justify-center bg-orange-500 py-2 lg:rounded-r-full rounded-b-lg px-12 md:px-8 md:rounded-r-full'>
              <p className=''> Search</p>
              <TbDirectionSign className="relative -bottom-1 left-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;