import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DressCode = () => {
  const sections = [
    {
      title: "1. General Attire",
      points: [
        "Modesty: Clothing should be modest and appropriate for an academic setting. Avoid attire that is too revealing, such as short shorts, crop tops, or low-cut tops.",
        "Neatness: Ensure that your clothes are clean, well-maintained, and properly fitted. Torn or excessively worn-out clothing is not permitted.",
      ],
    },
    {
      title: "2. Classroom Attire",
      points: [
        "Formal Days: On designated days or during formal events, students are required to wear business casual or formal attire. This may include collared shirts, trousers, blouses, skirts, or ethnic formal wear.",
        "Regular Days: Smart casual wear is acceptable. This includes jeans, t-shirts, or kurtas, provided they adhere to the guidelines on modesty and neatness.",
      ],
    },
    {
      title: "3. Footwear",
      points: [
        "Closed-toe Shoes: For safety reasons, closed-toe shoes are required in certain areas such as laboratories and workshops.",
        "Casual Footwear: Sneakers, sandals, and other casual shoes are acceptable on regular days, but avoid slippers or flip-flops.",
      ],
    },
    {
      title: "4. Specific Restrictions",
      points: [
        "Slogans and Graphics: Clothing with offensive language, inappropriate images, or controversial slogans is strictly prohibited.",
        "Accessories: Avoid excessive or distracting accessories. Hats, caps, or hoods should not be worn inside classrooms or during formal events unless for religious reasons.",
      ],
    },
    {
      title: "5. Professional Representation",
      points: [
        "Internships and Placements: When attending internships, placements, or representing the institution at external events, adhere to the dress code specified for those occasions, usually formal or business casual attire.",
      ],
    },
    {
      title: "6. Enforcement",
      points: [
        "Compliance: All students are expected to adhere to the dress code. Faculty and staff have the authority to remind students of these guidelines if necessary.",
        "Consequences: Repeated non-compliance may result in disciplinary action as per the institution’s policies.",
      ],
    },
    {
      title: "7. Special Days",
      points: [
        "Cultural Days: On designated cultural or thematic days, students are encouraged to dress according to the theme while maintaining the spirit of these guidelines.",
      ],
    },
  ];

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
            Campus Dress Code Guidelines
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            At Aditya Educational Campus, we strive to create an environment that
            is respectful, professional, and conducive to learning.
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Closing Note */}
          <motion.p
            className="text-gray-800 font-medium mt-10 text-lg text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            By following these guidelines, we can maintain a respectful and
            focused academic environment that reflects the pride we all have in
            being part of Aditya Educational Campus.
          </motion.p>

          <motion.p
            className="text-blue-700 font-bold text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Thank you!!
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DressCode;
