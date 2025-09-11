import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down → hide
      } else {
        setShowNavbar(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Top strip links
  const topLinks = [
    { name: "AICTE Approvals", path: "" },
    { name: "UGC 2(f) & ISO Certificate", path: "" },
    { name: "UGC Mandatory Committee", path: "" },
    { name: "IQAC", path: "" },
    { name: "NAAC", path: "" },
    { name: "NIRF", path: "" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "" },
  ];

  // Main nav links
  const navLinks = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      path: "",
      submenu: [
        { name: "Differentiators Aimsr", path: "/about/differentiators-aimsr" },
        { name: "Vision & Mission", path: "/about/vision-mission" },
        { name: "Sponsoring Body", path: "/about/sponsoring-body" },
        { name: "Best Practices", path: "/about/best-practices" },
        { name: "Media Speaks", path: "/about/media-speaks" },
      ],
    },
    {
      name: "ACADEMICS",
      path: "",
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
      name: "PLACEMENT", path: "",
      submenu: [
        { name: "Corporate Partners", path: "/placements/corporate-partners" },
        { name: "Highlights", path: "/placements/highlights" },
        { name: "Industry Speaks", path: "/placements/industry-speaks" },
        { name: "Alumni Testimonials", path: "/placements/alumni-testimonials" },
      ],
    },
    { 
      name: "RESEARCH", path: "",
      submenu: [
        { name: "Entrepreneurship Cell", path: "/research/entrepreneurship-cell" },
      ],
    },
    { 
      name: "STUDENTS ZONE", path: "",
      submenu: [
        { name: "Achievements", path: "/students-zone/achievements" },
      ],
    },
    { 
      name: "FACILITIES", path: "",
      submenu: [
        { name: "Infrastructure", path: "/facilities/infrastructure" },
      ], 
    },
    { 
      name: "QUICK LINKS", path: "",
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
    <nav className="w-full">
      {/* TopNav (yellow) - Desktop only */}
      <div className="hidden md:flex bg-yellow-400 text-black text-xs py-1 px-4 justify-between border-b">
        <div className="flex space-x-4">
          {topLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="hover:underline whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <select className="border rounded px-2 py-0.5 text-xs bg-white">
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* MainNav (white) */}
      <motion.div
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-md sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/AIMSR-Logo.png"
              alt="AIMSR Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 relative">
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
                    className={`text-blue-700 hover:text-blue-900 transition-colors font-semibold text-sm ${
                      location.pathname === link.path
                        ? "text-blue-900 border-b-2 border-blue-600"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  {dropdownOpen === link.name && (
                    <div className="absolute left-0 top-full bg-white shadow-lg rounded-md w-56">
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
                  className={`text-blue-700 hover:text-blue-900 transition-colors font-semibold text-sm ${
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

          {/* Search (desktop only) */}
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

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-3/4 sm:w-2/3 bg-white shadow-lg overflow-y-auto px-4 py-6"
          >
            <button
              className="text-blue-700 absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={24} />
            </button>

            <div className="mt-10">
              {/* Quick Links (from TopNav) */}
              <h3 className="text-gray-500 uppercase text-xs font-bold mb-2">Quick Links</h3>
              {topLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="block py-2 text-blue-700 hover:text-blue-900 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <hr className="my-4" />

              {/* Main Menu */}
              {navLinks.map((link) => (
                <div key={link.name} className="mb-2">
                  <Link
                    to={link.path}
                    className={`block py-2 text-blue-700 hover:text-blue-900 font-semibold ${
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

              {/* Search (mobile) */}
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-lg px-3 py-2"
                />
                <button className="ml-2 text-blue-700">
                  <FaSearch size={20} />
                </button>
              </div>

              {/* Language selector */}
              <div className="mt-4">
                <select className="w-full border rounded px-2 py-2 text-sm bg-white">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
