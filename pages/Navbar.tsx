"use client"

import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { AiOutlineShoppingCart, AiFillPhone } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import logo from './assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className='bg-orange-500 justify-between items-center flex'>
        <span className='p-1 lg:block md:block hidden'>Find the best spot, restaurant, hotel, fitness center, shop etc.</span>
        <span className='flex justify-end md:justify-beetween lg:justify-between'>
          <button className='uppercase flex items-center mr-4'><BiUser />Sign In</button>
          <button className='flex  items-center mr-4'>English<RiArrowDropDownFill /></button>
          <button className='flex  items-center mr-4'>USD <RiArrowDropDownFill /></button>
          <button className='flex  items-center mr-4'><AiOutlineShoppingCart className='mr-1'/>$0.00</button>
        </span>
      </header>
      <nav className='bg-white flex items-center justify-between p-2'>
        <span>
          <Link href='/Home'>
          <Image src={logo} alt={'logo'} />
          </Link>
        </span>
        <span className='uppercase text-gray-900 hidden lg:block'>
          <span className='flex'>
          <Link href='/Home'><button className='flex items-center mr-4'>HOME</button></Link>
          <Link href='/Tours'><button className='flex items-center mr-4'>TOURS</button></Link>
          <Link href='/Destination'><button className='flex items-center mr-4'>DESTINATION</button></Link>
          <Link href='/Shop'><button className='flex items-center mr-4'>SHOP</button></Link>
          <Link href='/Blog'><button className='flex items-center mr-4'>BLOG</button></Link>
          <Link href='/Pages'><button className='flex items-center mr-4'>PAGES</button></Link>
          </span>
          </span>
        <span className='flex items-center justify-center'>
        <button className='flex items-center p-2 rounded bg-orange-500 text-lg h-10'><AiFillPhone /></button>
        <div className='items-center justify-center grid text-gray-900 p-2'>
          <p>Contact Now</p>
          <p>+1(514)321-4567</p>
        </div>
        <button className='flex items-center p-2 rounded bg-orange-500 text-lg h-10' onClick={toggleSidebar}><FaBars /></button>
        </span>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Navbar