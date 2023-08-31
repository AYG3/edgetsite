import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`p-12 fixed top-0 right-0 w-1/3 h-full bg-white transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1000 }}>
      <div className="flex justify-between items-center p-12 bg-white mt-6">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <button onClick={toggleSidebar}><FaTimes className="text-2xl rounded-full border border-orange-500 p-1" /></button>
      </div>
      <hr className="w-4/5 mx-auto my-2 border-t border-orange-300" />
      <div className="p-4 shadow-sm bg-white shadow-orange-500 m-4">
        <MdLocationOn className="text-3xl mr-2 p-1 border rounded-full border-orange-500" />
        <p>San Francisco, USA</p>
        <p>Address: 123 Westearn Road, LA</p>
        <p>Phone: 213-200-8224</p>
        <p>Follow Us On:</p>
        <p>Social Icons go here</p>
      </div>
      <div className="mt-4 p-4 shadow-md bg-white">
        {/* Map */}
      </div>
    </div>
  );
};

export default Sidebar
