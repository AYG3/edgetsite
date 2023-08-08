import Image from 'next/image'
import bgg from './assets/john-doe.jpg'
import React from 'react'
import { GoSearch } from 'react-icons/go'
import { TbDirectionSign } from 'react-icons/tb'

const Main = () => {
  return (
    <div className="relative">
      <Image src={bgg} alt='background-img' />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4 justify-center text-white">
        <p className='font-semibold text-4xl'>Make Tour & Explore</p>
        <p className='font-bold text-4xl'>Incredible Destinations</p>
        <div className=''>
          <div className='rounded-full border-4 border-blue-800 grid grid-rows-1  items-center lg:flex lg:mx-8 xl:mx-28'>
            <div className="relative flex items-center w-full border-r">
              <input type="text" placeholder="Keywords" className="py-2 pl-4 pr-56 rounded-l-full" />
              <div className="relative right-0 w-full">
                <GoSearch className="h-6 w-6 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            {/*DESTINATION DROPDOWN */}
            <div className="dropdown inline-block relative w-full bg-white border-r">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full text-gray-800">
                <span className="mr-1 w-full">Destinations</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white z-[100] rounded w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Destination</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">Europe</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Asia</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Africa</a></li>
              </ul>
            </div>
            <div className="dropdown inline-block relative w-full bg-white border-r">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full text-gray-800">
                <span className="mr-1 w-full">Duration</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white rounded z-[100] w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Duration</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">3 Days</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">5 Days</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">10 Days</a></li>
              </ul>
            </div>
            <div className="dropdown inline-block relative w-full bg-white">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full text-gray-800">
                <span className="mr-1 w-full">Persons</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul className="dropdown-menu absolute z-[100] hidden text-gray-700 pt-1 border border-gray-300 rounded bg-white w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Persons</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">1-3</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">1-5</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">5-10</a></li>
              </ul>
            </div>
            <div className='relative flex justify-center bg-orange-500 py-2 rounded-r-full px-12'>
              <p className=''> Search</p>
              <TbDirectionSign className="relative -bottom-1 left-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main