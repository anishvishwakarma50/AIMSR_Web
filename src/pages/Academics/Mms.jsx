import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MMS = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Master of Management Studies (MMS)
        </h1>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Master of Management Studies (MMS) in Mumbai
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              One of the best MMS colleges in Mumbai is Aditya Institute of
              Management Studies & Research (AIMSR). The MMS course at AIMSR is a
              2-year full-time course affiliated to the University of Mumbai and
              approved by DTE, Govt. of Maharashtra.
            </p>
            <p className="text-lg leading-relaxed">
              After completion, students will get an MMS degree from the
              University of Mumbai.
            </p>
          </motion.section>

          {/* Accolades */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Accolades</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Ranked 4th among top private B-schools in Mumbai, Times 2025</li>
              <li>Ranked 35th among top private B-schools in India, Times 2024</li>
              <li>Ranked 40th among top private B-schools in India, Times 2022</li>
              <li>
                Awarded as ‘Best Institute in Training & Placements in Maharashtra’
                at the CMAI Summit 2016
              </li>
              <li>“Best Emerging B-school of the Year” by Times Icons 2017</li>
            </ul>
          </motion.section>

          {/* Eligibility */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
            <p className="text-lg leading-relaxed mb-3">
              Passed minimum three-year bachelor’s degree from a recognized
              university with at least 50% marks (45% for reserved categories in
              Maharashtra).
            </p>
            <p className="text-lg leading-relaxed mb-3">
              Candidates appearing for the final year exam can also apply,
              subject to submission of proof of passing before the cut-off date.
            </p>
            <p className="text-lg">
              <strong>Test Scores Accepted:</strong> CAT, CET & CMAT (AY 2024).
            </p>
          </motion.section>

          {/* Pedagogy */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Pedagogy: Salient Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Highly interactive and intensive learning experience</li>
              <li>Extensive use of case studies and projects</li>
              <li>Leadership-driven curriculum</li>
              <li>Industry-aligned skills and professional development modules</li>
              <li>Continuous mentoring and personalized guidance</li>
            </ul>
          </motion.section>

          {/* Program Outcomes */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Program Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                PO1: Understand & communicate societal, ethical, legal, and global
                business issues
              </li>
              <li>
                PO2: Apply management knowledge, analytical & critical thinking
              </li>
              <li>PO3: Develop leadership skills</li>
              <li>PO4: Collaborate and manage teams effectively</li>
              <li>PO5: Enhance knowledge of contemporary management issues</li>
              <li>PO6: Engage in lifelong learning</li>
              <li>PO7: Show entrepreneurial mindset & innovation</li>
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
              <strong>Total Seats:</strong> 120
            </p>
            <p>
              <strong>DTE Code:</strong> MB-3438
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
        </motion.aside>
      </div>

      <Footer />
    </div>
  );
};

export default MMS;
