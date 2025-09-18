import React, {useState, useEffect} from 'react'
import { Link, Element } from 'react-scroll';
import { FaArrowRight } from "react-icons/fa";


import { ReactTyped } from 'react-typed';
import Heroimage from '../assets/images/Tuli-hero-image.png'
const chatbotQuestions = [
  "What are the top 5 vendors this month?",
  "Show me the sales summary for today.",
  "How many new customers signed up this week?",
  "What was the highest-selling product last quarter?",
  "Give me a breakdown of revenue by region.",
  "Which customer made the largest purchase this month?",
  "Show the daily transaction count for the past 7 days.",
  "What is the average order value this year?",
  "List the top-performing sales agents this quarter.",
  "How many support tickets are still unresolved?",
  "Show me a comparison between this month and last month.",
  "What payment methods are used most frequently?",
  "Give me the inventory status for all products.",
  "Which marketing campaign brought the most leads?",
  "What is the churn rate for the past 6 months?",
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
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className='md:flex gap-6 sm:gap-8 md:gap-6 p-4 sm:p-6 md:p-8 lg:px-10 mx-auto items-center justify-center lg:max-w-[100rem]'>
      <div className="words flex flex-col items-start justify-center gap-6 sm:gap-8 md:gap-10">
        <div className="heading text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold md:leading-20 text-[#071D6E]">
          All-in-one &nbsp;
            <ReactTyped
            strings={texts}
            typeSpeed={80}
            backSpeed={80}
            loop
            className="inline-block text-[#0957FF]"
          />
          <br />
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
      <div className="hero-image hidden lg:block w-7/12">
        <img src={Heroimage} alt="Hero Image"
        className='max-w-7xl'
        />
      </div>
    </div>
  )
}

export default Hero;
