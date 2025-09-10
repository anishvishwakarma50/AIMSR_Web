import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CircularsPage = () => {
  const circulars = [
    {
      id: 1,
      date: '2024-07-15',
      title: 'Institute level Merit List for the 1st year BMS course for the AY 2024-25',
      type: 'Merit List',
      urgent: true,
      link: '/circulars/bms_merit_2024.pdf',
    },
    {
      id: 2,
      date: '2024-07-15',
      title: 'General Merit list of 1st year BMS course for the AY 2024-25',
      type: 'Merit List',
      urgent: false,
      link: '/circulars/bms_general_merit_2024.pdf',
    },
    {
      id: 3,
      date: '2024-09-10',
      title: 'ACAP MMS enquiry details for the year 2024-26',
      type: 'Enquiry',
      urgent: false,
      link: '/circulars/acap_mms_enquiry_2024.pdf',
    },
    {
      id: 4,
      date: '2024-09-10',
      title: 'Institute level MMS enquiry details for the year 2024-26',
      type: 'Enquiry',
      urgent: false,
      link: '/circulars/mms_institute_enquiry_2024.pdf',
    },
    {
      id: 5,
      date: '2024-09-10',
      title: 'General merit list for MMS enquiry details for the year 2024-26',
      type: 'Merit List',
      urgent: false,
      link: '/circulars/mms_general_merit_2024.pdf',
    },
    {
      id: 6,
      date: '2024-09-12',
      title: 'ACAP merit list for 1st year MCA course for the A.Y.2024-25',
      type: 'Merit List',
      urgent: true,
      link: '/circulars/mca_acap_merit_2024.pdf',
    },
    {
      id: 7,
      date: '2024-09-12',
      title: 'General merit list for 1st year MCA course for the A.Y.2024-25',
      type: 'Merit List',
      urgent: false,
      link: '/circulars/mca_general_merit_2024.pdf',
    },
    {
      id: 8,
      date: '2024-09-12',
      title: 'Level merit list for 1st year MCA course for the A.Y.2024-25',
      type: 'Merit List',
      urgent: false,
      link: '/circulars/mca_level_merit_2024.pdf',
    },
    {
      id: 9,
      date: '2023-08-20',
      title: 'MMS ACAP merit list for the A.Y. 2023-24',
      type: 'Merit List',
      urgent: false,
      link: '/circulars/mms_acap_merit_2023.pdf',
    },
    {
      id: 10,
      date: '2023-06-15',
      title: 'Academic Calendar of A.Y. 2023-24',
      type: 'Calendar',
      urgent: false,
      link: '/circulars/academic_calendar_2023.pdf',
    },
    {
      id: 11,
      date: '2023-05-25',
      title: 'Student Registration on Maha DBT Portal Circular',
      type: 'Circular',
      urgent: false,
      link: '/circulars/maha_dbt_circular.pdf',
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
            Circulars
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Official announcements, guidelines, and updates
          </motion.p>
        </div>
      </motion.section>

      {/* Circulars Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Circulars</h2>
            <p className="text-lg text-gray-600">Click below to view or download the circular PDFs</p>
          </motion.div>

          <div className="space-y-6">
            {circulars.map((circular, index) => (
              <motion.div
                key={circular.id}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-l-4 ${
                  circular.urgent ? 'border-red-500' : 'border-blue-500'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  {/* Circular Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-500 flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        {new Date(circular.date).toLocaleDateString()}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          circular.urgent
                            ? 'bg-red-100 text-red-600'
                            : 'bg-green-100 text-green-600'
                        }`}
                      >
                        {circular.type}
                      </span>
                      {circular.urgent && (
                        <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-bold">
                          URGENT
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{circular.title}</h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <a
                      href={circular.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View
                    </a>
                    <a
                      href={circular.link}
                      download
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center"
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

export default CircularsPage;
