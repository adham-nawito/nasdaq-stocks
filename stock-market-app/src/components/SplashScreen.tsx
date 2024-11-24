import React, { useState, useEffect } from 'react';

const SplashScreen: React.FC = () =>
{
  const [show, setShow] = useState(false);

  useEffect(() =>
  {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 overflow-hidden relative">

      <div
        className={`transition-opacity duration-1000 ${show ? 'opacity-100 animate-bounce-slow' : 'opacity-0'}`}
      >
        <img
          src="/public/nasdaq-logo.svg"
          alt="Nasdaq Logo"
          className="w-80 h-80"
        />
      </div>


      <p className="absolute bottom-4 text-sm text-gray-300 font-light">
        Developed by Adham Nawito
      </p>
    </div>
  );
};

export default SplashScreen;
