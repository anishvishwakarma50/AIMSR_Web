import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaLaptop, FaUsers, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LibraryPage = () => {
  const services = [
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: 'Book Lending',
      description: 'Extensive collection of books, journals, and reference materials available for borrowing'
    },
    {
      icon: <FaLaptop className="text-4xl text-green-600" />,
      title: 'Digital Resources',
      description: 'Access to online databases, e-books, and digital journals from leading publishers'
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" />,
      title: 'Research Support',
      description: 'Dedicated research assistance and guidance for academic projects and thesis work'
    }
  ];

  const libraryImages = [
    'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg',
    'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg',
    'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg'
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const features = [
    'Over 50,000 books and journals',
    'Digital library with e-resources',
    'Silent study areas and group discussion rooms',
    'Computer terminals with internet access',
    'Photocopying and printing facilities',
    'Reference and research assistance',
    'Inter-library loan services',
    'Online catalog and reservation system'
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
            AIMSR Library
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your Gateway to Knowledge and Learning
          </motion.p>
        </div>
      </motion.section>

      {/* About Library Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">About Our Library</h2>
              <p className="text-lg text-gray-600 mb-6">
                The AIMSR Library is a modern learning hub designed to support the academic and research needs 
                of our students and faculty. With a comprehensive collection of resources and state-of-the-art facilities, 
                we provide an environment conducive to learning, research, and intellectual growth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our library combines traditional print resources with cutting-edge digital technologies to offer 
                a seamless learning experience. From quiet study spaces to collaborative work areas, we cater to 
                diverse learning styles and preferences.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Slider {...sliderSettings}>
                {libraryImages.map((img, index) => (
                  <div key={index} className="px-2">
                    <img
                      src={img}
                      alt={`Library Image ${index + 1}`}
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive library services to support your academic journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Library Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need for effective study and research</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                <p className="text-gray-800">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings and Contact */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-6">
                <FaClock className="text-3xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Library Timings</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-3">
                  <span className="font-medium">Exam Period:</span>
                  <span>Extended Hours</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Library</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-yellow-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 22 1234 5679</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">library@aimsr.edu.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUsers className="text-yellow-600" />
                  <div>
                    <p className="font-medium">Librarian</p>
                    <p className="text-gray-600">Dr. Meera Joshi</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LibraryPage;