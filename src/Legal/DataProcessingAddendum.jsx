import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const DataProcessingAddendum = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Data Processing Addendum (DPA)</h1>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 07.10.2025</p>
              <p className="text-sm text-gray-600 mb-4"><strong>Last Updated:</strong> 07.10.2025</p>
            </div>

            <p className="mb-6">
              This Data Processing Addendum ("DPA") forms part of the Terms of Service between 3P Digital LLC ("Typonix") and the Customer (the "Agreement") and reflects the parties' agreement with respect to the processing of personal data pursuant to the General Data Protection Regulation (EU) 2016/679 ("GDPR") and other applicable data protection laws.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li><strong>"Data Protection Laws"</strong> means all applicable data protection and privacy legislation, including the GDPR.</li>
              <li><strong>"Customer Data"</strong> means any personal data that Typonix processes on behalf of the Customer as a data processor.</li>
              <li><strong>"Sub-processor"</strong> means any third party appointed by Typonix to process Customer Data.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Scope and Applicability</h2>
            <p className="mb-6">
              This DPA applies to the processing of Customer Data by Typonix on behalf of the Customer for the purpose of providing the services described in the Agreement.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Processing of Personal Data</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Typonix shall process Customer Data only on documented instructions from the Customer.</li>
              <li>Typonix shall not retain, use, or disclose Customer Data for any purpose other than to provide the services specified in the Agreement.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Confidentiality</h2>
            <p className="mb-6">
              Typonix shall ensure that persons authorized to process the Customer Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Security Measures</h2>
            <p className="mb-6">
              Typonix shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption, access controls, and regular security assessments.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Sub-processors</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>The Customer authorizes Typonix to engage Sub-processors for the purpose of providing the services.</li>
              <li>Typonix shall ensure that Sub-processors are bound by obligations equivalent to those set out in this DPA.</li>
              <li>A list of current Sub-processors is available upon request. Typonix will notify the Customer of any intended changes to Sub-processors.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Data Subject Rights</h2>
            <p className="mb-6">
              Taking into account the nature of the processing, Typonix shall assist the Customer by appropriate technical and organizational measures, insofar as this is possible, to respond to requests from data subjects under GDPR.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Data Breach Notification</h2>
            <p className="mb-6">
              Typonix shall notify the Customer without undue delay upon becoming aware of a personal data breach affecting Customer Data. Typonix shall cooperate with the Customer and provide reasonable assistance as needed.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Data Transfers</h2>
            <p className="mb-6">
              Typonix shall not transfer Customer Data outside the European Economic Area (EEA) unless it has taken such measures as are necessary to ensure the transfer is in compliance with Data Protection Laws.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Audit Rights</h2>
            <p className="mb-6">
              Typonix shall make available to the Customer all information necessary to demonstrate compliance with this DPA and shall allow for and contribute to audits conducted by the Customer or its authorized auditor.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Return or Deletion of Data</h2>
            <p className="mb-6">
              Upon termination of the Agreement, Typonix shall, at the choice of the Customer, delete or return all Customer Data unless otherwise required by applicable law.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Liability</h2>
            <p className="mb-6">
              The liability of each party under this DPA shall be subject to the limitations of liability set out in the Agreement.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Governing Law</h2>
            <p className="mb-6">
              This DPA shall be governed by and construed in accordance with the laws of the State of Illinois, unless otherwise required by applicable Data Protection Laws.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
            <p className="mb-4">If you have any questions about this DPA, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold">3P Digital LLC</p>
              <p>60 S State Route 157, Suite 11</p>
              <p>Edwardsville, IL 62025</p>
              <p>Email: <a href="mailto:support@typonix.com" className="text-blue-600 hover:text-blue-800">support@typonix.com</a></p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="font-semibold text-center">
                IN WITNESS WHEREOF, the parties have caused this Data Processing Addendum to be executed by their duly authorized representatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataProcessingAddendum;