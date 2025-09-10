import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FeeRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-64 bg-gradient-to-r from-indigo-800 to-indigo-600 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Fee Refund Policy
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Academic Year 2025-26
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fee Refund Policy is done as per the guidelines and directions mentioned 
            in the Information Brochure circulated by Government of Maharashtra for 
            the Academic Year 2025-2026 for undergraduate and post graduate technical course.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kindly visit page no. <strong>89</strong> and <strong>90</strong> of the brochure below.
          </motion.p>

          {/* PDF Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/brochures/Information-Brochure-2025-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              📄 Information Brochure 2025-26
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeeRefundPolicy;
