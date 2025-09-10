import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MandatoryDisclosure = () => {
  const sections = [
    {
      title: "Statutory Committee",
      items: [
        "Committee 2025 - 26",
        "Committee 2024 - 25",
        "Committee 2023 - 24",
        "Committee 2022 - 23",
      ],
    },
    {
      title: "AICTE Approvals",
      items: [],
    },
    {
      title: "Accreditation",
      items: [
        "NAAC Certificate",
        "AQAR 2023-24",
        "AQAR 2021-22",
        "AQAR 2020-21",
        "NAAC Peer Team Visit on 2nd & 3rd Dec 2021",
      ],
    },
    {
      title: "NIRF",
      items: ["NIRF 2025 (Management)", "NIRF 2025 (Overall)", "NIRF 2024", "NIRF 2023", "NIRF 2022"],
    },
    {
      title: "Academic Calendar",
      items: [
        "MMS 2025-26",
        "MMS 2024-25",
        "MMS 2023-24",
        "MCA 2025-26",
        "MCA 2024-25",
        "MCA 2023-24",
        "BMS 2025-26",
      ],
    },
    {
      title: "Annual Report",
      items: ["2024-25", "2023-24"],
    },
    {
      title: "Recognition / Approval",
      items: ["Undertaking by HoI", "IQAC", "SSR", "ISO Certificate", "2(f)"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero */}
      <motion.section
        className="relative h-64 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Mandatory Disclosure
        </motion.h1>
      </motion.section>

      {/* Content */}
      <div className="flex-grow py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section - Cards */}
        <div className="lg:col-span-2 space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <h2 className="text-xl font-bold text-blue-700 mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.items.length > 0 ? (
                  section.items.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <p className="text-gray-500 italic">No records available</p>
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Right Section - Grievance Form */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-blue-700 mb-6">Register Your Grievance</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name *" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Email ID *" className="w-full p-3 border rounded-lg" required />
            <input type="tel" placeholder="Mobile No. *" className="w-full p-3 border rounded-lg" required />
            <select className="w-full p-3 border rounded-lg">
              <option>Select Committee*</option>
              <option>Statutory Committee</option>
              <option>IQAC</option>
              <option>Other</option>
            </select>
            <select className="w-full p-3 border rounded-lg">
              <option>Select Course*</option>
              <option>MMS</option>
              <option>MCA</option>
              <option>BMS</option>
            </select>
            <input type="text" placeholder="Batch *" className="w-full p-3 border rounded-lg" />
            <input type="text" placeholder="Roll No. *" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Complaint *" rows="4" className="w-full p-3 border rounded-lg"></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default MandatoryDisclosure;
