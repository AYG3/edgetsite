import React from 'react'
import './style.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Eight = () => {
  return (
    <div>
      <Navbar />

      <div className='grid grid-cols-4 m-16'>
        <div className='p-4 w-full col-span-1'>
        <div className='grid bg-gray-300'>
          <p className='bg-[#f4834a] p-3 text-white'>Profile</p>
          <p className='p-3'>Shipping Address</p>
          <p className='p-3'>My Order</p>
          <p className='p-3'>Log Out</p>
        </div>
        </div>
        <div className='col-span-3'>
          <div>
            <div className="p-4 sm:px-0">
              <h3 className="text-xl font-bold text-gray-900">User Details</h3>
            </div>
            <div className="mt-4 border border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium text-gray-900">Full name:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Jhon Cornor</dd>
                </div>
                <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium text-gray-900">Bio:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt minus accusamus dignissimos. Debitis tenetur voluptatum ducimus quis provident soluta molestiae dolorum veritatis hic quaerat!</dd>
                </div>
                <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium text-gray-900">Email:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">jhonconor@email.com</dd>
                </div>
                <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium text-gray-900">Phone:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">+000 0000 000</dd>
                </div>
                <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium text-gray-900">Country:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">USA</dd>
                </div>
                <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium text-gray-900">Postcode:</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">0000</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Eight