import React from 'react'
import { ReactTyped } from 'react-typed'
import Heroimage from '../assets/images/Tuli-hero-image.png'
const Hero = () => {
  return (
    <div className='grid grid-cols-2 gap-10 px-10'>
      <div className="words flex flex-col items-start justify-center gap-10">
        <div className="heading text-7xl font-bold leading-20 text-[#071D6E]">
          All-in-one <span className='text-[#0957FF]'>Finance Software</span> for Individuals and Growing Businesses
        </div>
        <div className="description font-semibold text-xl text-[#071D6E]">
          Simplify Bookeeping Invoicing and tax compliance with AI-powered Tools
        </div>
        <div className="bot border bg-[#071D6E] w-5/6 flex justify-between p-2 rounded">
          <ReactTyped
            strings={['Sign In', 'Get Started']}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="flex-1 px-4 py-3 text-white bg-transparent border-none outline-none text-lg"
          />
          <button
          className='border px-4 py-2 font-bold text-[#071D6E] bg-white rounded-xl shadow-lg'
          >Tuli chat</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Heroimage} alt="Hero Image"
        className='w-full'
        />
      </div>
    </div>
  )
}

export default Hero