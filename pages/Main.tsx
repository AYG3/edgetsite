import Image from 'next/image'
import bgg from './assets/john-doe.jpg'
import React from 'react'

const Main = () => {
  return (
    <div>
        <div>
            <Image src={bgg} alt='background-img'/>
            <p className='absolute'>Make Tour & Explore</p>
            <p className='absolute'>Incredible Destinations</p>
        </div>
    </div>
  )
}

export default Main