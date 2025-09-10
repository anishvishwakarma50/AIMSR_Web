import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">AIMSR</h3>
            <p className="text-blue-200">
              Leading institution for management and technical education, fostering innovation and excellence in higher learning.
            </p>
            <div className="flex space-x-4">
              <FaFacebook size={20} className="hover:text-yellow-400 transition cursor-pointer" />
              <FaTwitter size={20} className="hover:text-yellow-400 transition cursor-pointer" />
              <FaInstagram size={20} className="hover:text-yellow-400 transition cursor-pointer" />
              <FaLinkedin size={20} className="hover:text-yellow-400 transition cursor-pointer" />
              <FaYoutube size={20} className="hover:text-yellow-400 transition cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/admissions" className="text-blue-200 hover:text-yellow-400 transition">Admissions</Link></li>
              <li><Link to="/placements" className="text-blue-200 hover:text-yellow-400 transition">Placements</Link></li>
              <li><Link to="/gallery" className="text-blue-200 hover:text-yellow-400 transition">Gallery</Link></li>
              <li><Link to="/library" className="text-blue-200 hover:text-yellow-400 transition">Library</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Programs</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">Master of Management Studies (MMS)</li>
              <li className="text-blue-200">Master of Computer Applications (MCA)</li>
              <li className="text-blue-200">Bachelor of Management Studies (BMS)</li>
              <li className="text-blue-200">Doctor of Philosophy (Ph.D.)</li>
              <li className="text-blue-200">Post Graduate Diploma in Management (PGDM)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-blue-200">123 Education Street, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400" />
                <span className="text-blue-200">+91 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-blue-200">info@aimsr.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; 2025 AIMSR - All India Institute of Management Studies and Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;