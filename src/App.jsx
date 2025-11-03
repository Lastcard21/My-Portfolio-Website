import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // ✅ timer is now defined
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
        <Loader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Hero />
            <Services />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
