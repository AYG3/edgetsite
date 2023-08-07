import React, { useState } from 'react'
import './style.css'
import { GoSearch } from 'react-icons/go';
import {TbDirectionSign} from 'react-icons/tb';
import macau from './assets/macau-city.jpg';





const data = [
  {
    img: "cd",
    title: "France Experience",
    days: "10 Days",
    price: "$1,412"
  },

]

const Second = () => {


  return (
    <div className='bg-gray-100'>
      <header className='flex flex-col items-center'>
        <h1 className=' font-extrabold text-5xl pt-16 '> Find Best Tours </h1>
        <p className='pt-4'> Home {'>>'} Tour</p>
      </header>

      <div className='pt-16 bg-white'>
      <div className="mx-2 w-full ">
        {/* {FILTER DIV} */}
        <div className='grid grid-rows-1  items-center lg:flex'>

        <div className="relative flex items-center border border-gray-300 w-full">
          <input type="text" placeholder="Keywords" className="py-2 pl-4 pr-56 "/>
          <div className="relative right-0 w-full">
            <GoSearch className="h-6 w-6 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

          {/*DESTINATION DROPDOWN */}

            

            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                <span className="mr-1 w-full">Destinations</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white z-[100] rounded w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Destination</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">Europe</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Asia</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Africa</a></li>
              </ul>
            </div>
            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                <span className="mr-1 w-full">Duration</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white rounded z-[100] w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Duration</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">3 Days</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">5 Days</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">10 Days</a></li>
              </ul>
            </div>
            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                <span className="mr-1 w-full">Persons</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul className="dropdown-menu absolute z-[100] hidden text-gray-700 pt-1 border border-gray-300 rounded bg-white w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Persons</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">1-3</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">1-5</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">5-10</a></li>
              </ul>
            </div>

            <div className='relative flex justify-center border bg-orange-500 border-gray-300 py-2 rounded'>
                <p className=''> Search</p>
                <TbDirectionSign className="relative -bottom-1 left-2" />
            </div>

          </div>
        </div>

       <div className='mx-4 mt-12'>

          <div>

            <p className='font-semibold text-xl'>4 Upcoming Tour Found</p>

            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                <span className="mr-1 w-full">Sort By Most Popular</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white z-[100] rounded w-full">
                <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Sort By Most Popular</a></li>
                <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">Sort By High To Low</a></li>
                <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Sort By Low To High</a></li>
              </ul>
            </div>

              <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
                <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
                  <span className="mr-1 w-full">Show 10</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white z-[100] rounded w-full">
                  <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Show 10</a></li>
                  <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">Show 20</a></li>
                  <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Show 30</a></li>
                </ul>
            </div>

            <div className='h-20'>
                <img src={macau} alt="" className='h-16' />
            </div>

        </div>


       </div> 

        

      </div>
    </div>  
  )
}

export default Second;