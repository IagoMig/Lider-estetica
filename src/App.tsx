import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SplashScreen } from './components/SplashScreen';
import { WhatsAppButton } from './components/WhatsAppButton';

import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/politica-de-privacidade"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/termos-de-servico"
          element={<TermsOfService />}
        />
      </Routes>

      {/* Botão fixo do WhatsApp aparece em todas as páginas */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}
