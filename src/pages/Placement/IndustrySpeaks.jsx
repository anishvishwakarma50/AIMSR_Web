import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
  {
    name: "Roohul Ghogari",
    role: "Sales Manager - Client Advisory Services",
    company: "Edelweiss Broking Limited",
    message:
      "Ms. Moumita Maity is a very good student and has all qualities, abilities in terms of all parameters. She is very hardworking and does her work in the given deadline.",
    image: "/images/testimonials/roohul.jpg", // replace with actual image
  },
  {
    name: "Mr. Suneet Kumar",
    role: "Mumbai HR Cluster Manager",
    company: "L&T Construction",
    message:
      "Madhuri Darak, A student of Aditya Institute Of Management Studies & Research is a quick learner and can be mentored with effective guidance. It was heartening to observe the diligence and keen interest that she displayed throughout her training. The hard work and sincerity with which she has carried out this assignment is very much commendable. We wish Madhuri Darak all the success in her career.",
    image: "/images/testimonials/suneet.jpg",
  },
  {
    name: "Kamal Gupta",
    role: "DGM Sales & Marketing (Lighting)",
    company: "Havells India Ltd.",
    message:
      "Swati Bhati had completed all the assigned tasks in the given time in an excellent manner. She has handled major responsibilities very well and is very productive. She is quite fit to shoulder any job, with honesty, integrity and sincerity.",
    image: "/images/testimonials/kamal.jpg",
  },
  {
    name: "Tanushree Gorai",
    role: "Manager - HR",
    company: "Karvy Stock Broking",
    message:
      "Anshu Gupta was excellent as a summer intern. She has good grasping power and understanding abilities. I am sure with such enthusiasm she will make a progress in her career in future.",
    image: "/images/testimonials/tanushree.jpg",
  },
  {
    name: "Hitesh Sharma",
    role: "Sr. Manager (Indirect Taxation)",
    company: "PricewaterhouseCoopers Pvt. Ltd.",
    message:
      "Chirag Chauhan is a very hardworking trainee. Being a fresher he always makes an attempt to learn and get exposed in all possible fields. He easily adapts to changes according to his working environment. Overall he gives best of his learnings.",
    image: "/images/testimonials/hitesh.jpg",
  },
  {
    name: "Shiva S. R",
    role: "Sr. General Manager (Marketing)",
    company: "Macleods Pharmaceuticals Limited",
    message:
      "Ms. Rekhadevi H. Yadav has completed a market research on “The use of Prebiotics and Probiotics Vaginal Preparations”. She has done an excellent job for this project by meeting leading Gynecologists by travelling across Mumbai. She is very hardworking trainee. The project submitted by her has been very helpful and gave us a lot of insights into this new market segment. We recommend her strongly for such assignments in future.",
    image: "/images/testimonials/shiva.jpg",
  },
  {
    name: "Rajat Dhariwal",
    role: "Director",
    company: "Madrat Games Pvt. Ltd.",
    message:
      "Yatin M. Shah from Aditya Institute of Management Studies & Research was excellent and has all qualities, abilities in terms of all parameters and delivered the expected result. We offer him a pre-placement for position of “Associate Business Manager” in our organization’s head office at Bangalore.",
    image: "/images/testimonials/rajat.jpg",
  },
  {
    name: "Anand Tanna",
    role: "Area Sales Manager",
    company: "Pepsico India Ltd.",
    message:
      "Sagar Kumbhare, student of Aditya Institute of Management Studies & Research successfully completed his Summer Internship Program in our Frito-Lay division. With all his hard work and dedication toward his work he has proved it that he has all the capabilities to handle sales projects. His abilities to motivate others and to play important role in team have resulted in significant increase in the success of the project. Thus whole success just belongs to him. Not only us as distributor but also our customers are satisfied with his work & they were praising about his work. We appreciate his work dedication and excellent team coordination.",
    image: "/images/testimonials/anand.jpg",
  },
];

const IndustrySpeaks = () => {
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
          Industry Speaks
        </motion.h1>
      </div>

      {/* Testimonials */}
      <main className="flex-grow bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-blue-600"
              />

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-gray-600 italic">
                  {t.role}, {t.company}
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {t.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IndustrySpeaks;
