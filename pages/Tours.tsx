import Image from 'next/image'
import './style.css'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import IMGT1 from './assets/sydney.jpg'
import IMGT2 from './assets/italy.jpg'
import IMGT3 from './assets/Thailand.jpg'
import IMGT4 from './assets/Rome.jpg'

function Tours() {
  return (
    <div>
      <div className=''>
          

          <div className='mt-4 md:grid md:grid-flow-col md:grid-rows-3 lg:grid-rows-2'>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12 md:mx-4'>
                <Image src={IMGT1} alt="place" className='h-96 rounded-2xl object-cover object-center'/>
                <div className='absolute border border-black px-4 py-8 m-4 w-[27rem] bg-white sm:w-96 md:w-60 xl:w-72'>
                  <p className='font-bold text-2xl'>Sydney Tour</p>
                  <div className='flex justify-between w-40'>
                    <p className='flex relative pl-4'><BiTime className="absolute left-0 bottom-1" /> 5 days</p> 
                    <span className='flex relative'>
                      4.8 <AiFillStar className="absolute bottom-1 right-10 text-orange-500" /><span className='pl-8 text-gray-400'>(200)</span> 
                    </span>
                  </div>  
                  <p className='font-bold'>$800 <span className='text-gray-400 line-through'>$1000</span></p>
                </div>              
              </div>              
            </div>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12 md:mx-4'>
                <Image src={IMGT2} alt="place" className='h-96 rounded-2xl object-cover object-center'/>
                <div className='absolute border border-black px-4 py-8 m-4 w-[27rem] bg-white sm:w-96 md:w-60 xl:w-72'>
                  <p className='font-bold text-2xl'>Sydney Tour</p>
                  <div className='flex justify-between w-40'>
                    <p className='flex relative pl-4'><BiTime className="absolute left-0 bottom-1" /> 5 days</p> 
                    <span className='flex relative'>
                      4.8 <AiFillStar className="absolute bottom-1 right-10 text-orange-500" /><span className='pl-8 text-gray-400'>(200)</span> 
                    </span>
                  </div>  
                  <p className='font-bold'>$800 <span className='text-gray-400 line-through'>$1000</span></p>
                </div>              
              </div>              
            </div>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12 md:mx-4'>
                <Image src={IMGT3} alt="place" className='h-96 rounded-2xl object-cover object-center'/>
                <div className='absolute border border-black px-4 py-8 m-4 w-[27rem] bg-white sm:w-96 md:w-60 xl:w-72'>
                  <p className='font-bold text-2xl'>Sydney Tour</p>
                  <div className='flex justify-between w-40'>
                    <p className='flex relative pl-4'><BiTime className="absolute left-0 bottom-1" /> 5 days</p> 
                    <span className='flex relative'>
                      4.8 <AiFillStar className="absolute bottom-1 right-10 text-orange-500" /><span className='pl-8 text-gray-400'>(200)</span> 
                    </span>
                  </div>  
                  <p className='font-bold'>$800 <span className='text-gray-400 line-through'>$1000</span></p>
                </div>              
              </div>              
            </div>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12 md:mx-4'>
                <Image src={IMGT4} alt="place" className='h-96 rounded-2xl object-cover object-center'/>
                <div className='absolute border border-black px-4 py-8 m-4 w-[27rem] bg-white sm:w-96 md:w-60 xl:w-72'>
                  <p className='font-bold text-2xl'>Sydney Tour</p>
                  <div className='flex justify-between w-40'>
                    <p className='flex relative pl-4'><BiTime className="absolute left-0 bottom-1" /> 5 days</p> 
                    <span className='flex relative'>
                      4.8 <AiFillStar className="absolute bottom-1 right-10 text-orange-500" /><span className='pl-8 text-gray-400'>(200)</span> 
                    </span>
                  </div>  
                  <p className='font-bold'>$800 <span className='text-gray-400 line-through'>$1000</span></p>
                </div>              
              </div>              
            </div>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12 md:mx-4'>
                <Image src={IMGT1} alt="place" className='h-96 rounded-2xl object-cover object-center'/>
                <div className='absolute border border-black px-4 py-8 m-4 w-[27rem] bg-white sm:w-96 md:w-60 xl:w-72'>
                  <p className='font-bold text-2xl'>Sydney Tour</p>
                  <div className='flex justify-between w-40'>
                    <p className='flex relative pl-4'><BiTime className="absolute left-0 bottom-1" /> 5 days</p> 
                    <span className='flex relative'>
                      4.8 <AiFillStar className="absolute bottom-1 right-10 text-orange-500" /><span className='pl-8 text-gray-400'>(200)</span> 
                    </span>
                  </div>  
                  <p className='font-bold'>$800 <span className='text-gray-400 line-through'>$1000</span></p>
                </div>              
              </div>              
            </div>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12 md:mx-4'>
                <Image src={IMGT1} alt="place" className='h-96 rounded-2xl object-cover object-center'/>
                <div className='absolute border border-black px-4 py-8 m-4 w-[27rem] bg-white sm:w-96 md:w-60 xl:w-72'>
                  <p className='font-bold text-2xl'>Sydney Tour</p>
                  <div className='flex justify-between w-40'>
                    <p className='flex relative pl-4'><BiTime className="absolute left-0 bottom-1" /> 5 days</p> 
                    <span className='flex relative'>
                      4.8 <AiFillStar className="absolute bottom-1 right-10 text-orange-500" /><span className='pl-8 text-gray-400'>(200)</span> 
                    </span>
                  </div>  
                  <p className='font-bold'>$800 <span className='text-gray-400 line-through'>$1000</span></p>
                </div>              
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tours
