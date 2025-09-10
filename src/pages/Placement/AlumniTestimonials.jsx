import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
  {
    name: "Kunal Prabhu",
    batch: "2019 – 2021",
    message:
      "My two years at AIMSR have been excellent and a memory to cherish for life. The years spent here have been full of learning opportunities that were full of fun and frolic and sometimes academic grind that one had to go through. The international exposure made me a better man to face all the challenges of the corporate world. All thanks to the college management and the faculties for the opportunity and support.",
    image: "/images/alumni/kunal.jpg",
  },
  {
    name: "Reha Sanjay Sakariya",
    batch: "2019 – 2021",
    message:
      "Throughout my two years of MBA at AIMSR, I had countless opportunities to develop analytical skills, leadership and proactive thinking through various programs and events. These attributes were the key reasons because of which I was successfully placed as Relationship Manager – Marketing at Jaslok Hospital & Research Centre. Progressive Learning approach is followed at AIMSR that focuses on student’s ability to identify and tackle business issues rather than simply learn the facts and techniques. Big thanks to all the faculty members, friends, and placement committee for this amazing journey at AIMSR.",
    image: "/images/alumni/reha.jpg",
  },
  {
    name: "Nehal Dilip Panchal",
    batch: "2019 – 2021",
    message:
      "My name is Nehal Dilip Panchal from PGDM Finance batch 19-21. My journey at AIMSR made me stronger and confident for a step ahead to make my career bright. I would like to express my gratitude to the placement committee for guiding me throughout my placement process. And providing a platform to enhance my skills and an opportunity to showcase them.",
    image: "/images/alumni/nehal.jpg",
  },
  {
    name: "Niharika Tapuriah",
    batch: "2018 – 2020",
    message:
      "Moving into my current position of a Market research analyst was a big career move for me, and I could not have made the step without the benefit of my Management Education from Aditya Institute of Management Studies and Research. When I started on my Program in 2018, I was hoping that my degree would provide me with the credentials and business acumen to someday become corporate ready. I have to say that my Management program gave me a lot more than I expected. The greatest benefit of the program was much more than the degree on “piece of paper”. It was the confidence it gave me to pursue, win, and ace what I set my mind to. Thanks to the faculty of the Management program, I know that I have all of the tools to be a successful and ethical leader. I’ve truly enjoyed my time at AIMSR and the decision to invest my time there.",
    image: "/images/alumni/niharika.jpg",
  },
  {
    name: "Harsh Vira",
    batch: "2018 – 2020",
    message:
      "It gives me immense pleasure to write about AIMSR as it’s being quite fortunate to be the part of the Institute that grew me in my career. Everyone from staff to faculty members leaves no stone unturned to shape one’s future. My two years of this professional education shaped me into a corporate ready individual with constant learning and development through a bucket of both academic and non academic activities planned. I had a wonderful experience of learning with prolific exposure by working as committee member for number of cells, including placement cell. Huge respect, love and devotion for entire faculty members and department. It’s their efforts that make me to count myself into better professionals.",
    image: "/images/alumni/harsh.jpg",
  },
  {
    name: "Ruchita Naik",
    batch: "2017 – 2019",
    message:
      "The academic experience with a world class infrastructure and excellent faculty at Aditya Institute Of Management Studies & Research has endured me with lifelong career excellence. Their exceptional management programmes and unique teaching methodologies backed by practical skills and industry interface have given me the confidence to pursue my career ahead. Ever encouraging support from the faculty also helped me to shape up personality to survive in the corporate world. Thank you for all the love & Support.",
    image: "/images/alumni/ruchita.jpg",
  },
  {
    name: "Suparna Dhara",
    batch: "2017 – 2019",
    message:
      "AIMSR has got one of the best infrastructural facilities and brilliant faculty, a B-School can have. As far as the placement concern there is enough opportunities are provided to every student and its upto the individual how You take it. Moreover, having a placement policy in order to make things even more transparent. I’m lucky & proud to have been a part of this institute not only because i got placed but because of the things i have learned over there.",
    image: "/images/alumni/suparna.jpg",
  },
  {
    name: "Bhavin Thakur",
    batch: "2017 – 2019",
    message:
      "My Two years at Aditya Institute of Management Studies and Research have been excellent and a memory to cherish for a lifetime. The years spent here have been full of learning opportunities and focus has always been on overall development of the student. AIMSR has always believed in helping and guiding its students and it was no different during placement season, I’ve been placed in Vivo Global through Campus placements and I can’t thank institution enough for this glorious opportunity. AIMSR is a place of learning, fun, culture, lore, literature and many such life preaching activities.",
    image: "/images/alumni/bhavin.jpg",
  },
  {
    name: "Rekha Yadav",
    batch: "2014 – 2016",
    message:
      "I really appreciate innovative teaching methodology of AIMSR institute . I really had not seen such teaching methodology till date in my life… energetic and motivating teachers, amazing admin staff….Director is the most dynamic person I have ever seen and met… HATS OFF TO YOU ALL!!!",
    image: "/images/alumni/rekha.jpg",
  },
  {
    name: "Manisha Yadav",
    batch: "2013 – 2015",
    message:
      "AIMSR has given me wings. it has pushed me beyond my horizons. today, I am a changed person. i do not shy away from challenges. AIMSR has enabled me shoulder responsibility with confidence. i was given free hand in organization of “INNOVATIVE SUMMIT” and this has made me realize my potential as a ‘people’s person’.",
    image: "/images/alumni/manisha.jpg",
  },
  {
    name: "Devang Gandani",
    batch: "2013 – 2015",
    message:
      "No words can express my gratitude of AIMSR. Its E-Cell made us, me and my friend Ritesh Purohit, dream and then made us make our dream come true. Our venture “jal-AB” was conceived, developed and implemented here. Our institute has stood unfazed with us in this endeavor of ours and is promoting us wholeheartedly. We are proud to be a part of this institute.",
    image: "/images/alumni/devang.jpg",
  },
  {
    name: "Heena Patel",
    batch: "2013 – 2015",
    message:
      "One thing that I like about this institute is that its faculty members are very empowering…They delegate a task to you and then give you a free hand in completing it, guiding and mentoring us all the way. I have learnt a lot in the past one year. Now, I am very confident that I can handle any project with aplomb",
    image: "/images/alumni/heena.jpg",
  },
  {
    name: "Aaryendra Rajpurohit",
    batch: "2012 – 2014",
    message:
      "AIMSR develops the overall growth of Managerial, Leadership & entrepreneurial traits in students, providing them a platform to prove their potential in varied walks of life",
    image: "/images/alumni/aaryendra.jpg",
  },
  {
    name: "Gaurav Kamble",
    batch: "2012 – 2014",
    message:
      "When we talk about “Knowledge” it is always cliché that it can only be gained through books. At AIMSR, the importance is not only just given to the book knowledge but also to train them with experience & exposure about the corporate world through various interactions with leading companies.",
    image: "/images/alumni/gaurav.jpg",
  },
  {
    name: "Mohd. Tanzeel Malik",
    batch: "2012 – 2014",
    message:
      "The uniqueness of AIMSR is to provide their students an extensive opportunity for industry interaction with industry & corporate legends by way of seminars and conferences.",
    image: "/images/alumni/tanzeel.jpg",
  },
];

const AlumniTestimonials = () => {
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
          Alumni Testimonials
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
                <p className="text-gray-600 italic">Batch: {t.batch}</p>
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

export default AlumniTestimonials;
