import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />,
      title: 'Address',
      details: [
        'All India Institute of Management Studies and Research (AIMSR)',
        '123 Education Street, Andheri East',
        'Mumbai, Maharashtra 400069',
        'India'
      ]
    },
    {
      icon: <FaPhone className="text-4xl text-green-600" />,
      title: 'Phone Numbers',
      details: [
        'Main Office: +91 22 1234 5600',
        'Admissions: +91 22 1234 5678',
        'Library: +91 22 1234 5679',
        'Fax: +91 22 1234 5650'
      ]
    },
    {
      icon: <FaEnvelope className="text-4xl text-purple-600" />,
      title: 'Email Addresses',
      details: [
        'General Inquiry: info@aimsr.edu.in',
        'Admissions: admissions@aimsr.edu.in',
        'Academic: academic@aimsr.edu.in',
        'Administration: admin@aimsr.edu.in'
      ]
    }
  ];

  const departments = [
    { name: 'Principal Office', phone: '+91 22 1234 5601', email: 'principal@aimsr.edu.in' },
    { name: 'Registrar Office', phone: '+91 22 1234 5602', email: 'registrar@aimsr.edu.in' },
    { name: 'MCA Department', phone: '+91 22 1234 5603', email: 'mca@aimsr.edu.in' },
    { name: 'MMS Department', phone: '+91 22 1234 5604', email: 'mms@aimsr.edu.in' },
    { name: 'Accounts Department', phone: '+91 22 1234 5605', email: 'accounts@aimsr.edu.in' },
    { name: 'Placement Cell', phone: '+91 22 1234 5606', email: 'placements@aimsr.edu.in' }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-2xl" />, name: 'Facebook', url: '#' },
    { icon: <FaTwitter className="text-2xl" />, name: 'Twitter', url: '#' },
    { icon: <FaInstagram className="text-2xl" />, name: 'Instagram', url: '#' },
    { icon: <FaLinkedin className="text-2xl" />, name: 'LinkedIn', url: '#' },
    { icon: <FaYoutube className="text-2xl" />, name: 'YouTube', url: '#' }
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
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We're Here to Help and Answer Any Questions You Might Have
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option value="">Select Subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="placement">Placement Inquiry</option>
                    <option value="general">General Query</option>
                    <option value="complaint">Complaint/Feedback</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="6" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Office Hours */}
              <motion.div
                className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
            <p className="text-xl text-gray-600">Located in the heart of Mumbai for easy accessibility</p>
          </motion.div>

          <motion.div
            className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Google Maps Embed would go here */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
              <div className="text-center">
                <FaMapMarkerAlt className="text-6xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">AIMSR Campus</h3>
                <p className="text-gray-600">123 Education Street, Andheri East, Mumbai</p>
                <p className="text-blue-600 mt-2 font-medium">Google Maps Integration Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Direct contact information for specific departments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-blue-600" />
                    <span className="text-gray-600 text-sm">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-blue-600" />
                    <span className="text-gray-600 text-sm">{dept.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-600">Follow us on social media for latest updates</p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;