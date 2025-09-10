import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MCA = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Master of Computer Applications (MCA)
        </h1>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg leading-relaxed mb-4">
              Unleash your potential in the world of computer applications. At
              Aditya Institute of Management Studies & Research, we believe in
              empowering minds, strategic thinkers and nurturing future
              technocrats. Our Master of Computer Applications program offers a
              comprehensive curriculum designed to equip you with the skills and
              knowledge needed to excel in the dynamic field of computer
              applications.
            </p>
          </motion.section>

          {/* Program Highlights */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Rigorous coursework in software development, programming
                languages, and database management
              </li>
              <li>
                Specialization in emerging technologies and advanced computing
                concepts
              </li>
              <li>Hands-on experience through industry projects and internships</li>
              <li>Expert faculty with vast industry experience</li>
              <li>State-of-the-art computer labs and research facilities</li>
              <li>Collaborative learning environment</li>
              <li>All electives are available as per university norms</li>
            </ul>
          </motion.section>

          {/* Learning Areas */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Learning Areas</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Programming languages such as Java and Python</li>
              <li>Web development and mobile app development</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Data Science and Big Data Analysis</li>
              <li>Cloud Computing and Cybersecurity</li>
            </ul>
          </motion.section>

          {/* Milestones */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Remarkable Milestones</h2>
            <p className="text-lg mb-3">
              <strong>2024-26 Batch:</strong> Mr. Dhananjay Kakreja has achieved
              4th rank in the University of Mumbai’s Semester II rankings. Six
              students from the department secured positions among the top 15.
            </p>
            <p className="text-lg">
              <strong>2023-25 Batch:</strong> Mr. Ibrahim Shaikh secured 3rd rank
              in Semester III in the University of Mumbai’s list of academic
              toppers.
            </p>
          </motion.section>

          {/* Career Opportunities */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Exciting Career Opportunities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Software Engineer</li>
              <li>Artificial Intelligence (AI) Specialist</li>
              <li>Systems Analyst</li>
              <li>Database Administrator</li>
              <li>Web Developer</li>
              <li>Data Scientist</li>
              <li>IT Consultant</li>
              <li>Project Manager</li>
              <li>Cybersecurity Specialist</li>
              <li>Research Scientist</li>
            </ul>
          </motion.section>
        </div>

        {/* Sidebar */}
        <motion.aside
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Course Info */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Course Information</h3>
            <p>
              <strong>Duration:</strong> 24 months
            </p>
            <p>
              <strong>Study Level:</strong> Post Graduate
            </p>
            <p>
              <strong>Total Seats:</strong> 60
            </p>
          </div>

          {/* Syllabus */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Syllabus</h3>
            <p>First Year Syllabus</p>
            <p>Second Year Syllabus</p>
          </div>

          {/* Subjects */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Subject List</h3>
            <p>First Year Subjects</p>
            <p>Second Year Subjects</p>
          </div>

          {/* Eligibility */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Eligibility Criteria</h3>
            <p className="mb-2">
              <strong>Qualifying Exams:</strong> MH-CET
            </p>
            <p>
              Bachelor’s degree with 50% aggregate (45% for reserved category
              students) from a recognised university.
            </p>
          </div>
        </motion.aside>
      </div>

      <Footer />
    </div>
  );
};

export default MCA;
