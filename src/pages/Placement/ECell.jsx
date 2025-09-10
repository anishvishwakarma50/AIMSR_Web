import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ECell = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-64 bg-indigo-700 flex items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          AIMSR Entrepreneurship Cell (E-Cell)
        </motion.h1>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Functions */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Functions of E-Cell at AIMSR
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Conduct various innovation and entrepreneurship-related activities.</li>
              <li>Identify and reward innovations and share success stories.</li>
              <li>Organize periodic workshops, seminars, and interactions with entrepreneurs, investors, professionals, and create a mentor pool for student innovators.</li>
              <li>Network with peers and national entrepreneurship development organizations.</li>
              <li>Create an Institution’s Innovation portal to highlight innovative projects by faculty and students.</li>
              <li>Organize Hackathons, idea competitions, mini-challenges etc. with industry involvement.</li>
            </ul>
          </motion.section>

          {/* Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Objectives</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To provide a warm and conducive environment to students to convert their
              business ideas into reality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in getting down to brass tacks, instilling entrepreneurial
              thinking in our students, and creating a community of business
              practitioners with a lifelong commitment to achieve social and economic
              progress through entrepreneurship.
            </p>
          </motion.section>

          {/* Activities */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>AIMSR in association with IIT, Kharagpur conducted Entrepreneurship Awareness Drive.</li>
              <li>Organized “Global Entrepreneurship Hangout by Ankur (E-Cell of AIMSR)” in association with SED.</li>
              <li>Organized a Global Webinar on Entrepreneurship.</li>
              <li>Organized Retailer Carnival to provide a platform for students to experience how a business works.</li>
              <li>IIC Accelerator Meet-up on the theme “Fostering creativity, entrepreneurship, and the development of new ideas into viable products.”</li>
            </ul>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ECell;
