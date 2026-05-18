import React, { useState, useEffect } from 'react';
import Landing from './views/Landing';
import { LanguageProvider } from './context/LanguageContext';
import { CreditProvider } from './context/CreditContext';

const App = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // For the web deployment, we only show the Landing page.
  // The login button can redirect to the app URL (which will be on Amazon).
  const handleLoginClick = (mode = 'login') => {
    // In the future, this will redirect to the Amazon URL
    // For now, we can just show a message or keep it as is.
    window.location.href = 'https://app.usakraken.com'; // Redirect to the live app URL
  };

  return (
    <LanguageProvider>
      <CreditProvider>
        <Landing onLoginClick={handleLoginClick} />
      </CreditProvider>
    </LanguageProvider>
  );
}

export default App;
