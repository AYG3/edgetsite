import Image from 'next/image'
import React from 'react'
import map from './assets/map.png'
import './style.css'

const Dum = () => {
  return (
    <div className='mt-6 mb-6 grid justify-evenly p-4 items-center sm:grid sm:grid-flow-col sm:grid-rows-2 lg:grid-rows-1 gap-20'>
        <div className='flex flex-col items-center p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>Best Selections</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
        <div className='flex flex-col items-center p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>Reasonable Price</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
        <div className='flex flex-col items-center p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>Secure Payment</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
        <div className='flex flex-col items-center p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>24/7 Support</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
    </div>
  )
}

export default Dum;