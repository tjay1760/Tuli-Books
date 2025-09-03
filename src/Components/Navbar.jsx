import React from 'react'
import TuliLogo from '../assets/images/TuliBooksLogo.png'
import TuliBookText from '../assets/images/Tuli BooksText.png'

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Features', path: '/features' },
  { name: 'Resources', path: '/resources' },
]
const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-10">
      <div className="logo flex items-center gap-6">
        <img src={TuliLogo} alt="TuliBooks Logo" />
        <img src={TuliBookText} alt="TuliBooks Text" />
      </div>
      <div className="menu flex gap-6 font-bold text-xl">
        {NavLinks.map((link, index) => (
          <a key={index} href={link.path} className="menu-item text-[#071D6E]">
            {link.name}
          </a>
        ))}
      </div>
      <div className="buttons flex gap-6">
        <button className="login-btn text-white bg-[#071D6E] p-2 px-4 rounded-xl">Sign In</button>
        <button className="signup-btn text-[#071D6E] bg-white border border-[#071D6E] p-2 rounded-xl">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar