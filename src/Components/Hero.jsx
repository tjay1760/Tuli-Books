import React, {useState, useEffect} from 'react'
import { Link, Element } from 'react-scroll';
import { FaArrowRight } from "react-icons/fa";


import { ReactTyped } from 'react-typed';
import Heroimage from '../assets/images/Tuli-hero-image.png'
const chatbotQuestions = [
  "Top 5 vendors this month?",
  "Sales summary for today?",
  "New customers signed up this week?",
  "Top product last quarter?",
  "Revenue breakdown by region?",
  "Largest purchase this month?",
  "Daily transactions past week?",
  "Average order value this year?",
  "Top sales agents this quarter?",
  "Unresolved support tickets count?",
  "Monthly sales comparison?",
  "Most used payment methods?",
  "Inventory status for products?",
  "Best marketing campaign leads?",
  "Churn rate past 6 months?",
];
const texts = [
    "Finance",
    "Sales",
    "Inventory",
    "Marketing",
    "Business"
  ];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className='md:flex gap-6 sm:gap-8 md:gap-6 p-4 sm:p-6 md:p-8 lg:px-10 mx-auto items-center justify-center lg:max-w-[100rem]'>
      <div className="words flex flex-col items-start justify-center gap-6 sm:gap-8 md:gap-10">
        <div className="heading text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold md:leading-12 xl:leading-16 text-[#071D6E]">
          All-in-one
          <span className="text-[#0066FF]"> {texts[currentIndex]} </span>
          Software
             for Individuals and Growing Businesses
        </div>
        <div className="description font-semibold text-lg sm:text-xl text-[#071D6E]">
          Simplify Bookeeping Invoicing and tax compliance with AI-powered Tools
        </div>
        <div className="bot border  bg-[#071D6E] w-full flex flex-wrap justify-between rounded-lg p-2">
          <ReactTyped
            strings={chatbotQuestions}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="flex-1 px-4 py-3 text-white bg-transparent border-none outline-none text-base sm:text-lg"
          />
          <button
          className='border px-5 py-2 font-medium text-[#071D6E] text-xl bg-white rounded-xl shadow-lg mt-2 sm:mt-0 flex items-center justify-center gap-2'
          >Tuli Chat
          <FaArrowRight className='inline-block ml-2 font-medium' />
          </button>
        </div>
      </div>
      <div className="hero-image hidden lg:block xl:w-7/12 lg:w-6/12">
        <img src={Heroimage} alt="Hero Image"
        className='max-w-7xl'
        />
      </div>
    </div>
  )
}

export default Hero;
