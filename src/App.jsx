import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import PlacementPage from './pages/PlacementPage';
import GalleryPage from './pages/GalleryPage';
import LibraryPage from './pages/LibraryPage';
import AdministrationPage from './pages/AdministrationPage';
import CareersPage from './pages/CareersPage';
import MandatoryDisclosurePage from './pages/MandatoryDisclosurePage';
import ContactPage from './pages/ContactPage';
// sub pages of about
import DifferentiatorsPage from './pages/About-Pages/DifferentiatorsPage';
import VisionMissionPage from './pages/About-Pages/VisionMissionPage';
import SponsoringBody from './pages/About-Pages/SponsoringBody';
import BestPractices from './pages/About-Pages/BestPractices';
import MediaSpeaks from './pages/About-Pages/MediaSpeaks';

// Sub pages of academics
import BMS from './pages/Academics/bms';
import MMS from './pages/Academics/Mms';
import MCA from './pages/Academics/Mca';
import PhDManagement from './pages/Academics/PhDManagement';
import FeesStructure from './pages/Academics/FeesStructure';
import AdmissionProcess from './pages/Academics/AdmissionProcess';
import AdmissionAdvertisements from './pages/Academics/AdmissionAdvertisements';
// Sub pages of Placement
import CorporatePartners from './pages/Placement/CorporatePartners';
import Highlights from './pages/Placement/Highlights';
import IndustrySpeaks from './pages/Placement/IndustrySpeaks';
import AlumniTestimonials from './pages/Placement/AlumniTestimonials';

// Pages of Research
import ECell from './pages/Placement/ECell';

// Pages of Students Zone
import StudentsAchievements from './pages/StudentsZone/Achievements';

// Pages on Facilities
import Infrastructure from './pages/Facilities/Infrastructure';

// Pages on Quickk Links
import NoticesPage from './pages/QuickLinks/NoticesPage';
import Circulars from './pages/QuickLinks/Circulars';
import FeeRefundPolicy from './pages/QuickLinks/FeeRefundPolicy';
import DressCode from './pages/QuickLinks/DressCode';
import OnlineFeePayment from './pages/QuickLinks/OnlineFeePayment';
import MandatoryDisclosure from './pages/QuickLinks/MandatoryDisclosure';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Route of About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/differentiators-aimsr" element={<DifferentiatorsPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/sponsoring-body" element={<SponsoringBody />} />
          <Route path="/about/best-practices" element={<BestPractices />} />
          <Route path="/about/media-speaks" element={<MediaSpeaks />} />

          {/* Route of Academics */}
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/academics/bachelor-of-management-studies-bms" element={<BMS />} />
          <Route path="/academics/master-of-management-studies-mms" element={<MMS />} />
          <Route path="/academics/master-of-computer-application-mca" element={<MCA />} />
          <Route path="/academics/ph-d-in-management-studies" element={<PhDManagement />} />
          <Route path="/academics/fees-structure" element={<FeesStructure />} />
          <Route path="/academics/admission-process-and-guidelines" element={<AdmissionProcess />} />
          <Route path="/academics/admission-advertisements" element={<AdmissionAdvertisements />} />

          {/* Route of Placements */}
          <Route path="/placements" element={<PlacementPage />} />
          <Route path="/placements/corporate-partners" element={<CorporatePartners />} />
          <Route path="/placements/highlights" element={<Highlights />} />
          <Route path="/placements/industry-speaks" element={<IndustrySpeaks />} />
          <Route path="/placements/alumni-testimonials" element={<AlumniTestimonials />} />
          
          {/* Route of Research */}
          <Route path="/research/entrepreneurship-cell" element={<ECell />} />

          {/* Route of Students Zone */}
          <Route path="/students-zone/achievements" element={<StudentsAchievements />} />

          {/* Route of Facilities */}
          <Route path="/facilities/infrastructure" element={<Infrastructure />} />

          {/* Route of Quick Links */}
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/circulars" element={<Circulars />} />
          <Route path="/fee-refund-policy" element={<FeeRefundPolicy />} />
          <Route path="/dress-code" element={<DressCode />} />
          <Route path="/online-fee-payment" element={<OnlineFeePayment />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/administration" element={<AdministrationPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;