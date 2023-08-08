import React from 'react'
import './style.css'
import { BsPersonCircle } from 'react-icons/bs'
import Image from 'next/image'
import IMG1 from './assets/john-doe.jpg'
import IMGS1 from './assets/service-5.png'
import IMGS2 from './assets/service-6.png'
import IMGS3 from './assets/service-7.png'
import IMGS4 from './assets/service-8.png'
import IMGT1 from './assets/sydney.jpg'
import IMGT2 from './assets/italy.jpg'
import IMGT3 from './assets/Thailand.jpg'
import IMGT4 from './assets/Rome.jpg'
import IMGN from './assets/Newsletter.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import { BiTime } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'


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
      <Navbar />
      <header className='flex flex-col items-center bg-gray-100 py-11'>
        <h1 className=' font-extrabold text-3xl pt-16 '> About Us </h1>
        <p className='pt-4'> Home {'>>'} About Us</p>
      </header>


      <div className='bg-gray-100' >
      {/*OVERALL DIV ^ */}




        {/* SERVICES AND TESTIMONIALS */}
        <div className='grid lg:grid-flow-col lg:grid-cols-2 sm:mx-12 xl:mx-32'>
          <div>
            <div className='flex flex-col items-center mt-8 p-4 md:items-start'>
              <div className='flex relative w-32'>
                <p className='font-bold text-orange-500'>ABOUT US </p>
                <div className='absolute right-1 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
              </div>
              <p className='font-bold text-4xl'>We Provide Best Deals</p>
              <p className='text-gray-500 p-4 md:pl-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            </div>


          {/* SERVICES */}
            <div className='flex mt-4 p-4 justify-between bg-white shadow-sm mx-4 rounded-xl  '>
              <div className='flex items-center p-4'>
                <BsPersonCircle className="text-5xl text-orange-500 " />
              </div>
              <div className=''>
                <p className='font-bold text-2xl'>Quality Services Ensure</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
              </div>
            </div>
            <div className='flex mt-4 p-4 justify-between bg-white shadow-sm mx-4 rounded-xl '>
              <div className='flex items-center p-4 '>
                <BsPersonCircle className="text-5xl text-orange-500 " />
              </div>
              <div className=''>
                <p className='font-bold text-2xl'>Customer Care</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
              </div>
            </div>
            <div className='flex mt-4 p-4 justify-between bg-white shadow-sm mx-4 rounded-xl '>
              <div className='flex items-center p-4'>
                <BsPersonCircle className="text-5xl text-orange-500 " />
              </div>
              <div className=''>
                <p className='font-bold text-2xl'>Experience Guides</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
              </div>
            </div>
          </div>


  
          {/* TESTIMONIALS */}

          <div className='flex flex-col items-center mt-4 w-full border border-gray-400 rounded-tl-3xl rounded-br-3xl'>
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
        </div>
        
        

        
        


        {/* SERVICES */}
        <div>
          <div className='flex flex-col items-center mt-8 p-4'>
            <div className=' flex justify-center relative w-36'>
            <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
              <p className='text-orange-500 font-bold '> OUR ALL</p>
              <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            </div>
            <p className='font-bold text-3xl'>Provided Services</p>
          </div>


          <div className=' grid justify-center mt-2 sm:grid sm:grid-flow-col sm:grid-rows-2 lg:grid-rows-1 gap-20'>

            {/* CARD */}
            <div className='flex flex-col items-center mt-4 w-max group'>
                <div className=''>
                  <Image src={IMGS1} alt="service" className='cursor-pointer'/>
                </div>
                <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Car Rental Services</p>
                <p className='text-md text-orange-500'>100+ Listing</p>
            </div>
            {/* CARD */}
            <div className='flex flex-col items-center mt-4 w-max group'>
                <div className=''>
                  <Image src={IMGS2} alt="service" className='cursor-pointer'/>
                </div>
                <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Hotel Booking</p>
                <p className='text-md text-orange-500'>65+ Listing</p>
            </div>
            {/* CARD */}
            <div className='flex flex-col items-center mt-4 w-max group'>
                <div className=''>
                  <Image src={IMGS3} alt="service" className='cursor-pointer'/>
                </div>
                <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Restaurant</p>
                <p className='text-md text-orange-500'>100+ Listing</p>
            </div>
            {/* CARD */}
            <div className='flex flex-col items-center mt-4 w-max group'>
                <div className=''>
                  <Image src={IMGS4} alt="service" className='cursor-pointer'/>
                </div>
                <p className='font-bold text-2xl group-hover:text-orange-500 duration-150'>Club & Bar</p>
                <p className='text-md text-orange-500'>45+ Listing</p>
            </div>

          </div>
          
          <div className='flex flex-col items-center mt-4 w-full'>
            <button className='py-3 px-8 font-semibold border border-black rounded-md hover:text-white hover:bg-orange-500 hover:border-transparent duration-150'>All Services</button>
          </div>  
        </div>

      </div>


      {/* UPCOMING TOURS */}
      <div className=''>
          <div className='flex flex-col items-center mt-8 p-4'>
            <div className=' flex justify-center relative w-40'>
            <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
              <p className='text-orange-500 font-bold '> UPCOMING</p>
              <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            </div>
            <p className='font-bold text-3xl'>Best Tours</p>
          </div>

          <div className='mt-4 md:grid md:grid-flow-col md:grid-rows-3 lg:grid-rows-2'>
            {/* CARDS */}
            <div className='mt-4'>
              <div className='flex items-center relative mx-4 justify-center sm:mx-12'>
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
              <div className='flex items-center relative mx-4 justify-center sm:mx-12'>
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
              <div className='flex items-center relative mx-4 justify-center sm:mx-12'>
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
              <div className='flex items-center relative mx-4 justify-center sm:mx-12'>
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
              <div className='flex items-center relative mx-4 justify-center sm:mx-12'>
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
              <div className='flex items-center relative mx-4 justify-center sm:mx-12'>
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


        {/* NEWSLETTER */}
        <div className='mt-4'>
          <div className='flex p-4 items-center justify-center relative sm:mx-12 md:mx-4 md:justify-normal xl:mx-12'>
            <Image src={IMGN} alt="newsletter" className='w-full rounded-2xl h-96 lg:h-[32rem] object-cover object-center' />
            {/* <div className='bg-yellow-500'>

            </div> */}
            <div className='absolute flex flex-col items-center p-4 w-auto mx-8 bg-white sm:w-[30rem] md:right-5 '>
              <p className='text-orange-500 ' >Get Subscribe</p>
              <p className='font-bold text-3xl mt-2'>Our Newsletter</p>
              <p className='text-gray-500 mt-4 text-md'>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
              <input type='text' placeholder="Enter Your Email Address" className='border w-full text-center py-4 mt-4'/>
              <button className='bg-orange-500 py-4 font-bold text-xl w-full mt-4 text-white'>Subscribe Now</button>
            </div>
          </div>
          
        </div>
      </div>
        <Footer />
    </div>
  )
}
export default Fifth;