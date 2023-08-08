/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import './style.css'
import { GoSearch } from 'react-icons/go';
import {TbDirectionSign} from 'react-icons/tb';
import MACAU from './assets/macau-city.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
import Footer from './Footer';
import Image from 'next/image';





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
          <div className='grid grid-rows-1  items-center lg:flex lg:mx-8 xl:mx-28'>
            <div className="relative flex items-center border border-gray-300 w-full">
              <input type="text" placeholder="Keywords" className="py-2 pl-4 pr-56 " />
              <div className="relative right-0 w-full">
                <GoSearch className="h-6 w-6 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            {/*DESTINATION DROPDOWN */}
            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
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
            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
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
            <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
              <button className=" font-semibold py-2 px-4 rounded inline-flex items-center w-full">
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
            <div className='relative flex justify-center border bg-orange-500 border-gray-300 py-2 rounded px-12'>
              <p className=''> Search</p>
              <TbDirectionSign className="relative -bottom-1 left-2" />
            </div>
          </div>
        </div>

        <div className='mx-4 mt-12'>

          <div className='md:flex md:justify-between'>

            <p className='font-semibold text-xl md:text-lg'>4 Upcoming Tour Found</p>
            <span className='flex '>
              <div className="dropdown inline-block relative w-full border border-gray-300 rounded">
                <button className=" font-semibold justify-start py-2 px-4 rounded inline-flex items-center w-full">
                  <span className="mr-1 w-full">Sort By Most Popular</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
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
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 border border-gray-300 bg-white z-[100] rounded w-full">
                  <li className=""><a className="rounded-t  py-2 px-4 font-semibold  block whitespace-no-wrap" href="#">Show 10</a></li>
                  <li className=""><a className="py-2 px-4   block whitespace-no-wrap" href="#">Show 20</a></li>
                  <li className=""><a className="rounded-b py-2 px-4   block whitespace-no-wrap" href="#">Show 30</a></li>
                </ul>
              </div>
            </span>
          </div>


            <div className='flex flex-col space-y-8 lg:grid lg:grid-cols-2 pt-12 lg:space-y-0 lg:gap-8 ' >
              {/* CARD */}
              <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                <div className='h-full  rounded-t-sm sm:rounded-l-md'>
                  <Image src={MACAU} alt="" className='rounded-t-md h-full object-cover object-center sm:rounded-l-md' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h1 className='font-semibold text-2xl p-4'>France Experience</h1>
                    <p className='flex w-full justify-between p-4'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0"/> (80)</span></p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi commodi a delectus itaque saepe earum molestiae, unde, nulla hic natus, illum voluptas esse quaerat iure ea iste iusto amet?</p>
                    <p className='p-4'>From <span className='font-semibold'>$1,412</span></p>
                  </div>
                  <hr className='border'/>
                  <p className='font-semibold p-4 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                </div>
              </div>
              {/* CARD */}
              <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                <div className='h-full  rounded-t-sm sm:rounded-l-md'>
                  <Image src={MACAU} alt="" className='rounded-t-md h-full object-cover object-center sm:rounded-l-md' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h1 className='font-semibold text-2xl p-4'>France Experience</h1>
                    <p className='flex w-full justify-between p-4'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0"/> (80)</span></p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi commodi a delectus itaque saepe earum molestiae, unde, nulla hic natus, illum voluptas esse quaerat iure ea iste iusto amet?</p>
                    <p className='p-4'>From <span className='font-semibold'>$1,412</span></p>
                  </div>
                  <hr className='border'/>
                  <p className='font-semibold p-4 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                </div>
              </div>
              {/* CARD */}
              <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                <div className='h-full  rounded-t-sm sm:rounded-l-md'>
                  <Image src={MACAU} alt="" className='rounded-t-md h-full object-cover object-center sm:rounded-l-md' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h1 className='font-semibold text-2xl p-4'>France Experience</h1>
                    <p className='flex w-full justify-between p-4'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0"/> (80)</span></p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi commodi a delectus itaque saepe earum molestiae, unde, nulla hic natus, illum voluptas esse quaerat iure ea iste iusto amet?</p>
                    <p className='p-4'>From <span className='font-semibold'>$1,412</span></p>
                  </div>
                  <hr className='border'/>
                  <p className='font-semibold p-4 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                </div>
              </div>
              {/* CARD */}
              <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                <div className='h-full  rounded-t-sm sm:rounded-l-md'>
                  <Image src={MACAU} alt="" className='rounded-t-md h-full object-cover object-center sm:rounded-l-md' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h1 className='font-semibold text-2xl p-4'>France Experience</h1>
                    <p className='flex w-full justify-between p-4'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0"/> (80)</span></p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi commodi a delectus itaque saepe earum molestiae, unde, nulla hic natus, illum voluptas esse quaerat iure ea iste iusto amet?</p>
                    <p className='p-4'>From <span className='font-semibold'>$1,412</span></p>
                  </div>
                  <hr className='border'/>
                  <p className='font-semibold p-4 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                </div>
              </div>
              {/* CARD */}
              <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                <div className='h-full  rounded-t-sm sm:rounded-l-md'>
                  <Image src={MACAU} alt="" className='rounded-t-md h-full object-cover object-center sm:rounded-l-md' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h1 className='font-semibold text-2xl p-4'>France Experience</h1>
                    <p className='flex w-full justify-between p-4'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0"/> (80)</span></p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi commodi a delectus itaque saepe earum molestiae, unde, nulla hic natus, illum voluptas esse quaerat iure ea iste iusto amet?</p>
                    <p className='p-4'>From <span className='font-semibold'>$1,412</span></p>
                  </div>
                  <hr className='border'/>
                  <p className='font-semibold p-4 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                </div>
              </div>
              {/* CARD */}
              <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                <div className='h-full  rounded-t-sm sm:rounded-l-md'>
                  <Image src={MACAU} alt="" className='rounded-t-md h-full object-cover object-center sm:rounded-l-md' />
                </div>
                <div>
                  <div className='mt-4'>
                    <h1 className='font-semibold text-2xl p-4'>France Experience</h1>
                    <p className='flex w-full justify-between p-4'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0"/> (80)</span></p>
                    <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi commodi a delectus itaque saepe earum molestiae, unde, nulla hic natus, illum voluptas esse quaerat iure ea iste iusto amet?</p>
                    <p className='p-4'>From <span className='font-semibold'>$1,412</span></p>
                  </div>
                  <hr className='border'/>
                  <p className='font-semibold p-4 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                </div>
              </div>
             
            </div>

          


        </div>


        <Footer/>
      </div>
    </div>
  );
}

export default Second;