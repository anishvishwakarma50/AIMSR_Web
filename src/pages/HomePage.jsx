import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBusinessTime, FaChartLine, FaFlask, FaUniversity } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,
    };

    const images = [
        "/images/Carousel/admission-open-scaled.jpg.bv_resized_desktop.jpg.bv.webp",
        "/images/Carousel/life-at-aimsr-2-scaled.jpg.bv_resized_desktop.jpg.bv.webp",
        "/images/Carousel/life-at-aimsr-scaled.jpg.bv_resized_desktop.jpg.bv.webp",
    ];

    const courses = [
        { name: "MCA", icon: <FaLaptopCode size={40} className="text-blue-600" />, description: "Master of Computer Applications" },
        { name: "MMS", icon: <FaBusinessTime size={40} className="text-green-600" />, description: "Master of Management Studies" },
        { name: "BMS", icon: <FaChartLine size={40} className="text-red-600" />, description: "Bachelor of Management Studies" },
        { name: "Ph.D.", icon: <FaFlask size={40} className="text-purple-600" />, description: "Doctor of Philosophy" },
        { name: "PGDM", icon: <FaUniversity size={40} className="text-yellow-600" />, description: "Post Graduate Diploma in Management" },
    ];

    // Placeholder images - replace with actual college images
    const galleryImages = [
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
        "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
        "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg"
    ];

    const aboutImages = [
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
        "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg",
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
    ];

    const [current, setCurrent] = useState(0);

    // Auto change every 5s
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <Navbar />

            <motion.section
                className="h-[90vh] flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                >
                {/* Background Carousel */}
                <div className="absolute inset-0">
                    {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 bg-center"
                        style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${img})`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: current === index ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <motion.h1
                    className="text-6xl font-bold drop-shadow-lg mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    >
                    Welcome to AIMSR
                    </motion.h1>
                    <motion.p
                    className="text-xl drop-shadow-md mb-8 max-w-2xl"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    >
                    Aditya Institute of Management Studies and Research - Fostering
                    Excellence in Education and Innovation
                    </motion.p>
                    <motion.div className="flex gap-4 justify-center">
                    <Link
                        to="/admissions"
                        className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
                    >
                        Apply Now
                    </Link>
                    <Link
                        to="/about"
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition transform hover:scale-105"
                    >
                        Learn More
                    </Link>
                    </motion.div>
                </div>

                {/* Carousel Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition ${
                        current === index ? "bg-yellow-400 scale-110" : "bg-white/50"
                        }`}
                    />
                    ))}
                </div>
            </motion.section>

            {/* Courses Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl font-bold mb-4 text-gray-800">Our Programs</h2>
                    <p className="text-xl text-gray-600">Choose from our diverse range of academic programs</p>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {courses.map((course, index) => (
                        <motion.div 
                            key={index} 
                            className="p-8 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
                            whileHover={{ scale: 1.05, y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {course.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">{course.name}</h3>
                            <p className="text-gray-600 text-sm">{course.description}</p>
                            <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div 
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-5xl font-bold mb-6 text-gray-800">Campus Life</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Experience the vibrant campus life at AIMSR. From state-of-the-art facilities to engaging student activities, 
                                our campus provides the perfect environment for learning and growth.
                            </p>
                            <Link 
                                to="/gallery"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105 inline-block"
                            >
                                View Full Gallery
                            </Link>
                        </motion.div>
                        
                        <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        >
                        <Carousel images={galleryImages} height="h-80" />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <motion.div 
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-5xl font-bold mb-6 text-gray-800">About AIMSR</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                All India Institute of Management Studies and Research (AIMSR) is committed to excellence in education, 
                                fostering innovation, and preparing students for successful careers in an ever-evolving global landscape.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                With world-class faculty, modern infrastructure, and industry partnerships, we provide a holistic 
                                educational experience that combines academic rigor with practical application.
                            </p>
                            <Link 
                                to="/about"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105 inline-block"
                            >
                                Learn More About Us
                            </Link>
                        </motion.div>
                        
                        <motion.div 
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        >
                        <Carousel images={aboutImages} height="h-80" />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Campus 360 View Section */}
                <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    >
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Explore Our Campus</h2>
                    <p className="text-lg text-gray-600">Take a 360° virtual tour of AIMSR</p>
                    </motion.div>

                    <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1757353020614!6m8!1m7!1sCAoSLEFGMVFpcE9xTHBrbnptdWtDQU9sb05RVkNNVzFDaGFmSjBoMU1uWVdlUXQ3!2m2!1d19.21954764661863!2d72.84665646947569!3f0!4f-90!5f0.7820865974627469"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AIMSR Campus 360 View"
                    ></iframe>
                    </motion.div>
                </div>
                </section>


            {/* Contact Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-12">
                                <h2 className="text-4xl font-bold mb-6 text-gray-800">Get In Touch</h2>
                                <form className="space-y-6">
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Your Name" 
                                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="email" 
                                            placeholder="Your Email" 
                                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <div>
                                        <textarea 
                                            placeholder="Your Message" 
                                            rows="5" 
                                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            
                            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                                    <p className="text-blue-100">
                                        Experience our world-class facilities and meet our faculty members. Schedule a campus tour today!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;