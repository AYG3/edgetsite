import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import MACAU from './assets/macau-city.jpg';
import Image from 'next/image';

const Utour = () => {
    return (
        <div>
            <div className='flex flex-col space-y-8 lg:grid lg:grid-cols-2 pt-12 lg:space-y-0 lg:gap-8 text-gray-700' >
                {/* CARD */}
                <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                    <div className='h-full'>
                        <Image src={MACAU} alt="" className='rounded-l-xl h-full object-cover object-center sm:rounded-l-md' />
                    </div>
                    <div>
                        <div className='mt-4'>
                            <h1 className='font-semibold text-2xl p-4 pb-2 pt-2'>France Experience</h1>
                            <p className='flex w-full justify-between p-4 pb-0 pt-0'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0 text-orange-500" /> (80)</span></p>
                            <p className='p-4 pb-0 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                            <p className='p-4 pt-2'>From <span className='font-semibold'>$1,412</span></p>
                        </div>
                        <hr className='border' />
                        <p className='font-semibold p-4 pb-2 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                    </div>
                </div>
                {/* CARD */}
                <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                    <div className='h-full'>
                        <Image src={MACAU} alt="" className='rounded-l-xl h-full object-cover object-center sm:rounded-l-md' />
                    </div>
                    <div>
                        <div className=''>
                            <h1 className='font-semibold text-2xl p-4 pb-2 pt-2'>France Experience</h1>
                            <p className='flex w-full justify-between p-4 pt-0 pb-0'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0 text-orange-500" /> (80)</span></p>
                            <p className='p-4 pb-0 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                            <p className='p-4 pt-2'>From <span className='font-semibold'>$1,412</span></p>
                        </div>
                        <hr className='border' />
                        <p className='font-semibold p-4 pb-2 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                    </div>
                </div>
                {/* CARD */}
                <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                    <div className='h-full'>
                        <Image src={MACAU} alt="" className='rounded-l-xl h-full object-cover object-center sm:rounded-l-md' />
                    </div>
                    <div>
                        <div className='mt-4'>
                            <h1 className='font-semibold text-2xl p-4 pb-2 pt-2'>France Experience</h1>
                            <p className='flex w-full justify-between p-4 pb-0 pt-0'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0 text-orange-500" /> (80)</span></p>
                            <p className='p-4 pb-0 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                            <p className='p-4 pt-2'>From <span className='font-semibold'>$1,412</span></p>
                        </div>
                        <hr className='border' />
                        <p className='font-semibold p-4 pb-2 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                    </div>
                </div>
                {/* CARD */}
                <div className='flex flex-col w-11/12 items-center border sm:grid sm:grid-flow-col sm:grid-cols-2 sm:cols  rounded-xl'>
                    <div className='h-full'>
                        <Image src={MACAU} alt="" className='rounded-l-xl h-full object-cover object-center sm:rounded-l-md' />
                    </div>
                    <div>
                        <div className=''>
                            <h1 className='font-semibold text-2xl p-4 pb-2 pt-2'>France Experience</h1>
                            <p className='flex w-full justify-between p-4 pt-0 pb-0'>10 days <span className='flex relative'>4.5 <AiTwotoneStar className="aboslute bottom-0 text-orange-500" /> (80)</span></p>
                            <p className='p-4 pb-0 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                            <p className='p-4 pt-2'>From <span className='font-semibold'>$1,412</span></p>
                        </div>
                        <hr className='border' />
                        <p className='font-semibold p-4 pb-2 flex justify-between w-full text-orange-500 cursor-pointer'>Book Now <span className=' text-black hover:text-orange-500 duration-100'>Tour Details</span></p>
                    </div>
                </div>

               

            </div>


        </div>
    )
}

export default Utour