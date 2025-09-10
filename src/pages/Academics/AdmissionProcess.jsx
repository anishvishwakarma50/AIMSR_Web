import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; // adjust path if needed
import Footer from "../../components/Footer"; // adjust path if needed

export default function AdmissionProcess() {
  const schedules = [
    { label: "Admission Schedule MMS - 06.08.2024", link: "#" },
    { label: "Admission Schedule MMS - 04.08.2024", link: "#" },
    { label: "Admission Schedule MMS - 22.07.2024", link: "#" },
    { label: "Admission Schedule MMS - 12.07.2024", link: "#" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admission Process and Guidelines
          </motion.h1>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              The admission for the undergraduate and postgraduate technical courses are
              done as per the guidelines and directions of Director of Technical Education,
              Maharashtra State. For more information click on the admission schedule below.
            </p>

            <p className="text-gray-700 mb-6">
              The circular for academic year <strong>2025-2026</strong> is yet to be circulated
              from <span className="font-semibold">MAHA CET</span>.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Admission Schedules</h2>
            <div className="flex flex-col gap-3">
              {schedules.map((schedule, idx) => (
                <a
                  key={idx}
                  href={schedule.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  {schedule.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
