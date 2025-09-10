import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // track which menu is open
  const location = useLocation();

  // Top strip links
  const topLinks = [
    "AICTE Approvals",
    "UGC 2(f) & ISO Certificate",
    "UGC Mandatory Committee",
    "IQAC",
    "NAAC",
    "NIRF",
    "Gallery",
    "Events",
  ];

  // Main menu links
  const navLinks = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      path: "/about",
      submenu: [
        { name: "Differentiators Aimsr", path: "/about/differentiators-aimsr" },
        { name: "Vision & Mission", path: "/about/vision-mission" },
        { name: "Sponsoring Body", path: "/about/sponsoring-body" },
        { name: "Best Practices", path: "/about/best-practices" },
        { name: "Governing Body", path: "/about/governing-body" },
        { name: "Accreditations", path: "/about/accreditations" },
        { name: "Media Speaks", path: "/about/media-speaks" },
      ],
    },
    {
      name: "ACADEMICS",
      path: "/academics",
      submenu: [
        { name: "Bachelor of Management Studies (BMS)", path: "/academics/bachelor-of-management-studies-bms" },
        { name: "Master of Management Studies (MMS)", path: "/academics/master-of-management-studies-mms" },
        { name: "Master of Computer Application (MCA)", path: "/academics/master-of-computer-application-mca" },
        { name: "Ph.D in Management Studies", path: "/academics/ph-d-in-management-studies" },
        { name: "Fees Structure", path: "/academics/fees-structure" },
        { name: "Admission Process and Guidelines", path: "/academics/admission-process-and-guidelines" },
        { name: "Admission Advertisements", path: "/academics/admission-advertisements" },
      ],
    },
    { 
      name: "PLACEMENT", path: "/placements",
      submenu: [
        { name: "Corporate Partners", path: "/placements/corporate-partners" },
        { name: "Highlights", path: "/placements/highlights" },
        { name: "Industry Speaks", path: "/placements/industry-speaks" },
        { name: "Alumni Testimonials", path: "/placements/alumni-testimonials" },
      ],

    },
    { 
      name: "RESEARCH", path: "/research",
      submenu: [
        { name: "Entrepreneurship Cell", path: "/research/entrepreneurship-cell" },
      ],

     },
    { 
      name: "STUDENTS ZONE", path: "/students",
      submenu: [
        { name: "Achievements", path: "/students-zone/achievements" },
      ],
    },
    { 
      name: "FACILITIES", path: "/facilities",
      submenu: [
        { name: "Infrastructure", path: "/facilities/infrastructure" },
      ], 
    },
    { 
      name: "QUICK LINKS", path: "/quick-links",
      submenu: [
        { name: "Notice", path: "/notices" },
        { name: "Circulars", path: "/circulars" },
        { name: "Fee Refund Policy", path: "/fee-refund-policy" },
        { name: "Dress Code", path: "/dress-code" },
        { name: "Online Fee Payment", path: "/online-fee-payment" },
        { name: "Mandatory Disclosure", path: "/mandatory-disclosure" },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Top Yellow Strip */}
      <div className="bg-yellow-400 text-black text-xs md:text-sm flex flex-wrap justify-between items-center px-4 md:px-6 py-1 md:py-2">
        <div className="flex flex-wrap space-x-1 md:space-x-4">
          {topLinks.map((link, i) => (
            <span
              key={i}
              className="cursor-pointer hover:underline whitespace-nowrap after:content-['|'] last:after:content-none px-1"
            >
              {link}
            </span>
          ))}
        </div>
        <select className="border rounded px-1 md:px-2 py-0 md:py-1 text-xs md:text-sm bg-transparent">
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="hidden md:flex items-center">
            <img
              src="/images/AIMSR-Logo.png"
              alt="AIMSR Logo"
              className="h-16"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 relative">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(link.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    to={link.path}
                    className={`text-blue-700 hover:text-blue-900 transition-colors duration-300 font-semibold text-sm ${
                      location.pathname === link.path
                        ? "text-blue-900 border-b-2 border-blue-600"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown */}
                  {dropdownOpen === link.name && (
                    <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md w-56">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-blue-700 hover:text-blue-900 transition-colors duration-300 font-semibold text-sm ${
                    location.pathname === link.path
                      ? "text-blue-900 border-b-2 border-blue-600"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Search box */}
          <div className="hidden md:flex items-center relative">
            {searchOpen ? (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                className="flex items-center"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  className="ml-2 text-gray-500 hover:text-blue-700"
                  onClick={() => setSearchOpen(false)}
                >
                  <FaTimes />
                </button>
              </motion.div>
            ) : (
              <button
                className="text-blue-700 hover:text-blue-900"
                onClick={() => setSearchOpen(true)}
              >
                <FaSearch />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg px-4 py-3"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 text-blue-700 hover:text-blue-900 transition-colors duration-300 font-semibold ${
                    location.pathname === link.path ? "text-blue-900" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-4">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block py-1 text-sm text-blue-600 hover:text-blue-800"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-lg px-3 py-2"
              />
              <button className="ml-2 text-blue-700">
                <FaSearch size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
