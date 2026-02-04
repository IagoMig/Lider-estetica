import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LandingPage } from './pages/LandingPage';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <LandingPage />

          {/* Botão fixo do WhatsApp */}
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
