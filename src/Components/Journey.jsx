import React from 'react';
import GoogleIcon from '../assets/images/google-logo.png';
import FacebookIcon from '../assets/images/facebook-logo.png';
import SuccessImage from '../assets/images/Illustration.png'
import BarChartImage from '../assets/images/bar-chart.png';
import LikeImage from '../assets/images/thumbs up.png';



const OnboardingJourney = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-4 sm:p-8 mt-40">
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Launch your journey
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          with Tuli books
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Sign Up Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-center">Sign Up</h3>
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
          <div className="mt-auto pt-6 border-t border-gray-200">
            <h4 className="text-lg font-bold mb-1">Create Your Account</h4>
            <p className="text-gray-600 text-sm">
              Get started in minutes. Just enter your details and personalize your business profile.
            </p>
          </div>
        </div>

        {/* Explore Our Services Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-4">
            <div className="">
              <img src={SuccessImage} alt="Success" className="w-20" />
              <img src={LikeImage} alt="Like" className="w-20" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 mt-4 mb-6">
            Your account successfully created.
          </p>
          <div className="mt-auto pt-6 border-t border-gray-200 w-full text-left">
            <h4 className="text-lg font-bold mb-1">Explore our Services</h4>
            <p className="text-gray-600 text-sm">
              Sign up and explore the platform on your own — or get guided support by booking a free call.
            </p>
          </div>
        </div>

        {/* Start Managing with Ease Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center p-4">
            <div className="w-full h-full max-h-40">
              <img src={BarChartImage} alt="Bar Chart" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="mt-auto pt-6 border-t border-gray-200 w-full text-left">
            <h4 className="text-lg font-bold mb-1">Start Managing with Ease</h4>
            <p className="text-gray-600 text-sm">
              Begin tracking your finances, sending invoices, and automating tasks — or chat with our experts on WhatsApp for help anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingJourney;
