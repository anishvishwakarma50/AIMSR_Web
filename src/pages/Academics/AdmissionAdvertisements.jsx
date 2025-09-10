import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; // adjust path if needed
import Footer from "../../components/Footer"; // adjust path if needed

export default function AdmissionAdvertisements() {
  const ads = [
    {
      title: "Master of Management Studies (MMS)",
      image: "https://via.placeholder.com/800x400?text=MMS+Advertisement", // replace with real image
    },
    {
      title: "Master of Computer Application (MCA)",
      image: "https://via.placeholder.com/800x400?text=MCA+Advertisement", // replace with real image
    },
    {
      title: "Ph.D. in Management Studies",
      image: "https://via.placeholder.com/800x400?text=Ph.D+Advertisement", // replace with real image
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admission Advertisements
          </motion.h1>

          {/* Advertisements Section */}
          <div className="space-y-12">
            {ads.map((ad, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {ad.title}
                </h2>
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="rounded-xl shadow-md mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
