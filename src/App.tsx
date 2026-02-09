import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SplashScreen } from './components/SplashScreen';
import { WhatsAppButton } from './components/WhatsAppButton';

// SITE
import { LandingPage } from './pages/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

// BLOG
import { BlogPostPage } from './pages/BlogPostPage';

// ADMIN
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Splash isolado (não interfere nas rotas)
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* SITE */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/politica-de-privacidade"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/termos-de-servico"
          element={<TermsOfService />}
        />

        {/* BLOG */}
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {/* Botão global */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}
