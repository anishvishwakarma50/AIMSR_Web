import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaAward, FaGlobe, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const values = [
    { name: 'Agility', icon: <FaLightbulb className="text-4xl text-blue-600" />, description: 'Adapting quickly to changing educational landscapes' },
    { name: 'Innovation', icon: <FaGraduationCap className="text-4xl text-green-600" />, description: 'Pioneering new methods in education and research' },
    { name: 'Integrity', icon: <FaHandsHelping className="text-4xl text-red-600" />, description: 'Upholding the highest ethical standards' },
    { name: 'Trust', icon: <FaUsers className="text-4xl text-purple-600" />, description: 'Building lasting relationships with all stakeholders' },
    { name: 'Excellence', icon: <FaAward className="text-4xl text-yellow-600" />, description: 'Striving for the highest quality in everything we do' }
  ];

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head, Management Studies',
      bio: 'Ph.D. in Management, 15+ years of industry and academic experience',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Associate Professor, Computer Applications',
      bio: 'Ph.D. in Computer Science, expert in AI and Machine Learning',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
    },
    {
      name: 'Dr. Amit Patel',
      designation: 'Professor, Finance',
      bio: 'Ph.D. in Finance, former investment banker with 20+ years experience',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Dr. Sneha Agarwal',
      designation: 'Associate Professor, Marketing',
      bio: 'Ph.D. in Marketing, specialist in digital marketing and consumer behavior',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    }
  ];

  const advisoryMembers = [
    'Dr. A.K. Mishra - Former Vice Chancellor, Mumbai University',
    'Mr. Ravi Agarwal - CEO, TechCorp Industries',
    'Ms. Sunita Reddy - Former Managing Director, InfoSystems Ltd.',
    'Dr. Vikram Singh - Director, National Research Institute'
  ];

  const bestPractices = [
    'Industry-integrated curriculum with regular updates',
    'Mandatory internships and industry projects',
    'Regular guest lectures by industry experts',
    'State-of-the-art laboratories and computing facilities',
    'Career counseling and placement support',
    'Research-oriented learning environment',
    'International collaborations and exchange programs',
    'Continuous faculty development programs'
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
            About AIMSR
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            All India Institute of Management Studies and Research
          </motion.p>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a globally recognized institution that nurtures future leaders, innovators, and responsible citizens 
                who contribute meaningfully to society and the global economy through excellence in education, research, and innovation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class education that combines academic rigor with practical application, foster a culture 
                of innovation and research, and develop ethical leaders who can navigate the complexities of the modern business world.
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.name}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Messages</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                  alt="Chairman"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Dr. Suresh Mehta</h3>
                  <p className="text-blue-600">Chairman</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "At AIMSR, we believe in nurturing not just academic excellence but also character and leadership. 
                Our commitment is to provide an environment where students can discover their potential and prepare for 
                the challenges of tomorrow."
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                  alt="Director"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Dr. Kavita Sharma</h3>
                  <p className="text-yellow-600">Director</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Our focus is on creating a dynamic learning ecosystem that bridges the gap between theoretical knowledge 
                and practical application. We are committed to fostering innovation, critical thinking, and ethical leadership 
                among our students."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Distinguished Faculty</h2>
            <p className="text-xl text-gray-600">Learn from the best minds in academia and industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{faculty.designation}</p>
                  <p className="text-gray-600 text-sm">{faculty.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Advisory Committee */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Advisory Committee</h2>
            <p className="text-xl text-gray-600">Guided by industry leaders and academic experts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisoryMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <p className="text-gray-800 font-medium">{member}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Best Practices</h2>
            <p className="text-xl text-gray-600">What sets us apart in higher education</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                <p className="text-gray-800">{practice}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;