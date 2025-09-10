import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdministrationPage = () => {
  const administrators = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      position: 'Principal',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      qualifications: 'Ph.D. in Management, M.B.A., B.Com',
      experience: '20+ years in Academic Administration',
      email: 'principal@aimsr.edu.in',
      phone: '+91 22 1234 5601',
      bio: 'Dr. Sharma brings extensive experience in educational leadership and has been instrumental in establishing AIMSR as a premier institution.'
    },
    {
      name: 'Prof. Meera Joshi',
      position: 'Registrar',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      qualifications: 'M.A. in Public Administration, LL.B.',
      experience: '15+ years in Academic Administration',
      email: 'registrar@aimsr.edu.in',
      phone: '+91 22 1234 5602',
      bio: 'Prof. Joshi oversees all academic records, admissions, and examination processes with exceptional attention to detail.'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Head of Department - MCA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      qualifications: 'Ph.D. in Computer Science, M.Tech',
      experience: '12+ years in Computer Science Education',
      email: 'hod.mca@aimsr.edu.in',
      phone: '+91 22 1234 5603',
      bio: 'Dr. Patel leads the Computer Applications department with a focus on cutting-edge technology and industry relevance.'
    },
    {
      name: 'Dr. Priya Agarwal',
      position: 'Head of Department - Management',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      qualifications: 'Ph.D. in Management Studies, M.B.A.',
      experience: '14+ years in Management Education',
      email: 'hod.mms@aimsr.edu.in',
      phone: '+91 22 1234 5604',
      bio: 'Dr. Agarwal heads the Management Studies department, emphasizing practical learning and industry connections.'
    },
    {
      name: 'Mr. Sunil Verma',
      position: 'Administrative Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      qualifications: 'M.Com, Diploma in Management',
      experience: '18+ years in Educational Administration',
      email: 'admin@aimsr.edu.in',
      phone: '+91 22 1234 5605',
      bio: 'Mr. Verma manages the day-to-day administrative operations ensuring smooth functioning of the institution.'
    },
    {
      name: 'Ms. Kavita Singh',
      position: 'Finance Officer',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      qualifications: 'C.A., M.Com',
      experience: '10+ years in Financial Management',
      email: 'finance@aimsr.edu.in',
      phone: '+91 22 1234 5606',
      bio: 'Ms. Singh oversees all financial operations, budgeting, and fee management with transparency and efficiency.'
    }
  ];

  const organogram = {
    chairman: { name: 'Chairman', person: 'Dr. Suresh Mehta' },
    director: { name: 'Director', person: 'Dr. Kavita Sharma' },
    principal: { name: 'Principal', person: 'Dr. Rajesh Kumar Sharma' },
    departments: [
      { name: 'Registrar', person: 'Prof. Meera Joshi' },
      { name: 'HOD - MCA', person: 'Dr. Amit Patel' },
      { name: 'HOD - MMS', person: 'Dr. Priya Agarwal' },
      { name: 'Admin Officer', person: 'Mr. Sunil Verma' },
      { name: 'Finance Officer', person: 'Ms. Kavita Singh' }
    ]
  };

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
            Administration
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Leadership Team Committed to Excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Organogram Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizational Structure</h2>
            <p className="text-xl text-gray-600">Our administrative hierarchy</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Chairman */}
            <div className="text-center mb-8">
              <div className="bg-blue-600 text-white p-4 rounded-lg inline-block">
                <h3 className="text-lg font-bold">{organogram.chairman.name}</h3>
                <p className="text-sm">{organogram.chairman.person}</p>
              </div>
            </div>

            {/* Director */}
            <div className="text-center mb-8">
              <div className="bg-blue-500 text-white p-4 rounded-lg inline-block">
                <h3 className="text-lg font-bold">{organogram.director.name}</h3>
                <p className="text-sm">{organogram.director.person}</p>
              </div>
            </div>

            {/* Principal */}
            <div className="text-center mb-8">
              <div className="bg-blue-400 text-white p-4 rounded-lg inline-block">
                <h3 className="text-lg font-bold">{organogram.principal.name}</h3>
                <p className="text-sm">{organogram.principal.person}</p>
              </div>
            </div>

            {/* Departments */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {organogram.departments.map((dept, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-300 text-blue-900 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h4 className="font-bold text-sm">{dept.name}</h4>
                  <p className="text-xs">{dept.person}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Administrators Profiles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Administrative Team</h2>
            <p className="text-xl text-gray-600">Meet our dedicated leadership team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {administrators.map((admin, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{admin.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{admin.position}</p>
                    <p className="text-gray-600 text-sm mb-2">{admin.qualifications}</p>
                    <p className="text-gray-600 text-sm mb-4">{admin.experience}</p>
                    <p className="text-gray-700 mb-4">{admin.bio}</p>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-blue-600" />
                        <span className="text-sm text-gray-600">{admin.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaPhone className="text-blue-600" />
                        <span className="text-sm text-gray-600">{admin.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Administrative Contact</h2>
            <p className="text-xl text-gray-600">Get in touch with our administration</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">123 Education Street</p>
              <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaPhone className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">Main: +91 22 1234 5600</p>
              <p className="text-gray-600">Fax: +91 22 1234 5650</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaEnvelope className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">admin@aimsr.edu.in</p>
              <p className="text-gray-600">info@aimsr.edu.in</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdministrationPage;