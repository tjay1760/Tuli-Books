import React, { useState } from 'react'
import TuliLogo from '../assets/images/TuliBooksLogo.png'
import TuliBookText from '../assets/images/Tuli BooksText.png'

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Features', path: '/features' },
  { name: 'Resources', path: '/resources' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 sm:p-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img src={TuliLogo} alt="TuliBooks Logo" className="h-8 sm:h-10 md:h-12" />
          <h1 className="text-4xl font-extrabold text-[#071D6E]">Tuli Books</h1>
        </div>

        {/* Desktop Menu & Buttons - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-6 text-xl font-medium text-[#071D6E]">
          {NavLinks.map((link, index) => (
            <a key={index} href={link.path} className="hover:text-blue-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
                 <div className="flex items-center gap-4 ml-6">
            <button className="text-white bg-[#071D6E] py-2 px-4 font-bold rounded-lg shadow-lg hover:bg-blue-800 transition-colors">
              Sign In
            </button>
            <button className="text-[#071D6E] bg-white border border-[#071D6E] py-2 px-4 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

        {/* Mobile Hamburger Menu Button - Hidden on Desktop */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none p-2 rounded-md hover:bg-gray-200 transition-colors">
            {isOpen ? (
              <svg className="w-6 h-6 text-[#071D6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#071D6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Conditionally Rendered */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-4 text-sm font-semibold text-[#071D6E] py-4">
          {NavLinks.map((link, index) => (
            <a key={index} href={link.path} className="block hover:text-blue-500 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="w-full flex flex-col items-center gap-4 mt-2">
            <button className="w-full text-white bg-[#071D6E] py-2 px-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors">
              Sign In
            </button>
            <button className="w-full text-[#071D6E] bg-white border border-[#071D6E] py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
