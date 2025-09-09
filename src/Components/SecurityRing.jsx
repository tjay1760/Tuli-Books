import React, { useState } from 'react';

// Use a single component for all logic, styling, and rendering.
const SecurityRing = () => {
  const [multiFactorEnabled, setMultiFactorEnabled] = useState(false);
  const [dataProtectionEnabled, setDataProtectionEnabled] = useState(false);

  // Function to calculate the progress percentage based on checked states
  const calculateProgress = () => {
    let progress = 0;
    if (multiFactorEnabled && dataProtectionEnabled) {
      progress = 100;
    } else if (multiFactorEnabled || dataProtectionEnabled) {
      progress = 50;
    }
    return progress;
  };

  const progress = calculateProgress();

  // Dynamically set the stroke-dasharray to create the progress ring effect
  const circumference = 2 * Math.PI * 45; // 2 * PI * radius
  // Arc length for 7 o'clock to 5 o'clock (10/12 of a circle)
  const arcLength = (10 / 12) * circumference;
  const strokeDashoffset = arcLength - (progress / 100) * arcLength;
  const startRotation = 150; // 7 o'clock position (150 degrees from 12)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-indigo-900">Secure Your Account</h2>

        <div className="relative flex items-center justify-center mb-8">
          <svg className="w-48 h-48" viewBox="0 0 100 100">
            {/* Background ring (larger arc) */}
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{
                strokeDasharray: `${arcLength} ${circumference}`,
                transformOrigin: '50% 50%',
                transform: `rotate(${startRotation}deg)`,
              }}
            />
            {/* Progress ring (larger arc) */}
            <circle
              className="transition-all duration-500 ease-in-out"
              strokeWidth="10"
              stroke="url(#progressGradient)"
              strokeLinecap="round"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{
                strokeDasharray: `${arcLength} ${circumference}`,
                strokeDashoffset: strokeDashoffset,
                transformOrigin: '50% 50%',
                transform: `rotate(${startRotation}deg)`,
              }}
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#ef4444' }} />
                <stop offset="25%" style={{ stopColor: '#f97316' }} />
                <stop offset="50%" style={{ stopColor: '#fbbf24' }} />
                <stop offset="75%" style={{ stopColor: '#a8e53d' }} />
                <stop offset="100%" style={{ stopColor: '#22c55e' }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-indigo-50">
              <span className="text-3xl font-bold text-indigo-900">{progress}%</span>
            </div>
          </div>
        </div>

        {/* Checkbox for Multi-factor Authentication */}
        <div className="flex items-center space-x-4 mb-4 cursor-pointer" onClick={() => setMultiFactorEnabled(!multiFactorEnabled)}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-200 ${multiFactorEnabled ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-gray-400'}`}>
            {multiFactorEnabled && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className={`text-lg font-medium ${multiFactorEnabled ? 'text-gray-900' : 'text-gray-500'}`}>Multi-factor Authentication</span>
        </div>

        {/* Checkbox for Data Protection */}
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setDataProtectionEnabled(!dataProtectionEnabled)}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-200 ${dataProtectionEnabled ? 'bg-indigo-500 border-indigo-500' : 'bg-white border-gray-400'}`}>
            {dataProtectionEnabled && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className={`text-lg font-medium ${dataProtectionEnabled ? 'text-gray-900' : 'text-gray-500'}`}>Data Protection</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityRing;
