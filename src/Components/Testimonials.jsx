import React from 'react'
import sartifyLogo from '../assets/images/sartify-logo.png'
import pawaaiLogo from '../assets/images/pawa-ai-logo.png'
import dociproLogo from '../assets/images/docipro-logo.png'
import tutorAilogo from '../assets/images/tutor-ai-logo.png'

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
  }
]
const TestimonialCard = ({ name, company, companyLogo, feedback }) => (
  <div className="testimonial-card border p-6 rounded-lg shadow-lg bg-[#071D6E] text-white max-w-md flex flex-col justify-between">
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
  return (
    <div className='mt-20 mb-20 px-10'>
      <h1 className='text-center text-6xl font-bold my-8 text-[#0066FF]'>Trusted by thousands of startups,  small <br/> businesses and accounting firms </h1>
      <div className="supported-companies px-6 mx-auto">
        <div className="line h-0.5 bg-[#0066FF] w-5/6 my-10 mx-auto"></div>
        <div className="logos flex items-center justify-between mb-10 w-5/6 mx-auto">
          <img src={sartifyLogo} alt="Sartify Logo" className="h-36 mx-4" />
          <img src={pawaaiLogo} alt="Pawa AI Logo" className="h-36 mx-4" />
          <img src={dociproLogo} alt="DociPro Logo" className="h-36 mx-4" />
          <img src={tutorAilogo} alt="Tutor AI Logo" className="h-36 mx-4" />
        </div>
        <div className="line h-0.5 bg-[#0066FF] w-5/6 my-10 mx-auto"></div>

      </div>
      <div className="testimonials flex flex-col md:flex-row gap-6 justify-center items-stretch mt-20 w-5/6 mx-auto ">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
        </div>
   
  )
}

export default Testimonials