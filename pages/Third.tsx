import React from 'react';
import './style.css';
import Navbar from './Navbar';
import IMG from './assets/single-tour-1.jpg';
import Image from 'next/image';

const Third = () => {
  return (
    <div className=''>
      <Navbar />
      <header className='flex flex-col items-center bg-gray-100'>
        <h1 className=' font-bold text-3xl pt-16 '> South Island, Newzealand </h1>
        <p className='pt-4'> Home {'>>'} Tour Details</p>
      </header>

      <div className='mt-12 border border-gray-500 mx-2'>
        <div className=''>
          < Image src={IMG} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Third