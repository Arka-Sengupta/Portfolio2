import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// Pages
import NotFound from './pages/NotFound.jsx';
import Game from './pages/Game.jsx';

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
    <BrowserRouter>
      <div className="App">
        <CustomCursor />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <EducationSection />
                <CertificationsSection />
                <ProjectsSection />
                <ContactSection />
              </>
            } />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
