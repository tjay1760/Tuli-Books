import React from 'react';
import PhoneMockup from '../assets/images/iPhone_Mockup.png';
import { MouseParallax,ScrollParallax } from 'react-just-parallax';
import { Scroll } from 'lucide-react';

// Placeholder for the mobile device image with app UI.


const DemoSection = () => {
  return (
    <div className="p-8 flex flex-col lg:flex-row items-center justify-center relative overflow-hidden text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0957FF] to-[#009DFF]"></div>
      
      {/* Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto lg:max-w-[100rem]">
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-center lg:text-left p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Ready to Take Control of Your Finances?
          </h1>
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            Start using TuliBooks today and simplify your bookkeeping, invoicing, and reporting with the power of AI. Save time, reduce errors, and focus on what matters most — growing your business.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Book a free demo
          </button>
        </div>
<ScrollParallax>
        {/* Right Mobile Image */}
        <div className="flex justify-center items-center p-4 relative">
          
            <img
              src={PhoneMockup}
              alt="Mobile App Demo"
              className="w-64 md:w-80 lg:w-96 shadow-2xl rounded-3xl"
            />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/60 to-transparent pointer-events-none w-64 md:w-80 lg:w-96 mx-auto"></div>
         

  {/* Overlay */}

</div>
</ScrollParallax>


      </div>
    </div>
  );
};

export default DemoSection;
