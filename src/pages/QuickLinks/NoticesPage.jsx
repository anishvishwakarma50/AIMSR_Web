import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const NoticesPage = () => {
  const notices = [
    {
      id: 1,
      date: '2025-07-13',
      title: 'Admission Notice for MCA',
      type: 'Admission',
      urgent: true,
      link: '/notices/mca-admission-2025.pdf',
    },
    {
      id: 2,
      date: '2025-07-11',
      title: 'Admission Notice for MMS',
      type: 'Admission',
      urgent: true,
      link: '/notices/mms-admission-2025.pdf',
    },
    {
      id: 3,
      date: '2025-01-06',
      title: 'MBA and MCA – Approval of Fees for the Academic Year 2025-26',
      type: 'Fees',
      urgent: false,
      link: '/notices/fees-approval-2025-26.pdf',
    },
    {
      id: 4,
      date: '2024-10-01',
      title: 'Admission Notice – 2024-25 from ARA',
      type: 'Admission',
      urgent: false,
      link: '/notices/ara-admission-2024-25.pdf',
    },
    {
      id: 5,
      date: '2024-09-09',
      title: 'MCA Admission Notification-2 A.Y. 2024-25',
      type: 'Admission',
      urgent: false,
      link: '/notices/mca-notification2-2024.pdf',
    },
    {
      id: 6,
      date: '2024-09-09',
      title: 'MMS Admission Notification-2 A.Y. 2024-25',
      type: 'Admission',
      urgent: false,
      link: '/notices/mms-notification2-2024.pdf',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-72 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
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
            Notices
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Stay updated with the latest official announcements
          </motion.p>
        </div>
      </motion.section>

      {/* Notices Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Notices</h2>
            <p className="text-lg text-gray-600">Click below to view or download the notice PDFs</p>
          </motion.div>

          <div className="space-y-6">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-l-4 ${
                  notice.urgent ? 'border-red-500' : 'border-blue-500'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  {/* Notice Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-500 flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        {new Date(notice.date).toLocaleDateString()}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          notice.urgent
                            ? 'bg-red-100 text-red-600'
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {notice.type}
                      </span>
                      {notice.urgent && (
                        <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-bold">
                          URGENT
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{notice.title}</h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <a
                      href={notice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View
                    </a>
                    <a
                      href={notice.link}
                      download
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoticesPage;
