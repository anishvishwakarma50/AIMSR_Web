import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBusinessTime, FaFlask, FaUniversity, FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdmissionsPage = () => {
  const programs = [
    {
      name: 'Master of Management Studies (MMS)',
      icon: <FaBusinessTime className="text-4xl text-blue-600" />,
      duration: '2 Years',
      eligibility: 'Graduate in any discipline with minimum 50% marks',
      fees: '₹2,50,000 per year',
      highlights: ['Industry-integrated curriculum', 'Internship opportunities', 'Placement assistance']
    },
    {
      name: 'Master of Computer Applications (MCA)',
      icon: <FaLaptopCode className="text-4xl text-green-600" />,
      duration: '3 Years',
      eligibility: 'Bachelor\'s degree with Mathematics at 10+2 or graduation level',
      fees: '₹1,80,000 per year',
      highlights: ['Latest technology stack', 'Industry projects', 'Software development labs']
    },
    {
      name: 'Bachelor of Management Studies (BMS)',
      icon: <FaGraduationCap className="text-4xl text-purple-600" />,
      duration: '3 Years',
      eligibility: '12th pass with minimum 45% marks',
      fees: '₹1,20,000 per year',
      highlights: ['Foundation in management', 'Leadership skills', 'Practical exposure']
    },
    {
      name: 'Doctor of Philosophy (Ph.D.)',
      icon: <FaFlask className="text-4xl text-red-600" />,
      duration: '3-5 Years',
      eligibility: 'Master\'s degree with minimum 55% marks and NET/SET qualification',
      fees: '₹75,000 per year',
      highlights: ['Research guidance', 'Publishing opportunities', 'International collaborations']
    },
    {
      name: 'Post Graduate Diploma in Management (PGDM)',
      icon: <FaUniversity className="text-4xl text-yellow-600" />,
      duration: '2 Years',
      eligibility: 'Graduate in any discipline with minimum 50% marks',
      fees: '₹3,00,000 per year',
      highlights: ['Industry exposure', 'Case study methodology', 'Executive development']
    }
  ];

  const admissionSteps = [
    { step: 1, title: 'Application Submission', description: 'Submit online application with required documents' },
    { step: 2, title: 'Entrance Test', description: 'Appear for written test/interview as applicable' },
    { step: 3, title: 'Document Verification', description: 'Verify original documents and certificates' },
    { step: 4, title: 'Fee Payment', description: 'Pay admission fees and confirm your seat' },
    { step: 5, title: 'Orientation', description: 'Attend orientation program and begin classes' }
  ];

  const feeStructure = [
    { program: 'MMS', tuition: '2,50,000', development: '25,000', total: '2,75,000' },
    { program: 'MCA', tuition: '1,80,000', development: '20,000', total: '2,00,000' },
    { program: 'BMS', tuition: '1,20,000', development: '15,000', total: '1,35,000' },
    { program: 'Ph.D.', tuition: '75,000', development: '10,000', total: '85,000' },
    { program: 'PGDM', tuition: '3,00,000', development: '30,000', total: '3,30,000' }
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
            Admissions Open 2025
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Begin Your Journey to Excellence at AIMSR
          </motion.p>
        </div>
      </motion.section>

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Programs Offered</h2>
            <p className="text-xl text-gray-600">Choose the program that aligns with your career goals</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">{program.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div><strong>Duration:</strong> {program.duration}</div>
                      <div><strong>Annual Fees:</strong> {program.fees}</div>
                    </div>
                    <p className="text-gray-700 mb-4"><strong>Eligibility:</strong> {program.eligibility}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Program Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600">Simple steps to secure your admission</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-blue-300 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fee Structure (Annual)</h2>
            <p className="text-xl text-gray-600">Transparent and competitive fee structure</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Program</th>
                    <th className="px-6 py-4 text-left">Tuition Fees</th>
                    <th className="px-6 py-4 text-left">Development Fees</th>
                    <th className="px-6 py-4 text-left">Total Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium">{fee.program}</td>
                      <td className="px-6 py-4">₹{fee.tuition}</td>
                      <td className="px-6 py-4">₹{fee.development}</td>
                      <td className="px-6 py-4 font-bold text-blue-600">₹{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Application Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Apply?</h2>
            <p className="text-xl text-gray-600 mb-8">Download the application form and take the first step towards your future</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                <FaDownload className="mr-2" />
                Download Application Form
              </button>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300">
                Apply Online
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Admission Office */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Admission Office</h2>
            <p className="text-xl text-gray-600">Get in touch for any admission-related queries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaPhone className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 22 1234 5678</p>
              <p className="text-gray-600">+91 22 8765 4321</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaEnvelope className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">admissions@aimsr.edu.in</p>
              <p className="text-gray-600">info@aimsr.edu.in</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaMapMarkerAlt className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Education Street</p>
              <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;