import React, { useEffect } from 'react';
import { motion } from 'motion/react';

import sartifyLogo from '../assets/images/sartify-logo.png';
import pawaaiLogo from '../assets/images/pawa-ai-logo.png';
import dociproLogo from '../assets/images/docipro-logo.png';
import tutorAilogo from '../assets/images/tutor-ai-logo.png';


const testimonials = [
  {
    name: "Innocent Charles",
    company: "Pawa AI",
    companyLogo: pawaaiLogo,
    feedback: "Tuli Books has transformed the way we handle our finances. The AI-powered tools are incredibly intuitive and have saved us countless hours."
  },
  {
    name: "Molel Michael",
    company: "Sartify Co Ltd",
    companyLogo: sartifyLogo,
    feedback: "As a small business owner, Tuli Books has been a game-changer. The seamless integration with other platforms makes managing our finances effortless."
  },
  {
    name: "Alex",
    company: "DociPro",
    companyLogo: dociproLogo,
    feedback: "Tuli Books has transformed our accounting processes with its efficient and accurate features. It's a must-have for any modern business."
  },
  {
    name: "Jane Smith",
    company: "Tutor AI",
    companyLogo: tutorAilogo,
    feedback: "The automation and reporting tools in Tuli Books are top-notch. It has streamlined our financial management and provided valuable insights."
  }
];

const TestimonialCard = ({ name, company, companyLogo, feedback }) => (
  <div className="testimonial-card border p-6 rounded-3xl shadow-lg bg-[#071D6E] hover:bg-[#CCCCCC] text-white flex flex-col justify-between">
    <div>
      <div className="header flex items-center mb-4">
        <img src={companyLogo} alt={`${company} Logo`} className="h-12 w-12 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">{company}</p>
        </div>
      </div>
      <p className="">{feedback}</p>
    </div>
  </div>
);

const Testimonials = () => {
const [speed, setSpeed] = React.useState(20);

  return (
    <div className='mt-20 mb-20 px-10'>
      <div className="holder lg:max-w-[100rem] lg:mx-auto">
      <h1 className='text-center text-4xl font-bold my-8 text-[#0066FF]'>Trusted by thousands of startups, small <br/> businesses and accounting firms </h1>
      <div className="supported-companies px-6 mx-auto">
        <div className="line h-0.5 bg-[#0066FF] w-full my-10 mx-auto"></div>
        <div className="logos flex flex-col lg:flex-row gap-6 items-center justify-between mb-10 w-5/6 mx-auto">
          <img src={sartifyLogo} alt="Sartify Logo" className="h-20 md:h-28 mx-4" />
          <img src={pawaaiLogo} alt="Pawa AI Logo" className="h-20 md:h-28 mx-4" />
          <img src={dociproLogo} alt="DociPro Logo" className="h-20 md:h-28 mx-4" />
          <img src={tutorAilogo} alt="Tutor AI Logo" className="h-20 md:h-28 mx-4" />
        </div>
        <div className="line h-0.5 bg-[#0066FF] w-full my-10 mx-auto"></div>
      </div>
      </div>

<div className="relative w-full mx-auto mt-20 overflow-hidden lg:max-w-[100rem]">


  {/* Motion carousel */}
  <motion.div
  key={speed}
    className="flex"
    animate={{ x: ["0%", "-100%"] }}
    transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
    onMouseEnter={() => setSpeed(100)}
    onMouseLeave={() => setSpeed(20)}
  >
    {testimonials.map((testimonial) => (
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-4 min-h-[20rem]" key={testimonial.name}>
        <TestimonialCard {...testimonial} />
      </div>
    ))}
{console.log("Speed",speed)}
    {testimonials.map((testimonial, index) => (
      <div
        className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-4"
        key={testimonial.name + "-duplicate-" + index}
      >
        <TestimonialCard {...testimonial} />
      </div>
    ))}
  </motion.div>
</div>


    </div>
  );
}

export default Testimonials;