import React from 'react'
import './style.css'
import Image from 'next/image'
import IMGP1 from './assets/product-1.jpg'
import IMGP2 from './assets/product-10.jpg'
import IMGP3 from './assets/product-5.jpg'
import IMGP4 from './assets/product-6.jpg'
import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs'



function Taccessories() {
  return (
    <div>
      <div className=''>
        <div className='flex flex-col items-center mt-8 p-4'>
            <div className=' flex justify-center relative w-36'>
                <p className='text-orange-500 font-bold '> Our Shop</p>
            </div>
            <p className='font-bold text-3xl'>Travel Accessories</p>
        </div>
      </div>

      <div className='flex mt-8 p-4 justify-between sm:w-[40rem] mx-auto  '>
        <button className='bg-orange-500 text-white rounded-tl-xl rounded-br-xl px-6 py-2'>All</button>
        <button className='hover:bg-orange-500 hover:text-white rounded-tl-xl rounded-br-xl px-6 py-2 border border-gray-300 duration-300 hover:border-transparent'>Travel Bag</button>
        <button className='hover:bg-orange-500 hover:text-white rounded-tl-xl rounded-br-xl px-6 py-2 border border-gray-300 duration-300 hover:border-transparent'>Shoe</button>
        <button className='hover:bg-orange-500 hover:text-white rounded-tl-xl rounded-br-xl px-6 py-2 border border-gray-300 duration-300 hover:border-transparent'>Backpack</button>
      </div>

      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        

        {/* CARD */}
        <div className='mt-8 sm:px-10 md:px-6  '>
            <div className='flex relative justify-center border border-gray-300 mx-4 rounded-tl-2xl rounded-br-2xl'>
                <Image src={IMGP1} alt="product"/>
                <div className='flex flex-col items-center mt-4 space-y-2 sm:px-4'>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <BsEyeSlash /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineHeart /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineShoppingCart /> </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <p className='font-bold text-xl'>Large Suitcase</p>
                <div className='flex relative my-2 text-sm'>4.5 <AiTwotoneStar className="absolute bottom-1 right-9 text-orange-500" /> <span className='pl-6 text-gray-400'> (120)</span></div>
                <p className='font-bold'>From <span className='text-orange-500'>$1412</span></p>
            </div>
        </div>
        {/* CARD */}
        <div className='mt-8 sm:px-10 md:px-6 '>
            <div className='flex relative justify-center border border-gray-300 mx-4 rounded-tl-2xl rounded-br-2xl'>
                <Image src={IMGP1} alt="product"/>
                <div className='flex flex-col items-center mt-4 space-y-2 sm:px-4'>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <BsEyeSlash /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineHeart /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineShoppingCart /> </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <p className='font-bold text-xl'>Large Suitcase</p>
                <div className='flex relative my-2 text-sm'>4.5 <AiTwotoneStar className="absolute bottom-1 right-9 text-orange-500" /> <span className='pl-6 text-gray-400'> (120)</span></div>
                <p className='font-bold'>From <span className='text-orange-500'>$1412</span></p>
            </div>
        </div>
        {/* CARD */}
        <div className='mt-8 sm:px-10 md:px-6 '>
            <div className='flex relative justify-center border border-gray-300 mx-4 rounded-tl-2xl rounded-br-2xl'>
                <Image src={IMGP1} alt="product"/>
                <div className='flex flex-col items-center mt-4 space-y-2 sm:px-4'>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <BsEyeSlash /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineHeart /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineShoppingCart /> </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <p className='font-bold text-xl'>Large Suitcase</p>
                <div className='flex relative my-2 text-sm'>4.5 <AiTwotoneStar className="absolute bottom-1 right-9 text-orange-500" /> <span className='pl-6 text-gray-400'> (120)</span></div>
                <p className='font-bold'>From <span className='text-orange-500'>$1412</span></p>
            </div>
        </div>
        {/* CARD */}
        <div className='mt-8 sm:px-10 md:px-6 lg:px-[22rem] xl:px-6  lg:col-span-3 xl:col-span-1'>
            <div className='flex relative justify-center border border-gray-300 mx-4 rounded-tl-2xl rounded-br-2xl'>
                <Image src={IMGP1} alt="product"/>
                <div className='flex flex-col items-center mt-4 space-y-2 sm:px-4'>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <BsEyeSlash /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineHeart /> </button>
                    <button className='text-2xl border border-gray-400 py-2 px-2 rounded-tl-2xl rounded-br-2xl hover:border-transparent hover:bg-orange-500 hover:text-white duration-300'> <AiOutlineShoppingCart /> </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <p className='font-bold text-xl'>Large Suitcase</p>
                <div className='flex relative my-2 text-sm'>4.5 <AiTwotoneStar className="absolute bottom-1 right-9 text-orange-500" /> <span className='pl-6 text-gray-400'> (120)</span></div>
                <p className='font-bold'>From <span className='text-orange-500'>$1412</span></p>
            </div>
        </div>

      </div>


    </div>
  )
}

export default Taccessories
