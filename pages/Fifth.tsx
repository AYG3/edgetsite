import React from 'react'
import './style.css'
import { BsPersonCircle } from 'react-icons/bs'
import Image from 'next/image'
import IMG1 from './assets/john-doe.jpg'


const data = [
  {
    img:{IMG1},
    name : "Tony Stark",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni, deleniti culpa officiis accusantium id ad excepturi neque ab autem rerum amet aut ratione quas, hic dolor illum eos commodi."
  }
]


const Fifth = () => {
  return (
    <div>
      <header className='flex flex-col items-center bg-gray-100 py-11'>
        <h1 className=' font-extrabold text-3xl pt-16 '> About Us </h1>
        <p className='pt-4'> Home {'>>'} About Us</p>
      </header>


      <div className='bg-gray-100' >
      {/*OVERALL DIV ^ */}



        <div className='flex flex-col items-center mt-8 p-4'>
          <div className='flex relative w-32'>
            <p className='font-bold text-orange-500'>ABOUT US </p>
            <div className='absolute right-1 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
          </div>
          <p className='font-bold text-3xl'>We Provide Best Deals</p>
          <p className='text-gray-500 p-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        </div>

        <div className='flex mt-4 p-4 justify-between bg-white shadow mx-4 rounded-xl'>
          <div className='flex items-center p-4'>
            <BsPersonCircle className="text-5xl text-orange-500 " />
          </div>
          <div className=''>
            <p className='font-bold text-2xl'>Quality Services Ensure</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='flex mt-4 p-4 justify-between bg-white shadow mx-4 rounded-xl'>
          <div className='flex items-center p-4 '>
            <BsPersonCircle className="text-5xl text-orange-500 " />
          </div>
          <div className=''>
            <p className='font-bold text-2xl'>Customer Care</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='flex mt-4 p-4 justify-between bg-white shadow mx-4 rounded-xl'>
          <div className='flex items-center p-4'>
            <BsPersonCircle className="text-5xl text-orange-500 " />
          </div>
          <div className=''>
            <p className='font-bold text-2xl'>Experience Guides</p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
        </div>

        {/* TESTIMONIALS */}

        <div className='flex flex-col items-center mt-4 border border-gray-400 mx-4 rounded-tl-xl'>
          {/* {
            data.map(({}) =>{
              return( */}
                <div className=''>
                  <Image src={IMG1} alt="" className='rounded-tl-xl object-center object-cover h-80' />
                </div>
                <div className='flex flex-col items-start p-4'>
                  <p className='font-bold text-lg'> Tony Stark</p>
                  <small className='text-gray-400'>USA</small>
                  <p className='text-gray-400 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus veniam reprehenderit rem atque odit inventore a, temporibus maxime officia fuga quae quia animi laborum?</p>
                </div>
              {/* )
            })
            
          } */}
        </div>

        <div className='flex flex-col items-center mt-8 p-4'>
          <div className=' flex justify-center relative w-36'>
          <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            <p className='text-orange-500 font-bold '> OUR ALL</p>
            <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
          </div>
          <p className='font-bold text-3xl'>Provided Services</p>
        </div>

      </div>


    </div>
  )
}
export default Fifth;