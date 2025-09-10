import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaGraduationCap, FaHandsHelping, FaUsers, FaAward, FaGlobe, FaHeart, FaBalanceScale } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const VisionMissionPage = () => {
  // Values data
  const values = [
    { 
      name: 'Agility', 
      icon: <FaBalanceScale className="text-4xl text-blue-600" />, 
      description: 'Willingness to respond, listen and act through dynamic approaches' 
    },
    { 
      name: 'Innovation', 
      icon: <FaLightbulb className="text-4xl text-green-600" />, 
      description: 'Idea is an asset, we believe. We nurture ideas and take them to newer levels' 
    },
    { 
      name: 'Integrity', 
      icon: <FaHandsHelping className="text-4xl text-red-600" />, 
      description: 'An experience of wholeness built through academic freedom, ethical behavior and shared governance' 
    },
    { 
      name: 'Trust', 
      icon: <FaUsers className="text-4xl text-purple-600" />, 
      description: 'Every initiative creates lasting progress in the lives of those we serve' 
    },
    { 
      name: 'Excellence', 
      icon: <FaAward className="text-4xl text-yellow-600" />, 
      description: 'Eminence in teaching and research leads to a path towards excellence' 
    },
    { 
      name: 'Mutual Respect', 
      icon: <FaHeart className="text-4xl text-teal-600" />, 
      description: 'Free exchange of ideas, diversity and harmony with a feeling of gratitude' 
    }
  ];

  // Mission points
  const missionPoints = [
    'Impart quality education that encourages students to be competent enough for best-fit job roles',
    'Provide faculty members with facilities to research, experiment and implement contemporary learning tools',
    'Foster innovation and critical thinking through modern pedagogical approaches',
    'Develop socially responsible leaders with global perspectives',
    'Create industry-academia partnerships for practical exposure and skill development'
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
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center z-10 px-4">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Vision, Mission & Values
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Guiding Principles of All India Institute of Management Studies and Research
          </motion.p>
        </div>
      </motion.section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed bg-blue-50 p-8 rounded-2xl shadow-sm">
                "To be globally recognized as an epitome of learning and innovation, imparting multifaceted management education driven by social sensitivity and supported by state of art infrastructure."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaGraduationCap className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Educational Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To impart quality education that encourages students to be competent enough for best-fit job roles, 
                fostering innovation and critical thinking through modern pedagogical approaches.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <FaLightbulb className="text-3xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Faculty Development</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide faculty members with facilities to research, experiment and implement contemporary learning tools, 
                creating an environment of continuous growth and innovation.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 bg-blue-50 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Mission Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">The fundamental principles that guide our actions and decisions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.name}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Commitment
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At AIMSR, we are committed to creating an educational environment that nurtures innovation, 
            fosters ethical leadership, and develops professionals who will make meaningful contributions to business and society.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <FaGlobe className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
              <p>Developing leaders with international outlook and cross-cultural understanding</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <FaHeart className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Responsibility</h3>
              <p>Instilling a sense of duty towards community and sustainable development</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl">
              <FaGraduationCap className="text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lifelong Learning</h3>
              <p>Fostering continuous personal and professional growth beyond the classroom</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMissionPage;