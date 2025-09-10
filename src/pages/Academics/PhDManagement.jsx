import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PhDManagement = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Ph.D. in Management Studies
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
              Ph.D. College in Mumbai in Management Studies
            </h2>
            <p className="text-lg leading-relaxed">
              Aditya Institute of Management Studies and Research (AIMSR) is a
              recognized Ph.D. Centre of University of Mumbai. Students
              interested in pursuing Ph.D. in Management Studies can register
              for this programme.
            </p>
          </motion.section>

          {/* Duration & Intake */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Duration & Intake</h2>
            <p className="text-lg leading-relaxed mb-3">
              Duration of the Ph.D. Degree shall be a minimum of <b>3 years</b>{" "}
              and a maximum of <b>6 years</b> from the date of admission,
              including course work.
            </p>
            <p className="text-lg">
              <strong>Intake:</strong> 10 Seats
            </p>
          </motion.section>

          {/* Eligibility Criteria */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
            <p className="text-lg leading-relaxed mb-3">
              Candidates must have a Master’s degree or equivalent with at least{" "}
              <b>55% marks</b> (50% for reserved categories) or an equivalent
              grade in the UGC 7-point scale. Degrees from recognized foreign
              institutions are also accepted.
            </p>
            <p className="text-lg leading-relaxed">
              <b>Note:</b> Admission will be based on VCD guidelines:
              Exam./Thesis/Univ./VCD/947 of 2018, available on the University
              website.
            </p>
          </motion.section>

          {/* Admission Procedure */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Procedure for Admission
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Admission based on criteria set by the Institution and UGC norms.
              </li>
              <li>
                Reservation policy of Central/State Government will be applied.
              </li>
              <li>
                Candidates must clear one of the following:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Ph.D. Entrance Test (PET) in Management by University of Mumbai</li>
                  <li>UGC-NET / CSIR-NET (including JRF)</li>
                  <li>SLET / GATE / Teacher Fellowship from apex bodies</li>
                </ul>
              </li>
            </ul>
          </motion.section>

          {/* Required Documents */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Mark Sheets & Convocation Certificate (Bachelor’s & Master’s)</li>
              <li>Certificate of PET clearance / relevant eligibility documents</li>
              <li>NOC from employer (if applicable)</li>
              <li>Residential proof</li>
              <li>Curriculum Vitae</li>
              <li>Character Certificate</li>
              <li>Migration Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
            </ul>
          </motion.section>

          {/* Research Proposal */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Research Proposal</h2>
            <p className="text-lg leading-relaxed">
              Candidates must submit an outline of their research proposal in
              consultation with their Research Guide to the University of Mumbai
              through AIMSR. Approval must be obtained from the Research
              Recognition Committee (RRC) before formal registration.
            </p>
          </motion.section>

          {/* Course Work */}
          <motion.section
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Course Work</h2>
            <p className="text-lg leading-relaxed mb-3">
              Every candidate must undergo prescribed coursework by the Board of
              Studies in Management.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Minimum duration: 1 semester (6 months)</li>
              <li>Acts as pre-Ph.D. preparation</li>
              <li>
                Candidates with an M.Phil. (as per UGC guidelines) are exempted
              </li>
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
              <strong>Duration:</strong> 3 - 6 Years
            </p>
            <p>
              <strong>Study Level:</strong> Doctoral (Ph.D.)
            </p>
            <p>
              <strong>Total Seats:</strong> 10
            </p>
          </div>

          {/* Admission Tests */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Admission Tests Accepted</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Ph.D. Entrance Test (PET) – University of Mumbai</li>
              <li>UGC-NET (including JRF)</li>
              <li>UGC-CSIR NET (including JRF)</li>
              <li>SLET / GATE</li>
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Documents Required</h3>
            <p>Mark sheets, PET clearance, CV, NOC, ID Proof, etc.</p>
          </div>
        </motion.aside>
      </div>

      <Footer />
    </div>
  );
};

export default PhDManagement;
