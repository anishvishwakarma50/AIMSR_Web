import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUniversity, FaFilePdf } from "react-icons/fa";
import Navbar from "../../components/Navbar"; // adjust path if needed
import Footer from "../../components/Footer"; // adjust path if needed

const SponsoringBody = () => {
  const institutions = [
    "Aditya Institute of Management Studies & Research",
    "Aditya School of Business Management",
    "Aditya College of Architecture",
    "Aditya College of Design Studies",
    "Aditya Centre of Excellence",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <motion.section
        className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Shree Ameya Public Charitable Trust
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Established in 2001 | Committed to Education & Nation-Building
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Shree Ameya Public Charitable Trust is a Mumbai-based organization deeply committed to
            education and nation-building. Established in 2001, it operates under the Aditya Group of
            Institutions and has developed a strong presence in higher education through several
            colleges and programs.
          </motion.p>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Institutions under the Trust
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {institutions.map((inst, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <FaUniversity className="text-3xl text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-800">{inst}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Location</h3>
            <p className="text-lg text-gray-700 flex items-start">
              <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1" />
              Aditya Educational Campus, R.M. Bhattad Road, Ram Nagar, Borivali (West), Mumbai 400092
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact</h3>
            <p className="text-lg text-gray-700 flex items-center mb-2">
              <FaPhoneAlt className="text-green-600 mr-3" /> 022-2865 6964 / 022-3520 6111
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              <FaEnvelope className="text-red-600 mr-3" />
              <a href="mailto:info@ameyatrust.org" className="hover:underline text-blue-600">
                info@ameyatrust.org
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Certificate */}
      <section className="py-16 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <a
            href="/TrustCertificate.pdf" // PDF must be in public folder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaFilePdf className="mr-2 text-xl" />
            Trust Certificate
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsoringBody;
