import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaLightbulb, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Assistant Professor - Computer Science',
      department: 'MCA Department',
      type: 'Full-time',
      experience: '3-5 years',
      qualifications: 'Ph.D. in Computer Science/IT with NET/SET qualification',
      responsibilities: [
        'Teach undergraduate and postgraduate courses',
        'Guide student projects and research work',
        'Participate in curriculum development',
        'Conduct research in relevant areas'
      ],
      posted: '2025-01-10'
    },
    {
      id: 2,
      title: 'Associate Professor - Management Studies',
      department: 'MMS Department',
      type: 'Full-time',
      experience: '8-12 years',
      qualifications: 'Ph.D. in Management with industry experience preferred',
      responsibilities: [
        'Deliver lectures and conduct seminars',
        'Supervise doctoral research',
        'Industry collaboration and consulting',
        'Administrative responsibilities'
      ],
      posted: '2025-01-08'
    },
    {
      id: 3,
      title: 'Laboratory Assistant',
      department: 'Computer Lab',
      type: 'Full-time',
      experience: '1-3 years',
      qualifications: 'B.Tech/BCA with knowledge of networking and hardware',
      responsibilities: [
        'Maintain computer laboratory equipment',
        'Assist students during practical sessions',
        'Install and update software',
        'Basic hardware troubleshooting'
      ],
      posted: '2025-01-05'
    },
    {
      id: 4,
      title: 'Administrative Officer',
      department: 'Administration',
      type: 'Full-time',
      experience: '5-8 years',
      qualifications: 'Master\'s degree in any discipline with administrative experience',
      responsibilities: [
        'Handle student admissions and records',
        'Coordinate with various departments',
        'Manage official correspondence',
        'Assist in examination processes'
      ],
      posted: '2025-01-03'
    }
  ];

  const benefits = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement programs'
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: 'Collaborative Environment',
      description: 'Work with passionate educators and industry experts'
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-600" />,
      title: 'Innovation Focus',
      description: 'Encourage research, innovation, and creative thinking'
    },
    {
      icon: <FaBriefcase className="text-4xl text-purple-600" />,
      title: 'Competitive Benefits',
      description: 'Attractive salary packages with comprehensive benefits'
    }
  ];

  const whyWorkWithUs = [
    'Leading educational institution with excellent reputation',
    'State-of-the-art infrastructure and modern facilities',
    'Supportive work environment fostering growth and development',
    'Opportunity to shape future generations of students',
    'Research-oriented culture with industry connections',
    'Comprehensive health insurance and retirement benefits',
    'Flexible work arrangements and professional development support',
    'Regular faculty development programs and conferences'
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
            Work with AIMSR
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join Our Team of Dedicated Educators and Professionals
          </motion.p>
        </div>
      </motion.section>

      {/* Current Openings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Explore exciting career opportunities with us</p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Posted: {new Date(job.posted).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-gray-600"><strong>Department:</strong> {job.department}</p>
                        <p className="text-gray-600"><strong>Experience:</strong> {job.experience}</p>
                      </div>
                      <div>
                        <p className="text-gray-600"><strong>Qualifications:</strong> {job.qualifications}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:w-48 flex flex-col gap-3">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300">
                      Apply Now
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Work at AIMSR?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join a dynamic educational environment where your expertise contributes to shaping the next generation 
                of leaders and innovators. We offer a supportive, growth-oriented workplace that values excellence, 
                innovation, and professional development.
              </p>
              
              <div className="space-y-3">
                {whyWorkWithUs.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact HR Department</h2>
            <p className="text-xl text-gray-600">Have questions about career opportunities? Get in touch with our HR team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us Your Resume</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
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
                    <option value="">Select Position</option>
                    <option value="faculty">Faculty Position</option>
                    <option value="admin">Administrative Position</option>
                    <option value="support">Support Staff</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Cover Letter / Message" 
                    rows="4" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">HR Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-2xl text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 22 1234 5670</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">hr@aimsr.edu.in</p>
                    <p className="text-gray-600">careers@aimsr.edu.in</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">HR Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> We are an equal opportunity employer committed to diversity and inclusion.
                  </p>
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

export default CareersPage;