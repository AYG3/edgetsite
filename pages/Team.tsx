import React from 'react'
import './style.css'
import Footer from './Footer'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import IMG1 from './assets/team-1.jpg'

const Team = () => {
  return (
    <div>
        <Navbar />
      <div className='bg-gray-100 items-center justify-center grid h-60'>
        <span className='font-bold text-4xl text-center'>Our Team</span>
        <span className='text-2xl'>
          <a href="/Home">Home </a>{'\u00BB'}<span> Our Team</span>
        </span>
      </div>
      <div className='flex flex-col items-center justify-center mt-16'>
        <span className='text-xl text-[#f4834a]'>Team</span>
      <span className='font-bold text-3xl text-center'>Meet Our Team</span>
      <div>
        <div>
          
        </div>
      </div>
      </div>

      <div className='md:grid md:grid-flow-col md:grid-rows-3 lg:grid-rows-2 md:gap-4 xl:gap-16' >
        <div className='flex flex-col items-center mt-4 p-4'>
          <div className='mx-4 '>
            <Image src={IMG1} alt="Tony Stark"className='rounded-xl' />
          </div>
            <p className='font-bold text-xl pt-4'>Tony Stark</p>
            <p className='text-gray-500'>Cheif Executive Officer</p>
            <div className='w-12 bg-orange-500 h-[1px] mt-3'></div>
          <div className='mt-4 flex justfiy-between text-orange-500 space-x-2'>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <Link href="/https://twitter.com/"><FaTwitter /></Link>
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <BsInstagram />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaFacebookF />
            </div>
          </div>  
        </div>


        <div className='flex flex-col items-center mt-4 p-4'>
          <div className='mx-4'>
            <Image src={IMG1} alt="Tony Stark"className='rounded-xl' />
          </div>
            <p className='font-bold text-xl pt-4'>Tony Stark</p>
            <p className='text-gray-500'>Cheif Executive Officer</p>
            <div className='w-12 bg-orange-500 h-[1px] mt-3'></div>
          <div className='mt-4 flex justfiy-between text-orange-500 space-x-2'>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaTwitter />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <BsInstagram />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaFacebookF />
            </div>
          </div>  
        </div>


        <div className='flex flex-col items-center mt-4 p-4'>
          <div className='mx-4'>
            <Image src={IMG1} alt="Tony Stark"className='rounded-xl' />
          </div>
            <p className='font-bold text-xl pt-4'>Tony Stark</p>
            <p className='text-gray-500'>Cheif Executive Officer</p>
            <div className='w-12 bg-orange-500 h-[1px] mt-3'></div>
          <div className='mt-4 flex justfiy-between text-orange-500 space-x-2'>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaTwitter />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <BsInstagram />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaFacebookF />
            </div>
          </div>  
        </div>


        <div className='flex flex-col items-center mt-4 p-4'>
          <div className='mx-4'>
            <Image src={IMG1} alt="Tony Stark"className='rounded-xl' />
          </div>
            <p className='font-bold text-xl pt-4'>Tony Stark</p>
            <p className='text-gray-500'>Cheif Executive Officer</p>
            <div className='w-12 bg-orange-500 h-[1px] mt-3'></div>
          <div className='mt-4 flex justfiy-between text-orange-500 space-x-2'>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaTwitter />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <BsInstagram />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaFacebookF />
            </div>
          </div>  
        </div>


        <div className='flex flex-col items-center mt-4 p-4'>
          <div className='mx-4'>
            <Image src={IMG1} alt="Tony Stark"className='rounded-xl' />
          </div>
            <p className='font-bold text-xl pt-4'>Tony Stark</p>
            <p className='text-gray-500'>Cheif Executive Officer</p>
            <div className='w-12 bg-orange-500 h-[1px] mt-3'></div>
          <div className='mt-4 flex justfiy-between text-orange-500 space-x-2'>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaTwitter />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <BsInstagram />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaFacebookF />
            </div>
          </div>  
        </div>

        <div className='flex flex-col items-center mt-4 p-4'>
          <div className='mx-4'>
            <Image src={IMG1} alt="Tony Stark"className='rounded-xl' />
          </div>
            <p className='font-bold text-xl pt-4'>Tony Stark</p>
            <p className='text-gray-500'>Cheif Executive Officer</p>
            <div className='w-12 bg-orange-500 h-[1px] mt-3'></div>
          <div className='mt-4 flex justfiy-between text-orange-500 space-x-2'>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaTwitter />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaLinkedinIn />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <BsInstagram />
            </div>
            <div className='p-2 shadow-xl bg-white rounded-full hover:text-white hover:bg-orange-500 duration-150 cursor-pointer'>
              <FaFacebookF />
            </div>
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team