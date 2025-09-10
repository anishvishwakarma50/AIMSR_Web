import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const OnlineFeePayment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-64 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Online Fee Payment
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Convenient and secure options to pay your fees online.
          </motion.p>
        </div>
      </motion.section>

      {/* ERP Login Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-semibold text-blue-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ERP Login for Fee Payment
          </motion.h2>
          <motion.a
            href="https://erp.aimsr.edu.in" // 🔗 Replace with actual ERP link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Go to ERP Login
          </motion.a>
        </div>
      </section>

      {/* Other Options */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-semibold text-blue-700 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Other Options for Fee Payment
          </motion.h2>

          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800">State Bank Collect</h3>
              <p className="text-gray-600 mt-2">
                Pay your fees securely via State Bank of India’s online portal.
              </p>
            </div>
            <a
              href="https://www.onlinesbi.sbi/sbicollect/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Pay Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineFeePayment;
