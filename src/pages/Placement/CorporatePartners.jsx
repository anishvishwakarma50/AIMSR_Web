import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CorporatePartners = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-6 py-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8"
        >
          {/* Header with Button */}
          <div className="flex justify-between items-center mb-6">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-800"
            >
              Corporate Partners
            </motion.h1>

            <motion.a
              href="/files/placement-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download Placement Brochure
            </motion.a>
          </div>

          {/* Letter Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="mb-6">Dear Industry Expert,</p>
            <p className="mb-4">
              We would like to thank you for your valuable guidance and support. Today, brand AIMSR evokes
              recognition and respect in the corporate world.
            </p>
            <p className="mb-4">
              The placement cell comprising of experienced industry-oriented faculty & students is committed
              towards ensuring placement opportunities from multiple domains for all students. Summer placement
              helps students to gain firsthand experience in a particular industry. It also helps them in becoming
              more receptive to market requirements. The placement cell organizes student presentations about the
              projects undertaken in the organization by ensuring adequate rigour and discipline throughout the
              exercise. Students are provided feedback from both Industry & Faculty mentors. AIMSR has enjoyed
              support from several renowned corporates resulting in intense learning experiences. The internship
              often results in pre-placement offer and live projects for the students.
            </p>
            <p className="mb-4">
              Final placements take place by the best organizations in India & abroad by visiting AIMSR campus year
              after year. The Institute’s Alumni help build an image in the industry that facilitates recruitment
              from the campus. The placement cell organizes grooming workshops covering tips on resume building,
              mock Group Discussion & Personal Interview sessions to add value to the student preparation for the
              corporate. The placement cell also strives to instill life skills amongst the students.
            </p>
            <p className="mb-4">
              Through well–qualified, industry trained Faculty experts, the placement cell focuses on the holistic
              growth of the students, enabling them to stand to the challenges of the corporate world, not just as
              managers but also as leaders. The rigorous academic emphasis is designed to groom students to face the
              corporate industry challenges. The placement cell organizes activities that enable students to be
              effective team leaders as well as team players. The placement cell designs systems with the objective
              of providing better student-recruiter fit. The processes allow recruiters to access the students &
              provide them with career option. The placement cell works around the year to connect with these
              recruiters to our students.
            </p>
            <p className="mb-6">Looking forward to a long-term association always,</p>

            {/* Signature */}
            <div className="mt-6">
              <p className="font-semibold">Ms. Ruhi Mishra</p>
              <p className="text-gray-700">Deputy Director</p>
              <p className="text-gray-700">Email: placement@aimsr.edu.in</p>
              <p className="text-gray-700">Mobile: 9833868084</p>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CorporatePartners;
