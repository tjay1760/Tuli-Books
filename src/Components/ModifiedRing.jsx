import React, { useState } from 'react';

// Use a single component for all logic, styling, and rendering.
const App = () => {
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

  // Define SVG properties
  const radius = 45;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  // Arc length from 7 o'clock to 5 o'clock (10/12 of a circle)
  const arcLength = (10 / 12) * circumference;
  
  // Define dash and gap lengths for the four distinct sections
  const numSegments = 4;
  const numGaps = numSegments; // We have a gap after each segment
  const gapLength = 6; // Increased gap size for clearer separation
  const totalGapLength = numGaps * gapLength;
  const dashLength = (arcLength - totalGapLength) / numSegments;
  
  // Use explicit strokeDasharray to ensure four visible dashes and gaps
  const strokeDasharray = `${dashLength}, ${gapLength}, ${dashLength}, ${gapLength}, ${dashLength}, ${gapLength}, ${dashLength}, ${gapLength + (circumference - arcLength)}`;

  // Calculate the stroke-dashoffset for the progress animation
  const strokeDashoffset = arcLength - (progress / 100) * arcLength;
  const startRotation = 150; // 7 o'clock position in degrees

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-indigo-900">Secure Your Account</h2>

        <div className="relative flex items-center justify-center mb-8">
          <svg className="w-48 h-48" viewBox="0 0 100 100">
            {/* Background ring (larger arc) */}
            <circle
              className="text-gray-200"
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              style={{
                strokeDasharray: strokeDasharray,
                transformOrigin: '50% 50%',
                transform: `rotate(${startRotation}deg)`,
              }}
            />
            {/* Progress ring (larger arc) */}
            <circle
              className="transition-all duration-500 ease-in-out"
              strokeWidth={strokeWidth}
              stroke="url(#progressGradient)"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              style={{
                strokeDasharray: strokeDasharray,
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

export default App;
