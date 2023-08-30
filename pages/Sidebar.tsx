import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 right-0 w-1/3 h-full bg-white transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Contact Info</h2>
        <button onClick={toggleSidebar}><FaTimes className="text-xl" /></button>
      </div>
      <div className="p-4">
        {/* Add your contact information here */}
        <p className="mb-2">Address: Your Address</p>
        <p>Phone: +1(514)321-4567</p>
        {/* ... */}
      </div>
    </div>
  );
};

export default Sidebar;
