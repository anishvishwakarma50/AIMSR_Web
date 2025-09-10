import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Highlights = () => {
  const [activeTab, setActiveTab] = useState("2022-24");

  const tabs = {
    "2022-24": ["/images/Placement_Highlight/Final-Placement-2022-24.jpg", "/images/Placement_Highlight/Final-Placement-2022-24-2.jpg"],
    "2020-21": ["/images/Placement_Highlight/Final-Placement-2020-21.jpg", "/images/Placement_Highlight/Final-Placement-2020-21-2.jpg"],
    "2019-21": ["/images/Placement_Highlight/Final-Placements-Poster-2019-2021.jpg.bv_resized_desktop.jpg.bv.webp"],
    "2018-20": ["/images/Placement_Highlight/placement-board-revised-2018-20.jpg.bv_resized_desktop.jpg.bv.webp"],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        {/* Banner */}
        <div className="relative w-full h-64 bg-blue-800 flex items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
          >
            Placement Highlights
          </motion.h1>
        </div>

        {/* Company Logos */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold mb-6 text-gray-800"
          >
            List of Companies for Final Placement
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white shadow rounded-xl p-6"
          >
            <img
              src="/images/Placement_Highlight/placement.jpg.bv_resized_desktop.jpg.bv_.webp"
              alt="Company Logos"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </section>

        {/* Final Placement with Tabs */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold mb-6 text-gray-800"
          >
            Final Placement
          </motion.h2>

          {/* Tab Buttons */}
          <div className="flex space-x-4 mb-6">
            {Object.keys(tabs).map((year) => (
              <button
                key={year}
                onClick={() => setActiveTab(year)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === year
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {tabs[activeTab].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${activeTab} placement`}
                className="w-full h-auto rounded-lg shadow"
              />
            ))}
          </motion.div>
        </section>

        {/* Placement Team */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold mb-6 text-gray-800"
          >
            Placement Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Ms. Ruhi Mishra",
                email: "placement@aimsr.edu.in",
              },
              {
                name: "Prof. Dinesh Mehra",
                email: "dinesh.m@aimsr.edu.in",
              },
              {
                name: "CA. Vinay Tiwari",
                email: "vinay.t@asbm.edu.in",
              },
              {
                name: "Prof. Ramakrishnan Iyer",
                email: "ramakrishnan.i@aimsr.edu.in",
              },
            ].map((person, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                <p className="text-gray-600">{person.email}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Highlights;
