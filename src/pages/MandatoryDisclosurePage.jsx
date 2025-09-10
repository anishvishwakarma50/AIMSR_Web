import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaCertificate, FaClipboardList, FaUniversity } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MandatoryDisclosurePage = () => {
  const complianceDocuments = [
    {
      id: 1,
      title: 'AICTE Approval Letter 2024-25',
      description: 'Current AICTE approval for all programs offered at AIMSR',
      category: 'AICTE Approval',
      date: '2024-07-15',
      icon: <FaCertificate className="text-3xl text-blue-600" />
    },
    {
      id: 2,
      title: 'University Affiliation Certificate',
      description: 'Certificate of affiliation with Mumbai University',
      category: 'University Affiliation',
      date: '2024-06-20',
      icon: <FaUniversity className="text-3xl text-green-600" />
    },
    {
      id: 3,
      title: 'NAAC Accreditation Report',
      description: 'Latest NAAC assessment and accreditation report',
      category: 'NAAC Accreditation',
      date: '2024-03-10',
      icon: <FaFileAlt className="text-3xl text-purple-600" />
    },
    {
      id: 4,
      title: 'Fee Structure Document',
      description: 'Detailed fee structure for all programs as per AICTE guidelines',
      category: 'Fee Structure',
      date: '2024-05-01',
      icon: <FaClipboardList className="text-3xl text-yellow-600" />
    },
    {
      id: 5,
      title: 'Faculty Qualification Details',
      description: 'Comprehensive list of faculty qualifications and experience',
      category: 'Faculty Details',
      date: '2024-08-15',
      icon: <FaFileAlt className="text-3xl text-red-600" />
    },
    {
      id: 6,
      title: 'Infrastructure and Facilities',
      description: 'Details of infrastructure, laboratories, and library facilities',
      category: 'Infrastructure',
      date: '2024-04-20',
      icon: <FaUniversity className="text-3xl text-indigo-600" />
    }
  ];

  const annualReports = [
    {
      year: '2023-24',
      title: 'Annual Report 2023-24',
      description: 'Comprehensive annual report including academic achievements, placements, and financial statements',
      size: '2.5 MB'
    },
    {
      year: '2022-23',
      title: 'Annual Report 2022-23',
      description: 'Previous year annual report with detailed academic and administrative activities',
      size: '2.8 MB'
    },
    {
      year: '2021-22',
      title: 'Annual Report 2021-22',
      description: 'Annual report covering the post-pandemic academic year achievements',
      size: '3.1 MB'
    }
  ];

  const accreditationInfo = [
    {
      body: 'AICTE',
      status: 'Approved',
      validUntil: '2025-07-31',
      description: 'All India Council for Technical Education approval for MCA and Management programs',
      grade: 'A+'
    },
    {
      body: 'NAAC',
      status: 'Accredited',
      validUntil: '2027-03-15',
      description: 'National Assessment and Accreditation Council accreditation',
      grade: 'A'
    },
    {
      body: 'University Affiliation',
      status: 'Affiliated',
      validUntil: '2026-06-30',
      description: 'Affiliated to Mumbai University for all degree programs',
      grade: 'Active'
    },
    {
      body: 'ISO Certification',
      status: 'Certified',
      validUntil: '2025-12-31',
      description: 'ISO 9001:2015 certification for quality management systems',
      grade: 'ISO 9001:2015'
    }
  ];

  const governingBodies = [
    'All India Council for Technical Education (AICTE)',
    'University Grants Commission (UGC)',
    'Mumbai University',
    'Government of Maharashtra',
    'Directorate of Technical Education, Maharashtra'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mandatory Disclosure
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transparency and Compliance Information
          </motion.p>
        </div>
      </motion.section>

      {/* Regulatory Compliance Documents */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Regulatory Compliance Documents</h2>
            <p className="text-xl text-gray-600">Download official documents and certificates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {doc.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        Updated: {new Date(doc.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <FaDownload className="mr-2" />
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Accreditation & Approvals</h2>
            <p className="text-xl text-gray-600">Current status of all accreditations and approvals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accreditationInfo.map((accreditation, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{accreditation.body}</h3>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {accreditation.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{accreditation.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Grade/Status:</span>
                    <p className="text-blue-600 font-bold">{accreditation.grade}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Valid Until:</span>
                    <p className="text-gray-600">{new Date(accreditation.validUntil).toLocaleDateString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600">Comprehensive yearly academic and administrative reports</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaFileAlt className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{report.title}</h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {report.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-xs">Size: {report.size}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <FaDownload className="mr-2" />
                  Download Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Bodies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Governing Bodies</h2>
            <p className="text-xl text-gray-600">Regulatory authorities overseeing our institution</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {governingBodies.map((body, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Important Note</h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              All the information provided above is as per the requirements of regulatory authorities. 
              The documents are regularly updated and the latest versions are always available for download. 
              For any queries regarding the mandatory disclosures, please contact our administration office 
              at admin@aimsr.edu.in or call +91 22 1234 5600.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MandatoryDisclosurePage;