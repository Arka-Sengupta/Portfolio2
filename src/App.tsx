import { useEffect } from 'react';
import './App.css';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
  useEffect(() => {
    // Hide default cursor when custom cursor is active
    document.body.style.cursor = 'none';

    // Clean up
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
