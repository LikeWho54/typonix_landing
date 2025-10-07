import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Typonix Privacy Policy</h1>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 07.10.2025</p>
              <p className="text-sm text-gray-600 mb-4"><strong>Last Updated:</strong> 07.10.2025</p>
            </div>

            <p className="mb-6">
              At Typonix.com ("Typonix," "we," "us," or "our"), your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services. By using our platform, you consent to the data practices described in this policy.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, billing details, and account information.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device information, and usage patterns.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies and similar technologies to enhance user experience.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>To provide and maintain our services.</li>
              <li>To process transactions and manage billing.</li>
              <li>To improve our platform and develop new features.</li>
              <li>To communicate with you about your account, updates, or promotional offers.</li>
              <li>To detect, prevent, and address technical issues or fraudulent activity.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Share Your Information</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li><strong>Service Providers:</strong> We may share data with third-party providers (e.g., payment processors, analytics services) who assist in delivering our services.</li>
              <li><strong>Legal Obligations:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of that transaction.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Cookies and Similar Technologies</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>We use cookies to analyze site traffic, remember preferences, and enhance user experience.</li>
              <li>You may control or disable cookies through your browser settings, but some features may not function properly.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy.</li>
              <li>Account data is retained for the duration of your use and up to 30 days following account termination.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>We implement reasonable technical and organizational measures to protect your personal information.</li>
              <li>However, no method of transmission over the internet or method of electronic storage is 100% secure.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights and Choices</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>You may access, update, or delete your personal information through your account settings.</li>
              <li>You may unsubscribe from marketing communications at any time.</li>
              <li>If you are located in the EU or UK, you may have additional rights under GDPR, such as the right to data portability and the right to object to processing.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Typonix is operated in the United States. If you access our services from outside the U.S., your information may be transferred to, stored, and processed in the U.S.</li>
              <li>By using our platform, you consent to this transfer.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Our services are not intended for children under the age of 13.</li>
              <li>We do not knowingly collect personal data from children. If we learn we have collected data from a child without parental consent, we will delete it.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>We may update this Privacy Policy from time to time.</li>
              <li>We will notify users of material changes by email or through a notice on our platform.</li>
              <li>Continued use of our services after such changes constitutes acceptance of the updated policy.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold">3P Digital LLC</p>
              <p>60 S State Route 157, Suite 11</p>
              <p>Edwardsville, IL 62025</p>
              <p>Email: <a href="mailto:support@typonix.com" className="text-blue-600 hover:text-blue-800">support@typonix.com</a></p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="font-semibold">
                By using Typonix, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;