import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const CookiePolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="fixed top-4 left-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium z-10"
        >
          Home
        </Link>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Typonix Cookie Policy</h1>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 07.10.2025</p>
              <p className="text-sm text-gray-600 mb-4"><strong>Last Updated:</strong> 07.10.2025</p>
            </div>

            <p className="mb-6">
              This Cookie Policy explains how Typonix.com ("Typonix," "we," "us," or "our") uses cookies and similar technologies when you visit our website or use our services. By using our site, you agree to our use of cookies as described in this policy. You can manage your cookie preferences at any time.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files that are stored on your device when you visit a website. They help websites remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for the website to function and cannot be switched off in our systems.</li>
              <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use our site, such as which pages are visited most often. We use this data to improve site performance.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make and provide enhanced, more personalized features.</li>
              <li><strong>Targeting or Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They may be set through our site by advertising partners.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Third-Party Cookies</h2>
            <p className="mb-6">
              We may allow third-party service providers to place cookies on your device for analytics, advertising, or other purposes. These providers may collect information about your online activities over time and across different websites.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. How You Can Control Cookies</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>You can control and/or delete cookies as you wish by adjusting your browser settings.</li>
              <li>You can delete all cookies that are already on your device and prevent many sites from setting cookies.</li>
              <li>If you do this, however, you may need to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Cookie Consent</h2>
            <p className="mb-4">Where required by law, we obtain your consent before placing non-essential cookies on your device.</p>
            <p className="mb-6">You may withdraw or change your consent at any time by adjusting your cookie settings.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Updates to This Cookie Policy</h2>
            <p className="mb-4">We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our operations.</p>
            <p className="mb-6">We encourage you to review this policy periodically to stay informed about our use of cookies.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">If you have questions about our use of cookies or this Cookie Policy, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold">3P Digital LLC</p>
              <p>60 S State Route 157, Suite 11</p>
              <p>Edwardsville, IL 62025</p>
              <p>Email: <a href="mailto:support@typonix.com" className="text-blue-600 hover:text-blue-800">support@typonix.com</a></p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="font-semibold">
                By continuing to use our site, you agree to our use of cookies as described in this policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;