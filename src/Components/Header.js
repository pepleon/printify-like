import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <nav className="fixed w-full bg-[#39B75D] p-4 md:px-40 z-50 max-w-full min-w-full">
      <div className='flex items-center justify-between'>
        <div className='text-white text-2xl font-bold hidden md:block'>Printify</div>

        <div className='flex md:hidden'>
          <button className='text-white' onClick={toggleMenu}>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 pr-44">
          <li className='text-white text-xl'><a href="#hero">Catalog</a></li>
          <li className='text-white text-xl'><a href="#about">Pricing</a></li>
          <li className='text-white text-xl'><a href="#services">Blog</a></li>
          <li className='text-white text-xl'><a href="#portfolio">Services</a></li>
          <li className='text-white text-xl'><a href="#testimonials">Use-cases</a></li>
          <li className='text-white text-xl'><a href="#contact">Need help?</a></li>
        </ul>

        <div className="space-x-4 hidden md:flex">
          <button className="bg-white text-black border border-gray-300 rounded px-4 py-2 font-bold">
            Log in
          </button>
          <button className="bg-green-500 text-white rounded px-4 py-2 font-bold">
            Sign up
          </button>
        </div>
      </div>

      {isOpenMenu && (
        <ul className="flex flex-col items-center md:hidden mt-4 space-y-4">
          <li className='text-white text-xl'><a href="#hero">Home</a></li>
          <li className='text-white text-xl'><a href="#about">About</a></li>
          <li className='text-white text-xl'><a href="#services">Services</a></li>
          <li className='text-white text-xl'><a href="#portfolio">Portfolio</a></li>
          <li className='text-white text-xl'><a href="#testimonials">Testimonials</a></li>
          <li className='text-white text-xl'><a href="#contact">Contact</a></li>
          <li className='text-white text-xl'>
            <div className="nav-buttons flex space-x-4">
              <button className="bg-white text-black border border-gray-300 rounded px-4 py-2 font-bold">
                Log in
              </button>
              <button className="bg-green-500 text-white rounded px-4 py-2 font-bold">
                Sign up
              </button>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
