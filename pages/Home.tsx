import './style.css'
import Navbar from './Navbar'
import Dum from './Dum'
import Main from './Main'
import Tours from './Tours'
import Services from './Services'
import { TbDirectionSign } from 'react-icons/tb'
import RecDestinations from './RecDestinations'
import Utour from './Utour'
import Taccessories from './Taccessories'
import LnewsAndUpdates from './LnewsAndUpdates'
import Newsletter from './Newsletter'
import Footer from './Footer'

export default function Dashboard() {
  return (
    <div>
        <Navbar />
      <Main />
      <Dum />
      <Tours />
      <Services />
      <div className='flex items-center justify-center mt-6'>
            <button className='flex border justify-center items-center p-2 rounded-lg text-gray-700 hover:bg-orange-500 hover:text-white pr-6 pl-6 ease-in duration-200'>
              <p className=''>All Services</p>
              <TbDirectionSign className="ml-2" />
            </button>
      </div>
      <RecDestinations />
      <div className='flex flex-col items-center mt-28 p-4'>
            <div className=' flex justify-center relative w-40'>
            <div className='absolute left-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
              <p className='text-orange-500 font-bold uppercase'>Upcoming</p>
              <div className='absolute right-0 bottom-3 bg-orange-500 w-8 h-[2px] '></div>
            </div>
            <p className='font-bold text-3xl'>Feature Tours</p>
          </div>
      <Utour />
      <div className='flex items-center justify-center mt-6'>
            <button className='flex border justify-center items-center p-2 rounded-lg text-gray-700 hover:bg-orange-500 hover:text-white pr-6 pl-6 ease-in duration-200'>
              <p className=''>Upcoming Tours</p>
              <TbDirectionSign className="ml-2" />
            </button>
      </div>
      <Taccessories />
      <LnewsAndUpdates />
      <Newsletter />
      <Footer />
    </div>
  )
}