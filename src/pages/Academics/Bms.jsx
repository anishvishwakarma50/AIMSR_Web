import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BMS = () => {
  const activities = [
    {
      src: "/images/BMS/BMS-student-activities-02.jpg",
      alt: "Students Group Discussion",
    },
    {
      src: "/images/BMS/BMS-student-activities-04.jpg",
      alt: "Seminar Workshop",
    },
    {
      src: "/images/BMS/BMS-student-activities-07.jpg",
      alt: "Team Project Presentation",
    },
    {
      src: "/images/BMS/BMS-student-activities-09.jpg",
      alt: "Management Event",
    },
    {
      src: "/images/BMS/BMS-student-activities-13.jpg",
      alt: "Cultural Festival",
    },
  ];
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds auto-slide

    return () => clearInterval(interval);
  }, [activities.length]);


  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/1600x500"
          alt="BMS Banner"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl font-bold"
          >
            Bachelor of Management Studies (BMS)
          </motion.h1>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Each Section in a Card */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Bachelor of Management Studies (BMS) in Mumbai
            </h2>
            <p className="text-lg leading-relaxed">
              Unlock your leadership potential with our comprehensive AICTE
              approved Bachelor of Management Studies (BMS) course. Gain
              essential skills in strategy, operations, finance, and more to
              become a well-rounded business professional. Join our vibrant
              community of innovative learners and experienced faculty.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p className="text-lg leading-relaxed">
              AIMSR, BMS program is designed to provide you with a robust
              foundation in core business disciplines...
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The three/four-years bachelor’s program offers a flexible approach
              for a holistic and multidisciplinary education...
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Data Literacy – derive insights from data for decisions</li>
              <li>Agile Leadership – lead teams, adaptive strategies</li>
              <li>Digital Communication – social media, virtual collaborations</li>
              <li>Tech-Savviness – analytics, CRM, automation tools</li>
              <li>Entrepreneurial Thinking – problem-solving, innovation</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
            <p className="text-lg leading-relaxed">
              A candidate must have finished their 10+2 with an aggregate of 50%
              or above from an accredited board...
            </p>
            <p className="text-lg leading-relaxed mt-2">
              It is expected that candidates should have undertaken the MAH-CET
              BBA BMS exam...
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Pedagogy for BMS</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Aspect</th>
                    <th className="border px-4 py-2">Pedagogical Approach</th>
                    <th className="border px-4 py-2">Andragogical Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Teaching Focus</td>
                    <td className="border px-4 py-2">
                      Learner-centred, self-learning
                    </td>
                    <td className="border px-4 py-2">Teacher-centred</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Content Delivery</td>
                    <td className="border px-4 py-2">
                      Case studies, group discussions
                    </td>
                    <td className="border px-4 py-2">Lectures, PPTs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Critical & Analytical Thinking</li>
              <li>Communication & Negotiation</li>
              <li>Problem Solving</li>
              <li>Digital Skills</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Job Roles</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Marketing Manager</li>
              <li>Quality Manager</li>
              <li>Business Development Executive</li>
              <li>Consultant</li>
              <li>HR Executive</li>
              <li>Assistant Manager</li>
              <li>Finance Manager</li>
            </ul>
          </motion.div>

          {/* Student Activities */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Student Activities</h2>

            <div className="relative w-full overflow-hidden">
              {/* Carousel Slides */}
              <motion.div
                className="flex"
                animate={{ x: `-${current * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center items-center"
                  >
                    <img
                      src={activity.src}
                      alt={activity.alt}
                      className="rounded-lg shadow w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {activities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full ${
                      current === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right: Sidebar Cards */}
        <div className="space-y-6">
          {/* Course Information */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-4">Course Information</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Study Level: Undergraduate</li>
              <li>Total Seats: 120</li>
            </ul>
          </motion.div>

          {/* Syllabus */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-4">Syllabus</h3>
            <p className="text-gray-700">
              Detailed syllabus with semester-wise subjects coming soon.
            </p>
          </motion.div>

          {/* Subject List */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-4">Subject List</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Business Economics</li>
              <li>Accounting & Finance</li>
              <li>Human Resource Management</li>
              <li>Marketing Management</li>
              <li>Business Law</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BMS;
