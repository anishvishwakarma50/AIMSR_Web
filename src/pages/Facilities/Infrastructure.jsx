import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Dummy carousel images (replace with actual paths)
const labImages = ["/images/Infrastructure/computer-center-computer_gallery-1696492782.jpg", "/images/Infrastructure/computer-center-computer_gallery-1698210817.jpg", "/images/Infrastructure/computer-center-computer_gallery-1698210826.jpg"];
const libraryImages = ["/images/Infrastructure/library-25.jpg", "/images/Infrastructure/library-7.jpg"];
const cafeteriaImages = ["/images/Infrastructure/cafeteria02.jpg", "/images/Infrastructure/cafeteria03.jpg"];
const sportsImages = ["/images/Infrastructure/facility-sports-zenga.jpg", "/images/Infrastructure/facility-sports-caram.jpg"];
const healthImage = "/images/Infrastructure/sick-room-1.jpg";
const barrierFreeImage = "/images/Infrastructure/Barrier-Free-environment-4.jpg";

const Carousel = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow">
      <div className="flex animate-slide space-x-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="carousel"
            className="w-full h-80 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

const Infrastructure = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-64 bg-indigo-700 flex items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Infrastructure
        </motion.h1>
      </div>

      <main className="flex-grow bg-gray-50 py-12 px-6 space-y-16">
        {/* Campus + Map */}
        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Campus</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1757193597070!6m8!1m7!1sCAoSLEFGMVFpcE9xTHBrbnptdWtDQU9sb05RVkNNVzFDaGFmSjBoMU1uWVdlUXQ3!2m2!1d19.21954764661863!2d72.84665646947569!3f348.59!4f-0.23999999999999488!5f0.4000000000000002"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow"
            ></iframe>
          </div>
        </section>

        {/* Computer Lab */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Computer Lab
          </h2>
          <p className="text-gray-700 mb-6">
            The college provides a total of 190 computers, including those in the
            computer lab and library. These resources support the conduction of
            practical sessions and enable students to access various e-resources
            for academic and research purposes.
          </p>
          <Carousel images={labImages} />
        </section>

        {/* Library */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Library</h2>
          <p className="text-gray-700 mb-6">
            AIMSR Library services and privileges are designed for faculty and
            students in support of research and instruction. The environment in
            the reading room enables one to make oneself comfortable and relax
            while reading. Library is located on 1st floor spread over 400 sq. m
            area with seating capacity of 150 students. The library is furnished
            with centrally Air-conditioned and WI-FI- facility.
          </p>
          <Carousel images={libraryImages} />
        </section>

        {/* Cafeteria */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cafeteria</h2>
          <p className="text-gray-700 mb-6">
            The cafeteria is a neat and tidy place to have sumptuous meals at
            subsidized rates. Apart from delicacies that are served, special care
            is taken that food is highly nutritious and hygienic. Both quality and
            quantity are the utmost priority.
          </p>
          <Carousel images={cafeteriaImages} />
        </section>

        {/* Sports */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sports Facilities
          </h2>
          <p className="text-gray-700 mb-6">
            There is a playground and an indoor space at the college. Both
            intracollegiate and intercollegiate participation is encouraged for
            students. Chess, carrom, table tennis, zenga, puzzle boards, cricket,
            badminton, and other games are played.
          </p>
          <Carousel images={sportsImages} />
        </section>

        {/* Health Facilities */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Health Facilities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The college provides essential health facilities, including a
              well-equipped sick room for immediate care. It is a dedicated space
              ensuring the health, safety, and well-being of students, faculty,
              and staff. It is equipped with basic medical supplies, first aid
              kits, a patient bed, and essential facilities to provide immediate
              care in case of minor injuries or health issues during college
              hours. This facility reflects the institution’s commitment to
              providing a secure and supportive campus environment for all.
            </p>
            <p className="text-gray-700 mt-4">
              Additionally, an on-call doctor and ambulance services are available
              to address medical emergencies and ensure the well-being of students
              and staff.
            </p>
          </div>
          <img
            src={healthImage}
            alt="Health Facilities"
            className="md:w-1/2 h-80 object-cover rounded-xl shadow"
          />
        </section>

        {/* Fire Safety */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fire Safety</h2>
          <p className="text-gray-700 leading-relaxed">
            The campus is verified bi-annually by a fire-licensed agency, as
            mandated under the provisions of the Maharashtra Fire Prevention and
            Life Safety Measures Act, 2006 (Mah. III of 2007). This ensures that
            all fire safety measures are regularly inspected and maintained in
            compliance with the required legal and safety standards.
          </p>
        </section>

        {/* Barrier Free Environment */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Barrier Free Environment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The institute is committed to providing a barrier-free environment
              to ensure accessibility and convenience for all individuals. To
              support this initiative, the campus is equipped with several
              features, including a ramp at the entrance, easy-to-access lifts and
              a comfortable waiting area, and low basins in every washroom.
            </p>
            <p className="text-gray-700 mt-4">
              Additionally, each washroom includes at least one wash area with a
              handlebar for added support. Clear signage is placed throughout the
              premises to assist with easy navigation, and wheelchair facilities
              are available. The building is certified for barrier free
              environment.
            </p>
          </div>
          <img
            src={barrierFreeImage}
            alt="Barrier Free Environment"
            className="md:w-1/2 h-80 object-cover rounded-xl shadow"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Infrastructure;
