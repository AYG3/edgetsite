import React from 'react';
import './style.css';
import Navbar from './Navbar';
import IMG from './assets/single-tour-1.jpg';
import Image from 'next/image';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const Third = () => {
  return (
    <div className=''>
      <Navbar />
      <header className='flex flex-col items-center bg-gray-100'>
        <h1 className=' font-bold text-3xl pt-16 '> South Island, Newzealand </h1>
        <p className='pt-4'> Home {'>>'} Tour Details</p>
      </header>

      <div className='mt-12 border border-gray-500 mx-2 p-8'>
        <div className='mx-4'>
          < Image src={IMG} alt="" />
        </div>
        <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
        
        <div className='mt-4 space-y-6'>
          <p className='font-bold text-2xl'>Included</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" /> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" />Lorem ipsum dolor sit At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,</p>
        </div>
        <div className='mt-4 space-y-6'>
          <p className='font-bold text-2xl'>Included</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" /> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,</p>
          <p className='flex justify-between pl-6'> <BsFillArrowRightSquareFill className=" absolute text-orange-500 -translate-x-6 translate-y-1" />Lorem ipsum dolor sit At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,</p>
        </div>

        <div className='mt-4 space-y-6'>
          <p className='font-bold text-2xl'>Trip Plan</p>
          <p className='flex flex-col text-lg ml-2'><span className='font-bold text-xl pb-4'>Day 01</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, alias quo perspiciatis at, laborum laboriosam! </p>
          <p className='flex flex-col text-lg ml-2'><span className='font-bold text-xl pb-4'>Day 02</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, alias quo perspiciatis at, laborum laboriosam! </p>
          <p className='flex flex-col text-lg ml-2'><span className='font-bold text-xl pb-4'>Day 03</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, alias quo perspiciatis at, laborum laboriosam! </p>
          <p className='flex flex-col text-lg ml-2'><span className='font-bold text-xl pb-4'>Day 04</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, alias quo perspiciatis at, laborum laboriosam! </p>
        </div>

        <div className="relative inline-block group">
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none">
    What languages do you offer tours in
  </button>
  <div className="absolute hidden bg-white border border-gray-300 p-4 mt-2 rounded shadow-md w-64 group-hover:block">
    <p className="text-gray-700">
      We offer tours in various languages to provide you with the best experience. Our tours are available in English, Spanish, French, German, and Italian.
    </p>
  </div>
</div>


      </div>


    </div>
  )
}

export default Third