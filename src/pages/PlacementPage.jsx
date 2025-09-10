import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaChartLine, FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlacementPage = () => {
  const stats = [
    { value: '₹12.5 LPA', label: 'Highest Package', icon: <FaTrophy className="text-4xl text-yellow-500" /> },
    { value: '₹6.8 LPA', label: 'Average Package', icon: <FaChartLine className="text-4xl text-green-500" /> },
    { value: '95%', label: 'Placement Rate', icon: <FaUsers className="text-4xl text-blue-500" /> },
    { value: '150+', label: 'Corporate Partners', icon: <FaTrophy className="text-4xl text-purple-500" /> }
  ];

  const topRecruiters = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Deloitte', 'IBM', 'Cognizant', 'HCL'
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      position: 'Software Engineer at TCS',
      company: 'Tata Consultancy Services',
      year: '2023',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      quote: 'AIMSR provided me with the perfect blend of technical knowledge and practical skills. The placement support was exceptional, and I landed my dream job with TCS.'
    },
    {
      name: 'Priya Patel',
      position: 'Business Analyst at Infosys',
      company: 'Infosys Limited',
      year: '2023',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      quote: 'The management program at AIMSR shaped my analytical thinking and leadership skills. The industry exposure through internships was invaluable for my career growth.'
    },
    {
      name: 'Amit Kumar',
      position: 'Data Scientist at Wipro',
      company: 'Wipro Technologies',
      year: '2022',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      quote: 'The comprehensive curriculum and excellent faculty at AIMSR prepared me well for the challenges in the data science field. Highly recommend this institution.'
    }
  ];

  const industryQuotes = [
    {
      quote: 'AIMSR graduates consistently demonstrate exceptional technical competence and strong work ethics.',
      author: 'Mr. Rajesh Gupta',
      designation: 'HR Director, TCS',
      company: 'Tata Consultancy Services'
    },
    {
      quote: 'We have been recruiting from AIMSR for over 5 years. The quality of graduates is outstanding.',
      author: 'Ms. Sunita Reddy',
      designation: 'Recruitment Head, Infosys',
      company: 'Infosys Limited'
    },
    {
      quote: 'AIMSR students bring fresh perspectives and innovative solutions to our organization.',
      author: 'Mr. Vikram Singh',
      designation: 'VP Human Resources, Wipro',
      company: 'Wipro Technologies'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  const logoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Placements at AIMSR
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Building Careers, Shaping Futures
          </motion.p>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Placement Highlights 2023-24</h2>
            <p className="text-xl text-gray-600">Outstanding results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Recruiting Partners</h2>
            <p className="text-xl text-gray-600">Leading organizations that trust AIMSR graduates</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {topRecruiters.map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">{company}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful alumni</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                        <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                          <p className="text-blue-600 font-medium">{testimonial.position}</p>
                          <p className="text-gray-600">{testimonial.company} • Class of {testimonial.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Industry Speaks */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Industry Leaders Say</h2>
            <p className="text-xl text-gray-600">Testimonials from our corporate partners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-700 mb-6 italic">"{quote.quote}"</p>
                <div className="border-t border-blue-200 pt-4">
                  <h4 className="font-bold text-gray-800">{quote.author}</h4>
                  <p className="text-blue-600 text-sm">{quote.designation}</p>
                  <p className="text-gray-600 text-sm">{quote.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Placement Support</h2>
            <p className="text-xl text-gray-600">Comprehensive career development and placement assistance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Career Counseling</h3>
              <p className="text-gray-600">Personalized career guidance and counseling sessions</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interview Preparation</h3>
              <p className="text-gray-600">Mock interviews and skill development workshops</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-600">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Connect</h3>
              <p className="text-gray-600">Regular interaction with industry professionals</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlacementPage;