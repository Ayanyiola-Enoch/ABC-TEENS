import React from 'react';
import logo from '../assets/images/ABC-logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <div className="h-12 w-12 mr-2">
                <img src={logo} className="h-full w-full object-contain" />
              </div>
              <div className="text-2xl font-bold text-[#2E3094]">
                ABC <span className="text-[#00A652]">TEENS</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="" className="text-gray-700 hover:text-[#2E3094] px-3 py-2 font-medium">Home</a>
            <a href="" className="text-gray-700 hover:text-[#2E3094] px-3 py-2 font-medium">Sermons</a>
            <a href="" className="text-gray-700 hover:text-[#2E3094] px-3 py-2 font-medium">Give</a>
            <a href="" className="text-gray-700 hover:text-[#2E3094] px-3 py-2 font-medium">About</a>
            <a href="" className="bg-[#00A652] text-white px-4 py-2 rounded-md hover:bg-[#008a44]">Sign in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;