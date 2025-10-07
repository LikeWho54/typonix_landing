import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const TermsOfService = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Typonix Terms of Service</h1>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 07.10.2025</p>
              <p className="text-sm text-gray-600 mb-4"><strong>Last Updated:</strong> 07.10.2025</p>
            </div>

            <p className="mb-6">
              Welcome to Typonix.com ("Typonix," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Typonix platform and constitute a binding legal agreement between you and 3P Digital LLC, an Illinois Limited Liability Company with its principal place of business at 60 S State Route 157, Suite 11, Edwardsville, IL 62025, USA. By accessing or using Typonix, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not access or use the platform.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Overview of Services</h2>
            <p className="mb-4">
              Typonix provides SEO-focused tools and services via a web-based SaaS platform, including:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Keyword gap analysis against competitors</li>
              <li>AI-generated SEO-optimized content</li>
              <li>Content calendars and keyword suggestions</li>
              <li>Backlink discovery and analysis</li>
              <li>Performance tracking of keyword rankings and traffic</li>
            </ul>
            <p className="mb-6">
              Access to these services is provided via https://www.typonix.com under a subscription-based model.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Account Registration</h2>
            <p className="mb-4">To use Typonix, you must:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Be at least 18 years old</li>
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain the security of your login credentials</li>
              <li>Use your account solely for your own purposes (one user per account)</li>
            </ul>
            <p className="mb-6">
              You are responsible for all activities conducted through your account. Sharing login credentials is strictly prohibited.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Subscription Plans and Payment Terms</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Plans:</strong> We offer both free and paid subscription plans. Features may vary between plans.</li>
              <li><strong>Billing:</strong> All paid plans are billed in advance and renew automatically unless canceled before the end of the billing period.</li>
              <li><strong>Payments:</strong> Handled via secure third-party payment processors (e.g., Stripe).</li>
              <li><strong>Cancellations:</strong> You may cancel at any time through your account dashboard. No refunds will be issued for partial periods, except where required by law.</li>
              <li><strong>Currency:</strong> All pricing is in U.S. dollars unless otherwise specified.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use Policy</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Use Typonix in violation of any applicable laws or regulations</li>
              <li>Attempt to reverse engineer, decompile, copy, scrape, or exploit the platform</li>
              <li>Upload or transmit malicious code or engage in disruptive behavior</li>
              <li>Infringe upon the intellectual property rights of Typonix or third parties</li>
              <li>Share access credentials or permit unauthorized access to the service</li>
            </ul>
            <p className="mb-6">
              Violations may result in account suspension or termination without refund.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. AI-Generated Content and SEO Disclaimer</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Typonix uses AI models trained on publicly available data to generate content and insights.</li>
              <li>You are solely responsible for reviewing and editing any AI-generated content prior to publication or use.</li>
              <li>We make no guarantees regarding SEO performance, search rankings, or increased traffic.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>All rights, title, and interest in the Typonix platform—including its code, algorithms, interface, and branding—are owned by 3P Digital LLC or its licensors.</li>
              <li>You retain ownership of content you upload to the platform, but you grant us a limited license to process that content solely for the purpose of providing services to you.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Termination and Suspension</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>You may terminate your account at any time via your account settings.</li>
              <li>We may suspend or terminate your access without notice if you violate these Terms.</li>
              <li>Your data may be deleted 30 days after termination. We recommend exporting any important data prior to cancellation.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimers and Limitations of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Typonix is provided "as is" and "as available," without warranties of any kind, express or implied.</li>
              <li>We do not guarantee uptime, accuracy, or fitness for a particular purpose.</li>
              <li>In no event shall Typonix be liable for indirect, incidental, consequential, special, or punitive damages.</li>
              <li>Our total liability under these Terms shall not exceed the amount you paid to us in the preceding three (3) months.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>These Terms shall be governed by the laws of the State of Illinois, without regard to its conflict of law principles.</li>
              <li>Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in Madison County, Illinois.</li>
              <li>You waive any right to participate in class actions or jury trials.</li>
              <li>You may opt out of arbitration within 30 days of first agreeing to these Terms by emailing support@typonix.com with the subject line: "Arbitration Opt-Out."</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. International Use and Export Controls</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Our platform is operated from the United States. If you access Typonix from outside the U.S., you consent to the transfer and processing of your data in the United States.</li>
              <li>You agree to comply with all applicable export control laws and not use Typonix in any country or region subject to U.S. sanctions.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Modifications to These Terms</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>We reserve the right to modify these Terms at any time.</li>
              <li>If we make material changes, we will notify you via email or through a platform notification.</li>
              <li>Your continued use of the platform after any change constitutes your acceptance of the updated Terms.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
            <p className="mb-4">If you have questions or legal concerns, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold">3P Digital LLC</p>
              <p>60 S State Route 157, Suite 11</p>
              <p>Edwardsville, IL 62025</p>
              <p>Email: <a href="mailto:support@typonix.com" className="text-blue-600 hover:text-blue-800">support@typonix.com</a></p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="font-semibold mb-2">
                By accessing or using Typonix, you affirm your agreement to these Terms of Service.
              </p>
              <p className="text-gray-600 italic">
                We appreciate your trust in us as we help you build a better web.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;