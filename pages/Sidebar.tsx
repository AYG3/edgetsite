import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'; // Import location icon

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 right-0 w-1/3 h-full bg-gray-800 opacity-75 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 bg-white">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <button onClick={toggleSidebar}><FaTimes className="text-xl" /></button>
      </div>
      <hr className="w-4/5 mx-auto my-2 border-t border-gray-300" />
      <div className="p-4 shadow-md bg-white">
        <div className="flex items-center mb-2">
          <MdLocationOn className="text-2xl mr-2" />
          <p>123 Main St, City</p>
        </div>
        {/* Social icons */}
        {/* ... */}
      </div>
      <div className="mt-4 p-4 shadow-md bg-white">
        {/* Grid for second card */}
        {/* ... */}
      </div>
      <div className="mt-4 p-4 shadow-md bg-white">
        {/* Map */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Sidebar;
