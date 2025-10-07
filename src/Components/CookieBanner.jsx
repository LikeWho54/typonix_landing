import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('typonix-cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('typonix-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('typonix-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic, and provide personalized content. 
            By continuing to use our site, you consent to our use of cookies.{' '}
            <Link 
              to="/legal/cookie-policy" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-200"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;