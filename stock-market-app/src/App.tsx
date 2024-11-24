import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import ExploreScreen from './components/stocks/ExploreScreen';

const App: React.FC = () =>
{
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() =>
  {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen">
      {showSplash ? <SplashScreen /> : <ExploreScreen />}
    </div>
  );
};

export default App;
