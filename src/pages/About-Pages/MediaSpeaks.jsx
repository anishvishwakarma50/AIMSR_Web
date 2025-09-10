import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; // adjust path if needed
import Footer from "../../components/Footer"; // adjust path if needed

const sampleImages = [
  "/images/MediaSpeaks/Active-Times11-January-2025Pg.02_-1.jpg",
  "/images/MediaSpeaks/Hamara-Mahanagar12-January-2025Pg.09.jpg",
  "/images/MediaSpeaks/Mission-Journlisam11-January-2025Pg.03.jpg",
  "/images/MediaSpeaks/Mumbai-Choufer13-January-2025Pg.7_.jpg",
  "/images/MediaSpeaks/Navabharat11-January-2025Pg.02.jpg",
  "/images/MediaSpeaks/The-Grand-Naming-Ceremony-of-Aditya-Colleges-Shimpoli-Metro-Station-media-speaks-01.jpg",
  "/images/MediaSpeaks/The-Grand-Naming-Ceremony-of-Aditya-Colleges-Shimpoli-Metro-Station-media-speaks-02.jpg",
  "/images/MediaSpeaks/The-Grand-Naming-Ceremony-of-Aditya-Colleges-Shimpoli-Metro-Station-media-speaks-03.jpg",
];

const MediaSpeaks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <motion.section
        className="relative h-72 bg-gradient-to-r from-purple-900 to-purple-600 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Media Speaks
          </motion.h1>
        </div>
      </motion.section>

      {/* Title */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Media Speaks</h2>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {sampleImages.map((src, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Media ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default MediaSpeaks;
