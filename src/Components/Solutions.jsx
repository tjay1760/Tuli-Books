import React from 'react'
import { motion } from 'motion/react';
import Chart1 from '../assets/images/chart-1.png'
import Chart2 from '../assets/images/chart-2.png'
import Chart3 from '../assets/images/chart-3.png'
import Chart4 from '../assets/images/chart-4.png'
import invoicingIcon from '../assets/images/invoicing-icon.png'
import taxationIcon from '../assets/images/taxation-icon.png'
import bookkeepingIcon from '../assets/images/bookkeeping-icon.png'
import salesIcon from '../assets/images/sales-icon.png'
import inventoryIcon from '../assets/images/inventory-icon.png'
import reportsIcon from '../assets/images/reports-icon.png'
import shieldIcon from '../assets/images/shield-icon.png'


const FeatureCard = ({ title, description, icon, bg }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier easing
    }}
    className="flex items-center space-x-6 p-4 md:p-6 bg-white rounded-xl transition-transform transform hover:scale-105"
  >
    <div
      className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full"
      style={{ backgroundColor: bg }}
    >
      {icon}
    </div>
    <div className="flex-grow">
      <h3 className="text-4xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-xl">{description}</p>
    </div>
  </motion.div>
);

const Solutions = () => {
  return (
    <div className='mt-24 px-10 flex flex-col justify-center'>
      <div className="heading text-7xl font-bold text-center">
        <span className='text-[#0066FF]'>Accounting Solutions for Every</span> <br/> <span className='text-[#071D6E]'>Business Needs</span>
      </div>
      <div className="services grid grid-cols-2 mt-20 items-center justify-between">
        <div className="chart mx-auto">
          <img src={Chart1} alt="Chart 1" className='' />
        </div>
        <div className="service max-w-lg mx-auto flex flex-col gap-6">
<FeatureCard
  title="Invoicing"
  description="Create and send professional invoices in minutes. Track payments and manage your cash flow with ease."
  icon={<img src={invoicingIcon} alt="Invoicing Icon" className="w-10 h-10" />}
  bg="#C7FBD6"
/>
<FeatureCard
  title="Taxation"
  description="Stay compliant with tax regulations. Automate tax calculations and generate reports for easy filing."
  icon={<img src={taxationIcon} alt="Taxation Icon" className="w-10 h-10" />}
  bg="#FFD0C2"
/>
<FeatureCard
  title="Bookkeeping"
  description="Simplify your bookkeeping process. Organize expenses, track income, and reconcile accounts effortlessly."
  icon={<img src={bookkeepingIcon} alt="Bookkeeping Icon" className="w-10 h-10" />}
  bg="#CCDCFF"
/>
        </div>
 
        <div className="service max-w-lg mx-auto">
<FeatureCard
title = "Inventory"
description = "Monitor Stock Levels, Track Items, and manage product availability real-time."
icon = {<img src={inventoryIcon} alt="Inventory Icon" className="w-10 h-10" />}
bg = "#BEF5FF"
/>
<FeatureCard
title= "Sales & Expense"
description = "Track Sales Perfomance and categorize Expenses"
icon = {<img src={salesIcon} alt="Sales Icon" className="w-10 h-10" />}
bg = "#FEE1B3"
/>
<FeatureCard
title= "Reports"
description = "Get Detailed financial Reports for smarter data driven decisions"
icon = {<img src={reportsIcon} alt="Reports Icon" className="w-10 h-10" />}
bg = "#D6D2FF"
/>
        </div>
               <div className="chart mx-auto">
          <img src={Chart2} alt="Chart 2" className=''/>
        </div>
        <div className="chart chart-4 mx-auto relative">
          <img src={Chart3} alt="Chart 3" className=''/>
          <img src={Chart4} alt="Chart 4" className='absolute left-72 top-80'/>
        </div>
        <div className="service text-[#0066FF] mx-auto">
          <h1 className='text-4xl font-bold mb-10'>Explore our Features</h1>
          <ul className='list-disc space-y-6 text-xl'>
            <li className='flex gap-6 items-center'><img src={shieldIcon} alt="AI Powered Smart Bookkeeping" className="h-10" />AI Powered Smart Bookkeeping</li>
            <li className='flex gap-6 items-center'><img src={shieldIcon} alt="Experience the ultimate in financial security" className="h-10" />Experience the ultimate in financial security</li>
            <li className='flex gap-6 items-center'><img src={shieldIcon} alt="Advanced Real-Time Financial Reporting" className="h-10" />Advanced Real-Time Financial Reporting</li>
            <li className='flex gap-6 items-center'><img src={shieldIcon} alt="Save your time and reduce financial anxiety" className="h-10" />Save your time and reduce financial anxiety</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Solutions