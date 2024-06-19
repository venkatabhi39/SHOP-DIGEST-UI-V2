import React, { useState, useEffect } from 'react';

const Alert = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  const typeStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-primary text-white',
  };

  // Function to create HTML content
  const createMarkup = htmlContent => {
    return { __html: htmlContent };
  };

  // Function to close the alert
  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setShouldRender(true); // Start the enter animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Set the timer for 5 seconds to start exit animation

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => setShouldRender(false), 1500); // Delay the unrender to allow exit animation
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`p-4 ${typeStyles[type]} relative transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      role="alert"
    >
      <div className="max-w-[80rem] m-auto px-0 relative">
        <p className="text-white text-sm" dangerouslySetInnerHTML={createMarkup(message)}></p>
        <button onClick={handleClose} className="absolute -top-0.5 right-0" aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
