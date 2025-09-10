import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaChalkboardTeacher, FaGraduationCap, FaBuilding, FaLightbulb, FaUsers, FaChartLine, FaBook, FaGlobe, FaHandshake } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DifferentiatorsPage = () => {
  // Awards and Rankings data
  const awards = [
    { year: '2025', rank: '4th', location: 'Mumbai', source: 'Times Top B-Schools Survey' },
    { year: '2024', rank: '35th', location: 'India', source: 'Times B-School Survey' },
    { year: '2024', rank: '4th', location: 'Mumbai', source: 'Times Top B-Schools Survey' },
    { year: '2023', rank: '37th', location: 'India', source: 'Times B-School Survey' },
    { year: '2023', rank: '4th', location: 'Mumbai', source: 'Times Top B-Schools Survey' },
    { year: '2022', rank: '40th', location: 'India', source: 'Times B-School Survey' },
    { year: '2022', rank: '6th', location: 'Mumbai', source: 'Times Top B-Schools Survey' },
    { year: '2021', rank: '7th', location: 'Mumbai', source: 'Times Top B-Schools Survey' },
    { year: '2020', rank: '45th', location: 'India', source: 'Times B-School Survey' },
    { year: '2019', rank: '10th', location: 'Mumbai', source: 'Times Top B-Schools Survey' },
    { year: '2018', rank: 'Top 2nd', location: 'India', source: 'Emerging B-School by Times' },
    { year: '2018', award: 'Best Emerging Management Institute', source: 'ET NOW & Making of a Developed India Conference' },
  ];

  // Key differentiators
  const keyDifferentiators = [
    { icon: <FaGraduationCap className="text-3xl text-blue-600" />, title: 'Academic Excellence', description: 'Consistent focus on achieving academic excellence' },
    { icon: <FaHandshake className="text-3xl text-green-600" />, title: 'Industry-Academia Bridge', description: 'Constantly striving to bridge the academia-industry gap' },
    { icon: <FaChalkboardTeacher className="text-3xl text-red-600" />, title: 'Experienced Faculty', description: 'High caliber faculty with rich research, industry, consulting and academic experience' },
    { icon: <FaUsers className="text-3xl text-purple-600" />, title: 'Employability Training', description: 'Training for employability through multi-stream workshops' },
    { icon: <FaLightbulb className="text-3xl text-yellow-600" />, title: 'Entrepreneurship', description: 'Encouraging entrepreneurship through incubation cell' },
    { icon: <FaGlobe className="text-3xl text-teal-600" />, title: 'Social Consciousness', description: 'Sensitivity to social consciousness and CSR projects' },
  ];

  // Teaching methodologies
  const teachingMethods = [
    'Classroom Teaching',
    'Industrial Visits',
    'Case Study based',
    'Role Plays',
    'Live Projects',
    'Scenario Planning',
    'Management Research Projects',
    'Problem Solving Sessions',
    'Team Projects',
    'Guest Lecture by Industry experts',
    'Classrooms Quiz',
    'Update syllabus as per latest industry trends',
    'Course training on new areas for Teaching',
    'Entrepreneurship skills',
    'Content interactivity',
    'Use of innovative tools like computer simulations, games etc.',
    'Customized Individual Learning Programs',
    'Multimedia (Audios/Videos)',
    'Teaching of cross functional subjects by multiple teachers',
    'Leadership Development Training',
    'Corporate Social Responsibility training'
  ];

  // Infrastructure highlights
  const infrastructure = [
    '9 storied Wi-Fi campus',
    '1,20,000 sq. ft. area',
    '12,000 sq.ft convention centre',
    '2,000 sq.ft seminar hall',
    '2,000 sq. ft. airy atrium for informal activities',
    '8 amphitheatre style classrooms with Smart Panel/LCD projection',
    'Auditorium with 500+ capacity',
    'Cafeteria with 300+ capacity',
    'IT labs equipped with latest equipment',
    'Language labs and special boardrooms',
    'Separate Library and reading zone with thousands of books',
    'Assistance provided for Hostel',
    'Easily accessible location'
  ];

  // Skill development programs
  const skillPrograms = [
    'Corporate Etiquette',
    'Interview Handling Skills',
    'Group Discussion Skills',
    'Team Building',
    'Time Management',
    'Risk Management',
    'Life Skills like Meditation & Philosophical Areas',
    'Psychological Areas (Conflict-Resolution/ People Handling)'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
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
            AIMSR Differentiators
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Established in 2011 | AICTE Approved | Affiliated to Mumbai University
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Overview</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All India Institute of Management Studies and Research (AIMSR) is a premier management institute established in 2011, approved by AICTE, DTE and affiliated to Mumbai University.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              className="bg-blue-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <FaGraduationCap className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">MMS</h3>
              <p className="text-gray-600">Master of Management Studies</p>
            </motion.div>

            <motion.div
              className="bg-green-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaBook className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">MCA</h3>
              <p className="text-gray-600">Master of Computer Applications</p>
            </motion.div>

            <motion.div
              className="bg-red-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FaUsers className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">BMS</h3>
              <p className="text-gray-600">Bachelor of Management Studies</p>
            </motion.div>

            <motion.div
              className="bg-purple-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaAward className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ph.D</h3>
              <p className="text-gray-600">Ph.D in Management Studies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Rankings Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Awards & Rankings</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Recognized among the top B-Schools in India</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 text-blue-800 font-bold text-lg px-4 py-2 rounded mr-4">
                  {award.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {award.rank && `Ranked ${award.rank} in ${award.location}`}
                    {award.award && award.award}
                  </h3>
                  <p className="text-gray-600">{award.source}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Special</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">The unique advantages that set AIMSR apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDifferentiators.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodologies Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Innovative Teaching Techniques</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Diverse methodologies for effective learning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800">{method}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-class Infrastructure</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">State-of-the-art facilities for an enhanced learning experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg"
                alt="AIMSR Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {infrastructure.map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skill Development Programs</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Creating employable professionals through comprehensive training</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{program}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Join the AIMSR Community
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Experience our unique educational approach and become part of our success story
          </motion.p>
          <motion.button
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Apply Now
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DifferentiatorsPage;