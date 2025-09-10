import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Events', 'Campus', 'Students', 'Workshops'];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      category: 'Campus',
      title: 'Main Campus Building',
      description: 'The iconic main building of AIMSR'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
      category: 'Students',
      title: 'Students in Library',
      description: 'Students studying in our modern library'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
      category: 'Events',
      title: 'Annual Cultural Festival',
      description: 'Students performing at our cultural festival'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg',
      category: 'Campus',
      title: 'Computer Laboratory',
      description: 'State-of-the-art computer lab facilities'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
      category: 'Events',
      title: 'Graduation Ceremony',
      description: 'Our proud graduates at convocation'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
      category: 'Campus',
      title: 'Campus Courtyard',
      description: 'Beautiful green spaces for relaxation'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
      category: 'Students',
      title: 'Group Study Session',
      description: 'Students collaborating on projects'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      category: 'Campus',
      title: 'Campus Overview',
      description: 'Aerial view of our beautiful campus'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      category: 'Workshops',
      title: 'Technical Workshop',
      description: 'Hands-on technical training session'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Workshops',
      title: 'Business Seminar',
      description: 'Industry expert conducting business seminar'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3184337/pexels-photo-3184337.jpeg',
      category: 'Students',
      title: 'Student Presentation',
      description: 'Student presenting project to peers'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      category: 'Events',
      title: 'Sports Day',
      description: 'Annual sports competition among students'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
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
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Capturing Moments, Creating Memories
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => openLightbox(image)}
                whileHover={{ y: -5 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
            >
              <FaTimes size={20} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-200">{lightboxImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;