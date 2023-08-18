import React from 'react'
import { BiUser } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { AiOutlineShoppingCart, AiFillPhone } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import logo from './assets/logo.png'
import Image from 'next/image'


const Navbar = () => {

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
          <Image src={logo} alt={'logo'} />
        </span>
        <span className='uppercase flex text-gray-900 hidden lg:block'>
          <span className='flex'>
          <button className='flex items-center mr-4'>HOME</button>
          <button className='flex items-center mr-4'>TOURS<RiArrowDropDownFill /></button>
          <button className='flex items-center mr-4'>DESTINATION<RiArrowDropDownFill /></button>
          <button className='flex items-center mr-4'>SHOP<RiArrowDropDownFill /></button>
          <button className='flex items-center mr-4'>BLOG<RiArrowDropDownFill /></button>
          <button className='flex items-center mr-4'>PAGES<RiArrowDropDownFill /></button>
          </span>
          </span>
        <span className='flex items-center justify-center'>
        <button className='flex items-center p-2 rounded bg-orange-500 text-lg h-10'><AiFillPhone /></button>
        <div className='items-center justify-center grid text-gray-900 p-2'>
          <p>Contact Now</p>
          <p>+1(514)321-4567</p>
        </div>
        <button className='flex items-center p-2 rounded bg-orange-500 text-lg h-10'><FaBars /></button>
        </span>
      </nav>
    </div>
  )
}

export default Navbar