import {useState, useEffect, use} from 'react'
import { ReactTyped } from 'react-typed'
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
    <div className='md:grid md:grid-cols-2 gap-10 px-10'>
      <div className="words flex flex-col items-start justify-center gap-10">
        <div className="heading text-7xl font-bold leading-20 text-[#071D6E]">
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
        <div className="description font-semibold text-xl text-[#071D6E]">
          Simplify Bookeeping Invoicing and tax compliance with AI-powered Tools
        </div>
        <div className="bot border bg-[#071D6E] w-5/6 flex justify-between p-2 rounded">
          <ReactTyped
            strings={chatbotQuestions}
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
      <div className="hero-image hidden md:block">
        <img src={Heroimage} alt="Hero Image"
        className='w-full'
        />
      </div>
    </div>
  )
}

export default Hero