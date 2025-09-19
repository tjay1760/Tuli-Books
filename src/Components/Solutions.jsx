import React from 'react'
import { motion } from 'motion/react';
import SecurityRing from './SecurityRing';
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
    className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 md:p-6 bg-white rounded-xl transition-transform transform hover:scale-105 text-center sm:text-left"
  >
    <div
      className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full"
      style={{ backgroundColor: bg }}
    >
      {icon}
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Solutions = () => {
  return (
    <div className='mt-12 sm:mt-16 md:mt-24 p-4 sm:p-6 md:p-8 lg:max-w-[100rem] mx-auto bg-[#F7FAFF]'>
      <div className="heading text-center mb-12 sm:mb-16">
        <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-[#0066FF] leading-tight'>
          Accounting Solutions for Every
          <br className="hidden sm:block" />
          <span className='text-[#071D6E]'>&nbsp;Business Needs</span>
        </h1>
      </div>
      
      <div className="services grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 md:mt-20 items-center justify-between w-full">
        <div className="chart w-full mx-auto max-w-lg">
          <img src={Chart1} alt="Chart 1" className='w-full h-auto' />
        </div>
        <div className="service w-full max-w-lg mx-auto flex flex-col gap-6">
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
 
        <div className="service w-full max-w-lg mx-auto flex flex-col gap-6 order-last md:order-none">
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
        <div className="chart w-full mx-auto max-w-lg">
          <img src={Chart2} alt="Chart 2" className='w-full h-auto'/>
        </div>

        <div className="chart chart-4 w-full mx-auto max-w-lg relative order-first md:order-none">
          <img src={Chart3} alt="Chart 3" className='w-full h-auto'/>
          <div className='hidden lg:block absolute left-45 top-80'>
        <SecurityRing/>
          </div>
        </div>

        <div className="service w-full text-[#0066FF] mx-auto max-w-lg">
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-10'>Explore our Features</h1>
          <ul className='list-disc space-y-4 sm:space-y-6 text-base sm:text-lg lg:pl-10'>
            <li className='flex gap-4 items-center text-2xl'><img src={shieldIcon} alt="AI Powered Smart Bookkeeping" className="h-8 sm:h-10" />AI Powered Smart Bookkeeping</li>
            <li className='flex gap-4 items-center text-2xl'><img src={shieldIcon} alt="Experience the ultimate in financial security" className="h-8  sm:h-10" />Experience the ultimate in financial security</li>
            <li className='flex gap-4 items-center text-2xl'><img src={shieldIcon} alt="Advanced Real-Time Financial Reporting" className="h-8  sm:h-10" />Advanced Real-Time Financial Reporting</li>
            <li className='flex gap-4 items-center text-2xl'><img src={shieldIcon} alt="Save your time and reduce financial anxiety" className="h-8  sm:h-10" />Save your time and reduce financial anxiety</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Solutions