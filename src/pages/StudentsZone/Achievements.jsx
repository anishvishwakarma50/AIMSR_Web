import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const achievements = [
  {
    name: "Mr. Dhananjay Kakreja",
    detail:
      "Achieved an impressive 4th rank in the University of Mumbai’s Semester II academic rankings. Notably, six students from the department have secured positions among the top 15, showcasing the department’s strong academic performance for the MCA batch of 2024-26.",
  },
  {
    name: "Mr. Ibrahim Shaikh",
    detail:
      "Secured 3rd rank in Semester III in the University of Mumbai’s list of academic toppers for the MCA batch 2023-2025.",
  },
  {
    name: "Pranav Jha (MMS Finance)",
    detail:
      "Secured 3rd rank in the Vivibha National Level Research Competition under the theme Vision for Viksit Bharat, organized by Bharatiya Shiksha Mandal at SGT University Gurugram, Haryana, October 2024.",
  },
  {
    name: "Adarsh Singh (MMS Finance)",
    detail:
      "Secured 2nd rank in the Vivibha National Level Research Competition under the theme Vision for Viksit Bharat, organized by Bharatiya Shiksha Mandal at SGT University Gurugram, Haryana, October 2024.",
  },
  {
    name: "Omkar Mahadik (MMS Finance)",
    detail:
      "Received Best Performer Award and a Commemorative Silver Coin from RBI for his contribution during summer internship in the Foreign Exchange Department, August 2024.",
  },
  {
    name: "Sughosh Deshpande, Ankit Saindane, Sachin Kamble, Sandeep Chumbhale",
    detail:
      "Won at Samsara 2022’s Shark Tank – Organized by Thakur Global Business School.",
  },
];

const StudentsAchievements = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-64 bg-blue-800 flex items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Students Achievements
        </motion.h1>
      </div>

      {/* Achievements */}
      <main className="flex-grow bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">
          {achievements.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">{a.name}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentsAchievements;
