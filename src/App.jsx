import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./HomePage";
import TermsOfService from "./Legal/TermsOfService";
import PrivacyPolicy from "./Legal/PrivacyPolicy";
import CookiePolicy from "./Legal/CookiePolicy";
import DataProcessingAddendum from "./Legal/DataProcessingAddendum";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
        <Route path="/legal/data-processing-addendum" element={<DataProcessingAddendum />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
