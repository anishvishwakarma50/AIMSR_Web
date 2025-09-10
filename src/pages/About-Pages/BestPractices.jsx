import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; // adjust path if needed
import Footer from "../../components/Footer"; // adjust path if needed

const BestPractices = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <motion.section
        className="relative h-72 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Best Practices
          </motion.h1>
        </div>
      </motion.section>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab(1)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 1
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            BEST PRACTICE - I
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 2
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            BEST PRACTICE - II
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 md:p-10 rounded-lg shadow-lg"
        >
          {activeTab === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                TITLE OF THE PRACTICE: SUSTAINABLE DEVELOPMENTAL LEARNING
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-2">Objectives:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Offering practical competencies for employability.</li>
                <li>Cultivating critical thinking through problem-solving.</li>
                <li>Engaging with corporate professionals in a VUCA world.</li>
                <li>Nurturing adaptability, resilience, and self-awareness.</li>
                <li>
                  Hands-on exposure to managerial skills like planning,
                  organizing, team building, etc.
                </li>
                <li>
                  Encouraging self-learning through observations & experiences.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">The Context:</h3>
              <p className="text-gray-700 leading-relaxed">
                In today’s evolving business environment, AIMSR embraces a
                holistic approach to education focusing on sustainable learning,
                skill development, industry partnerships, research, and student
                support through conclaves, seminars, and conferences.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">The Practice:</h3>
              <p className="text-gray-700 leading-relaxed">
                AIMSR emphasizes employability and holistic development through
                100+ annual events, conclaves, lectures, research conferences,
                and student-driven initiatives. Students actively plan,
                organize, and execute events, gaining real-world managerial
                experience.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Evidence of Success:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>100+ successful events each year.</li>
                <li>Alignment with 12 Program Outcomes.</li>
                <li>Participation from industry experts & alumni.</li>
                <li>Positive feedback through various formats.</li>
                <li>Broadcasting events on AIMSR’s YouTube channel.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Problems & Resources Required:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Need for quality speakers & sponsorships.</li>
                <li>
                  Infrastructure and intellectual resources for
                  interdisciplinary events.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                TITLE OF THE PRACTICE: DIGITALLY EMPOWERED INSTITUTION AND
                KNOWLEDGE CENTRE
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Objectives of the Practice:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Support Digital India’s mission.</li>
                <li>Improve teaching and learning using ICT.</li>
                <li>Ensure resource accessibility for all learners.</li>
                <li>Digitize administration to reduce paperwork.</li>
                <li>Expand institutional reach with technology.</li>
                <li>Reduce carbon footprint through digital adoption.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">The Context:</h3>
              <p className="text-gray-700 leading-relaxed">
                AIMSR has aligned with NEP 2020 and Digital India vision by
                investing in ICT-enabled education, digitalized administration,
                and faculty training. Covid-19 accelerated digital adoption,
                leading to a complete shift to online platforms.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">The Practice:</h3>
              <p className="text-gray-700 leading-relaxed">
                AIMSR has upgraded ICT infrastructure with smart classrooms,
                ERP systems, digital libraries, Microsoft 365, Teams, and
                high-speed internet. Training programs ensured smooth
                transition, enhancing both academic and administrative
                efficiency.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Evidence of Success:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>100% ICT proficiency among staff.</li>
                <li>Fully automated ERP-enabled administration.</li>
                <li>
                  Access to global e-resources like EBSCO, J-Gate, and Pearson.
                </li>
                <li>Official communication via online channels.</li>
                <li>Interactive digital learning through smart boards & labs.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Problems & Resources Required:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Frequent infrastructure upgrades are required.</li>
                <li>Low bandwidth & network issues at times.</li>
                <li>
                  Challenges in replicating face-to-face classroom interaction.
                </li>
                <li>Staff training during digital transition.</li>
              </ul>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BestPractices;
