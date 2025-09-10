import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; // adjust path if needed
import Footer from "../../components/Footer"; // adjust path if needed

export default function FeesStructure() {
  const feesData = [
    {
      title: "Master of Management Studies (MMS) Fee A.Y 2025-26",
      subtitle: "मास्टर ऑफ मॅनेजमेंट स्टडीज शैक्षणिक वर्ष २०२५-२६.",
      items: [
        { label: "Tution Fee / शैक्षणिक शुल्क / ट्युशन फी", value: "Rs. 1,59,735/- | रु. १,५९,७३५/-" },
        { label: "Development Fee / विकास शुल्क", value: "Rs. 20,765/- | रु. २०,७६५/-" },
        { label: "Total Fee / एकूण शुल्क / कुल शुल्क", value: "Rs. 1,80,500/- | रु. १,८०,५००/-" },
      ],
    },
    {
      title: "Master of Computer Application (MCA) Fee A.Y 2025-26",
      subtitle: "मास्टर ऑफ कॉम्प्युटर अँप्लिकेशन शैक्षणिक वर्ष २०२५-२६.",
      items: [
        { label: "Tution Fee / शैक्षणिक शुल्क / ट्युशन फी", value: "Rs. 86,938/- | रु. ८६,९३८/-" },
        { label: "Development Fee / विकास शुल्क", value: "Rs. 9,562/- | रु. ९,५६२/-" },
        { label: "Total Fee / एकूण शुल्क / कुल शुल्क", value: "Rs. 96,500/- | रु. ९६,५००/-" },
      ],
    },
    {
      title: "Bachelor of Management Studies (BMS) Fee A.Y 2025-26",
      subtitle: "बॅचलर ऑफ मॅनेजमेंट स्टडीज शैक्षणिक वर्ष २०२५-२६.",
      items: [
        { label: "Tution Fee / शैक्षणिक शुल्क / ट्युशन फी", value: "Rs. 54,000/- | रु. ५४,०००/-" },
        { label: "Development Fee / विकास शुल्क", value: "Rs. 6,000/- | रु. ६०००/-" },
        { label: "Total Fee / एकूण शुल्क / कुल शुल्क", value: "Rs. 60,000/- | रु. ६०,०००/-" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-3xl font-bold text-center text-gray-800 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fees Structure for Academic Year 2025-26
          </motion.h1>

          <div className="space-y-8">
            {feesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Custom Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.subtitle}</p>
                  <ul className="space-y-2">
                    {course.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between border-b py-2 text-gray-700"
                      >
                        <span className="font-medium">{item.label}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
