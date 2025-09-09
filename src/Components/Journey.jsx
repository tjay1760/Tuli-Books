import React from 'react';
import { motion } from 'motion/react';
import GoogleIcon from '../assets/images/google-logo.png';
import FacebookIcon from '../assets/images/facebook-logo.png';
import SuccessImage from '../assets/images/Illustration.png'
import BarChartImage from '../assets/images/bar-chart.png';
import LikeImage from '../assets/images/thumbs up.png';



const cardData = [
  {
    id: 'signup',
    title: 'Sign Up',
    content: (
      <>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50 transition">
            <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            <span className="hidden sm:block">Google</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50 transition">
            <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
            <span className="hidden sm:block">Facebook</span>
          </button>
        </div>
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Full Name</p>
          <input
            type="text"
            placeholder="Winnie M."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </>
    ),
    description: 'Get started in minutes. Just enter your details and personalize your business profile.',
    delay: 0,
  },
  {
    id: 'explore',
    title: 'Explore our Services',
    content: (
      <>
        <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-4">
          <div className="">
            <img src={SuccessImage} alt="Success" className="w-20" />
            <img src={LikeImage} alt="Like" className="w-20" />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600 mt-4 mb-6">
          Your account successfully created.
        </p>
      </>
    ),
    description: 'Sign up and explore the platform on your own — or get guided support by booking a free call.',
    delay: 0.2,
  },
  {
    id: 'manage',
    title: 'Start Managing with Ease',
    content: (
      <>
        <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-4">
          <div className="w-full h-full max-h-40">
            <img src={BarChartImage} alt="Bar Chart" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="mt-auto pt-6"></div>
      </>
    ),
    description: 'Begin tracking your finances, sending invoices, and automating tasks — or chat with our experts on WhatsApp for help anytime.',
    delay: 0.4,
  },
];

const OnboardingJourney = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  };

  const transitionProps = (delay) => ({
    duration: 0.8,
    ease: [0.25, 0.8, 0.25, 1],
    delay: delay,
  });

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center py-12 md:py-24 md:mt-72">
      <div className="text-center mb-12 px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Launch your journey
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          with Tuli books
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl p-4 md:p-0">
        {cardData.map((card) => (
<motion.div
  key={card.id}
  variants={cardVariants}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true, amount: 0.3 }}
  transition={transitionProps(card.delay)}
  className="group bg-white rounded-3xl p-4 sm:p-6 flex flex-col items-center text-center
             hover:shadow-2xl hover:bg-[#0066ff] hover:text-white
             transition-colors duration-700 ease-in-out"
>
  <div className="card-top w-full p-4 sm:p-6 rounded-2xl mb-4 flex flex-col items-center shadow-lg z-10 
                  bg-white text-black group-hover:bg-white group-hover:text-black transition-colors duration-1000 ease-in-out">
    {card.content}
  </div>

  <div className="mt-auto p-4 sm:p-6 text-left flex flex-col items-start rounded-2xl gap-4">
    <h3 className="text-xl sm:text-2xl font-bold">{card.title}</h3>
    <p className="text-[#0066FF] text-base sm:text-xl mb-4 group-hover:text-white transition-colors duration-1000 ease-in-out">
      {card.description}
    </p>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
};


export default OnboardingJourney;

