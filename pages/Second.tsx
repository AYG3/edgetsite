import React from 'react'
import { GoSearch } from 'react-icons/go';



const Second = () => {
  return (
    <div>
      <header className='flex flex-col items-center'>
        <h1 className=' font-extrabold text-5xl pt-16 '> Find Best Tours </h1>
        <p className='pt-4'> Home {'>>'} Tour</p>
      </header>

      <div>
        {/* {FILTER DIV} */}
        <div>
        <div className="flex items-center rounded-lg">
        <input type="text" placeholder="Keywords" className="py-2 px-4 rounded-lg "/>
        <div className="relative">
          <GoSearch className="h-6 w-6 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>


        </div>
      </div>
    </div>  
  )
}

export default Second;