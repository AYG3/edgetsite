import Image from 'next/image'
import React from 'react'
import map from './assets/map.png'
import './style.css'

const Dum = () => {
  return (
    <div className='flex justify-between p-15 items-center'>
        <div className='flex flex-col items-center p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>Best Selections</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
        <div className='grid p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>Reasonable Price</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
        <div className='grid p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>Secure Payment</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
        <div className='grid p-2'>
            <Image src={map} alt='gotcha' />
            <p className='font-bold text-xl text-gray-900'>24/7 Support</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.</p>
        </div>
    </div>
  )
}

export default Dum;